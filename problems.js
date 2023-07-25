const reverseString = text => {
    const textLength = text.length;
    let newText = '';
    for(let i = textLength - 1; i >= 0; i--){
       newText += text[i];
    }
    return newText;
}

console.log(reverseString('hello world'));