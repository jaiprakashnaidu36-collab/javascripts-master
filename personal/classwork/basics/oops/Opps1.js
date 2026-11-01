const myobj = {
    name : "jaiprakash",        // variables of myobj object
    age : 19,
    fun : function(){               // Methods
        console.log(this.name , this.age)
    }
}

// myobj.fun() 


function fun(usn , branch){
    this.usn = usn
    this.branch = branch
}

fun.prototype.start = function(){
    console.log(`Usn is ${this.usn} and branch is ${this.branch}`)
}

const obj = new fun("1mvj28928" , "CSE")
// obj.start()

let str = "jai prakash "

String.prototype.remove = function(){
    let result = "";
     for (let i = 0; i < this.length; i++) {
    if (this[i] !== " ") {
      result += this[i];
    }
  }
  return result;

}
// console.log(str.remove())

function name_(username){
	this.username = username
}

function details(usernmame , age , password){
	name_.call(this,usernmame)			//.call for holding reference
	this.age = age
	this.password = password
}

const cal = new details("jaiprakash" , 19 , 35413546)
console.log(cal)

// what happens when you create an object ?

function Car(make, model) {
  // Step 3: 'this' refers to the new object being created
  this.make = make;
  this.model = model;
}

// Step 2 target: attached to Car.prototype
Car.prototype.drive = function() {
  console.log(`Driving the ${this.make} ${this.model}`);
};

// When we invoke with 'new':
// 1. Creates {}
// 2. Links {}.__proto__ to Car.prototype
// 3. Runs Car() with this = {}
// 4. Returns the instance
const myCar = new Car("Toyota", "Corolla");

myCar.drive(); // "Driving the Toyota Corolla"


/*
1 : "The new keyword initiates the creation of a new JavaScript object."
2 : The newly created object gets linked to the prototype property of the constructor function. This means that 
it has access to properties and methods defined on the constructor's prototype.
3 : The constructor function is called with the specified arguments and this is bound to the newly created 
object. If no explicit return value is specified from the constructor, JavaScript assumes this, the newly 
created object, to be the intended return value
4 : After the constructor function has been called, if it doesn't return a non-primitive value (object, array, function, etc.),
 the newly created object [is returned]
*/