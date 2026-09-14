// A A A A A 
// B B B B 
// C C C 
// D D 
// E

let n = 5;



for(let i = n ; i>= 1; i--){
    let row = " "; 

    for(let j = 1; j <= i ; j++){

        row += String.fromCharCode(65 + n-i ); // 65 is the code for A
        row += " ";
    }
    console.log(row);
    
}