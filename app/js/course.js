

//start changing navbar color when scrolling

window.addEventListener("scroll",() => {
    document.querySelector("nav").classList.toggle
    ("window-scroll", window.scrollY > 0)
});
// end changing navbar color when scrolling


// start of functionality of navbar

const menu = document.querySelector(".nav-menu");
const menuOpen = document.querySelector("#open");
const menuClose = document.querySelector("#close");

menuOpen.addEventListener("click", () => {
    menu.style.display = "flex";
    menuClose.style.display = "inline-block";
    menuOpen.style.display = "none";
});

menuClose.addEventListener("click", () => {
    menu.style.display = "none";
    menuClose.style.display = "none";
    menuOpen.style.display = "inline-block";
});