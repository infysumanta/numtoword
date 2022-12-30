#!/usr/bin/env node
const argument = process.argv;
const { isNumber } = require("../lib/util");
const numberToWord = require("./../lib/numberToWord");

/* This is a self invoking function. */
(() => {
  const number = argument[2];
  /* This is a validation check to make sure that the user has entered a valid number. */
  if (!isNumber(number)) {
    console.log("Please enter a valid Number.");
    process.exit(0);
  }
  /* This is a function call to the numberToWord function. */
  numberToWord(number);
})();
