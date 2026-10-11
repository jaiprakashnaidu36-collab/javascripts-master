# Complete Guide to JavaScript Functions: Declarations, Parameters, Scoping, and Expressions

Functions are fundamental building blocks in JavaScript, used to encapsulate reusable blocks of code, execute procedures, and compute return values.

## 1. Function Syntax & Execution Lifecycle

A standard function declaration consists of the `function` keyword, an identifier name, parameter definitions enclosed in parentheses, and a block statement.

```javascript
function name_() {
  console.log("hello\t".repeat(10));
}

// Reference vs Execution:
name_;   // Refers to the function object itself (does not execute)
name_(); // Executes the function call
```

## 2. Parameters, Arguments, and Return Values

* **Parameters** are placeholder variables listed in the function definition.
* **Arguments** are concrete values passed to the function when invoked.
* The `return` keyword sends a value back to the caller and terminates function execution immediately.

```javascript
// Function printing computed output
function sum(number, number2) {
  console.log(number + number2);
}
sum(10, 20); // Output: 30

// Function returning a computed result
function ret(num1, num2) {
  return num1 * num2;
}
const b = ret(10, 10);
console.log(b); // Output: 100
```

### Handling Missing Arguments & Default Logic
If an argument is not provided during invocation, its corresponding parameter evaluates to `undefined`.

```javascript
function fun(username) {
  if (username === undefined) {
    return; // Early exit
  }
  return `${username} is present`;
}

console.log(fun("jai")); // "jai is present"
console.log(fun());      // undefined
```

## 3. The Rest Operator (`...`)

When the exact number of incoming arguments is dynamic or unknown, the **rest operator** (`...`) collects all remaining arguments into a true JavaScript array:

```javascript
function collect(...price) {
  return price;
}

console.log(collect(200, 300, 100, 400, 500));
// Output: [ 200, 300, 100, 400, 500 ]
```

## 4. Passing Objects and Arrays to Functions

Functions can take non-primitive reference types such as objects and arrays as arguments.

### Passing Objects
```javascript
const user = {
  name: "Jai prakash",
  age: 19
};

function userObj(objName) {
  console.log(`User name is ${objName.name} and their age is ${objName.age}`);
}

// Passing an existing object variable
userObj(user);

// Passing an object literal directly inline
function defcal(usercall) {
  console.log(`Name = ${usercall.name}, Age = ${usercall.age}`);
}

defcal({
  name: "Jai prakash",
  age: 19
});
```

### Passing Arrays
```javascript
const arr = [10, 20, 30, 40];

function getArr(arrnm) {
  console.log(`arr = ${arrnm}`);
}

getArr(arr); // Output: "arr = 10,20,30,40"
```

## 5. Nested Functions & Lexical Scope

Functions can be defined inside other functions. The inner function has access to the variables declared in its outer enclosing scope:

```javascript
function row(us_nm) {
  console.log(us_nm);

  function col(nm) {
    console.log("Function inside a function:", nm);
  }

  col(19);
}

row("jai");
// Output:
// jai
// Function inside a function: 19
```

## 6. Function Declarations vs. Function Expressions

How a function is defined dictates whether it can be invoked before its declaration in the source code due to **hoisting**.

### Function Declaration (Hoisted)
Declarations are hoisted along with their full function definitions, meaning they can be called anywhere in their enclosing scope.

```javascript
greet(); // Works without error

function greet() {
  console.log("Hello!");
}
```

### Function Expression (Not Hoisted)
When assigned to a variable (e.g., via `const` or `let`), only the variable declaration is hoisted (in the Temporal Dead Zone). Calling it before initialization throws a `ReferenceError`:

```javascript
// add1(10); // ReferenceError: Cannot access 'add1' before initialization

const add1 = function(num) {
  console.log(num);
};

add1(10); // Output: 10
```

## Quick Reference Summary

| Concept | Syntax Example | Key Point |
| :--- | :--- | :--- |
| **Declaration** | `function name() {}` | Fully hoisted; callable prior to definition |
| **Expression** | `const name = function() {}` | Variable bound; cannot be called before definition |
| **Call vs Reference** | `fn()` vs `fn` | Adding `()` executes; omitting it passes the function object |
| **Rest Parameter** | `function(...args) {}` | Bundles arbitrary incoming arguments into an array |
| **Defaults** | Unassigned parameters | Evaluate to `undefined` if arguments are omitted |
| **Pass-by-Reference** | Objects & Arrays | Modifying mutable arguments affects the external structure |