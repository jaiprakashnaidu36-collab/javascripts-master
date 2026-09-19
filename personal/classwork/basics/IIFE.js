// Immediately Invoked Function Expression is used for Avoiding Global Scope Pollution and Data Privacy

(function add(n1,n2){
    console.log(n1+n2)
})(10,20);          // It is important to use ; after using iife


( (name__)=> {
    console.log(`Name = ${name__}`)
})("Jai prakash")