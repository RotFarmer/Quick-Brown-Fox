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

let drinkButton = document.querySelector(".drink-button");
let eatButton = document.querySelector(".eat-button");
let buttonBox = document.querySelector(".button-box");
let cart = document.querySelector(".cart");
let drinkMenu = document.querySelector(".drink-menu")
let eatMenu = document.querySelector(".eat-menu")
let menu = document.querySelector(".menu")

buttonBox.addEventListener("click", (e) => {
  if (e.target.classList.contains("drink-button")){
    drinkMenu.classList.add("top");
    eatMenu.classList.remove("top");
    drinks.forEach((coffee)=>{
      let drinkBox = document.createElement("div");
      let drinksName = document.createElement("p");
      drinksName.innerText = coffee.name;
      let drinksPrice = document.createElement("p");
      drinksPrice.innerText = coffee.price;
      drinkBox.append(drinksName);
      drinkBox.append(drinksPrice);
      drinkBox.classList.add("drinkBox")
      drinkMenu.append(drinkBox);
    })
  }else if (e.target.classList.contains("eat-button")){
    eatMenu.classList.add("top");
    drinkMenu.classList.remove("top");
  };
  menu.reset();
});

