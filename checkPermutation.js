// Write a function that checks whether two given strings are Permutations of each other or not. A permutation of a string is another string that contains the same characters, only the order of the characters can be different. example: "abcd" and "dcba" are permutations of each other. 

function checkPermutation(string1, string2) {
  let arrayOne = string1.split('').sort();
  let arrayTwo = string2.split('').sort();
  let check = false; 
 
  for (let i = 0; i < arrayOne.length; i++) {
    if (arrayOne[i] !== arrayTwo[i]) {
      check = false;
    } else {
      check = true;
    }
  }
  console.log(check);
}

checkPermutation("apples", "bananas");
checkPermutation("abcde", "edcba");
// learned that .sort() works alphabetically