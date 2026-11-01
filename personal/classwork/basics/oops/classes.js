class search {
    constructor(name_ , age , password) {
        this.name_ = name_
        this.age = age
        this.password = password
    }

    encrypas(){
        return `password = ${this.password}ikvl`
    }

    userdetails(){
        return `Name = ${this.name_} , Age = ${this.age}`
    }
}

const obj = new search("Jaiprakash" , 19 , 5465)

console.log(obj.encrypas())
console.log(obj.userdetails())
