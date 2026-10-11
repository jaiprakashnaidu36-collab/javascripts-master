const bg = document.querySelectorAll(".box")

const bd = document.querySelector("body")

bg.forEach((i)=>{
    i.addEventListener('click' , (e)=>{
        if (e.target.id === "blue") {
            bd.style.backgroundColor = e.target.id;
        }
        else if(e.target.id === "green"){
            bd.style.backgroundColor = e.target.id;
        }
        else if(e.target.id === "black"){
            bd.style.backgroundColor = e.target.id;
        }
        else if(e.target.id === "red"){
            bd.style.backgroundColor = e.target.id;
        }
    })
})