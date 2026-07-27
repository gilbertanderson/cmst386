/* Ironwood Technology Charter School
   Vanilla JS: footer date/time, responsive nav, and inquiry-form validation.
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

function initInquiryForm() {
  var form = document.getElementById("inquiry-form");
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

  var name = document.getElementById("inquiry-name");
  var email = document.getElementById("inquiry-email");

  name.addEventListener("blur", function () {
    validate(name, "Please enter the student or guardian name.");
  });
  email.addEventListener("blur", function () {
    validate(email, "Please enter an email address so we can reply.");
  });

  form.addEventListener("submit", function (event) {
    var nameOk = validate(name, "Please enter the student or guardian name.");
    var emailOk = validate(email, "Please enter an email address so we can reply.");
    if (!nameOk || !emailOk) {
      event.preventDefault();
      window.alert("Please complete the required fields marked with an asterisk before sending.");
      (nameOk ? email : name).focus();
    }
  });
}

document.addEventListener("DOMContentLoaded", function () {
  startFooterClock();
  initNavToggle();
  initInquiryForm();
});
