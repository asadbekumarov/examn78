const menuBtn = document.querySelector(".menu");
const menuBtnClose = document.querySelector(".menu__icon1");
const media = document.querySelector(".media");

menuBtn.addEventListener("click", () => {
  media.style.display = "flex";
});
menuBtnClose.addEventListener("click", () => {
  media.style.display = "none";
});
