const palindromes = function (text) {
  // Get string as argument
  // transform all letters to lowercase
  const lowerText = text.toLowerCase();
  // Ignore (remove?) punctuations and spaces
  const removed = lowerText.replace(/[^a-z0-9]/gi, '');
  // split string and store it into array variable
  const arr = removed.split('');
  // Get array length and store it in variable
  const arrLength = arr.length;
  // store Math.trunc(array.length/2) in variable
  const splitIndex = Math.trunc(arrLength / 2);

  // Slice array:
  //    prefixArray = array.split(0, splitIndex)
  const prefixArray = arr.slice(0, splitIndex);
  // if splitIndex is even = suffixArray.split(splitIndex)
  // else suffixArray.split(splitIndex + 1)
  //    reverse prefix array
  const suffixArray =
    arrLength % 2 === 0
      ? arr.slice(splitIndex).reverse()
      : arr.slice(splitIndex + 1).reverse();

  // compare both arrays using arr.every() method
  const isPalindrome = (arr1, arr2) =>
    arr1.every((value, index) => value === arr2[index]);
  //    const arraysEqual = (arr1, arr2) => arr1.every((value, index) => value === arr2[index]);
  return isPalindrome(prefixArray, suffixArray);
};

// Do not edit below this line
module.exports = palindromes;
