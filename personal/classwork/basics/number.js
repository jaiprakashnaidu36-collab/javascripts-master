// declaration of number

const n = 19.0

const nu = new Number(19)

//  ****************>>>>>>>>Functions associated with numbers <<<<<<<<***************

// 1) number()

// number() function when used with new keyword creates an object 

console.log(typeof(nu))

// It can also be used to change any data type into number 

const j = Number("12")
console.log(typeof(j))

// 2.) Number.EPSILON is the smallest step the computer can measure between 1 and the next number right above it

console.log((1.0 + 2.0) === 3.0)  // will result in false

// inorder to over come that we use epsilon . The value of epsilon is 2^-52

console.log(Math.abs(1.0 + 2.0) > Number.EPSILON)

// 3.) Number.MAX_SAFE_INTEGER , It represents the max safe integer than can be used in js

console.log(Number.MAX_SAFE_INTEGER) // 9007199254740991

// 4.) Number.MAX_VALUE is the maximum limit for standard JavaScript floating-point numbers

console.log(Number.MAX_VALUE);  //  ~1.7976931348623157e+308


// 5.) The Number.MIN_SAFE_INTEGER static data property represents the minimum safe integer in JavaScript, or -(2^53 - 1).

console.log(Number.MIN_SAFE_INTEGER);
// Expected output: -9007199254740991

// 6.) The Number.MIN_VALUE static data property represents the smallest positive numeric value representable in JavaScript


console.log(Number.MIN_VALUE);      //5e-324

// 7.) NaN is a property that represents not a number in JavaScript

const a = Number("123a")
console.log(a);

//  8.) The Number.NEGATIVE_INFINITY static data property represents the negative Infinity value

const smallNumber = -Number.MAX_VALUE * 2;
console.log(smallNumber);


// 9.) The Number.POSITIVE_INFINITY static data property represents the negative Infinity value

const bigNumber = Number.MAX_VALUE * 2;
console.log(bigNumber);

// The toFixed() method of Number values returns a string representing this number using fixed-point notation with the specified number of decimal places

// variable.toFixed(digits)

console.log((2.01).toFixed(10));  // we will get 10 digits after the decimal place 

// The toPrecision() method of Number values returns a string representing this number to the specified number of significant digits.

// variable.toPrecision(precision)

let num_ = 5.123456;

console.log(num_.toPrecision()); 
console.log(num_.toPrecision(5)); 
console.log(num_.toPrecision(2)); 
console.log(num_.toPrecision(1));

