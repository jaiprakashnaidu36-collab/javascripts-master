# Lexical Scope & Closures in JavaScript

Understanding lexical scope and closures is essential for mastering JavaScript. These mechanisms govern how variables are stored, resolved, and preserved across execution contexts.

---

## 1. Lexical Scope (Static Scope)

### What Does "Lexical" Mean?
In computer science, "lexical" refers to the **lexing/tokenizing phase** of code compilation or interpretation. 

**Lexical scope** means that scope is determined at **author time** (where functions and blocks are physically written in the source code), not at runtime (where or how they are invoked).

```javascript
const globalVar = "I am global";

function outer() {
  const outerVar = "I am from outer";

  function inner() {
    const innerVar = "I am from inner";
    console.log(innerVar); // Resolves in inner scope
    console.log(outerVar); // Resolves in outer scope
    console.log(globalVar); // Resolves in global scope
  }

  inner();
}

outer();
```

### The Lexical Environment Under the Hood
Whenever an Execution Context is created, an associated **Lexical Environment** is created with two components:

1. **Environment Record:** The actual storage of identifier bindings (variables declared with `let`, `const`, `var`, function declarations, etc.).
2. **Outer Reference (`[[OuterEnv]]`):** A reference to the parent (enclosing) Lexical Environment.

```
+--------------------------------------------------------+
| Global Execution Context                               |
| Environment Record: { globalVar: "...", outer: fn }    |
| Outer Reference: null                                  |
+--------------------------------------------------------+
                           ^
                           | [[OuterEnv]]
+--------------------------------------------------------+
| outer() Execution Context                              |
| Environment Record: { outerVar: "...", inner: fn }     |
| Outer Reference: [Global Lexical Environment]          |
+--------------------------------------------------------+
                           ^
                           | [[OuterEnv]]
+--------------------------------------------------------+
| inner() Execution Context                              |
| Environment Record: { innerVar: "..." }                |
| Outer Reference: [outer Lexical Environment]           |
+--------------------------------------------------------+
```

### Scope Chain Resolution
When an identifier is referenced:
1. JavaScript checks the current scope's Environment Record.
2. If not found, it traverses up through the `[[OuterEnv]]` reference.
3. This traversal continues until the identifier is found or the root (`null`) is reached.
4. If reached without resolution, an uncaught `ReferenceError` is thrown in strict mode.

---

## 2. Closures

### Definition
A **closure** is the combination of a function bundled together (enclosed) with references to its surrounding state (the **lexical environment**). 

In JavaScript, **all functions are closures by default**, but a closure becomes practically visible and impactful when an inner function is executed **outside** its originating lexical scope while still retaining access to variables from that scope.

```javascript
function makeGreeter(greeting) {
  // 'greeting' is retained in the returned function's closure
  return function (name) {
    return `${greeting}, ${name}!`;
  };
}

const sayHello = makeGreeter("Hello");
const sayHola = makeGreeter("Hola");

console.log(sayHello("Alice")); // "Hello, Alice!"
console.log(sayHola("Bob"));    // "Hola, Bob!"
```

Even though `makeGreeter` has finished executing and its execution context is popped off the Call Stack, its lexical environment remains in heap memory because the returned function references it via `[[Scopes]]`.

---

## 3. Practical Use Cases

### 1. Data Encapsulation & Private State
JavaScript historically lacked private class fields. Closures allow you to create truly private variables that cannot be accessed directly from the outside.

```javascript
function createCounter(initialValue = 0) {
  let count = initialValue; // Private variable

  return {
    increment() {
      count += 1;
      return count;
    },
    decrement() {
      count -= 1;
      return count;
    },
    getValue() {
      return count;
    }
  };
}

const counter = createCounter(10);
console.log(counter.increment()); // 11
console.log(counter.getValue());  // 11
console.log(counter.count);       // undefined (cannot be tampered with)
```

---

### 2. Function Currying & Partial Application
Transforming a function with multiple arguments into a sequence of functions each taking a single argument.

```javascript
function multiply(a) {
  return function (b) {
    return a * b;
  };
}

const double = multiply(2);
const triple = multiply(3);

console.log(double(5)); // 10
console.log(triple(5)); // 15
```

---

### 3. Event Handlers and Callback State
Preserving contextual data when registering asynchronous callbacks:

```javascript
function attachButtonLogger(buttonElement, buttonId) {
  buttonElement.addEventListener("click", () => {
    // Retains buttonId even when clicked long after setup
    console.log(`Button ${buttonId} clicked at:`, new Date().toISOString());
  });
}
```

---

### 4. Memoization (Function Caching)
Caching expensive computation results using a closure to hold the cache map:

```javascript
function memoize(fn) {
  const cache = new Map();

  return function (...args) {
    const key = JSON.stringify(args);
    if (cache.has(key)) {
      return cache.get(key);
    }
    const result = fn(...args);
    cache.set(key, result);
    return result;
  };
}

const slowSquare = memoize((n) => {
  // Simulate slow calculation
  return n * n;
});

console.log(slowSquare(4)); // Computed and cached: 16
console.log(slowSquare(4)); // Returned directly from cache: 16
```

---

## 4. Classic Pitfalls & Modern Solutions

### The Classic `var` Loop Issue
A notorious interview problem demonstrates how dynamic execution interacts with lexical scope and variable binding:

#### The Bug (`var`):
```javascript
for (var i = 0; i < 3; i++) {
  setTimeout(function () {
    console.log(i);
  }, 100);
}
// Prints: 3, 3, 3
```
*Why?* `var` is function-scoped (or globally scoped), not block-scoped. All callbacks share the exact same variable `i`, which evaluates to `3` by the time the timers run.

#### Fix 1: Use `let` (Block Scope)
```javascript
for (let i = 0; i < 3; i++) {
  setTimeout(function () {
    console.log(i);
  }, 100);
}
// Prints: 0, 1, 2
```
*Why it works:* Each iteration creates a distinct lexical environment for the block, rebinding `i` per loop cycle.

#### Fix 2: IIFE (Immediately Invoked Function Expression)
```javascript
for (var i = 0; i < 3; i++) {
  (function (capturedIndex) {
    setTimeout(function () {
      console.log(capturedIndex);
    }, 100);
  })(i);
}
// Prints: 0, 1, 2
```

---

## 5. Memory Management & Garbage Collection

- **Garbage Collection (GC):** An object or lexical scope is kept in memory as long as it remains reachable via the root reference graph.
- **Accidental Leaks:** If a closure holds onto a large data structure (e.g., large arrays, DOM elements) that is no longer needed, it prevents the entire enclosing environment from being garbage collected.

```javascript
function createHeavyProcess() {
  const largeArray = new Array(1_000_000).fill("heavy data");

  return function logInfo() {
    // If largeArray is referenced here, it cannot be cleaned up
    console.log("Process complete");
  };
}

const logger = createHeavyProcess();
// If 'logger' lives indefinitely on window or a global scope,
// largeArray might remain retained depending on the engine's optimization.
```

> **Best Practice:** Nullify references or structure closures to hold only the minimal state required.

---

## 6. Summary Comparison

| Concept | Definition | When Determined? |
| :--- | :--- | :--- |
| **Lexical Scope** | Rules defining where variables are accessible based on code position | Code authoring / Lexing phase |
| **Execution Context** | Environment in which code is currently being evaluated | Invocation / Runtime |
| **Closure** | A function retaining references to its parent lexical environment | Function creation at runtime |
| **Scope Chain** | Linked chain of outer environment records used to resolve identifiers | Dynamic lookup across static links |