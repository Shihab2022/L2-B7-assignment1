
//!Problem 1: Filter Even Numbers

const filterEvenNumbers = (arr: number[]): number[] => {
  return arr.filter((num) => num % 2 === 0);
};

const evenNumbers = filterEvenNumbers([
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -4, -2, 0,
]);
// console.log(evenNumbers); // Output: [2, 4, 6]

//!Problem 2: Reverse a String

const reverseString = (str: string): string => {
  return str.split("").reverse().join("");
};

const reversed = reverseString("typescript");
// console.log(reversed); // Output: "tpircsepyt"



//!Problem 3: Check type


type StringOrNumber = string | number;

const checkType = (input: StringOrNumber): string => {
  if (typeof input === "string") {
    return "String";
  } else {
    return "Number";
  }
};

const result1 = checkType("hello");
const result2 = checkType(42);
// console.log(result1); // Output: "String"
// console.log(result2); // Output: "Number"
