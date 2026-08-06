//Search for an element in the given array
// if element found then return the index of the element and if not found then return -1.

const searchElement = function (arr, element) {
  for (let i = 0; i < arr.length; i++) {
    const item = arr[i];
    if (item == element) {
      return i;
    }
  }
  return -1;
}


let numbers = [2,4,56,4,5,6,44,67];

let answer = searchElement(numbers, 5);

console.log(answer);
