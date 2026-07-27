#!/usr/bin/env bash
#
# Build the Project 4 submission zip.
#
# The assignment asks for "a zipped file maintaining the proper folder
# hierarchy of all of the project", so this preserves project4/ as the top
# level folder with css/, js/, and images/ beneath it exactly as deployed.
#
# Excluded on purpose:
#   validation-screenshots/  goes in the reflection document, not the site
#   .DS_Store                macOS noise
#   README.md                notes to myself, not part of the deliverable
#
# Usage:
#   ./tools/build-submission-zip.sh

set -euo pipefail

ROOT="$(cd "$(dirname "$0")/.." && pwd)"
OUT="$ROOT/Project4-StrikeworksStudio-GilbertAnderson.zip"

cd "$ROOT"

if [[ ! -d project4 ]]; then
  echo "project4/ not found in $ROOT" >&2
  exit 1
fi

rm -f "$OUT"

zip -r -X "$OUT" project4 \
  -x 'project4/validation-screenshots/*' \
  -x 'project4/README.md' \
  -x '*.DS_Store' \
  -x '__MACOSX/*' > /dev/null

echo "wrote $(basename "$OUT")"
echo

# Show what a grader will actually unzip, and sanity-check the page count.
pages=$(unzip -Z1 "$OUT" | grep -c '\.html$')
echo "HTML pages in zip: $pages (the rubric requires at least 10)"
echo
echo "Contents:"
unzip -Z1 "$OUT" | sed 's/^/  /'
