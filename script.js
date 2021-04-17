var navbarToggler = document.querySelector(".navbar-toggler");
var navbarNav = document.querySelector(".navbar-nav");

navbarToggler.addEventListener("click", function () {
  navbarNav.classList.toggle("show");
});
