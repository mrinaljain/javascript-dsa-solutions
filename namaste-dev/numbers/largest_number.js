// Write a function that returns the largest number in the array.




const largestNumber = function(arr){
   let max = arr[0];
   arr.forEach((element)=>{
      if(element > max){
         max = element;
      }
   });
   return max;
}



let exampleArr = [2000,3,4,5,6,344,55,-22,6,7,54,5,6,7,8,3,5000,7,77,5,54,4,4];


let ans = largestNumber(arr);


console.log(ans);
