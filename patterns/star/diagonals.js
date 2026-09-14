    // *******
    // **   **
    // * * * *
    // *  *  *
    // * * * *
    // **   **
    // *******
  // n will be odd

    let n = 7;



    for(let i = 0 ; i<n; i++){
        let row = "";
        for(let j = 0 ; j<n ; j++){

            if(i == 0 || i == n-1 || j == 0 || j == n-1 || i == j || i+j == n-1){

                row+= " * ";
            } else{
                row+= "   ";
            }
        }

        console.log(row);
        
    }


    // intution 
    // use the properties of diagonals to find all the cordinates 
    // i == j , i+ j == n 
    // for border of rectangle  i == first row or last row 
    //   j = first col or last col 




