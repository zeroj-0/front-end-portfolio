var swiper = new Swiper(".container", {
  loop: true,
  effect: 'fade',
  autoplay: {
    delay: 5000,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

var gallerySlide = new Swiper(".gallery-slide-container", {
   slidesPerView: 4,
   loop: true,
   spaceBetween: 30,
   autoplay: {
     delay: 10000,
     disableOnInteraction: false,
   },
   freeMode: true,
   pagination: {
     el: ".gallery-slide-btn",
     clickable: true,
   },
 });
