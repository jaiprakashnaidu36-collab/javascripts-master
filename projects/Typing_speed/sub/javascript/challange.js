const code = document.querySelector(".code_")
const generate = document.querySelector(".section1")

generate.addEventListener('click',(e)=>{
    if(e.target !== document.querySelector(".but_sec1")) return;
    code.textContent = Math.floor((Math.random()*10))*321+20
    console.log(code);
})

