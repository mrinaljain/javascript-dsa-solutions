//          *
//        * *
//      * * *
//    * * * *
//  * * * * *


let n = 5;

// rows 
for (let i = 1; i <= n; i++) {
    let row = "";

    // columns
    for(let j = n; j>=1 ; j--){

        if(j <= i){
            row += " * ";
        }else{
            row += "   ";
        }
    }
    console.log(row);
}


// intuition:  focue on  printing spaces alongside stars.
//  row  = n
// col: all spaces untill  colum number reaches equal to row number.