// Lexical scope

function name(){
    let variable = 20
    function innerchild(){
        console.log(variable)
    }
    innerchild()
}

name()

// closure 

function name_(){
    let variable = 20
    function innerchild(){
        console.log(variable)
    }
    return innerchild
}

let hold = name_()
hold()
