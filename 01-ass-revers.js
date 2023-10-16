// Reverse String.

function reverseString(input) {
    return input.split('').reverse().join('');
}

const input = "Pratik Gondkar";
setTimeout(() => {
    const reversedString = reverseString(input);
    console.log(reversedString); 
}, 2000 );
