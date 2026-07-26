/* Mobile navigation toggle for the shared site header. Same pattern as
   Project 4's nav toggle, so both headers behave consistently on small
   screens: the button flips aria-expanded and shows or hides the menu
   panel by toggling the is-open class. */

function initNavToggle() {
  var toggle = document.querySelector(".nav-toggle");
  var menu = document.getElementById("nav-menu");
  if (!toggle || !menu) {
    return;
  }
  toggle.addEventListener("click", function () {
    var isOpen = toggle.getAttribute("aria-expanded") === "true";
    toggle.setAttribute("aria-expanded", String(!isOpen));
    menu.classList.toggle("is-open");
  });
}

document.addEventListener("DOMContentLoaded", function () {
  initNavToggle();
});
