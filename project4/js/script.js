// Strikeworks Studio site scripts: footer date/time, contact form validation, nav toggle.

function startFooterClock() {
  var el = document.getElementById("datetime");
  if (!el) {
    return;
  }
  function render() {
    var now = new Date();
    var options = {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "numeric",
      minute: "2-digit",
      second: "2-digit",
    };
    el.textContent = now.toLocaleString("en-US", options);
  }
  render();
  setInterval(render, 1000);
}

function isValidEmail(value) {
  var pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return pattern.test(value);
}

function initContactForm() {
  var form = document.getElementById("contact-form");
  if (!form) {
    return;
  }
  var nameField = document.getElementById("contact-name");
  var emailField = document.getElementById("contact-email");
  var nameError = document.getElementById("contact-name-error");
  var emailError = document.getElementById("contact-email-error");

  function validateName() {
    var valid = nameField.value.trim().length > 0;
    nameError.textContent = valid ? "" : "Please enter your name.";
    nameField.setAttribute("aria-invalid", valid ? "false" : "true");
    return valid;
  }

  function validateEmail() {
    var valid = isValidEmail(emailField.value.trim());
    emailError.textContent = valid ? "" : "Please enter a valid email address.";
    emailField.setAttribute("aria-invalid", valid ? "false" : "true");
    return valid;
  }

  nameField.addEventListener("blur", validateName);
  emailField.addEventListener("blur", validateEmail);

  form.addEventListener("submit", function (event) {
    var nameOk = validateName();
    var emailOk = validateEmail();
    if (!nameOk || !emailOk) {
      event.preventDefault();
      window.alert("Please fix the highlighted field(s) before submitting the form.");
      var firstInvalid = !nameOk ? nameField : emailField;
      firstInvalid.focus();
    }
  });
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

  // Opening the menu in portrait and then rotating to landscape leaves
  // is-open set, so the panel reappears already open on the way back.
  // Clear it once the viewport is past the breakpoint that shows the button.
  window.addEventListener("resize", function () {
    if (window.innerWidth > 1020) {
      setOpen(false);
    }
  });

  // Escape closes the menu and returns focus to the button, so keyboard
  // users are not stranded inside an open panel.
  document.addEventListener("keydown", function (event) {
    if (event.key === "Escape" && toggle.getAttribute("aria-expanded") === "true") {
      setOpen(false);
      toggle.focus();
    }
  });
}

document.addEventListener("DOMContentLoaded", function () {
  startFooterClock();
  initContactForm();
  initNavToggle();
});
