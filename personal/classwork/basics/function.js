// Function syntax

function name_(){
    console.log("hello\t".repeat(10));
    
}

/* function <nameof the function(Parameters){

    <function body 

}> */


name_()   // function call 

// name_ -> reference 

// name_()  -> execution


function sum(number,number2){
    console.log(number+number2);
}

sum(10,20)          // aruguments are passed in the function call


function ret(num1,num2){
    return num1*num2
}

const b = ret(10,10)
console.log(b);


function fun(username){
    if(username == undefined){
        return
    }
    return `${username} is present `
}

console.log(fun("jai"));

// If we are passing any data in the parameters and not passing anything in the argument then the defalut value will be printed
// If both the value is passed in the parameters as well as in the arguments then the value that is passed in the parameters will be overwriten 

// Rest operator -> used when multiple data is being assigned to a single variable in function

function collect(...price){
    return price;
}

console.log(collect(200,300,100,400,500));


// rest operator will return the value in the form of array

// objects with function

const user = {
    name : "Jai prakash",
    age : 19
}

function UserObj(ObjName){
    console.log(`User name is ${ObjName.name} and their age is ${ObjName.age}`)
}

UserObj(user)


// we can even pass objects directly into the function call

function defcal(usercall){
    console.log(`Name = ${usercall.name} , Age = ${usercall.age}`)
}

defcal({
    name : "Jai prakash",
    age : 19
})

// Arrays passed as function arguments

const arr = [10,20,30,40]

function getarr(arrnm){
    console.log(`arr = ${arrnm}`)
}

getarr(arr)