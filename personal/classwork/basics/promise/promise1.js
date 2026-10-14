const promise1 = new Promise(function(resolve,reject){
    setTimeout(()=>{
        console.log("Task completed")
    },1000)
    resolve()
})

promise1.then(()=>{
    console.log("Task is called");
})

new Promise((resolve,reject)=>{
    let count = 1
    setTimeout(()=>{
        count++    
        console.log(count);
    },2000)
    resolve
}).then(()=>{
    console.log("Count value is : ")
})