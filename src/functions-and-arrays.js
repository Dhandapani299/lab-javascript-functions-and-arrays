// Progression #1: Greatest of the two numbers
function greatestOfTwoNumbers(number1, number2) {
  if (number1 > number2) {
    return number1;
  } else if (number1 < number2) {
    return number2;
  } else {
    return number1, number2;
  }
}

// Progression #2: The lengthy word
const words = [
  "mystery",
  "brother",
  "aviator",
  "crocodile",
  "pearl",
  "orchard",
  "crackpot",
];
function findScaryWord(words) {
  if (!words.length) {
    //returning null when empty array is passed
    return null;
  }
  let i,
    maxlen = 0,
    index = -1; //maxlen holds length of lengthy word
  //index holds index of lengthy word.
  for (i = 0; i < words.length; i++) {
    //itrerating through array
    if (maxlen < words[i].length) {
      maxlen = words[i].length; //storing current maximum length
      index = i; //storing index of current max length word
    }
  }
  return words[index]; //returning lenghty word
}
// Progression #3: Net Price
const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];
function netPrice(numbers) {
  let i,
    sum = 0;
  for (i = 0; i < numbers.length; i++) {
    //iterating over all the words
    sum = sum + numbers[i]; //summing them in sum variable
  }
  return sum;
}

// Progression #4: Calculate the average
// Progression 4.1: Array of numbers
const numbersAvg = [2, 6, 9, 10, 7, 4, 1, 9];

function midPointOfLevels(numbersAvg) {
  if (!numbersAvg.length) {
    // returning null for empty array
    return null;
  }
  let sum = sum + numbersAvg; //using add function for summing numbers
  return sum / numbersAvg.length; //returning average
}
// Progression 4.2: Array of strings

const wordsArr = [
  "seat",
  "correspond",
  "linen",
  "motif",
  "hole",
  "smell",
  "smart",
  "chaos",
  "fuel",
  "palace",
];
var array = wordsArr;
function averageWordLength(array) {
  if (!array.length) {
    // returning null for empty array
    return null;
  }
  let sum = add(array); //using add function for adding string length.
  return sum / array.length; //returning average length.
}
// Progression #5: Unique arrays
const wordsUnique = [
  "bread",
  "jam",
  "milk",
  "egg",
  "flour",
  "oil",
  "rice",
  "coffee powder",
  "sugar",
  "salt",
  "egg",
  "flour",
];

//removes element at given index from array
function removeElement(index, array) {
  for (let i = index; i < array.length - 1; i++) {
    array[i] = array[i + 1]; //shifting to left to override element
  }
  array.pop(); //reducing size of array
}

//removes duplicate
function uniqueArray(words) {
  if (!words.length) {
    // returning null for empty array
    return null;
  }
  let i = 0,
    index;
  for (i; i < words.length; i++) {
    index = words.indexOf(words[i], i + 1); //searching the duplicates of ith element
    while (index != -1) {
      removeElement(index, words); //removing duplicate
      index = words.indexOf(words[i], i + 1); //searching another occurence
    }
  }
  return words; //returning unique element array
}
// Progression #6: Find elements
const wordsFind = [
  "machine",
  "subset",
  "trouble",
  "starting",
  "matter",
  "eating",
  "truth",
  "disobedience",
];
function searchElement(words, word) {
  for (let i = 0; i < word.length; i++) {
    if (words == word[i]) {
      return true;
    }
  }
  return false;
}

// Progression #7: Count repetition
const wordsCount = [
  "machine",
  "matter",
  "subset",
  "trouble",
  "starting",
  "matter",
  "eating",
  "matter",
  "truth",
  "disobedience",
  "matter",
];

function howManyTimesElementRepeated(words, search) {
  var count = 0;

  for (let i = 0; i < words.length; i++) {
    if (search == words[i]) {
      count++;
    }
  }
  return count;
}

// Progression #8: Bonus

const matrix = [
  [08, 02, 22, 97, 38, 15, 00, 40, 00, 75],
  [49, 49, 99, 40, 17, 81, 18, 57, 60, 87],
  [81, 49, 31, 73, 55, 79, 14, 29, 93, 71],
  [52, 70, 95, 23, 04, 60, 11, 42, 69, 24],
  [22, 31, 16, 71, 51, 67, 63, 89, 41, 92],
  [24, 47, 32, 60, 99, 03, 45, 02, 44, 75],
  [32, 98, 81, 28, 64, 23, 67, 10, 26, 38],
  [67, 26, 20, 68, 02, 62, 12, 20, 95, 63],
  [24, 55, 58, 05, 66, 73, 99, 26, 97, 17],
  [21, 36, 23, 09, 75, 00, 76, 44, 20, 45],
];
function maximumProduct(matrix) {}
