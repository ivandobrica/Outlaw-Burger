//hamburger action
let hamburger = document.querySelector(".hamburger"),
    link = document.querySelector(".overlay__item"),
    overlay = document.querySelector(".overlay"),
    openIcon = document.querySelector(".fa-bars"),
    closeIcon = document.querySelector(".fa-times"),
    overlayAction = [hamburger, link];
for(let i = 0; i < overlayAction.length; i++) {
  overlayAction[i].addEventListener("click", function () {
    overlay.classList.toggle("is-open");
    openIcon.classList.toggle("hidden");
    closeIcon.classList.toggle("hidden");
  })
};