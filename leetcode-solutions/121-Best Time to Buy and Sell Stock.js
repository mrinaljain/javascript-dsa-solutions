/*
You are given an array prices where prices[i] is the price of a given stock on the ith day.

You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.

Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.

*/
let prices1 = [7, 1, 5, 3, 6, 4];
let prices2 = [7, 10, 1, 3, 6, 9, 2];
let prices3 = [7, 6, 4, 3, 1];
let prices4 = [1, 3, 6, 9, 11];

//? 1. Brute Force TC:O(N2)  SC: O(1)
/*
for every Buy find the largest possible sell option available
i.e 2 loops 

Bruteforce : on every index find max from remaining array and check diff.
*/
var maxProfitBruteForce = function (prices) {
  let maxProfit = 0;
  for (let i = 0; i < prices.length; i++) {
    let currentMax = prices[i];
    for (let j = i + 1; j < prices.length; j++) {
      if (prices[j] > currentMax) {
        currentMax = prices[j];
      }
    }
    let profit = currentMax - prices[i];
    maxProfit = Math.max(maxProfit, profit);
  }
  return maxProfit;
};



//? 2. Intution
/* Idea is to  find two items jinka diffrence maximum ho so that [sell - buy] maximum ho.

- start from right
- Abhi tak ka max kaun hai ye yaad rakho [ kyoki sell to right mai hi hoga buy k baad]

- har iteration pr current item ko maxSelling price  se substract karo [isse profit milega]
- same step mai hi max profit ko bhi update krte rahi [ isse max profit update hota rahega]
*/

var maxProfit = function (prices) {
  let maxProf = 0;
  let currentMax = 0;

  for (let i = prices.length - 1; i >= 0; i--) {
    currentMax = Math.max(currentMax, prices[i]);
    let profit = currentMax - prices[i];
    maxProf = Math.max(maxProf, profit);
  }
  return maxProf;
};

console.log(maxProfit(prices1));
console.log(maxProfit(prices2));
console.log(maxProfit(prices3));
console.log(maxProfit(prices4));