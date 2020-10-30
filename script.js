"use strict";

let drinks = [
  { 
    name: "coffee", 
    price: 1,
    category: "data doesn't matter",
    description: "data doesn't matter",
},
  { 
    name: "tea", 
    price: 2 ,
    category: "data doesn't matter",
    description: "data doesn't matter",
  },
  { 
    name: "coffee", 
    price: 5 ,
    category: "data doesn't matter",
    description: "data doesn't matter",
},
  { 
    name: "tea", 
    price: 3 ,
    category: "data doesn't matter",
    description: "data doesn't matter",
  },
  { 
    name: "coffee", 
    price: 4 ,
    category: "data doesn't matter",
    description: "data doesn't matter",
},
];

let eats = [
  {
    name: "food",
    price: 1,
    category: "data doesn't matter",
    description: "data doesn't matter",
  },
  {
    name: "food",
    price: 1,
    category: "data doesn't matter",
    description: "data doesn't matter",
  },
  {
    name: "food",
    price: 1,
    category: "data doesn't matter",
    description: "data doesn't matter",
  },
  {
    name: "food",
    price: 1,
    category: "data doesn't matter",
    description: "data doesn't matter",
  },
  {
    name: "food",
    price: 1,
    category: "data doesn't matter",
    description: "data doesn't matter",
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
    let drinksDescription = document.createElement("p");
    drinksDescription.innerText = `${drink.category} , ${drink.description}`;
    drinkBox.append(drinksDescription);
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
      let drinksDescription = document.createElement("p");
      drinksDescription.innerText = `${drink.category} , ${drink.description}`;
      drinkBox.append(drinksDescription);
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
      let eatDescription = document.createElement("p");
      eatDescription.innerText = `${eat.category} , ${eat.description}`;
      eatBox.append(eatDescription);
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
  let checkoutContainer = document.createElement("div");
  checkoutContainer.classList.add("checkout-container")
  let checkoutButton = document.createElement("p");
  checkoutButton.innerText = "Checkout";
  checkoutButton.classList.add("checkout-button");
  let clearButton = document.createElement("p");
  clearButton.innerText = "Clear Cart";
  clearButton.classList.add("clear-cart");
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
  total.innerText = "Subtotal:";
  totalPrice.innerText = `$${finalTotal}.00`;
  totalBox.append(total);
  totalBox.append(totalPrice);
  bill.append(totalBox);
  bill.append(checkoutButton);
  bill.append(clearButton);
  checkoutButton.addEventListener("click",()=>{
    bill.innerHTML = ""
    bill.append(totalBox)
    let taxText= document.createElement("p")
    taxText.innerText="tax:"
    let taxnum = finalTotal*0.06
    let tax= document.createElement("p")
    tax.innerText= `$${(taxnum).toFixed(2)}`
    let taxBox= document.createElement("div")
    taxBox.classList.add("total-box")
    let totalText = document.createElement("p")
    totalText.innerText= "Total:"
    let addTax = document.createElement("p")
    addTax.innerText = `$${(finalTotal+taxnum).toFixed(2)}`
    let finalBox = document.createElement("div")
    finalBox.classList.add("total-box")
    taxBox.append(taxText, tax)
    finalBox.append(totalText, addTax);
    bill.append(taxBox,finalBox)
    let paymentOption = document.createElement("div")
    paymentOption.classList.add("payment")
    let cash = document.createElement("p")
    cash.innerText= "pay with cash"
    let card = document.createElement("p")
    card.innerText = "pay with card"
    paymentOption.append(card, cash)
    bill.append(paymentOption, x)
  })
});

