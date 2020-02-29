// Write a function that finds the first element of an array that is not consecutive.
// The array will always have at least 2 elements1 and all elements will be numbers. The numbers will also all be unique and in ascending order. The numbers could be positive or negative and the first non-consecutive could be either too.

firstNonConsecutive([1,2,3]);
firstNonConsecutive([1,2,3,4,6,7,8]);

function firstNonConsecutive(arr) {
  let i = 0;
  let n = arr[0];
  while (i < arr.length) {
    if (arr[i + 1] === arr[i] + 1 ) {
      i += 1;
    } else if (arr[i + 1] === arr[-1]) {
      console.log(null);
      break;
    } else {
      console.log(arr[i + 1]);
      break;
    }

  }
}