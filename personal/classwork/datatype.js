// data types

// ********************************* numbers *************************************

const a = 12
console.log(typeof(a));
console.log(a);

// The max number that a number variable can store is 2^53 - 1

// other way of defining int variable

const a_ = new Number(10)   // variables declared using new keyword comes under the type of object
console.log(typeof(a_));

//********************************* */ strings *************************************

const b = "hello world"
console.log(typeof(b));


// other way of defining string variable

const b_ = new String("java script")
console.log(typeof(b_))


// ********************************* boolean *************************************

const value = true 
console.log(value);

const value_ = false
console.log(value_);

// ********************************* null *************************************

const temp = null       // null != 0
console.log(temp);
console.log(console.log(`The type of null is ${typeof(null)} and null is not equal to zero `));

// typeof null is object 

// ********************************* undefined *************************************

const datatype = undefined
console.log(datatype)


// ************************************* bigint *************************************

const ab = BigInt(12542453522782)
console.log(ab)

// BigInt can store any number of value 
