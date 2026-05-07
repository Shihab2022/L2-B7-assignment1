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

//! Write a generic function getProperty that takes an object and a key, then returns the value of that key. Use constraints to ensure the key exists on the object.

const getProperty = <T, K extends keyof T>(obj: T, key: K): T[K] => {
  return obj[key];
};

const user = { id: 1, name: "John Doe", age: 21 };
const userName = getProperty(user, "name");

// console.log(userName); // Output: "John Doe"

//! Define an interface Book with properties title, author, and publishedYear. Create a function toggleReadStatus that accepts a Book object and returns a new object with an added isRead property (boolean), defaulting to true.

interface Book {
  title: string;
  author: string;
  publishedYear: number;
}

const toggleReadStatus = (book: Book): Book & { isRead?: boolean } => {
  return { ...book, isRead: true };
};

const myBook = {
  title: "TypeScript Guide",
  author: "Jane Doe",
  publishedYear: 2024,
};
const updatedBook = toggleReadStatus(myBook);
console.log(updatedBook); // Output: { title: "TypeScript Guide", author: "Jane Doe", publishedYear: 2024, isRead: true }
