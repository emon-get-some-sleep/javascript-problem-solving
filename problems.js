// in this function we will reverse the input string
const reverseString = text => {
    const textLength = text.length; // calculating length of the string so that we could loop from the end
    let newText = ''; // here we will store the reveresed text
    for(let i = textLength - 1; i >= 0; i--){
       newText += text[i];
    }
    return newText; // returning the reveresd string
}

// console.log(reverseString('hello world'));


// In this function we will take an array and only return the sum of all positive integers
const sumPositive = arr => {
    let sum = 0; // here we will store the value of all positive integers
    for(let i of arr){
       if(i >= 0) {
        sum += i;
       }

    }
    return sum;
}   

// console.log(sumPositive([2, -5, 10, -3, 7]));

// task 3 lets find the most frequent  number in an array 

const findFrequent = arr => {
    // first we will store all the numbers in a key value pair
    const storeNumber = {};
    for(let i of arr){
        if(storeNumber[i] == undefined){
            storeNumber[i] = 1;
        }
        else {
            storeNumber[i]++;
        }
    }

    // now let's find the most frequent number
    let result;
    let mostFrequentNumber = 0;
    for(let i in storeNumber){
        if(storeNumber[i] > mostFrequentNumber){
            mostFrequentNumber = storeNumber[i];
            result = i;
        }
    }
    return result;
}

// console.log(findFrequent([3, 5, 2, 5, 3, 3, 1, 4, 5]));


// task 4 : find the two indices of a target number 

const findIndices = (arr, target) => {
    
        for(let i = 0; i < arr.length; i++){
            for(let j = 1; j < arr.length; j++){
                if(arr[i] + arr[j] == target){
                    return [i, j]
                }
            }
        }
    
}

console.log(findIndices([1, 3, 6, 8, 11, 15], 11));