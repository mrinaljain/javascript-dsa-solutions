// print the first and last digits of N.

//. 50156
function firstLast(num) {

    let first = 0;
    let last = 0;
    // if num is 0
    if (num === 0) {
        console.log("First: " + 0);
        console.log("Last: " + 0);
        return;

    }


    // directly find last digit by mosdulas
    last = num % 10;


    // rest all cases loop from last to first to find FIRST digit 
    while (num != 0) { // 515 => 51 => 5


        let reminder = num % 10; // 5 => 1 => 5

        num = Math.floor( num / 10); // 51 => 5

        if (num === 0) {
            first = reminder;
        }

    }

    console.log("First: " + first);
    console.log("Last: " + last);

}



firstLast(3454555);
firstLast(95869454555);
firstLast(9);
firstLast(0);


// Time Complexity :   O(N)
// Space Complexity : O(1)