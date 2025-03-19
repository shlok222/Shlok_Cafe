let order = [];
const pizzaBtn = document.getElementById("Btn1");
const burgerBtn = document.getElementById("Btn2");
const beerBtn = document.getElementById("Btn3");
const placeOrder = document.getElementById("Btn4");


const removePizzaBtn = document.getElementById("RemovePizza");
const removeBurgerBtn = document.getElementById("RemoveBurger");
const removeBeerBtn = document.getElementById("RemoveBeer");

const finalOrder = document.getElementById("order");
const thankYou = document.getElementById("thankyou")

let pizzaCount = 0;
let burgerCount = 0;
let beerCount = 0;

const pizzaPrice = 14;
const burgerPrice = 12;
const beerPrice = 14;

// Function to update the order display
function updateOrder() {
    let orderSummary = "";
    let totalCost = (pizzaCount * pizzaPrice) + (burgerCount * burgerPrice) + (beerCount * beerPrice);
    
    if (pizzaCount > 0) {
        orderSummary += `🍕 Pizza: ${pizzaCount} / Total Cost = $${pizzaCount * pizzaPrice}<br>`;
    }
    if (burgerCount > 0) {
        orderSummary += `🍔 Burger: ${burgerCount} / Total Cost = $${burgerCount * burgerPrice}<br>`;
    }
    if (beerCount > 0) {
        orderSummary += `🍺 Beer: ${beerCount} / Total Cost = $${beerCount * beerPrice}<br>`;
    }

    if (totalCost > 0) {
        orderSummary += `<hr><strong>🛒 Final Total Cost: $${totalCost}</strong>`;
    } else {
        orderSummary = "Your cart is empty.";
    }

    finalOrder.innerHTML = orderSummary;
}

// Add event listeners to add items
pizzaBtn.addEventListener("click", function () {
    pizzaCount += 1;
    updateOrder();
});

burgerBtn.addEventListener("click", function () {
    burgerCount += 1;
    updateOrder();
});

beerBtn.addEventListener("click", function () {
    beerCount += 1;
    updateOrder();
});

// Add event listeners to remove items
removePizzaBtn.addEventListener("click", function () {
    if (pizzaCount > 0) {
        pizzaCount -= 1;
    }
    updateOrder();
});

removeBurgerBtn.addEventListener("click", function () {
    if (burgerCount > 0) {
        burgerCount -= 1;
    }
    updateOrder();
});

removeBeerBtn.addEventListener("click", function () {
    if (beerCount > 0) {
        beerCount -= 1;
    }
    updateOrder();
});

placeOrder.addEventListener("click", function() {
    thankYou.textContent = `Your order has been placed ✅`
})