const filterEvenNumbers = (arr: number[]): number[] => {
  return arr.filter((num) => num % 2 === 0);
};

const evenNumbers = filterEvenNumbers([
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -4, -2, 0,
]);
// console.log(evenNumbers); // Output: [2, 4, 6]

const reverseString = (str: string): string => {
  return str.split("").reverse().join("");
};

const reversed = reverseString("typescript");
// console.log(reversed); // Output: "tpircsepyt"
