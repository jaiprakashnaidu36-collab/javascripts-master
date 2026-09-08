// Declaration of array

const arr = [1,2,3,"jai",true]

// arrays can store different data types under one name and can be easily accesed using index

// Accessing and modifying array items

console.log(arr[2]);

// Index of the array starts from 0
//  index      0,1,2 , 3   , 4   
//const arr = [1,2,3,"jai",true]

// modifying the array with index

arr[0] = "hello"
console.log(arr);

/* JavaScript arrays are resizable
JavaScript array-copy operations create shallow copies(if any changes are made to the copied array then even the original array gets changed)
*/

const arr_ = arr
console.log(arr_);

arr_[0] = 4

console.log(arr[0])

// *******************>>>>>>  Array methods  <<<<<************************

// push()  It adds the element in the end of the string

arr.push(7)          //[4,,2,3,"jai",true,7]

// pop()  Removes the last element of the array

arr.pop()           //[4,,2,3,"jai",true]

// includes(<element>)  if the element exist in the array then we get true as output

console.log(arr.includes(4));            // true


console.log(arr.includes(10));            // false


// Indexof(<element>)   tells the index of the element . If the element doesn't exists then the output will be -1

console.log(arr.indexOf("jai"));


console.log(arr.indexOf(100));       // -1

// join()   converts the array into string 

const newarr = arr.join()
console.log(typeof newarr);             // string

// slice()  It is used to extract a section of the array and doesn't change the original string 

console.log(arr.slice(1,4));             // elements from 1 to 3 will be printed

console.log(arr);                // original array will not be changed


// splice()  It is used to extract a section of the array and it changes the original string
console.log(arr_.splice(1,3));      // elements from 1 to 3 will be printed

console.log(arr);   // original array will be cchanged where the elements from 1 to 3 from the original array will be removed


 














