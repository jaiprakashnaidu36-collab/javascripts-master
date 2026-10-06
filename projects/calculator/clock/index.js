const clock = document.getElementById("index")
// set interval is for changing the time every 1 seconds i.e., 1000 
setInterval(function(){
    let date = new Date();    // date is a object in js 
    clock.innerHTML = date.toLocaleTimeString();
},1000)