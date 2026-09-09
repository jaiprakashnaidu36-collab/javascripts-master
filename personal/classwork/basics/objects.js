// Objects syntax

const key = Symbol("key")

const myobj =  {
    name : "jaiprakash",           // name will be considered a sring by defalut
    age : 19,
    answer : true ,
    email : "jaiprakash@gmail.com" ,
    mobile_no : "104010****" ,
    "address" : "xyztg",
    [key] : "hello"                // when using symbol in objects we specify the variables name in square brackets
}

// accesing values from object 

console.log(myobj.name);
console.log(myobj.age);
console.log(myobj.address);



// other way of accesing 

console.log(myobj["name"]);   
console.log(myobj["age"]);
console.log(myobj["address"]);


// Overwritting the value of a variable in the object 

myobj.address = "Qgrfnng"

console.log(myobj["address"]);

// If we don't want to make any changes in the object then we should freeze the object

Object.freeze(myobj)