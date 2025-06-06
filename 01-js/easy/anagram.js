/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function arraysAreEqual(arr1, arr2) {
  if (arr1.length !== arr2.length) return false;
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) return false;
  }
  return true;
}

function isAnagram(str1, str2) {
  const charArray1 = str1.toLowerCase().split("").sort();
  const charArray2 = str2.toLowerCase().split("").sort();

  return arraysAreEqual(charArray1, charArray2);
}


module.exports = isAnagram;
