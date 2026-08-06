


function isPalindrome(n) {
    if (n < 0){
        return false;
    }
    // go through each number using while loop
    // create 2 strings on the fly 
    let str1 = "";
    let str2 = "";
    while (n != 0) {

        let reminder = n % 10;
        
        str1 = str1 + reminder;
        str2 = reminder + str2;

        n = Math.floor( n / 10);
    }

    return str1 === str2;

}

console.log(isPalindrome(1234321));
console.log(isPalindrome(-12456721));
console.log(isPalindrome(1));


// Intution :   loop through all the numbers and during that process create 2 strings  from both directions 
// compare both stings  for equaility




// --------------------------  Second MEthod-------------------------------------


function isPalondromeNumber(n){
    let copiedN = n;
    if (n < 0){
        return false;
    }
    let reverse = 0;
    while(n !=0 ){

        let reminder = n % 10;

        reverse = (reverse * 10) + reminder ;   //   This is how to create a number 

         n = Math.floor( n / 10);
    }
    return reverse === copiedN;
}

console.log(isPalondromeNumber(1234321));
console.log(isPalondromeNumber(-12456721));
console.log(isPalondromeNumber(1));

// Intution:  here we aare  creating reversed number insted of string