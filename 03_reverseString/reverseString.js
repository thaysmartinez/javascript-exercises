const reverseString = function (strOrdered) {
  const strLength = strOrdered.length;
  let arrReversed = [];
  let strReversed;

  for (i = 1; i <= strLength; i++) {
    arrReversed.push(strOrdered.charAt(strLength - i));
  }
  strReversed = arrReversed.toString();
  strReversed = strReversed.replaceAll(",", "");

  return strReversed;
};

// Do not edit below this line
module.exports = reverseString;
