const overlay = document.querySelector(".overlay");
const mobileMenu = document.querySelector(".mobile-menu");
const closeBtn = document.querySelector(".nav-button--type--close");
const menuBtn = document.querySelector(".nav-button--type--menu");

menuBtn.addEventListener("click", () => {
  overlay.classList.add("show");
  mobileMenu.classList.add("show");
});

overlay.addEventListener("click", (event) => {
  if (!mobileMenu.contains(event.target) || closeBtn.contains(event.target)) {
    overlay.classList.remove("show");
    mobileMenu.classList.remove("show");
  }
});
