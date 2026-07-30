

var num = 1234567890;

function countDigits(n) {

    // divide by 10 
    // update the count 
    var count = 0;
    while (n !=0) {
        n = Math.trunc(n / 10);
        count++;
    }
    console.log("Count:" + count);
    

};


countDigits(num);