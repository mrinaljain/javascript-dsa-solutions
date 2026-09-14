// 1
// 2 3
// 3 4 5
// 4 5 6 7


function makeNumberTriangle(n) {


    // outer loop for number of rows
    for (let i = 1; i <= n; i++) {

        let row = "";
        // inner loop for  every column and printing 
        let counter = i;
        for (let j = 1; j <= i; j++) {

                row = row + counter + " ";
                counter++;

        }

        console.log(row);

    }
    
}
// Time Complexity : 

makeNumberTriangle(5);