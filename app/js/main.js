
//start changing navbar color when scrolling

window.addEventListener("scroll",() => {
    document.querySelector("nav").classList.toggle
    ("window-scroll", window.scrollY > 0)
});
// end changing navbar color when scrolling



//start showing more on cards section

const fags = document.querySelectorAll(".fag")
fags.forEach( fag =>{
    fag.addEventListener("click", () =>{
        fag.classList.toggle("open")

        //start change icon in card area

        const icon = fag.querySelector(".fag-icon i");
        if(icon.className === "fa-solid fa-plus") {
            icon.className = "fa-solid fa-minus"
        }
        else(
            icon.className ="fa-solid fa-plus"
        );
        // start change icon in card area

    });
});
// end showing more on cards section

// start  swiper section on homepage

var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    // when the width is greater yhan 600px
    breakpoints: {
        600: {
            slidesPerView: 2,
        }
    }
  });
//   end  swiper section on homepage

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