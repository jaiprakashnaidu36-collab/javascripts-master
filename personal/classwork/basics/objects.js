// Objects syntax

const key_ = Symbol("key")

const myobj =  {
    name : "jaiprakash",           // name will be considered a sring by defalut
    age : 19,
    answer : true ,
    email : "jaiprakash@gmail.com" ,
    mobile_no : "104010****" ,
    "address" : "xyztg",
    [key_] : "hello"                // when using symbol in objects we specify the variables name in square brackets
}

// accesing values from object 

console.log(myobj.name);
console.log(myobj.age);
console.log(myobj.address);
console.log(myobj[key_])
console.log(typeof myobj)

// console.log(myobj.key_)   Incorrect: looks for the string key "key_" (returns undefined)
// other way of accesing 

console.log(myobj["name"]);   
console.log(myobj["age"]);
console.log(myobj["address"]);


// Overwritting the value of a variable in the object 

myobj.address = "Qgrfnng"

console.log(myobj["address"]);

// If we don't want to make any changes in the object then we should freeze the object

// Object.freeze(myobj)
  

myobj.greeting = function(){
    console.log("Hello world!");
}

console.log(myobj.greeting());


myobj.welcome = function(){
    console.log(`${this.greeting()} my name is ${this.name}`);    
}

// this refers to the execution context of the function

myobj.welcome();

// To add data into an empty object 

const my = {}

my.name = "Jai prakash"
my.age = 19

console.log(my);

// objects inside an object 

const anoth = {
    name : ["hello" ,"why"]
}

console.log(typeof anoth.name);


const anoth_ = {
    name_ : {
        k : "hello",
        greet : "world"
    }
}

console.log(anoth_.name_.k);
console.log(anoth_["name_"]["k"]);

// To concatinate 2 or more objects we use Object.assign(firstobj,secondobj) keeyword

const copy_ = Object.assign(my,anoth)

// copy elements of anoth into my 

console.log("This is the original object ",my);
console.log("This is a copy of 2 objects concatenated ",copy_);

// To add many objects into an single object

const newobj = Object.assign({},my,myobj,anoth)

// we can even add objects using spread

const new_obj = {...anoth,...myobj}

// To destructure an object 


const q = {
    studentid : 45554,
    studentname : "Peter griffin",
    studentcourse : "Btech"
}

// destructuring means instead of writing the whole variable name while printing we can write the shortform of the variable and can ommit writing objname. everything while printing it
// Destructuring is a JavaScript expression that unpacks values from arrays, or properties from objects, and binds them into distinct, standalone variables using a syntax that mirrors the structure of the data itself
const {studentcourse : course} = q

console.log(course);




