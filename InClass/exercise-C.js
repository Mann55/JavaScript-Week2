function numberChecker(num) {
  if (num > 20) {
    return `${num} is greater than 20`;
  } else if (num === 20) {
    return `${num} is equal to 20`;
  } else if (num < 20) {
    return `${num} is less than 20`;
  } else {
    return `${num} isn't even a number :(`;
  }
}

console.log(numberChecker(25));  // to check the first condition if the number is greater than 20
console.log(numberChecker(20));  // to check if the number is equal to the given number
console.log(numberChecker(18));  // to check if the number is small than to the given number
console.log(numberChecker("hello"));  // to check if the given value is not a number