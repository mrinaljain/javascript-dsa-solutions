// A 
// A B 
// A B C 
// A B C D 
// A B C D E 


let n = 6;


for(let i = 1; i<=n; i++){

    let row= '';
    for(let j = 1; j<=i; j++){

        row += String.fromCharCode('A'.charCodeAt() + j -1 );
        row += " ";
    }

    console.log(row);
    
}