let d = document.getElementById("hello")

const change = function(){
    document.querySelector("h1").textContent = "Bye World !!"
}

d.addEventListener("click",(e)=>{
    setTimeout(change,2000);
})

// clearTimeout -> for stopping the event

const stop = document.querySelector("#stop")

const even_stop = ()=>{
    const stop = clearTimeout(change)
}

stop.addEventListener("click" , (e)=>{
    const stop = clearTimeout(change)
    console.log("Event stoped");
})
