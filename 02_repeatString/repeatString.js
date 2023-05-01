const repeatString = function (word, num) {
  let wordRepeat = "";
  if (num < 0) {
    return "ERROR";
  } else {
    for (let i = 0; i < num; i++) {
      wordRepeat += word;
    }
    return wordRepeat;
  }
};

// Do not edit below this line
module.exports = repeatString;
