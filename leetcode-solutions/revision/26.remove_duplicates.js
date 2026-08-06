let nums1 = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];
let nums2 = [1, 1, 2];


function removeDuplicates(arr) {


    // outer loop for array 
    for (let i = 0; i < arr.length; i++) {
        let current = arr[i];
    
        // inner loop for repeating value
        for (let j = i+1 ; j < arr.length; j++) {
            let next = arr[j];

            if(current === next){
                arr.splice(next, 1);
                arr.push("_");
            }else{
                continue;
            }

         }

    }
}