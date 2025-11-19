"use strict"

const studioBtn = document.querySelector("#studio");
const projectsBtn = document.querySelector("#projects");
const introSection = document.querySelector("#introSection");

studioBtn.addEventListener("click", () => {
	studioBtn.classList.add("main__btn--active");
	projectsBtn.classList.remove("main__btn--active");
	introSection.classList.remove("section--hidden");
})

projectsBtn.addEventListener("click", () => {
	projectsBtn.classList.add("main__btn--active");
	studioBtn.classList.remove("main__btn--active");
	introSection.classList.add("section--hidden");
})
 