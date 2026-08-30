

// let arr = [-3, -2, 6, 8, 4, 8, 5];
// let arr = [4, 4, 4, 4, 4, 4, 4];
let arr = [4, 4, 4, 4, 33, 4, 4];
let count = 0;
let frequencyOfMax = 0;
let max = arr[0];



for(let i = 0 ; i < arr.length; i++){
    if(arr[i] > max){
        max = arr[i];
        frequencyOfMax = 1 ; // this is to reset the frequency of max
    }else if(arr[i] == max){
        frequencyOfMax++;
    }
}

count = arr.length - frequencyOfMax;
console.log(count);
