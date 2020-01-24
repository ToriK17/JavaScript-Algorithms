// There are three types of edits that can be preformed on strings: insert a character, remove a character, or replace a character. 
// Given two strings, write a function to check if they are one edit or zero edits) away. 
// EXAMPLE
/*  pale, ple -> true
    pales, pale -> true
    pale, bale -> true
    pale, bake -> false
*/

function oneAway(string1, string2) {
  let differences = 0;
  let arrayOne = string1.split('').sort();
  let arrayTwo = string2.split('').sort();

  for (let i = 0; i < arrayOne.length; i++) {
    if (arrayOne.includes(arrayTwo[i])) {
      differences += 0;     
    } else {
      differences += 1;
    }
  }
  if (differences > 1) {
    console.log('false');
  } else if ((arrayOne.length !== arrayTwo.length) && differences < 1 ) {
    console.log('true');
  } else {
    console.log('true');
  }
  

  
}


// if lengths are the same:
// like permutations check each character is the same and if not increase differences count by one

// then dependent on the differences value return oneAway true or false

// case 1 
// remove a character case or add a character
// compare lengths, if different you're only allowed one different otherwise they must be identical
oneAway('pale', 'ple');
oneAway('pales', 'pale');

// case 2 
// same length but one character is different. 
oneAway('pale', 'bale');
oneAway('pale', 'bake');
