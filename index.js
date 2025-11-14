// //Total cost of the order
// function calculateTotalCost(pricePerCup, numberOfCups) {
//   let totalCost = pricePerCup * numberOfCups;
//   return totalCost;
// }

// console.log(calculateTotalCost(5, 16));

// //Discount applied
// function applyDiscount(pricePerCup, numberOfCups, discountPercent) {
//   let totalCost = calculateTotalCost(pricePerCup, numberOfCups);

//   if (numberOfCups > 10) {
//     let discountGiven = totalCost * (discountPercent / 100);
//     let finalPrice = totalCost - discountGiven;
//     return finalPrice;
//   } else {
//     return totalCost;
//   }
// }

// console.log(applyDiscount(5, 30, 50));

// //USD to GHS conversion
// function usdToGHS(pricePerCup,numberOfCups, exchangeRate) {
//   let totalCost = calculateTotalCost(pricePerCup, numberOfCups);
//   let GHS = totalCost * exchangeRate;
//   return GHS;
// }

// console.log(usdToGHS(5, 16, 10.9));

//Shoe Object
let shoe = {
  brand: "Adidas",
  color: "Red",
  price: 300,
  quantity: 5,
  restock: 10,
};

//Added a New Stock
function newStock(shoe, addedStock) {
  shoe.quantity += addedStock;
  return shoe.quantity;
}
console.log(newStock(shoe, 5));

//Stock Sold
function stockSold(shoe, quantitySold) {
  if (quantitySold <= shoe.quantity) {
    shoe.quantity -= quantitySold;
    return `${quantitySold} are sold out. Remaining ${shoe.quantity}`;
  } else {
    return `Not enough available only ${shoe.quantity} is left`;
  }
}
console.log(stockSold(shoe, 4));

//Check Restock
function checkRestock(shoe) {
  if (shoe.quantity < shoe.restock) {
    return `${shoe.brand} is below restock. Order now`;
  } else {
    return `${shoe.brand} is in abundance`;
  }
}
console.log(checkRestock(shoe));

//Transaction Simulate
function transaction(shoe, quantityBought) {
  let totalCost;
  if (quantityBought > shoe.quantity) {
    return `Not enough stock available. Only ${shoe.quantity} left`;
  } else {
    totalCost = shoe.price * quantityBought;
    shoe.quantity -= quantityBought;

    let output = `
Transaction Successful!
Brand: ${shoe.brand}
Quantity Bought: ${quantityBought}
Total Cost: ${totalCost}
Remaining Stock: ${shoe.quantity}
${checkRestock(shoe)}
`;
    return output;
  }
}

console.log(transaction(shoe, 2));
