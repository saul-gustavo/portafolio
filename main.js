const nav = document.querySelector(".nav-menu");
const navToggleBtn = document.querySelector(".menu-toggle");
const navLinks = document.querySelectorAll(".nav-link");

// navbar toggle function
const navToggleFunc = function () {
    nav.classList.toggle('active');
    navToggleBtn.classList.toggle('active');
}

navToggleBtn.addEventListener('click', navToggleFunc);

for (let i = 0; i < navLinks.length; i++) {
    navLinks[i].addEventListener('click', navToggleFunc);
}