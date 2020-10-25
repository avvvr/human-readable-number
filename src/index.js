module.exports = function toReadable(number) {
  const num = {
    0: "zero",
    1: "one",
    2: "two",
    3: "three",
    4: "four",
    5: "five",
    6: "six",
    7: "seven",
    8: "eight",
    9: "nine",
    10: "ten",
    11: "eleven",
    12: "twelve",
    13: "thirteen",
    14: "fourteen",
    15: "fifteen",
    16: "sixteen",
    17: "seventeen",
    18: "eighteen",
    19: "nineteen",
    20: "twenty",
    30: "thirty",
    40: "forty",
    50: "fifty",
    60: "sixty",
    70: "seventy",
    80: "eighty",
    90: "ninety",
  };

  let digitsCount = number.toString().length;
  let digitsArray = number.toString().split("");

  if (digitsCount === 1) {
    return num[number];
  } else if (digitsCount === 2) {
    if (num[number]) {
      return num[number];
    } else {
      return `${num[digitsArray[0] + "0"]} ${num[digitsArray[1]]}`;
    }
  } else if (digitsCount === 3) {
    if (digitsArray[1] == 0 && digitsArray[2] == 0) {
      return `${num[digitsArray[0]]} hundred`;
    } else if (num[digitsArray[1] + digitsArray[2]]) {
      return `${num[digitsArray[0]]} hundred ${num[digitsArray[1]+digitsArray[2]]}`;
    } 
    else if(digitsArray[1] == 0){
      return `${num[digitsArray[0]]} hundred ${num[digitsArray[2]]}`
    }
    else {
      return `${num[digitsArray[0]]} hundred ${num[digitsArray[1]+'0']} ${num[digitsArray[2]]}`;
    }
  }
};
