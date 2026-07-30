// Write a function that returns the number of negative numbers in an array.


let arr = [2,-9,17,0,1,-10,-4, 8];


const countNegatives = function(arr){

   let count= 0;
   arr.forEach(element => {
      // checking for negative condition if the number is negative or not
      if(element < 0){
         count++;
      }
   });

   return count;
}


let ans = countNegatives(arr);

console.log(ans);
