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
console.log(str.remove())
// console.log(str.remove(str))