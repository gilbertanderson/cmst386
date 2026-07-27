/* Contreras Family Bakery
   Vanilla JS: footer date/time, responsive nav, and order-form validation.
   Loaded from <head> with defer so handlers are attached before the
   header is interactive. */

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

function initNavToggle() {
  var toggle = document.querySelector(".nav-toggle");
  var menu = document.getElementById("nav-menu");
  if (!toggle || !menu) {
    return;
  }

  function setOpen(open) {
    toggle.setAttribute("aria-expanded", String(open));
    menu.classList.toggle("is-open", open);
  }

  toggle.addEventListener("click", function () {
    setOpen(toggle.getAttribute("aria-expanded") !== "true");
  });

  window.addEventListener("resize", function () {
    if (window.innerWidth > 900) {
      setOpen(false);
    }
  });

  document.addEventListener("keydown", function (event) {
    if (event.key === "Escape" && toggle.getAttribute("aria-expanded") === "true") {
      setOpen(false);
      toggle.focus();
    }
  });
}

function initOrderForm() {
  var form = document.getElementById("order-form");
  if (!form) {
    return;
  }

  function fieldError(input) {
    return document.getElementById(input.id + "-error");
  }

  /* Messages are written into a role="alert" span as well as announced
     via alert(), so screen-reader users get the same information
     sighted users get from the dialog. */
  function validate(input, message) {
    var slot = fieldError(input);
    var ok = input.value.trim() !== "";
    if (slot) {
      slot.textContent = ok ? "" : message;
    }
    input.setAttribute("aria-invalid", ok ? "false" : "true");
    return ok;
  }

  var name = document.getElementById("order-name");
  var email = document.getElementById("order-email");
  var date = document.getElementById("order-date");

  var MSG_NAME = "Please enter your name.";
  var MSG_EMAIL = "Please enter an email address so we can confirm your order.";
  var MSG_LEAD = "Please choose a pickup date at least 72 hours from today.";
  var MSG_CLOSED = "We cannot do custom pickups on Sundays or Mondays. Please choose Tuesday through Saturday.";

  /* Two real constraints from the Visit page, enforced here so the form
     cannot accept a date the bakery is unable to honour: a 72 hour lead
     time, and no custom pickups on Sunday (pan dulce only) or Monday
     (closed). */
  function validateDate() {
    var slot = document.getElementById("order-date-error");
    var message = "";
    if (!date.value) {
      message = MSG_LEAD;
    } else {
      var chosen = new Date(date.value + "T00:00:00");
      var earliest = new Date();
      earliest.setHours(0, 0, 0, 0);
      earliest.setDate(earliest.getDate() + 3);
      if (chosen < earliest) {
        message = MSG_LEAD;
      } else if (chosen.getDay() === 0 || chosen.getDay() === 1) {
        message = MSG_CLOSED;
      }
    }
    var ok = message === "";
    if (slot) {
      slot.textContent = message;
    }
    date.setAttribute("aria-invalid", ok ? "false" : "true");
    return ok;
  }

  name.addEventListener("blur", function () {
    validate(name, MSG_NAME);
  });
  email.addEventListener("blur", function () {
    validate(email, MSG_EMAIL);
  });
  date.addEventListener("blur", validateDate);
  date.addEventListener("change", validateDate);

  form.addEventListener("submit", function (event) {
    var nameOk = validate(name, MSG_NAME);
    var emailOk = validate(email, MSG_EMAIL);
    var dateIsOk = validateDate();
    if (!nameOk || !emailOk || !dateIsOk) {
      event.preventDefault();
      window.alert("Please fix the highlighted field or fields before sending. Pickups need at least 72 hours notice and run Tuesday through Saturday.");
      (!nameOk ? name : !emailOk ? email : date).focus();
    }
  });
}

document.addEventListener("DOMContentLoaded", function () {
  startFooterClock();
  initNavToggle();
  initOrderForm();
});
