# Mastering Conditional Statements in JavaScript: The Complete Guide

Conditional statements are the backbone of decision-making in programming. They allow your application to execute different paths of code based on conditions, inputs, or states.

In this guide, we will cover everything you need to know about decision-making in JavaScript: from basic `if...else` blocks to switch statements, ternary operators, truthy/falsy logic, and short-circuit evaluation.

---

## 1. Truthy vs. Falsy Values

Before working with conditions, it is essential to understand how JavaScript evaluates expressions to booleans.

In JavaScript, every value is inherently either **truthy** or **falsy** when evaluated in a boolean context.

### Falsy Values (Only 8 in JS)
1. `false`
2. `0`, `-0`, `0n` (BigInt zero)
3. `""` (empty string)
4. `null`
5. `undefined`
6. `NaN` (Not-a-Number)
7. `document.all` (legacy browser quirk)

Everything else—including empty arrays `[]`, empty objects `{}`, and strings with spaces `" "`—evaluates to **truthy**.

---

## 2. Comparison & Logical Operators

Conditional statements rely on comparison and logical operators to evaluate tests:

| Operator | Meaning | Example | Result |
| :--- | :--- | :--- | :--- |
| `===` | Strict Equality (value & type) | `5 === "5"` | `false` |
| `!==` | Strict Inequality | `5 !== "5"` | `true` |
| `==` | Loose Equality (performs type coercion) | `5 == "5"` | `true` *(avoid using)* |
| `!=` | Loose Inequality | `5 != 5` | `false` |
| `>`, `<` | Greater than / Less than | `10 > 5` | `true` |
| `>=`, `<=`| Greater/Equal, Less/Equal | `10 >= 10` | `true` |
| `&&` | Logical AND | `true && false` | `false` |
| `\|\|` | Logical OR | `true \|\| false` | `true` |
| `!` | Logical NOT | `!true` | `false` |

> **Best Practice:** Always use strict comparison (`===` and `!==`) to prevent hidden type-coercion bugs.

---

## 3. The `if`, `else if`, and `else` Statements

The primary tool for conditional branching.

### Syntax & Basic Usage

```javascript
let score = 85;

if (score >= 90) {
    console.log("Grade: A");
} else if (score >= 75) {
    console.log("Grade: B"); // Executes this block
} else if (score >= 50) {
    console.log("Grade: C");
} else {
    console.log("Grade: F");
}
```

* **`if`**: Executes the block if the condition evaluates to `true`.
* **`else if`**: Checks subsequent conditions if earlier ones fail.
* **`else`**: The fallback block executed if no condition evaluates to `true`.

---

## 4. Nested Conditions

You can nest `if` statements inside one another when checks depend on prior conditions:

```javascript
const userLoggedIn = true;
const hasPremium = false;

if (userLoggedIn) {
    if (hasPremium) {
        console.log("Accessing full video library.");
    } else {
        console.log("Accessing free video library.");
    }
} else {
    console.log("Please log in first.");
}
```

> **Pro Tip (Guard Clauses):** Avoid deeply nested `if` statements ("Pyramid of Doom"). Use early returns to keep code flat and readable.

---

## 5. The Ternary Operator (`condition ? expr1 : expr2`)

The ternary operator provides a clean one-line shorthand for an `if...else` statement that returns a value.

### Syntax
```javascript
condition ? expressionIfTrue : expressionIfFalse;
```

### Example
```javascript
const age = 19;
const status = age >= 18 ? "Adult" : "Minor";

console.log(status); // "Adult"
```

### Nested Ternary (Use Sparingly)
```javascript
const marks = 80;
const grade = marks > 90 ? "A" : marks > 70 ? "B" : "C";
```
*Tip: If nested ternaries exceed two levels, use `if...else` or `switch` for better readability.*

---

## 6. The `switch` Statement

The `switch` statement evaluates an expression and matches it against one or more `case` clauses using strict equality (`===`). It is best suited for scenarios where a single variable can match multiple discrete values.

### Syntax
```javascript
const role = "editor";

switch (role) {
    case "admin":
        console.log("Full system access");
        break;
    case "editor":
        console.log("Can edit and publish content"); // Match found
        break;
    case "viewer":
        console.log("Read-only access");
        break;
    default:
        console.log("Unknown role");
        break;
}
```

### The `break` Statement & Fall-through
* Omitting `break` causes execution to **fall through** to the next `case`, regardless of whether the next condition matches.
* You can intentionally use fall-through to group multiple cases:

```javascript
const fruit = "apple";

switch (fruit) {
    case "apple":
    case "banana":
    case "orange":
        console.log("Common fruit");
        break;
    case "dragonfruit":
        console.log("Exotic fruit");
        break;
    default:
        console.log("Uncategorized");
}
```

---

## 7. Short-Circuit Evaluation (`&&`, `||`, `??`)

Logical operators in JavaScript can be used to execute conditional logic or assign fallback values cleanly.

### Logical AND (`&&`)
Returns the first falsy operand, or the last operand if all are truthy:
```javascript
const isRegistered = true;
isRegistered && console.log("Welcome back!"); // Runs only if isRegistered is true
```

### Logical OR (`||`)
Returns the first truthy operand:
```javascript
let userInput = "";
let displayName = userInput || "Guest";
console.log(displayName); // "Guest" (since "" is falsy)
```

### Nullish Coalescing Operator (`??`)
Unlike `||`, which triggers on any falsy value (like `0` or `""`), `??` **only** triggers if the value is strictly `null` or `undefined`.

```javascript
let userCount = 0;

let val1 = userCount || 10;
console.log(val1); // 10 (treats 0 as falsy - often unwanted!)

let val2 = userCount ?? 10;
console.log(val2); // 0 (correctly preserves 0)
```

---

## Summary Cheat Sheet

| Conditional Pattern | Best Used For |
| :--- | :--- |
| **`if...else`** | Ranges, complex boolean expressions, multiple independent conditions |
| **`switch`** | Matching a single variable against discrete constant values |
| **Ternary (`? :`)** | Inline assignments and quick binary returns |
| **Short-Circuit (`&&` / `\|\|`)** | Conditional function calls or default fallback values |
| **Nullish Coalescing (`??`)** | Safe defaults where `0` or `""` are valid data values |