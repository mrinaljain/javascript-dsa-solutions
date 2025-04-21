/*
You are given an array arr of positive integers. Your task is to find all the leaders in the array. An element is considered a leader if it is greater than or equal to all elements to its right. The rightmost element is always a leader.
*/
/**
 * @param {number[]} a
 * @returns {number[]}
 */
let arr1 = [16, 17, 4, 3, 5, 2];
let arr2 = [10, 4, 2, 4, 1];
let arr3 = [5, 10, 20, 40];
let arr4 = [30, 10, 10, 5];

const leaders = (a) => {
let length = a.length;
let leaderArr = [];
let currentLeader = a[length-1];
// start loop from end and remember the last leader
leaderArr.push(currentLeader);
for (let i = a.length - 2; i >=0; i--) {
   const currentElement = a[i];
   if(currentElement >= currentLeader){
      leaderArr.unshift(currentElement);
      currentLeader = currentElement;
   }
}
return leaderArr;

};

console.log(leaders(arr1));
console.log(leaders(arr2));
console.log(leaders(arr3));
console.log(leaders(arr4));


//? 1. Brute force  TC: O(N2)
/*
for every number  run a second loop on remaining numbers on right.
and figure out if the number is leader or not
*/


//? 2. Optimal approach TC: O(N) ,  SC: O(1)
/*
Intution is to loop from end so that we can use the current leader to find the next leader.
- matlab end se loop start karo , end vala nuber to leader hai hi
- jese jese pich badhte jayenge if numbe is greater then current leader then it will become next leader, otherwise continue.
*/