// E 
// D E 
// C D E 
// B C D E 
// A B C D E 


let n = 5;


// for rows
for(let i=1; i<=n; i++){
    let row = ""; 

    // for each column
    for(let j = i; j>=1; j--){

        row +=  String.fromCharCode('A'.charCodeAt() + n -j);
        row += " ";
    }

    console.log(row);
    
}