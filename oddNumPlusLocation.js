// Bob is preparing to pass IQ test. The most frequent task in this test is to find out which one of the given numbers differs from the others. Bob observed that one number usually differs from the others in evenness. Help Bob — to check his answers, he needs a program that among the given numbers finds one that is different in evenness, and return a position of this number.

// Keep in mind that your task is to help Bob solve a real IQ test, which means indexes of the elements start from 1 (not 0)

function iqTest(numbers) {
  let num = numbers.split(/[ ,]+/).map(Number);
  let odd = [];
  let even = [];
  let index = 0;
  
  console.log(num);

  for (let i = 0; i < num.length; i++) {
    if (num[i] % 2 === 0) {
      even.push(num[i]);       
    } else {
      odd.push(num[i]);
    }
  }

  if (even.length > odd.length) {
    console.log(num.indexOf(odd[0]) + 1 );
  } else if ((odd.length > even.length)) {
    console.log(num.indexOf(even[0]) + 1 );
  }
   
}  
  
//added conditional to return index if only one is odd or only one is even 

iqTest("2 4 7 8 10"); // 3
iqTest("1 2 2"); //1
iqTest("88 96 66 51 14 88 2 92 18 72 18 88 20 30 4 82 90 100 24 46"); //4
iqTest("100 99 100");//2
iqTest("5 3 2");//3
iqTest("43 28 1 91");//2
iqTest("20 94 56 50 10 98 52 32 14 22 24 60 4 8 98 46 34 68 82 82 98 90 50 20 78 49 52 94 64 36"); //26
iqTest("79 27 77 57 37 45 27 49 65 33 57 21 71 19 75 85 65 61 23 97 85 9 23 1 9 3 99 77 77 21 79 69 15 37 15 7 93 81 13 89 91 31 45 93 15 97 55 80 85 83");//48
iqTest("100 100 1"); //3
iqTest("9 31 27 93 17 77 75 9 9 53 89 39 51 99 5 1 11 39 27 49 91 17 27 79 81 71 37 75 35 13 93 4 99 55 85 11 23 57 5 43 5 61 15 35 23 91 3 81 99 85 43 37 39 27 5 67 7 33 75 59 13 71 51 27 15 93 51 63 91 53 43 99 25 47 17 71 81 15 53 31 59 83 41 23 73 25 91 9"); //32