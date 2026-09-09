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



// copywithin()
// array.copyWithin(target, start = 0, end = array.length)
 
// target -> where the copy should be pasted  , start  -> start copying from , end -> end copy at 

const a =[10,20,30,40,50,60,70,80]

console.log("Using copywith : ",a.copyWithin(0,2,5));
// starting copying from 2 and end at 5 and paste it at the 0th index 

// copywithin changes the original array 

console.log("The array after using copywithin function : " , a);

// concat array is used to add or join two or more arrays together 

const b =[90,100];
const c = a.concat(b);

console.log(c);

// using spread to concat arrays 

const new_c = [...arr,...a,...b]
console.log(new_c);


// spread is used most widely than concat because you can add as many arrays as possible via spread 

// Flat is used to instances creates a new array with all sub-array elements concatenated into it recursively up to the specified depth.


const new__array =[1,2,3,[1,2,3],[4,5,[6,7,8,9]]]
console.log(new__array.flat(Infinity));


// to convert any data type into array we use from 

console.log(Array.isArray("Jaiprakash"));
console.log(Array.from("Jaiprakash"));

    













