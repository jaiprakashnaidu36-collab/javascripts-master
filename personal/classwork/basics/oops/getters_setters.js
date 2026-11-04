/* Getters and setters are used to restrict other
person from accesing the property value 
for instance 
if u don't wan to share your password with anyone else then
we use getters and setters
*/ 

class name_{
    constructor(name,age){
        this.name = name
        this.age = age
    }

// properties in constructor and the returning value via getters and setters
// should not be named same otherwise the constructor will be called multiple 
// times and cause stack overflow

    get age(){
        return this._age
    }
    set age(value){
        return this._age = value
    }
}

const obj = new name_("Jaiprakash" , 19)

console.log(obj.age)


// getters and setters via objects 


const obj1 = {
    email_: "jaip@emial.com" ,
    password_ : "123456" ,
    get email(){
        return this.email_
    },
    set email(value){
        this.email_ = value 
    }
}

const ob = Object.create(obj1)
console.log(ob.email)