#!/usr/bin/env bash
#
# Create the four Cloudflare DNS records that bind gilbertanderson.com to the
# existing Azure Web App (CMST386-UMGC-ganderson58).
#
#   A      @          -> <azure-inbound-ip>     proxied off
#   TXT    asuid      -> <verification-id>
#   CNAME  www        -> cmst386-umgc-ganderson58.azurewebsites.net   proxied off
#   TXT    asuid.www  -> <verification-id>
#
# Both values come from the Azure portal: App Service -> Settings ->
# Custom domains -> Add custom domain. Azure shows the inbound IP address and
# the Custom Domain Verification ID there. Use the portal's IP, not whatever
# the azurewebsites.net hostname currently resolves to.
#
# Proxy is deliberately left off (DNS only). An orange cloud stops DigiCert
# from reaching the Azure endpoint, which is what issues the free App Service
# Managed Certificate.
#
# Neither the API token nor the zone ID lives in this file, because this repo
# is public. Export both in your own shell first:
#
#   Cloudflare dashboard -> My Profile -> API Tokens -> Create Token
#     -> "Edit zone DNS" template -> Zone Resources: gilbertanderson.com
#
#   export CLOUDFLARE_API_TOKEN='...'
#   export CLOUDFLARE_ZONE_ID='...'    # Overview page, right-hand column
#
# Usage:
#   ./tools/cloudflare-add-azure-records.sh <azure-inbound-ip> <verification-id>          # preview
#   ./tools/cloudflare-add-azure-records.sh <azure-inbound-ip> <verification-id> --apply  # write
#
# Re-running is safe: existing records are updated in place rather than
# duplicated.

set -euo pipefail

ZONE_ID="${CLOUDFLARE_ZONE_ID:-}"
DOMAIN="gilbertanderson.com"
AZURE_HOST="cmst386-umgc-ganderson58.azurewebsites.net"
API="https://api.cloudflare.com/client/v4"

AZURE_IP="${1:-}"
VERIFY_ID="${2:-}"
APPLY="${3:-}"

if [[ -z "$AZURE_IP" || -z "$VERIFY_ID" ]]; then
  echo "usage: $0 <azure-inbound-ip> <verification-id> [--apply]" >&2
  exit 64
fi

if [[ -z "${CLOUDFLARE_API_TOKEN:-}" ]]; then
  echo "CLOUDFLARE_API_TOKEN is not set. Export it in your shell first." >&2
  exit 64
fi

if [[ -z "$ZONE_ID" ]]; then
  echo "CLOUDFLARE_ZONE_ID is not set. Export it in your shell first." >&2
  exit 64
fi

if ! [[ "$AZURE_IP" =~ ^[0-9]+\.[0-9]+\.[0-9]+\.[0-9]+$ ]]; then
  echo "First argument does not look like an IPv4 address: $AZURE_IP" >&2
  exit 64
fi

cf() {
  curl -sS -H "Authorization: Bearer ${CLOUDFLARE_API_TOKEN}" \
          -H "Content-Type: application/json" "$@"
}

# Fail loudly on an API error instead of silently continuing.
check() {
  local body="$1" what="$2"
  if [[ "$(jq -r '.success' <<<"$body")" != "true" ]]; then
    echo "  FAILED ${what}: $(jq -c '.errors' <<<"$body")" >&2
    exit 1
  fi
}

echo "zone   : ${DOMAIN} (${ZONE_ID})"
echo "target : ${AZURE_IP} / ${AZURE_HOST}"
if [[ "$APPLY" != "--apply" ]]; then
  echo "mode   : PREVIEW (pass --apply as the third argument to write)"
else
  echo "mode   : APPLY"
fi
echo

# name type content proxied
records=(
  "${DOMAIN}|A|${AZURE_IP}|false"
  "asuid.${DOMAIN}|TXT|${VERIFY_ID}|"
  "www.${DOMAIN}|CNAME|${AZURE_HOST}|false"
  "asuid.www.${DOMAIN}|TXT|${VERIFY_ID}|"
)

for spec in "${records[@]}"; do
  IFS='|' read -r name type content proxied <<<"$spec"

  existing="$(cf "${API}/zones/${ZONE_ID}/dns_records?type=${type}&name=${name}")"
  check "$existing" "lookup ${type} ${name}"
  rec_id="$(jq -r '.result[0].id // empty' <<<"$existing")"
  rec_cur="$(jq -r '.result[0].content // empty' <<<"$existing")"

  if [[ -n "$rec_id" && "$rec_cur" == "$content" ]]; then
    echo "ok      ${type} ${name} already set"
    continue
  fi

  payload="$(jq -n --arg t "$type" --arg n "$name" --arg c "$content" \
    '{type:$t, name:$n, content:$c, ttl:1}')"
  if [[ -n "$proxied" ]]; then
    payload="$(jq --argjson p "$proxied" '. + {proxied:$p}' <<<"$payload")"
  fi

  if [[ -n "$rec_id" ]]; then
    action="update ${type} ${name} (was ${rec_cur})"
  else
    action="create ${type} ${name} -> ${content}"
  fi

  if [[ "$APPLY" != "--apply" ]]; then
    echo "would  ${action}"
    continue
  fi

  if [[ -n "$rec_id" ]]; then
    out="$(cf -X PATCH "${API}/zones/${ZONE_ID}/dns_records/${rec_id}" -d "$payload")"
  else
    out="$(cf -X POST "${API}/zones/${ZONE_ID}/dns_records" -d "$payload")"
  fi
  check "$out" "$action"
  echo "done   ${action}"
done

echo
echo "Next: back in the Azure Custom domains blade, click Validate, then Add."
echo "Then add the App Service Managed Certificate binding for each hostname."
