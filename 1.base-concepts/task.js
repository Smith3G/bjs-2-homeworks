'use strict'
function solveEquation(a, b, c) {
  let arr;
  let root1;
  let root2;
  let d;
  d = b ** 2 - 4 * a * c;
   if (d < 0) {
    return arr = [];
  }
   else if (d > 0) {
    root1 = (-b + Math.sqrt(d)) / 2*a;
    root2 = (-b - Math.sqrt(d)) / 2*a;
    return arr = [root1, root2]
  }
   else if (d === 0) {
    root1 = root2 = -b / (2*a);
    return arr = [root1, root2];
}
}

function calculateTotalMortgage(percent, contribution, amount, date) {
  let totalAmount;

  // код для задачи №2 писать здесь

  return totalAmount;
}
