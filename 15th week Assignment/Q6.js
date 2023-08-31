const reverseString = (inputString) => {
    const reversedString = inputString.split('').reverse().join('');
    return reversedString;
  };
  console.log(reverseString("Hello, world!")); 
  
  
  // Outputs: "!dlrow ,olleH"
  