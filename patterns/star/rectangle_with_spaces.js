// * *.     n=1

// * _ *.   n=2
// * _ *

// * _ _ *  n = 3
// * _ _ *
// * _ _ *


// intution 
// number of rows is equal to n
// number of column = n+1
// number of spaces is  n-1
// start and end is star [ ie : first index and n+1 th index]


let n = 1;


for(let i=1; i<=n; i++){

    let row="";
    for(let j=1 ; j<= n+1;j++){
        if(j == 1 || j== n+1){
            row += "*";
        }else{
            row += " _ "; 
        }

    }

    console.log(row);
    
}