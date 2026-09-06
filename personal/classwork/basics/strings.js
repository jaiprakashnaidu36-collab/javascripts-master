// declaration of string 

const s = "jai prakash"  // strings defined using double quote
const j = 'hello world'   // strings defined using single quote quote

// we can write multi line string using backtick's

const a = `Hi there my name is Jai prakash , 
currently studying in MVJ`

// there are many operation we can do with string like 
/*
1) Concatination
2) Repetation
3) Comparision using relational or logical operators 
*/ 


// Concatination

console.log("hello " + "world");

console.log("Hi" + 3)   //string + number

console.log(3 + '2')    //number + string 

console.log(1 + 1 + '2')


// Repetation

console.log("Hi".repeat(4))

// "hi" * 4 will cause NaN(Not a Number) error 

// Comparision

// comparision of two strings will give the output in the form of boolean 

console.log("hello" > "yellow");  

// java script compares every single charachter in the strings and evaluates the answer in either true or false  

console.log("heelo" != "hello")


//****************** >>>>> Built in Functions associated with strings <<<<<< ******************/



const test = "Jai prakash"

// length >>> for finding the length of the strings 

console.log(test.length);

// charat(<index>) >>> for finding the character at a particular index , charat returns a strings

console.log(test.charAt(2));

// includes(<substring>) checks whether the sub string is present in the main string and returns value in either true or false 

console.log(test.includes("Jai"));   // true

console.log(test.includes("jai"));   // false because includes performs a case-sensitive search to determine whether sub string is present in the main string

// The indexOf(<sub-string>,<position>) method of String values searches this string and returns the index of the first occurrence of the specified substring
// it takes in 2 option 1st being the sbstring and 2nd being the position

console.log(test.indexOf('a',4))

// iif position is less than zero i.e., -ve values then indexof searches from the starting of the string i.e., from the index 0

console.log(test.indexOf('a',-5))

// If position is greater than the length of the calling string, the method doesn't search the calling string at all , it returns -1

console.log(test.indexOf('j',20))

// replace method returns a new strings where it replace's the old content with the new content that the programmer has asked

const repl = "kai"

console.log(test.replace("Jai",repl))

// slice(<start-index>,<end-index>) is a method in js where it extracts a part or section from the string and returns a new string without modifing the main string

console.log(test.slice(0,5))

console.log(test.slice(3))      //  returns a string from the 3rd position till the very end of the string

console.log(test.slice(-1,-7));


// split(<sub-string>) It split's the sub-subtring in different part and returns an array 

console.log("jai pra kash ".split(" "))   //  [ 'jai', 'pra', 'kash', '' ]

// toLocaleLowerCase() and toLocaleUpperCase() is a method of String where it convertes the string to lower case and upper case, according to any locale-specific case mappings.


console.log(test.toLocaleLowerCase("en-US"));

console.log(test.toLocaleUpperCase("en-US"));


// tolowercase and touppercase returns a new string where the desired string is converted into upper or lower case

console.log("JAIprakash".toLowerCase());
console.log("JAIprakash".toUpperCase());


// The toString() method of String values returns this string value

const m = 55555
console.log(m.toString())

// The trim() method of String values removes whitespace from both ends of this string and returns a new string, without modifying the original string.

console.log("    jai prakash     ".trim());
