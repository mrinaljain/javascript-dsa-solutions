// Second largest number in the array.


//1. Sort and print  index 1


//2. Without Sorting


function secondLargest(arr){
   let max = -Infinity
   let secondMax = -Infinity;
   for (let i = 0; i < arr.length; i++) {
      const element = arr[i];
      if(element > max){
         secondMax = max;
         max = element;
         
      }else if(element > secondMax){
       secondMax = element;
      } 
     
   }

   return secondMax;
}


let arr = [4, 9, 0, 2, 8, 7, 1];          // second largest → 8

let arrOne = [8, 9, 0, 2, 4, 7, 1];       // second largest → 8

let arrTwo = [8, 4, 0, 9, 2, 7, 10];      // second largest → 9

let arrThree = [10, 8, 6, 4, 2];          // descending → 8

let arrFour = [1, 2, 3, 4, 5];            // ascending → 4

let arrFive = [5, 5, 5, 5, 5];            // all same → null / undefined

let arrSix = [10, 10, 8, 8, 7];           // duplicates → 8

let arrSeven = [-10, -5, -1, -20];        // negatives → -5

let arrEight = [100];                     // single element → null

let arrNine = [8, 3];                     // two elements → 3

let arrTen = [0, -1, -3, -2];             // includes zero → -1

let arrEleven = [];                       // empty → null

let arrTwelve = [50, 1, 50, 49];          // duplicate max → 49


console.log(secondLargest(arr));         // 8
console.log(secondLargest(arrOne));      // 8
console.log(secondLargest(arrTwo));      // 9
console.log(secondLargest(arrThree));    // 8
console.log(secondLargest(arrFour));     // 4
console.log(secondLargest(arrFive));     // null
console.log(secondLargest(arrSix));      // 8
console.log(secondLargest(arrSeven));    // -5
console.log(secondLargest(arrEight));    // null
console.log(secondLargest(arrNine));     // 3
console.log(secondLargest(arrTen));      // -1
console.log(secondLargest(arrEleven));   // null
console.log(secondLargest(arrTwelve));   // 49


