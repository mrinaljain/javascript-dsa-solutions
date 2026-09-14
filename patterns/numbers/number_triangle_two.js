let n = 5;
// 1
// 2 3
// 4 5 6
// 7 8 9 10
// 11 12 13 14 15



//  rows = n 
// column  ka loop row number times chalega
// pring continusly ek variable hota rahega + hote hote


let count = 1;
for(let i = 1; i<=n; i++){
    let row = "";
    
    for(let j = 1 ; j<= i; j++){
        row += count++;

    }

    console.log(row);
    

}

