const overlay = document.querySelector(".overlay");
const mobileMenu = document.querySelector(".mobile-menu");
const closeBtn = document.querySelector(".nav-button--type--close");
const menuBtn = document.querySelector(".nav-button--type--menu");

menuBtn.addEventListener("click", () => {
  overlay.classList.add("show");
  mobileMenu.classList.add("show");
});

overlay.addEventListener("click", (event) => {
  if (!mobileMenu.contains(event.target) || closeBtn.contains(event.target)) {
    overlay.classList.remove("show");
    mobileMenu.classList.remove("show");
  }
});

const brandsCardsList = document.querySelector(".brands-cards__list");
const brandsMoreBtn = document.querySelector(".brands__more-btn");

brandsMoreBtn.addEventListener("click", () => {
  if (brandsCardsList.classList.contains("brands-cards__list--shown")) {
    brandsCardsList.classList.remove("brands-cards__list--shown");
    toggleBrandsMoreBtn(false);
    return;
  }

  brandsCardsList.classList.add("brands-cards__list--shown");
  toggleBrandsMoreBtn(true);
});

function toggleBrandsMoreBtn(on) {
  if (on) {
    brandsMoreBtn.classList.add("more-button--shown");
    brandsMoreBtn.textContent = "Скрыть";
    return;
  }

  brandsMoreBtn.classList.remove("more-button--shown");
  brandsMoreBtn.textContent = "Показать все";
}

function toggleBrandsCardsSlider(on) {
  if (!on) {
    brandsCardsList.classList.remove("brands-cards__list");
    brandsCardsList.classList.remove("brands-cards__list--shown");
    swiperPagination.classList.remove("hidden");
    brandsMoreBtn.classList.add("hidden");
    toggleBrandsMoreBtn(false);
    return;
  }

  brandsCardsList.classList.add("brands-cards__list");
  swiperPagination.classList.add("hidden");
  brandsMoreBtn.classList.remove("hidden");
}

let init = false;
let swiper;
const swiperSettings = {
  direction: "horizontal",
  slidesPerView: "auto",
  spaceBetween: 16,
  grabCursor: true,
  pagination: {
    el: ".brands-cards__pagination",
    clickable: true,
  },
};
const swiperPagination = document.querySelector(".swiper-pagination");

function swiperCard() {
  let mobile = window.matchMedia("(width < 768px)");

  if (mobile.matches) {
    if (!init) {
      init = true;
      swiper = new Swiper(".swiper", swiperSettings);

      toggleBrandsCardsSlider(false);
    }
  } else if (init) {
    swiper.destroy();
    init = false;

    toggleBrandsCardsSlider(true);
  }
}

swiperCard();
window.addEventListener("resize", swiperCard);
