// DOM = Document object model 

// GetelementbyID

let val = document.getElementById("a")
console.log(val)

//  GetelementbyName()

val = document.getElementsByName("js")
console.log(val)

// Getelemtbytagname

val = document.getElementsByTagName("h1")
console.log(val)

// getelementbyclassname()

val = document.getElementsByClassName(".cont")
console.log(val)

// querySelector()

val = document.querySelector(".cont")
console.log(val)

// querySelectorall()

val = document.querySelectorAll(".h2")
console.log(val)

// for selecting a single element : 

console.log(val[0])

// childelement()

val = document.querySelector(".cont")
console.log(val.childNodes)

// parentelement()

val = document.querySelector(".h2")
console.log(val.parentElement)

// createElement

let div = document.createElement("div")

div.innerHTML = "<p> Hello world </p>"
div.className = "clanm"
div.id = "msg"
document.body.append(div)
console.log(div)

// appendchild()

val = document.querySelector(".cont");
let cre = document.createElement("p");
cre.innerHTML = "<p>Elements</p>"
val.appendChild(cre)

// innertext

let qs = document.getElementById("slc")
console.log(qs.innerText);

// textcontent

console.log(qs.textContent)

// innerhtml

let p = document.querySelector(".cont")

console.log(qs.innerHTML)

// append 

/* difference between append and appendchild is that in 
append child we can't add multiple elements but using append we can add
multiple elements
*/

// qs.append(val,p)


// perpend -> will add the element as the first node i the parent node 

qs = document.getElementById("slc")

let k = document.createElement("h1")
k.innerHTML = "Alphabets"
qs.prepend(k)


// insertAdjacentHTML

// afterbegin      |
// beforebegin     |
// afterend        |
// beforeend       |
qs.insertAdjacentHTML("beforeend","<li>D</li>")


// replace child 

const rq = document.getElementById("slc")
let sele = rq.children[2]
const wre = document.createElement("li")
wre.textContent = "b"
rq.replaceChild(wre,sele)


// clone node 

sele = rq.cloneNode(true)
rq.append(sele)

// remove child method 

rq.removeChild(sele)

// Attibute

let atri = document.getElementById("language")
let c = atri.attributes

for(let i = 0 ; i < c.length  ; i++ ){
    console.log(c[i])
}

// getattribute

console.log(atri.getAttribute("name"))

// setattribute

atri.setAttribute("class" , "inputbox")

// hasattribute 

console.log(atri.hasAttribute("class"))

atri.removeAttribute("name")

// style 


val = document.getElementById("slc")
console.log(val.style)

val.style.color = "red"

div = val.children[0]
div.style.color = " black"



