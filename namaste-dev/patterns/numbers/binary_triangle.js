// 1
// 1 0
// 1 0 1 0 1
// 1 0 1 0 1 0 1
// 1 0 1 0 1 0 1 0 1



let n  = 7;

for(let i = 1; i <= n; i++){
    let row = "";
    let temp = "0";
    for(let j = 1; j <= i; j++){
       if(j % 2 == 0){
            temp = " 0 ";
       }else{
            temp = " 1 ";
       }

       row += temp;
    }
    console.log(row);
}

// intution: even position pr 0 and odd position pr 1 print hoga.