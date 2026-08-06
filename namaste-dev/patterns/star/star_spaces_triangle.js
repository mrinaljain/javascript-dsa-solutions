let  n = 5
// * _ _ _ _ *
// * _ _ _ *
// * _ _ *
// * _ *
// **


// Intution
// row = n
// spaces = n - row_number
// star : start aur end mai



for(let i = 1; i<= n; i++){
    let row = "";

    
    row += " * ";
    for(let j = 1; j<= n-i; j++){
        row += " _ "
    }
    row += " * ";

console.log(row);

}