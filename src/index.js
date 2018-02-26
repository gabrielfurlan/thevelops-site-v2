import smoothscroll from "smoothscroll";


// Controlling language select
const languageSelect = document.querySelector("[lg-select]");
languageSelect.addEventListener("click", e => {
	languageSelect.classList.toggle("-show");	
});

const languageSelectItems = document.querySelectorAll("[lg-select] > .dropdown > .item");
languageSelectItems.forEach(item => {
	item.addEventListener("click", e => {
		e.stopPropagation();
		location.href = `/?lang=${e.currentTarget.id}`;
	});
});

// Controlling more button
const moreButton = document.querySelector("[more-action]");
moreButton.addEventListener("click", e => {
	const section = document.querySelector("#about");
	smoothscroll(section);
});

// Controlling navigation
const navigationItems = document.querySelectorAll("[navigation] > .link");
navigationItems.forEach(item => {
	if (!item || !item.currentTarget) return;
	const { href } = item.currentTarget;
	const section = document.querySelector(href);
	smoothscroll(section);
});