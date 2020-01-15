// Write a method to replace all spaces in a string with '%20'. You may assume that the string has sufficient space at the end to hold the additional characters, and that you are given the 'true' length of the string.
// UppityVirus: Example: Input: "Mr John Smith"
// Output: "Mr%20John%20Smith"

function URLify(string) {
  let newString = string.replace(/\s/g, '%20');
  console.log(newString);
}

URLify("Mr John Smith");
// This will use a RegEx, the \s is what targets white spaces, the g flag will tell JavaScript to replace it multiple times. 

