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