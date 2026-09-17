/*{
    any variable declared in this curle bracket
    is said to have local scope 
    Any variable declared outside this curle brackets is said to have global scope 

}*/


let x = 10        // global variable


{
    let a = 20        // local to this scope
    const b = 30       // local to this scope
    var c = 40
}


console.log("Global variable : ",x);

// console.log("Variable declared using let : ",a);       will give error
// console.log("Variable declared using const : ",b);     will give error
console.log("Variable declared using var : ",c);


// trying to access a variable declared using let or const outside its scope will give error
// but if the variable is declared using var then it can accessed outisde the scope

function row(us_nm){
    console.log(us_nm);
    function col(nm){
        console.log("Function inside a function : ",nm);
    }
    col(19)       // local to the function row
}

row("jai")  