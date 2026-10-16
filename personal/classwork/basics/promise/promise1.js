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


const promise3 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve({username:"Jai prakash" , Age:19})
    },1000)
})

promise3.then((user)=>{
    console.log(user);
})