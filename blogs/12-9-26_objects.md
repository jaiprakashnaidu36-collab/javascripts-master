# Complete Guide to JavaScript Objects: Syntax, Symbols, Methods, and Destructuring

In JavaScript, objects are non-primitive data types used to store collections of key-value pairs. They represent structured, real-world data and act as the foundational building block for complex JavaScript architectures.

---

## 1. Object Syntax & Symbol Keys

Keys in a JavaScript object are treated as strings or Symbols by default. When using a `Symbol` as a key, wrap the variable in square brackets `[key]` so JavaScript evaluates it as a variable rather than a string literal.

```javascript
const key_ = Symbol("key");

const myobj = {
  name: "jaiprakash",
  age: 19,
  answer: true,
  email: "jaiprakash@gmail.com",
  mobile_no: "104010****",
  "address": "xyztg",
  [key_]: "hello" // Computed property syntax for Symbol keys
};
```

---

## 2. Accessing and Modifying Properties

Properties can be accessed using either **dot notation** or **bracket notation**:

```javascript
// Dot notation
console.log(myobj.name);    // "jaiprakash"
console.log(myobj.age);     // 19
console.log(myobj.address); // "xyztg"

// Bracket notation (required for strings with special characters, dynamic keys, and Symbols)
console.log(myobj["name"]);
console.log(myobj[key_]);   // Correct way to access Symbol key
// console.log(myobj.key_); // Incorrect: looks for a literal key named "key_" (returns undefined)

// Modifying properties
myobj.address = "Qgrfnng";
console.log(myobj["address"]); // "Qgrfnng"
```

### Freezing Objects
To make an object completely immutable and prevent properties from being added, removed, or changed:

```javascript
Object.freeze(myobj);
// Any mutations attempted after freezing will silently fail (or throw in strict mode).
```

---

## 3. Adding Methods & The `this` Keyword

Functions defined as properties of an object are called **methods**. The `this` keyword inside a regular function refers to the object executing the method.

```javascript
myobj.greeting = function() {
  console.log("Hello world!");
};

myobj.welcome = function() {
  // `this` refers to `myobj`
  console.log(`Hello, my name is ${this.name}`);
};

myobj.welcome(); // "Hello, my name is jaiprakash"
```

---

## 4. Dynamic Assignment & Nested Objects

### Adding Data to an Empty Object
```javascript
const user = {};
user.name = "Jai prakash";
user.age = 19;

console.log(user); // { name: "Jai prakash", age: 19 }
```

### Working with Nested Objects
Objects can store arrays, functions, or other objects:

```javascript
const nestedObj = {
  profile: {
    nickname: "Jai",
    role: "Developer"
  }
};

// Accessing nested values
console.log(nestedObj.profile.nickname);     // "Jai"
console.log(nestedObj["profile"]["role"]);   // "Developer"
```

---

## 5. Merging Objects: `Object.assign()` vs. Spread (`...`)

### Using `Object.assign()`
`Object.assign(target, ...sources)` copies all enumerable own properties from one or more source objects to a target object.

> **Important:** The target object is modified in place. To avoid mutating your existing object, pass an empty object `{}` as the first argument.

```javascript
const objA = { a: 1, b: 2 };
const objB = { b: 3, c: 4 };

// Shallow merge into a brand new object
const mergedAssign = Object.assign({}, objA, objB);
console.log(mergedAssign); // { a: 1, b: 3, c: 4 } (later sources overwrite earlier keys)
```

### Using the Spread Operator (`...`)
The spread operator is cleaner, modern, and avoids accidental target mutation:

```javascript
const mergedSpread = { ...objA, ...objB };
console.log(mergedSpread); // { a: 1, b: 3, c: 4 }
```

---

## 6. Object Destructuring & Aliasing

Destructuring allows you to unpack properties from objects directly into distinct variables. You can also rename (alias) properties during extraction:

```javascript
const student = {
  studentid: 45554,
  studentname: "Peter Griffin",
  studentcourse: "Btech"
};

// Standard extraction
// const { studentcourse } = student;

// Destructuring with renaming (aliasing)
const { studentcourse: course, studentname: name } = student;

console.log(course); // "Btech"
console.log(name);   // "Peter Griffin"
```

---

## Quick Reference Summary

| Concept | Syntax Example | Key Point |
| :--- | :--- | :--- |
| **Symbol Key** | `[symKey]: "value"` | Defined and accessed using square brackets `[]` |
| **Dot Notation** | `obj.prop` | Concise; cannot access Symbols or dynamic strings |
| **Bracket Notation** | `obj["prop"]` / `obj[sym]` | Required for dynamic keys and Symbols |
| **Immutability** | `Object.freeze(obj)` | Prevents property additions, deletions, and edits |
| **Context** | `this.propertyName` | Refers to the calling object inside standard methods |
| **Merging** | `{ ...obj1, ...obj2 }` | Later keys overwrite earlier keys; returns a new object |
| **Destructuring** | `const { prop: alias } = obj` | Extracts and binds values to standalone variables |