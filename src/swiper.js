// Import Swiper and required modules
import Swiper from "swiper";
import { Pagination } from "swiper/modules";

// Import Swiper styles
import "swiper/scss";
import "swiper/scss/pagination";

let swiperInstance = null;

function initSwiper() {
  swiperInstance = new Swiper(".swiper", {
    slidesPerView: 1.55,
    spaceBetween: 20,
    roundLengths: true,
    centeredSlides: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    modules: [Pagination],
  });
}

function destroySwiper() {
  if (swiperInstance !== null) {
    swiperInstance.destroy(true, true);
    swiperInstance = null;
  }
}

function handleResize() {
  const width = window.innerWidth;
  if (width < 1024) {
    if (!swiperInstance) {
      initSwiper();
    }
  } else {
    destroySwiper();
  }
}

// Initialize on page load
document.addEventListener("DOMContentLoaded", handleResize);

// Reinitialize on window resize
window.addEventListener("resize", handleResize);
