/*
Given an integer array nums sorted in non-decreasing order, remove the duplicates in-place such that each unique element appears only once. The relative order of the elements should be kept the same. Then return the number of unique elements in nums.
*/
let nums1 = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];
let nums2 = [1, 1, 2];

var removeDuplicates = function (nums) {
  let currentUniqueElement = nums[0];
  let currentUniqueCount = 1;
  for (let i = 1; i < nums.length; i++) {
    let currentElement = nums[i];
    if (currentElement !== currentUniqueElement) {
      currentUniqueElement = nums[i];
      // swipe the element
      let temp = nums[i];
      nums[i] = nums[currentUniqueCount];
      nums[currentUniqueCount] = temp;
      currentUniqueCount++;
    }
  }

  console.log(nums);
  return currentUniqueCount;
};

// console.log(removeDuplicates(nums1));

/*
TWO Pointer Approach
1 L pointer to keep track of the index  till which unique elements are
2 R pointer to traverse the array
At every step we will keep track of current unique element, if we find new element then we will sawp with the currant L. 
*/
// https://www.youtube.com/watch?v=DEJAZBq0FDA

//2. Splice approach
var removeDuplicatesViaSplice = function (nums) {
  let n = nums.length;
  let currentUniqueElement = nums[n - 1];
  let k = 1;
  for (let i = n - 2; i >= 0; i--) {
    const currentElement = nums[i];

    if (currentElement === currentUniqueElement) {
      nums.splice(i, 1);
      nums.push("_");
    } else {
      currentUniqueElement = currentElement;
      k++;
    }
  }
  return k;
};

// Intution for splice
/*
as soon as we find a duplicate element just remove it with splice
and add a dummy element at the end of array to maintain same length.
NOTE: start iterating from end to make sure the iteration is happening on correct indexes everytime.
*/
console.log(removeDuplicatesViaSplice(nums1));
console.log(removeDuplicatesViaSplice(nums2));

