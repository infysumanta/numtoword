/**
 * It returns true if the argument is a number or a string that can be converted to a number, and false
 * otherwise.
 * @param number - The number to be checked.
 * @returns A function that takes a number as an argument and returns a boolean.
 */
const isNumber = (number) => {
  return (
    (typeof number === "number" ||
      (typeof number === "string" && number.trim() !== "")) &&
    !isNaN(number)
  );
};

/**
 * It takes a string and removes all commas and spaces from it.
 * @param string - The string to be modified.
 * @returns a string with all commas and spaces removed.
 */
const removeStringAndCommas = (string) => {
  return string.replace(/[, ]/g, "");
};

/**
 * If the number is equal to zero, return true, otherwise return false.
 * @param number - The number to be checked.
 * @returns true
 */
const isNumberZero = (number) => {
  return number === 0 ? true : false;
};

/**
 * Split the sentence into words, capitalize the first letter of each word, and join the words back
 * together.
 * @param sentence - The sentence to be capitalized.
 * @returns the first letter of each word in the sentence capitalized.
 */
const capitalizeEachWord = (sentence) => {
  const words = sentence.split(" ");
  return words
    .map((word) => word[0].toUpperCase() + word.substring(1))
    .join(" ");
};

module.exports = {
  isNumber: isNumber,
  removeStringAndCommas: removeStringAndCommas,
  isNumberZero: isNumberZero,
  capitalizeEachWord: capitalizeEachWord,
};
