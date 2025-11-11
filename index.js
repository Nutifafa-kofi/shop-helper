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

let shoe = { brand: "Adidas", color: "Red", price: 300, inStock: 10 };
function newStock(shoe, addedStock) {
  shoe.inStock += addedStock;
  return shoe.inStock;
}

console.log(newStock(shoe, 5));

function stockSold(shoe, quantitySold) {
  if (shoe.inStock >= quantitySold) {
    shoe.inStock -= quantitySold;
   return `${quantitySold} items are sold out`;
  } else {
    return shoe.inStock;
  }
}

console.log(stockSold(shoe, 5));

