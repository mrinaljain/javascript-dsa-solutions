/*
You are given an n x n 2D matrix representing an image, rotate the image by 90 degrees (clockwise).

You have to rotate the image in-place, which means you have to modify the input 2D matrix directly. DO NOT allocate another 2D matrix and do the rotation.
*/
/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */

const matrix1 = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

const matrix2 = [
  [5, 1, 9, 11],
  [2, 4, 8, 10],
  [13, 3, 6, 7],
  [15, 14, 12, 16],
];

 function swap(mat , i , j){
   let temp = mat[i][j];
   mat[i][j] = mat[j][i];
   mat[j][i] = temp; 
 }
var rotate = function (matrix) {
  //[Transpose] row ko coloum aur column ko row bna do
  // har row ko reverse kr do

  let row = matrix.length;
  let col = matrix[0].length;
  console.log("row", row);
  console.log("columns", col);

  for (let i = 0; i < row; i++) {
    for (let j = i+1; j < col; j++) {
      // if (i < j) {
        // swap ij with ji
        swap(matrix, i, j);
      //   [(matrix[i][j], matrix[j][i])] = [matrix[j][i], matrix[i][j]];
      // }
    }
  }
  //   after transpose , now reverse rows

  for (let i = 0; i < row; i++) {
    let start = 0;
    let end = row-1;
    while (start < end) {
      [matrix[i][start], matrix[i][end]] = [matrix[i][end], matrix[i][start]];
      start++;
      end--;
    }
  }

  console.log(matrix);
};

rotate(matrix1);
rotate(matrix2);


//? 1. Brute Force
/*
run a loop and add elelemts ro new array in reverse order
*/

//? 2. Better
/*
pehle transpose karo [row se col and col se row]
phir har row ko reverse kr do.

*/


//? 3. Optimal 
/*
transpose of optimised way mai karo  [ only iterate single half]
aur reverse ko optimised way mai karo

*/