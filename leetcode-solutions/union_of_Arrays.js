/*
Given two sorted arrays nums1 and nums2, return an array that contains the union of these two arrays. The elements in the union must be in ascending order.
The union of two arrays is an array where all values are distinct and are present in either the first array, the second array, or both.
*/

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */

let num1 = [3, 4, 6, 7, 9, 9]
let num2 = [1, 5, 7, 8, 8]

var union = function (nums1, nums2) {

// 1. make first array as set
   let set1 = new Set(nums1);
// 2. make it array again
// let ans = Array.from(set1);
// OR
let ans =[...set1]
//3. now push to answer by shscking does exist
for (let i = 0; i < nums2.length; i++) {
   if(!ans.includes(nums2[i])){
      ans.push(nums2[i]);
   }
}

ans.sort((a, b) => a-b);
return ans
};

// console.log(union(num1,num2));

//? 1. Brute force
// Intutiion
/*
Make 0ne array as a unique
then push items of other array  to it  checking if it already includes element or not
*/

//? 2. better 
/*
just push all items to set and wallah you are done
convert to array at last 
*/

//?3. optimal Two pointer approach  
/*
use one pointer in each aray 
compare both and insert smaller value to answer
increase the pointer of array from which smaller item was pushed
*/

var unionUsingTwoPointer = function (nums1, nums2) {
  // define answerarray

  let ans = [];
  let lastInserted = -1;

  // define two pointers
  let p1 = 0;
  let p2 = 0;

  while (p1 < nums1.length && p2 < nums2.length) {
    let elem1 = nums1[p1];
    let elem2 = nums2[p2];
    // pick smaller from both
    if (elem1 <= elem2) {
      // check if exists and push
      if (elem1 !== lastInserted) {
        ans.push(elem1);
        lastInserted = elem1;
      }
      // increase pointer regardless
      p1++;
    } else {
      // check if exists and push
      if (elem2 !== lastInserted) {
        ans.push(elem2);
        lastInserted = elem2;
      }
      // increase pointer regardless
      p2++;
    }
    console.log(ans);
    
  }

  while (p1 < nums1.length) {
       let elem1 = nums1[p1];

    // check if exists and push
    if (elem1 !== lastInserted) {
      ans.push(elem1);
      lastInserted = elem1;
    }
    // increase pointer regardless
    p1++;
  }
  while (p2 < nums2.length) {
       let elem2 = nums2[p2];

    // check if exists and push
    if (elem2 !== lastInserted) {
      ans.push(elem2);
      lastInserted = elem2;
    }
    // increase pointer regardless
    p2++;
  }
  return ans;
}
console.log(unionUsingTwoPointer(num1, num2));
