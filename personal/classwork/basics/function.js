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
