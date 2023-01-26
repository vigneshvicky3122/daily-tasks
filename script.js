let arrayList = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22,
  23, 24, 25, 26, 27, 28, 29, 30,
];
// 3/a Print odd numbers in an array
let numbers = (array) => {
  for (let index = 1; index < array.length; index += 2) {
    console.log(index);
  }
};
numbers(arrayList);
// 3/b Convert all the strings to title caps in a string array
let stringList = ["vicky", "wikky", "vignesh", "abi", "john"];
let string = (array) => {
  for (let index = 0; index < array.length; index++) {
    const element = array[index];
    console.log(element.toUpperCase());
  }
};
string(stringList);
// 3/c Sum of all numbers in an array
let sumOfAllNumbers = (array) => {
  let sum = 0;
  for (let index = 0; index < array.length; index++) {
    sum += array[index];
  }
  return sum;
};
console.log(sumOfAllNumbers(arrayList));
// 3/d Return all the prime numbers in an array
let result = [];
let getRes = (array) => {
  for (let index = 2; index < array; index++) {
    if (array % index === 0) {
      return false;
    }
    return true;
  }
};
arrayList.forEach((element) => {
  const items = getRes(element);
  if (items) {
    result.push(element);
  }
});
console.log(result);

// 3/e Return all the palindromes in an array
let Palindromes = [
  "madam",
  "wikky",
  "vignesh",
  "abi",
  "mam",
  "john",
  "dad",
  "mum",
  "sis",
  "vicky",
];
let palindromeFnc = (array) => {
  let result = [];
  for (let index = 0; index < array.length; index++) {
    const element = array[index];
    let arrayValues = element.split("");
    const reverseArrayValues = arrayValues.reverse();
    const reverseString = reverseArrayValues.join("");
    if (array[index] === reverseString) {
      result.push(reverseString);
    }
  }
  return result;
};
console.log(palindromeFnc(Palindromes));
