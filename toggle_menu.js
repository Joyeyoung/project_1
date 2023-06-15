
var sideNav = document.querySelector(".side-nav");
var toggle = document.querySelector(".side-toggle");
var mainContent = document.querySelector(".main-content");

var isShowing = false;
toggle.addEventListener("click", function() {
  sideNav.classList.toggle('show-nav');
});

mainContent.addEventListener("click", function() {
  sideNav.classList.remove("show-nav");
});