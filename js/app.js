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



const tabs = document.querySelectorAll(".accordion__tabs-item");
const contents = document.querySelectorAll(".accordion__table");
for (let i = 0; i < tabs.length; i++) {
	tabs[i].addEventListener("click", () => {
		for (let j = 0; j < contents.length; j++) {
			contents[j].classList.remove("accordion__table--active");
		}
		for (let jj = 0; jj < tabs.length; jj++) {
			tabs[jj].classList.remove("accordion__tabs-item--active");
		}
		contents[i].classList.add("accordion__table--active");
		tabs[i].classList.add("accordion__tabs-item--active");
	});
}



// accordion open/close
const card = document.getElementsByClassName("accordion__question-wrapper");
for (let i = 0; i < card.length; i++) {
  card[i].addEventListener("click", function() {
    this.classList.toggle("active");
    let answer = this.nextElementSibling;
    if (answer.style.maxHeight) {
      answer.style.maxHeight = null;
    } else {
      answer.style.maxHeight = answer.scrollHeight + "px";
    } 
  });
}