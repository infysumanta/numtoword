const { tens, units, scales } = require("./constant");
const {
  removeStringAndCommas,
  isNumberZero,
  capitalizeEachWord,
} = require("./util");

/**
 * It takes a number and returns the English word for that number.
 * @param number - The number to be converted to words.
 */
const numberToWord = (number) => {
  const fullSentence = convertToString(number);
  console.log(fullSentence);
};

/**
 * Convert a string to a number, then capitalize each word in the string.
 * @param string - The string to be converted.
 * @returns the value of the function capitalizeEachWord.
 */
const convertToString = (number) => {
  const sentence = numberToConvert(number);
  return capitalizeEachWord(sentence);
};

/**
 * It takes a number and converts it to words
 * @param number - The number that is to be converted to words.
 * @returns an object.
 */
const numberToConvert = (number) => {
  let string = number.toString();

  /* Removing commas from the string. */
  string = removeStringAndCommas(string);

  /* Checking if the number is zero. If it is, then it will return the word "zero". */
  if (isNumberZero(parseInt(string))) {
    return "zero";
  }

  let start = string.length;
  let chunks = [];
  let end;

  /* This is a loop that is used to split the number into chunks of 3 digits. */
  while (start > 0) {
    end = start;
    chunks.push(string.slice((start = Math.max(0, start - 3)), end));
  }

  /* Checking if the number is too large to be converted to words. */
  let chunksLen = chunks.length;
  if (chunksLen > scales.length) {
    return "";
  }

  const data = splitTheNumber(chunks, chunksLen);
  return data;
};

/**
 * It takes a number, splits it into chunks of 3 digits, and then converts each chunk into words
 * @param chunks - This is the array of numbers that are split into chunks of 3 digits.
 * @param chunksLen - The length of the chunks array.
 * @returns the words array.
 */
const splitTheNumber = (chunks, chunksLen) => {
  let words = [];
  let chunk;
  let and = "and";
  let word;
  let ints;

  /* This is a loop that is used to split the number into chunks of 3 digits. */
  for (let i = 0; i < chunksLen; i++) {
    chunk = parseInt(chunks[i]);

    if (chunk) {
      /* Taking the string of numbers, splitting it into an array of individual numbers, reversing the
      order of the numbers, and then converting each number to a float. */
      ints = chunks[i].split("").reverse().map(parseFloat);

      /* Checking if the number is between 10 and 19. If it is, then it will add 10 to the number. */
      if (ints[1] === 1) {
        ints[0] += 10;
      }

      /* Checking if the number is greater than 100. If it is, then it will add the word "and"
          to the array. */
      if ((word = scales[i])) {
        words.push(word);
      }

      /* Checking if the number is greater than 100. If it is, then it will add the word "and"
          to the array. */
      if ((word = units[ints[0]])) {
        words.push(word);
      }

      /* Checking if the number is between 10 and 19. If it is, then it will add 10 to the number. */
      if ((word = tens[ints[1]])) {
        words.push(word);
      }

      /* This is checking if the number is greater than 100. If it is, then it will add the word "and"
      to the array. */
      if (ints[0] || ints[1]) {
        if (ints[2] || i + 1 > chunksLen) {
          words.push(and);
        }
      }

      /* Checking if the number is greater than 100. If it is, then it will add the word "and"
      to the array. */
      if ((word = units[ints[2]])) {
        words.push(word + " hundred");
      }
    }
  }

  /* Reversing the array and then joining the array into a string. */
  return words.reverse().join(" ");
};

module.exports = numberToWord;
