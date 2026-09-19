const name = () => {
    console.log("hello")
}

// name()

// This keyword

/* this refers to the object that is currently executing or calling the function, and its value 
is typically determined by how a function is called at runtime, not where it was declared


*/


const obj = {
    username : "Jai prakash",
    pass : 98779 , 
    fun : function(){
        console.log(`${this.username}`);
        console.log(this);
    }

}

// obj.fun()

// console.log(this);            // we get an empty object {}

function nam_(){
    let userm = "jp"
    console.log(this.userm)         // we get undefined
}

// nam_()

const ar = () =>{
    let co = "Jp"
    console.log(this.co);
}

// ar()



const add = (n1,n2) =>{
    return n1 + n2
}

// console.log(add(2,3))

// implicit return in arrow function

const add1 = (n1,n2) => n1 + n2       // implicit return type no need to write return 

console.log(add1(2,3))

