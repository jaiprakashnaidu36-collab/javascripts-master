let o = document.querySelectorAll(".cl")
for (let i = 0; i < o.length; i++) {
    console.log(o[i].innerHTML)
}

o[1].innerHTML = "sunday"

for (let i = 0; i < o.length; i++) {
    console.log(o[i].innerHTML)
}

let u = document.querySelector("div")
u.style.color = "red"

o[1].innerHTML = [10,20,30,40,50]

