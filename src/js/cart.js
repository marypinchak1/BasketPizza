/* window.addEventListener('click', function (event) {
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

     
   }

   
}); */
const buyButtons = document.querySelectorAll(".buy__btn");
const cart = [];

buyButtons.forEach((button) => {
  button.addEventListener("click", addToCart);
});

function updateCartCounter() {
  const cartCounter = document.querySelector(".cart__counter");
  const cartItems = JSON.parse(localStorage.getItem("cart")) || [];

  if (cartCounter !== null) {
    cartCounter.textContent = cartItems.length;
  }
}

function addToCart(event) {
  const pizzaCard = event.target.closest(".pizza__card");
  const pizzaImage = pizzaCard
    .querySelector(".pizza__items img")
    .getAttribute("src");
  const pizzaId = pizzaCard.getAttribute("data-id");
  const pizzaTitle = pizzaCard.querySelector(".card__title h3").textContent;
  const pizzaDescription =
  pizzaCard.querySelector(".describe__hover").textContent;
  const pizzaPrice = pizzaCard.querySelector(".pizza__price p").textContent;
  const pizzaWeight = pizzaCard.querySelector(".pizza__weight").textContent;
  const pizzaSize = pizzaCard.querySelector(".pizza__size").textContent;
  const pizzaQuantity = pizzaCard.querySelector(".items__current").textContent;

  const pizza = {
    image: pizzaImage,
    id: pizzaId,
    title: pizzaTitle,
    description: pizzaDescription,
    price: pizzaPrice,
    weight: pizzaWeight,
    size: pizzaSize,
    quantity: pizzaQuantity, 
  };

  cart.push(pizza);
  localStorage.setItem("cart", JSON.stringify(cart));

  updateCartCounter();
}

window.addEventListener("click", function (event) {
  if (event.target.hasAttribute("data-cart")) {
    const addToCartButtons = document.querySelectorAll(".buy__btn");

    // add to cart

    addToCartButtons.forEach((button) => {
      button.addEventListener("click", addToCart);
    });

    // show data in cart

    const cartItems = JSON.parse(localStorage.getItem("cart")) || [];

    const cartList = document.querySelector(".cart__list");

    cartItems.forEach((item) => {
      const cartItem = document.createElement("li");
      cartItem.classList.add("cart__item");
      cartItem.setAttribute("data-id", item.id); // fixed line
      cartItem.innerHTML = `
  <div class="pizza__body_cart">
    <div class="pizza__card">
      <div class="pizza__items">
        <img src="${item.image}" alt="${item.title}">
          <div class="info__top">
            <div class="pizza__info">
              <p class="pizza__weight">${item.weight}</p>
              <p class="pizza__size">${item.size}</p>
            </div>
          </div>
          <div class="card__title">
            <h3>${item.title}</h3>
          </div>
          <div class="items__hover">
            <h3 class="title__hover">${item.title}</h3>
            <p class="describe__hover">${item.description}
            </p>
          </div>
        </div>
        <div class="pizza__buy">
          <div class="pizza__counter">
            <div class="items__control" data-action="minus">
            -
            </div>
            <div class="items__current" data-counter>1</div>
            <div class="items__control" data-action="plus">+</div>
          </div>
          <div class="pizza__price">
            <p>${item.price}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
   `;
      if (cartList) {
        cartList.appendChild(cartItem);
      }
    });

    updateCartCounter();
  }
});

// remove from cart

const removeButtons = document.querySelectorAll(".cart__item-remove");

removeButtons.forEach((button) => {
  button.addEventListener("click", removeFromCart);
});

function removeFromCart(event) {
  const cartItem = event.target.closest(".cart__item");
  const cartItemId = cartItem.getAttribute("data-id");

  const cartItems = JSON.parse(localStorage.getItem("cart")) || [];

  const newCartItems = cartItems.filter((item) => item.id !== cartItemId);

  localStorage.setItem("cart", JSON.stringify(newCartItems));

  cartItem.remove();

  updateCartCounter();
}

// Form JS Code //
// Validation Form-Phone //
let element = document.getElementById("phone");
let maskOptions = {
  mask: "+38 (000) 00-00-000",
  lazy: false,
};
let mask = IMask(element, maskOptions);
