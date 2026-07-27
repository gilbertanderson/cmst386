/* Northstar Analytics
   Footer clock, the interactive sample chart, and waitlist validation.
   Loaded from <head> with defer. */

function startFooterClock() {
  var target = document.getElementById("datetime");
  if (!target) {
    return;
  }
  function render() {
    target.textContent = new Date().toLocaleString("en-US", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "numeric",
      minute: "2-digit",
      second: "2-digit"
    });
  }
  render();
  setInterval(render, 1000);
}

/* The chart bars are real buttons rather than styled divs, so they are
   reachable by keyboard and announced as interactive. The readout is a
   role="status" region, so updating it is announced without stealing
   focus from wherever the user currently is. */
function initChart() {
  var bars = document.querySelectorAll(".chart-bar");
  var readout = document.querySelector(".chart-readout");
  if (!bars.length || !readout) {
    return;
  }

  function show(bar) {
    bars.forEach(function (b) {
      b.classList.toggle("is-active", b === bar);
    });
    readout.textContent = bar.getAttribute("data-day") + ": " +
      bar.getAttribute("data-value") + " signups";
  }

  bars.forEach(function (bar) {
    bar.addEventListener("click", function () {
      show(bar);
    });
    bar.addEventListener("mouseenter", function () {
      show(bar);
    });
    bar.addEventListener("focus", function () {
      show(bar);
    });
  });
}

function initWaitlistForm() {
  var form = document.getElementById("waitlist-form");
  if (!form) {
    return;
  }

  var name = document.getElementById("wait-name");
  var email = document.getElementById("wait-email");
  var MSG_NAME = "Please enter your name.";
  var MSG_EMAIL = "Please enter a work email so we can send your invite.";

  function validate(input, message) {
    var slot = document.getElementById(input.id + "-error");
    var ok = input.value.trim() !== "";
    if (slot) {
      slot.textContent = ok ? "" : message;
    }
    input.setAttribute("aria-invalid", ok ? "false" : "true");
    return ok;
  }

  name.addEventListener("blur", function () {
    validate(name, MSG_NAME);
  });
  email.addEventListener("blur", function () {
    validate(email, MSG_EMAIL);
  });

  form.addEventListener("submit", function (event) {
    var nameOk = validate(name, MSG_NAME);
    var emailOk = validate(email, MSG_EMAIL);
    if (!nameOk || !emailOk) {
      event.preventDefault();
      window.alert("Please complete the required fields marked with an asterisk before requesting access.");
      (nameOk ? email : name).focus();
    }
  });
}

document.addEventListener("DOMContentLoaded", function () {
  startFooterClock();
  initChart();
  initWaitlistForm();
});
