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
let wholePage = document.querySelector(".whole-page");

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

menu.addEventListener("click", (e) => {
  if (e.target.classList.contains("drink-item")) {
    let index = e.target.getAttribute("data-index");
    cartItems.push(drinks[index]);
    console.log(cartItems);
  } else if (e.target.classList.contains("eat-item")) {
    let index = e.target.getAttribute("data-index");
    cartItems.push(eats[index]);
    console.log(cartItems);
  }
});

cart.addEventListener("click", () => {
  let billContainer = document.createElement("div");
  billContainer.classList.add("bill-container");
  wholePage.append(billContainer);
  let bill = document.createElement("div");
  bill.classList.add("bill");
  wholePage.append(bill);
  cartItems.forEach((item) => {
    let billBox = document.createElement("div");
    billBox.classList.add("bill-box");
    let billItem = document.createElement("p");
    let billPrice = document.createElement("p");
    billItem.innerText = item.name;
    billPrice.innerText = item.price;
    billBox.append(billItem);
    billBox.append(billPrice);
    bill.append(billBox);
  });
  let x = document.createElement("p");
  x.innerText = "x";
  x.classList.add("x");
  bill.append(x);
  x.addEventListener("click", () => {
    billContainer.remove();
    bill.remove();
  });
  let totalBox = document.createElement("div");
  totalBox.classList.add("total-box");
  let total = document.createElement("p");
  let totalPrice = document.createElement("p");
  let finalTotal = 0;
  for (let item of cartItems) {
    finalTotal += item.price;
  }
  total.innerText = "Total:";
  totalPrice.innerText = `$${finalTotal}.00`;
  totalBox.append(total);
  totalBox.append(totalPrice);
  bill.append(totalBox);
});
