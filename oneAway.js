// There are three types of edits that can be preformed on strings: insert a character, remove a character, or replace a character. 
// Given two strings, write a function to check if they are one edit 9or zero edits) away. 
// EXAMPLE
/*  pale, ple -> true
    pales, pale -> true
    pale, bale -> true
    pale, bake -> false
*/

function oneAway(string1, string2) {
  //variable: differences between the strings
  

  // compare lengths, if different you're only allowed one different otherwise they must be identical

  // if lengths are the same:
  // like permutations check each character is the same and if not increase differences count by one

  // then dependent on the differences value return oneAway true or false
}

oneAway('pale', 'ple');