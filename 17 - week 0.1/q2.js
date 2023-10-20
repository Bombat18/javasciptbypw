
console.log(multiplyNumbers(5, 7)); //ReferenceError: Cannot access 'multiplyNumbers' before initialization 

const multiplyNumbers = function(num1, num2) {
    return num1 * num2;
};

