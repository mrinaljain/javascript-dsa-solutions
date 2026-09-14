// 1 2 3 4 5 6 7 8 
// 1 2 3 4 5 6 7 
// 1 2 3 4 5 6 
// 1 2 3 4 5 
// 1 2 3 4 
// 1 2 3 
// 1 2 
// 1 

let n = 8;


// rows
for (let i= n; i >=1 ; i--){

    let row = "";
    // column
    for(let j = 1; j <= i; j++){
        row += j + " ";
    };

    console.log(row);
}