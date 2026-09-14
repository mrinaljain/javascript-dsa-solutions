// A 
// B A 
// C B A 
// D C B A 
// E D C B A 



let n = 6;


for(let i = 1; i <= n; i++){

    let row = "";
    for(let j = i; j >= 1; j--){

        row += String.fromCharCode(65 + j - 1);
        row += " ";
    }

    console.log(row);
    
}