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
    price: 2,
    category: "data doesn't matter",
    description: "data doesn't matter",
  },
  {
    name: "coffee",
    price: 5,
    category: "data doesn't matter",
    description: "data doesn't matter",
  },
  {
    name: "tea",
    price: 3,
    category: "data doesn't matter",
    description: "data doesn't matter",
  },
  {
    name: "coffee",
    price: 4,
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
  checkoutContainer.classList.add("checkout-container");
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
  checkoutButton.addEventListener("click", () => {
    bill.innerHTML = "";
    bill.append(totalBox);
    let taxText = document.createElement("p");
    taxText.innerText = "tax:";
    let taxNum = finalTotal * 0.06;
    let tax = document.createElement("p");
    tax.innerText = `$${taxNum.toFixed(2)}`;
    let taxBox = document.createElement("div");
    taxBox.classList.add("total-box");
    let totalText = document.createElement("p");
    totalText.innerText = "Total:";
    let addTax = document.createElement("p");
    let completeTotal = (finalTotal + taxNum).toFixed(2);
    addTax.innerText = `$${completeTotal}`;
    let finalBox = document.createElement("div");
    finalBox.classList.add("total-box");
    taxBox.append(taxText, tax);
    finalBox.append(totalText, addTax);
    bill.append(taxBox, finalBox);
    let paymentOption = document.createElement("div");
    paymentOption.classList.add("payment");
    let cash = document.createElement("p");
    cash.innerText = "pay with cash";
    cash.classList.add("cash");
    let card = document.createElement("p");
    card.innerText = "pay with card";
    card.classList.add("card");
    paymentOption.append(card, cash);
    bill.append(paymentOption, x);
    paymentOption.addEventListener("click", (e) => {
      if (e.target.classList.contains("cash")) {
        bill.innerHTML = "";
        bill.append(finalBox);
        bill.append(x);
        let cashForm = document.createElement("form");
        let cashTenderedText = document.createElement("label");
        cashTenderedText.setAttribute("for", "tendered");
        cashTenderedText.innerText = "Cash Tendered";
        let cashTendered = document.createElement("input");
        cashTendered.setAttribute("name", "tendered");
        cashTendered.setAttribute("type", "number");
        cashTendered.setAttribute("id", "tendered");
        let submitButton = document.createElement("button");
        submitButton.innerText = "Pay Now";
        cashForm.append(cashTenderedText, cashTendered, submitButton);
        bill.append(cashForm);
        cashForm.addEventListener("submit", (e) => {
          e.preventDefault();
          bill.innerHTML = "";
          bill.append(x);
          bill.append(finalBox);
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
          let snapshot = new FormData(cashForm);
          let tendered = snapshot.get("tendered");
          let change = tendered - completeTotal;
          let changeDue = document.createElement("p");
          changeDue.innerText = `Your change is $${change}`;
          bill.append(changeDue);
        });
      } else if (e.target.classList.contains("card")) {
        bill.innerHTML = "";
        bill.append(x);
        bill.append(finalBox);
        let cardForm = document.createElement("form");
        // 
        let ccNameText = document.createElement("label");
        ccNameText.setAttribute("for", "your-name");
        ccNameText.innerText = "Your Name";
        let ccName = document.createElement("input");
        ccName.setAttribute("id", "cc-name")
        ccName.setAttribute("type", "text");
        cardForm.append(ccNameText, ccName);
        // 
        let ccNumberText = document.createElement("label");
        ccNumberText.setAttribute("for", "cc-number");
        ccNumberText.innerText = "Credit Card Number";
        let ccNumber = document.createElement("input");
        ccNumber.setAttribute("id", "cc-number")
        ccNumber.setAttribute("type", "number");
        cardForm.append(ccNumberText, ccNumber);
        // 
        let ccExpirationText = document.createElement("label");
        ccExpirationText.setAttribute("for", "expiration-date");
        ccExpirationText.innerText = "Expiration Date";
        let ccExpiration = document.createElement("input");
        ccExpiration.setAttribute("id", "cc-expiration")
        ccExpiration.setAttribute("type", "number")
        cardForm.append(ccExpirationText, ccExpiration);
        // 
        let ccCVVNum = document.createElement("label");
        ccCVVNum.setAttribute("for", "cvv-number");
        ccCVVNum.innerText = "CVV Number";
        let ccCVV = document.createElement("input");
        ccCVV.setAttribute("id", "cc-cvv")
        ccCVV.setAttribute("type", "number");
        cardForm.append(ccCVVNum, ccCVV);
        // 
        let cardButton = document.createElement("button");
        cardButton.innerText = "Pay Now";
        cardForm.append(cardButton);
        bill.append(cardForm)
        // 
        cardButton.addEventListener("submit", (e)=>{
          e.preventDefault();
          bill.innerHTML = "";
          bill.append(x);
          bill.append(finalBox);
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
        })
      }
    });
  });
});
