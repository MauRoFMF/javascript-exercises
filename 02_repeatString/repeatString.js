const repeatString = function (string, num) {
  if (num === 0) {
    return "";
  } else if (num < 0) {
    return "ERROR";
  }
  let remainString = string;
  for (let i = 1; i < num; i++) {
    remainString = string + remainString;
  }
  return remainString;
};

// Do not edit below this line
module.exports = repeatString;
