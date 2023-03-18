window.addEventListener('click', function (event) {
   if (event.target.hasAttribute('data-cart')) {

      const card = event.target.closest('.pizza__card');

      //Збираємо дані з карточки

      const productInfo = {
         id: card.dataset.id,
         imgSrc: card.querySelector('.pizza__items img').getAttribute('src'),
         title: card.querySelector('.card__title h3').innerText,
         weight: card.querySelector('.pizza__weight').innerText,
         size: card.querySelector('.pizza__size').innerText,
         counter: card.querySelector('[data-counter]').innerText,
      };

      console.log(productInfo)

   }
});

let cart = JSON.parse(localStorage.getItem("data")) || [];













// Form JS Code //
// Validation Form-Phone //
let element = document.getElementById('phone');
let maskOptions = {
   mask: '+38 (000) 00-00-000',
   lazy: false,
};
let mask = IMask(element, maskOptions);