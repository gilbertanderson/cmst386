// Accessible hamburger toggle for the Project 3 main navigation.
// Flips aria-expanded on the button and an .is-open class on the menu,
// so the same control works with a mouse, keyboard, or screen reader.
document.addEventListener("DOMContentLoaded", function () {
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
});
