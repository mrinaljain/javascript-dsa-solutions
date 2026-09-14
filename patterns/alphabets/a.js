// let lines = 5
//  * 
// * *
// ***
// * *
// * *



let lines = 20;
//  **** 
// *    *
// *    *
// *    *
// *    *
// ******
// *    *
// *    *
// *    *
// *    *


// first line  only print column so we need one loop only

let firstRowlength = Math.floor(lines / 2) + 1;

let firstRow = "";
for (let i = 1; i <= firstRowlength; i++) {
    if (i == 1 || i == firstRowlength) {
        firstRow += " ";
    } else{
    firstRow += "*";
    }
}

console.log(firstRow);
let   rowWidth =  Math.floor(lines/2)  + 1;
// second to last row
for(let rowNumber =1; rowNumber<= lines-1; rowNumber++){
    let remainingRows = "";
// columns inside each row
    for(let j = 1; j<= rowWidth; j++){

        if(j == 1 || j == rowWidth || rowNumber == Math.floor(lines/2)){
            remainingRows += "*";
        }
        else{
            remainingRows += " ";
        }
    }

    console.log(remainingRows);
    
}


