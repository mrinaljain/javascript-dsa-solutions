// A B C D E 
// B C D E 
// C D E 
// D E 
// E 



let n = 5;

let limit = 65 + n;

for(let i = 65; i< limit; i++){

    let row= "";
    for(let j = i; j < limit; j++){
        row = row + " " + String.fromCharCode(j); 
    }
    console.log(row);
}