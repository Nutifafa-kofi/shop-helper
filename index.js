
function calculateTotalCost(pricePerCup, numberOfCups) {
  let totalCost = pricePerCup * numberOfCups;
  return totalCost;
}

console.log(calculateTotalCost(5, 16));


function applyDiscount(pricePerCup, numberOfCups, discountPercent) {
  let totalCost = pricePerCup * numberOfCups;
  let discountGiven = totalCost * (discountPercent / 100);
  let finalPrice = totalCost - discountGiven;
  if (numberOfCups > 10) {
    return finalPrice;
  } else {
    return totalCost;
  }
}

console.log(applyDiscount(5, 30, 50));


function USDToGHS(pricePerCup, numberOfCups) {
  let totalCost = pricePerCup * numberOfCups;
  const exchangeRate = 10.9;
  let GHS = totalCost * exchangeRate;
  return GHS;
}

console.log(USDToGHS(5, 16));
