# Complete Guide to JavaScript Math Object: Methods, Rounding, and Arithmetic

The JavaScript `Math` built-in object provides mathematical constants and functions. Unlike other global objects, `Math` is not a constructor—all its properties and methods are static, meaning you call them directly using `Math.methodName()`.

---

## 1. Absolute Value & Exponentiation

### `Math.abs(x)`
Returns the absolute (positive) value of a number.

```javascript
const vari = -120;

console.log(Math.abs(vari));       // 120
console.log(Math.abs(-Infinity));  // Infinity
```

### `Math.pow(base, exponent)`
Returns the base raised to the power of the exponent ($base^{exponent}$).

```javascript
console.log(Math.pow(7, 3));     // 343
console.log(Math.pow(-7, 0.5));  // NaN (square root of a negative number has no real value)
```

> **Modern Alternative:** You can also use the exponentiation operator: `7 ** 3`.

### `Math.exp(x)`
Returns $e^x$, where $e$ is Euler's number (approx. 2.718).

```javascript
console.log(Math.exp(0)); // 1 (e^0 = 1)
```

---

## 2. Rounding Methods

JavaScript provides three distinct ways to round numbers depending on the direction required:

### `Math.ceil(x)`
Always rounds **up** to the nearest integer greater than or equal to $x$.

```javascript
console.log(Math.ceil(0.95));  // 1
console.log(Math.ceil(7.004)); // 8
console.log(Math.ceil(-7.004)); // -7
```

### `Math.floor(x)`
Always rounds **down** to the nearest integer less than or equal to $x$.

```javascript
console.log(Math.floor(9.9));  // 9
console.log(Math.floor(1.2));  // 1
console.log(Math.floor(-1.2)); // -2
```

### `Math.round(x)`
Rounds to the **nearest** integer (standard arithmetic rounding: $\ge 0.5$ rounds up, $< 0.5$ rounds down).

```javascript
console.log(Math.round(4.4)); // 4
console.log(Math.round(4.5)); // 5
console.log(Math.round(4.6)); // 5
```

---

## 3. Logarithms

### `Math.log(x)`
Returns the natural logarithm ($\ln$, base $e$) of a number.

```javascript
console.log(Math.log(0.9));  // -0.10536051565782635
console.log(Math.log(1.67)); // 0.5128236264286706
console.log(Math.log(1));    // 0
```

> **Note:** For other bases, JavaScript also provides `Math.log10()` (base 10) and `Math.log2()` (base 2).

---

## 4. Random Number Generation

### `Math.random()`
Returns a pseudo-random floating-point number in the range $[0, 1)$—that is, from $0$ (inclusive) up to but not including $1$ (exclusive).

```javascript
console.log(Math.random()); // e.g., 0.6384920235...

// Common Recipe: Random integer between min and max (inclusive)
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

console.log(getRandomInt(1, 10)); // Random number from 1 to 10
```

---

## 5. Trigonometric Functions

All trigonometric methods in `Math` expect and return angles in **radians**, not degrees.

### Standard & Hyperbolic Trigonometry
* `Math.sin(x)` / `Math.cos(x)` / `Math.tan(x)`
* `Math.asin(x)` / `Math.acos(x)` / `Math.atan(x)` / `Math.atan2(y, x)`
* `Math.sinh(x)` / `Math.cosh(x)` / `Math.tanh(x)`
* `Math.asinh(x)` / `Math.acosh(x)` / `Math.atanh(x)`

### Converting Degrees to Radians
$$\text{radians} = \text{degrees} \times \left(\frac{\pi}{180}\right)$$

```javascript
// Convert 45 degrees to radians
const deg = 45;
const rad = deg * (Math.PI / 180);

console.log(Math.cos(rad)); // ~0.7071
console.log(Math.sin(rad)); // ~0.7071
```

---

## Quick Reference Summary

| Method | Description | Example | Result |
| :--- | :--- | :--- | :--- |
| `Math.abs(x)` | Absolute value | `Math.abs(-15)` | `15` |
| `Math.ceil(x)` | Round up to nearest integer | `Math.ceil(4.1)` | `5` |
| `Math.floor(x)` | Round down to nearest integer | `Math.floor(4.9)` | `4` |
| `Math.round(x)` | Round to nearest integer | `Math.round(4.5)` | `5` |
| `Math.pow(x, y)` | $x$ raised to power $y$ | `Math.pow(2, 3)` | `8` |
| `Math.exp(x)` | $e^x$ | `Math.exp(1)` | `~2.718` |
| `Math.log(x)` | Natural logarithm ($\ln x$) | `Math.log(Math.E)`| `1` |
| `Math.random()` | Random float in $[0, 1)$ | `Math.random()` | `0.42...` |