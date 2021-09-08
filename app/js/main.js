// Access the mobile btn, overlay, and header__mobile-menu
const mobileBtn = document.querySelector(".mobile-btn");
const mobileMenu = document.querySelector(".header__mobile-menu");
const overlay = document.querySelector(".overlay");

// click button, toggle the active class for mobile menu and overlay
mobileBtn.addEventListener("click", function () {
  mobileBtn.classList.toggle("active");
  mobileMenu.classList.toggle("active");
  overlay.classList.toggle("active");
});
