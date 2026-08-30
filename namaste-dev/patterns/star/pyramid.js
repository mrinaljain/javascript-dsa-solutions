//      *
//     * *
//    * * *
//   * * * *
//  * * * * *



let n = 5;



// for rows
for (let i = 1; i <= n ; i++) {
    
    let row = "";
     // for columns spaces 
        for(let j= 1; j<= n-i; j ++){
            row += " ";
        }
    
        // printing stars with space 

        for(let k = 1; k<= 2*i; k++){
            if(k%2 !== 0){
                row += "*";
            }else{
                row+= " "
            }
        }


        console.log(row);
        
}

// Time Complexity :  O(n2)
// Space Complexity :  O(1)

// intution
// rows = n
// spaces = n-row_number
// print star  at every odd index  