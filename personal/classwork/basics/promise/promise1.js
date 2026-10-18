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

// passing object in resolve

const promise3 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve({username:"Jai prakash" , Age:19})
    },1000)
})

promise3.then((user)=>{
    console.log(user);
})

// handling error 

const promise4 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        let error = true;
        if(!error){
            resolve({username : "jai prakash" , password : 656})
        }
        else{
            reject("There is an error")
        }
    },1000)
})

promise4.then((user)=>{
    return user;
}).then((user)=>{
    console.log(user)
}).catch((error)=>{
    console.log(error)
})


// promise using async 

const promise5 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        let error = true;
        if(!error){
            resolve({username : "java script" , extension : "js"})
        }
        else{
            reject("Error in java script")
        }
    },6000)
})

async function consumepromise5() {
    try{
        const response = await promise5
    console.log(response); 
    }
    catch(error){
        console.log(error)
    }
}

consumepromise5()
// posts/1



// getting value using fetch

fetch('https://jsonplaceholder.typicode.com/users')
  .then((response) => {
    if (!response) {
      console.log(`HTTP error! Status: ${response}`);
    }
    return response.json();
  })
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.error('Fetch error:', error);
  });
