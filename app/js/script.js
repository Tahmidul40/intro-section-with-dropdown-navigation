const navCompany = document.getElementById("nav-company");
const company = document.getElementById("company");

navCompany.addEventListener("click", function () {
  company.classList.toggle("company-drop");
});

const navFeature = document.getElementById("nav-feature");
const feature = document.getElementById("feature");

navFeature.addEventListener("click", function () {
  feature.classList.toggle("feature-drop");
});

const open = document.getElementById("open");
const close = document.getElementById("close");
const menuShow = document.getElementById("menu-show");
const body = document.getElementById("body");

const menuToggle = function menuToggle() {
  open.classList.toggle("hide");
  close.classList.toggle("show");
  menuShow.classList.toggle("active");
  body.classList.toggle("scroll");
};

open.addEventListener("click", function () {
  menuToggle();
});

close.addEventListener("click", function () {
  menuToggle();
});
