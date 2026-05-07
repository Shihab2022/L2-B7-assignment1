# Understanding Generics in TypeScript: Building Reusable and Strictly Typed Code

## Introduction

One of the most powerful features of TypeScript is **Generics**.

Generics allow developers to create reusable components, functions, and classes that work with different data types while still maintaining strong type safety.

# What Are Generics?

Generics are a way to create reusable code that can work with different types.

Instead of hardcoding a specific type, we use a placeholder type variable like `T`.

## Basic Syntax

```ts id="qprtmz"
function identity<T>(value: T): T {
  return value;
}
```

# How ts maintain strict typing

The most crucial step is setting "strict": true in your tsconfig.json file. This acts as a master switch for a suite of type-checking rules, including noImplicitAny, strictNullChecks, and strictFunctionTypes

```ts
{
  "compilerOptions": {
    "strict": true
  }
}

```

# How to use ts Generics in functions, interfaces, and classes those topic

Generics allow functions to capture the type of their arguments so they can use that exact same type for the return value or other logic

```ts
// use on the function

function identity<T>(arg: T): T {
  return arg;
}

let output = identity<string>("hello");

let num = identity(42);

// use on interface

interface Box<T> {
  content: T;
}

const stringBox: Box<string> = { content: "Books" };
const numberBox: Box<number> = { content: 100 };

//use on class

class DataStore<T> {
  private items: T[] = [];

  addItem(item: T): void {
    this.items.push(item);
  }

  getAll(): T[] {
    return this.items;
  }
}

const userStore = new DataStore<string>();
userStore.addItem("Alice");
```
