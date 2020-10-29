"use strict";

let drinks = [
  { name: "coffee", price: 1 },
  { name: "tea", price: 2 },
  { name: "coffee", price: 5 },
  { name: "tea", price: 3 },
  { name: "coffee", price: 4 },
];

let eats = [
  {
    name: "food",
    price: 1,
  },
  {
    name: "food",
    price: 1,
  },
  {
    name: "food",
    price: 1,
  },
  {
    name: "food",
    price: 1,
  },
  {
    name: "food",
    price: 1,
  },
];
let cartItems = [];

let drinkButton = document.querySelector(".drink-button");
let eatButton = document.querySelector(".eat-button");
let buttonBox = document.querySelector(".button-box");
let cart = document.querySelector(".cart");
let drinkMenu = document.querySelector(".drink-menu");
let eatMenu = document.querySelector(".eat-menu");
let menu = document.querySelector(".menu");

const drinkMenuOnLoad = () => {
  drinkMenu.classList.add("top");
  eatMenu.classList.remove("top");
  drinks.forEach((drink, index) => {
    let drinkBox = document.createElement("div");
    let drinksName = document.createElement("p");
    drinksName.innerText = drink.name;
    let drinksPrice = document.createElement("p");
    drinksPrice.innerText = drink.price;
    drinkBox.append(drinksName);
    drinkBox.append(drinksPrice);
    drinkBox.classList.add("drink-item");
    drinkBox.setAttribute("data-index", index);
    drinkMenu.append(drinkBox);
  });
};
drinkMenuOnLoad();
buttonBox.addEventListener("click", (e) => {
  drinkMenu.innerHTML = "";
  eatMenu.innerHTML = "";
  if (e.target.classList.contains("drink-button")) {
    drinkMenu.classList.add("top");
    eatMenu.classList.remove("top");
    drinks.forEach((drink, index) => {
      let drinkBox = document.createElement("div");
      let drinksName = document.createElement("p");
      drinksName.innerText = drink.name;
      let drinksPrice = document.createElement("p");
      drinksPrice.innerText = drink.price;
      drinkBox.append(drinksName);
      drinkBox.append(drinksPrice);
      drinkBox.classList.add("drink-item");
      drinkBox.setAttribute("data-index", index);
      drinkMenu.append(drinkBox);
    });
  } else if (e.target.classList.contains("eat-button")) {
    eatMenu.classList.add("top");
    drinkMenu.classList.remove("top");
    eats.forEach((eat, index) => {
      let eatBox = document.createElement("div");
      let eatName = document.createElement("p");
      eatName.innerText = eat.name;
      let eatPrice = document.createElement("p");
      eatPrice.innerText = eat.price;
      eatBox.append(eatName);
      eatBox.append(eatPrice);
      eatBox.classList.add("eat-item");
      eatBox.setAttribute("data-index", index);
      eatMenu.append(eatBox);
    });
  }
});

const findItem = (array, index) => {
  return array.find((item) => {
    return item.index === index;
  });
};

menu.addEventListener("click", (e) => {
  if (e.target.classList.contains("drink-item")) {
    let index = drinkBox.getAttribute("data-index");
    let cartItem = findItem(drinks, index)
    cartItems.push(cartItem);
    console.log(cartItems)
  }else if(e.target.classList.contains("eat-item")) {
    let index = drinkBox.getAttribute("data-index");
    let cartItem = findItem(drinks, index)
    cartItems.push(cartItem);
    console.log(cartItems)
  }
});
