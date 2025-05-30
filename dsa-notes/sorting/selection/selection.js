const arr = [2,3,6,66,8,64,66,98,56,78];



const sort = function(array){

// run loop till second last index
for (let i = 0; i <= array.length - 2; i++) {
   // for every loop find min from i to last element
   let minIndex = i;
   let min = array[i]
   for (let j = i; j < array.length; j++) {
      min = Math.min(array[j], min);     
   }
   minIndex = array.indexOf(min); 
   console.log(`Minimum is ${min}`);
   
   // once we have min and its index we need to swap
   // swap using destructuring
   [array[i], array[minIndex]] = [array[minIndex], array[i]];
}


}


sort(arr);

console.log(arr);

// BEST, WORST, AVERAGE
// Time Complexity : O(N2)
// Space Complexity: O(1)