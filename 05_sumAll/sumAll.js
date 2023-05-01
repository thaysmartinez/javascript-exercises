const sumAll = function (num1, num2) {
  let sum;
  switch (true) {
    case typeof num1 !== "number":
    case typeof num2 !== "number":
    case num1 < 0:
    case num2 < 0:
      return "ERROR";

    default:
      sum = sumNumbers(num1, num2);
      break;
  }

  function sumNumbers(num1, num2) {
    num1IsHigher = num1 > num2 ? true : false;
    total = 0;

    if (num1IsHigher) {
      for (i = num2; i <= num1 - num2 + 1; i++) {
        total += i;
      }
    } else {
      for (i = num1; i <= num2 - num1 + 1; i++) {
        total += i;
      }
    }

    return total;
  }

  return sum;
};

// Do not edit below this line
module.exports = sumAll;
