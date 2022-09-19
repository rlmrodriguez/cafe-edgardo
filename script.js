const navItems = document.querySelector("#navItems");
const navItem = document.querySelectorAll(".navbar__item");
const navMenu = document.querySelector("#navMenu");
const navMenuOpen = document.querySelector("#openBtn");
const navMenuClose = document.querySelector("#closeBtn");
const navBar = document.querySelector("#navBar");
const sections = document.querySelectorAll("section");

const navToggle = (el) =>
  el.addEventListener("click", () => {
    navItems.classList.toggle("active");
    navMenuOpen.classList.toggle("hide");
    navMenuClose.classList.toggle("hide");
  });

navToggle(navMenu);
navItem.forEach((item) => navToggle(item));

window.addEventListener("scroll", () => {
  const navBarHeight = window.scrollY > 300 ? "3.375rem" : "4.375rem";
  navBar.style.height = navBarHeight;
});

window.addEventListener("scroll", () => {
  let current = "";
  sections.forEach((section) => {
    const sectionTop = section.offsetTop - 20;
    if (scrollY > sectionTop) {
      current = section.getAttribute("id");
    }
  });
  navItem.forEach((item) => {
    item.classList.remove("selected");
    if (item.classList.contains(current)) {
      item.classList.add("selected");
    }
  });
});

// SWIPER
const swiper = new Swiper(".slider", {
  direction: "horizontal",
  loop: false,
  pagination: {
    el: ".swiper-pagination",
    clickable: "true",
  },
  spaceBetween: 16,
  slidesPerView: 1.3,
  centeredSlides: true,
  grabCursor: true,
  breakpoints: {
    550: {
      slidesPerView: 2,
      centeredSlides: false,
      spaceBetween: 25,
    },
    768: {
      slidesPerView: 1.5,
      centeredSlides: false,
      loop: true,
    },

    1024: {
      slidesPerView: 1.8,
      centeredSlides: false,
      loop: true,
    },

    1200: {
      slidesPerView: 2.3,
      centeredSlides: false,
      loop: true,
    },
    1324: {
      slidesPerView: 2.8,
      centeredSlides: false,
      loop: true,
    },
  },
});

const swiper2 = new Swiper(".slider-alt", {
  direction: "horizontal",
  loop: false,
  pagination: {
    el: ".swiper-pagination",
    clickable: "true",
  },
  spaceBetween: 16,
  grabCursor: true,
  slidesPerView: 1.3,
  centeredSlides: true,
  breakpoints: {
    550: {
      slidesPerView: 2,
      centeredSlides: false,
      spaceBetween: 25,
    },
    768: {
      slidesPerView: 3,
      centeredSlides: false,
      loop: true,
    },
    1024: {
      slidesPerView: 3,
      centeredSlides: false,
      loop: true,
    },

    1200: {
      slidesPerView: 4,
      centeredSlides: false,
      loop: true,
    },
  },
});
