const hamburger = document.getElementById("hamburger-icon");
const menu = document.getElementById("nav-menu");


hamburger.addEventListener("click", (e) => {
	e.currentTarget.classList.toggle("active");
	menu.classList.toggle("active");
})




