// E E E E E 
// D D D D 
// C C C 
// B B 
// A 


let n = 5;


for(let i = 1; i<=n; i++){

    let row= "";

    for(let j = i; j<=n ; j++){

        row =row + " " +  String.fromCharCode( "A".charCodeAt() + n-i);
    }

    console.log(row );
    
}