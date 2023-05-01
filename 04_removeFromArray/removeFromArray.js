const removeFromArray = function (arrItems, ...args) {
  return arrItems.filter((item) => !args.includes(item));
};

// Do not edit below this line
module.exports = removeFromArray;
