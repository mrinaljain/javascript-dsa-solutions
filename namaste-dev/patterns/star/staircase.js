// Input : 6
// Output :
// * *
// * *
// * * * *
// * * * *
// * * * * * *
// * * * * * *



// intution : 
// rows =  n
// column/stars : start with 2 starts and increase count by 2  at every  even (divisible by 2 )  row number  




let n = 9;

let starCount = 2;
for(let i= 1; i<= n ; i++){
    
    let row= "   ";

    for(let j = 1; j<= starCount; j++){
        row += " * ";
    }

    if(i % 2 == 0){
        starCount += 2;
    }

    console.log(row);
    

}