class inhere{
    constructor(username , userpassword) {
        this.username = username
        this.userpassword = userpassword
    }

    userdetails(){
        console.log(`Name = ${this.username} , Password = ${this.userpassword}`);
    }
}

class child extends inhere{
    constructor(username , password , age , city){
        super(username,password)
        this.age = age
        this.city = city
    }

    additionaldetails(){
        console.log(`age = ${this.age} and city = ${this.city}`)
    }
}

const obj = new child("Jaiprakash" , 694654 , 19 , "Bangalore")
const obj1 = new inhere("Jaipraksh",3513)

console.log(obj.additionaldetails());
console.log(obj.userdetails())

console.log(child instanceof inhere)

// Using static 

class star{
    constructor(name){
        this.name = name
    }

    static log(){
        return `name + ${124}`
    }
}

const obj2 = new star("Jaiprakash")

// obj2.log()  // this cannot be done 