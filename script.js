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

buttonBox.addEventListener("click", (e) => {
  if (e.target.classList.contains("drink-button")){
		drinkMenu.classList.toggle("top")

  }else if (e.target.classList.contains("eat-button")){}
});
