// burger menu
'use strict';
const humb = document.querySelector('.burger');
const humbBody = document.querySelector('.burger__menu');
const header = document.querySelector('.header');
const menuOpen = document.querySelector('html');
const humbLink = document.querySelector('.burger__menu');

humb.addEventListener('click', humbHandler);

function humbHandler(burgerOn) {
  burgerOn.preventDefault();
  humbBody.classList.toggle("open");
  header.classList.toggle('active');
  menuOpen.classList.toggle("menu__open");
  humb.classList.toggle('active');
  humbLink.classList.toggle('active');
}
$('.burger__menu a').on('click', function () {
  $('.burger__menu').toggleClass('open');
  $('.burger').toggleClass('active');
  $('html').toggleClass('menu__active');
})
// ============================================= //

// swiper //
let swiper = new Swiper(".mySwiper", {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: "auto",
  loop: true,
  coverflowEffect: {
    rotate: 0,
    stretch: 0,
    depth: 100,
    modifier: 1,
    slideShadows: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});
// ============================================= //


window.addEventListener('click', function (event) {

  //Змінна для рахунку
  let counter;

  // Провіряємо клік по кнопках пдюс і мінус
  if (event.target.dataset.action === 'plus' || event.target.dataset.action === 'minus') {

    const counterPizza = event.target.closest('.pizza__counter');

    counter = counterPizza.querySelector('[data-counter]');
  }


  // Відслідковуємо кнопку на плюс
  if (event.target.dataset.action === 'plus') {

    counter.innerText = ++counter.innerText;

  }

  // Відслідковуємо кнопку на мінус
  if (event.target.dataset.action === 'minus') {

    if (parseInt(counter.innerText) > 1) {
      // Зменшуємо на 1
      counter.innerText = --counter.innerText;
    }
  }


});
