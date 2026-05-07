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

//! Problem 4: Get Property

const getProperty = <T, K extends keyof T>(obj: T, key: K): T[K] => {
  return obj[key];
};

const user = { id: 1, name: "John Doe", age: 21 };
const userName = getProperty(user, "name");

// console.log(userName); // Output: "John Doe"

//! Problem 5:

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
// console.log(updatedBook); // Output: { title: "TypeScript Guide", author: "Jane Doe", publishedYear: 2024, isRead: true }

//! Problem 6:
class Person {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
}

class Student extends Person {
  grade: string;

  constructor(name: string, age: number, grade: string) {
    super(name, age);
    this.grade = grade;
  }

  getDetails(): string {
    return `Name: ${this.name}, Age: ${this.age}, Grade: ${this.grade}`;
  }
}

const student = new Student("Alice", 20, "A");
// console.log(student.getDetails());

//! Problem 7:

const getIntersection = (arr1: number[], arr2: number[]): number[] => {
  return arr1.filter((num) => arr2.includes(num));
};

const intersection = getIntersection([1, 2, 6, 3, 4], [3, 4, 5, 6]);
// console.log(intersection); // Output: [3, 4]
