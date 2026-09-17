//    ****
//   ****
//  ****
// ****

// inution : find  for each row=> after how many spaces  we are printing N stars 

let n = 5 ;

// based on observation
let col = (2*n) - 1;

for(let i = 1; i<= n; i++){

    let row = "";
    let  startIndex = n-i+1;
    for(let j = 1; j<= col; j++){
        let maxJ = startIndex + n - 1;
        if(j >= startIndex && j <= maxJ){
            row += "*";
        }
        else{
            row += "_";
        }
    }

    console.log(row);
    


}


//. another Intution 
// print spaces then print start for each row

for(let i = 1; i<=n; i++){
    let row = "";
    for(let j = 1; j <= n-i; j++){
        row += "_";
    }
    for(let k = 1; k <=n; k++){
        row += "*";
    }

    console.log(row);
    
}