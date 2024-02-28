const toggleBtn = document.querySelector(".toggle_btn")
const dropdownMenu = document.querySelector(".dropdown_menu")
const navLinks = document.querySelectorAll(".nav_link")

toggleBtn.addEventListener("click", () => {
	dropdownMenu.classList.toggle("clicked")
})

navLinks.forEach(link => {
	link.addEventListener("click", () => {
		dropdownMenu.classList.remove("clicked")
	})
})

window.addEventListener("resize", () => {
	dropdownMenu.classList.remove("clicked")
})

document.body.addEventListener("touchmove", () => {
	dropdownMenu.classList.remove("clicked")
})

var swiper = new Swiper(".swiper-container", {
	slidesPerView: 3,
	spaceBetween: 40,
	loop: true,
	centerSlide: "true",
	fade: "true",
	grabCursor: "true",
	pagination: {
		el: ".swiper-pagination",
		clickable: true,
		dynamicBullets: true,
	},
	navigation: {
		nextEl: ".swiper-button-next",
		prevEl: ".swiper-button-prev",
	},
	breakpoints: {
		0: {
			slidesPerView: 1,
		},
		640: {
			slidesPerView: 2,
		},
		960: {
			slidesPerView: 3,
		},
	},
})
