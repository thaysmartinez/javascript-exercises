const add = function (a, b) {
  return a + b;
};

const subtract = function (a, b) {
  return a - b;
};

const sum = function (array) {
  return array.reduce((total, current) => (total += current), 0);
};

const multiply = function (array) {
  return array.reduce((total, item) => (total *= item));
};

const power = function (a, b) {
  return a ** b;
};

const factorial = function (a) {
  let total = 1;
  if (a === 0) return 1;
  for (i = a; i >= 1; i--) {
    total *= i;
  }
  return total;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial,
};
