// Input : row = 7, column = 7        
// Output:
// *     * * * *
// *     *
// *     *
// * * * * * * *
//       *     *
//       *     *
// * * * *     *


let col = 21;
let row = 21;


let r = Math.floor((row + 1)/2);
let c = Math.floor((col + 1)/2);

for(let i = 1; i<= row; i++){
    let line = "";
    for(let j = 1; j<= col; j++){

        if(i == r || j == c){
            line += " * ";
        }
        else if((i == row && j < c ) || (j == col && i > r) ||(i == 1 && j > c) || (j == 1 && i< r)){
             line += " * ";
        }else{
            line += "   ";
        }
    }

    console.log(line);
    
}