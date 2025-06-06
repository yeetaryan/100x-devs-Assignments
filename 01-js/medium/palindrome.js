/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

let str = prompt("Enter a string:");
str = str.toLowerCase(); // ignore case
let arr = str.split("");

// Compare from front and back
let isPalindrome = true;

for (let i = 0; i < arr.length / 2; i++) {
  if (arr[i] !== arr[arr.length - 1 - i]) {
    isPalindrome = false;
    break;
  }
}

if (isPalindrome) {
  console.log("Yes, it's a palindrome!");
} else {
  console.log("No, it's not a palindrome.");
}

module.exports = isPalindrome;
