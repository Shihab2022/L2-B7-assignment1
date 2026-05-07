# Why `any` is Called a “Type Safety Hole” and Why `unknown` is Safer in TypeScript

## Introduction

TypeScript helps developers write safer and more maintainable JavaScript code by adding **static types**.  
However, TypeScript also provides special types like `any` and `unknown` for handling uncertain or unpredictable data.

Many developers call `any` a **"type safety hole"** because it disables TypeScript's safety features.  
On the other hand, `unknown` is considered a safer alternative because it forces developers to check the type before using the value.

In this blog, we will learn:

- Why `any` is dangerous
- Why `unknown` is safer
- What type narrowing means
- How to safely handle unpredictable data

---

# What is `any` in TypeScript?

The `any` type tells TypeScript:

> “Ignore type checking for this value.”

When a variable uses `any`, TypeScript allows **any operation** on it without showing errors.

## Example of `any`

```ts
let value: any = "Hello";

value = 100;
value = true;

console.log(value.toUpperCase()); // No TypeScript error
```

# `unknown` is a safer alternative to `any`.

> “It also accepts any kind of value, but TypeScript does not allow you to use it directly without checking its type first.”

```ts
let value: unknown = "Hello";

console.log(value.toUpperCase());

TypeScript shows an error: `Object is of type unknown`

```

> For fix this error checking type before accessing properties or methods.

```ts
let value: unknown = "Hello";

if (typeof value === "string") {
  console.log(value.toUpperCase());
}
```
