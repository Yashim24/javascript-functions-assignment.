function calculateTotal(price, quantity, deliveryFee) {
    let total = (price * quantity) + deliveryFee;
    console.log("Total cost: " + total);
}

calculateTotal(100, 2, 20);
calculateTotal(50, 3, 10);
calculateTotal(200, 1, 15);