// document.getelementById("Id name").AddEventlistener(<event-functiom>,function(event object){},false/true)

let but = document.getElementById("but-id")
let para = document.getElementById("clicked")

// but.addEventListener("click",  (e) =>{
//     para.textContent = "Button was clicked "
// })


but = document.getElementById("smgt")

para = document.getElementsByClassName("select")

// but.addEventListener("keydown" , (e)=>{
//     para[0].textContent = e.key 
// })

const shoppingList = document.getElementById("shopping-list");
const completedItems = [];

shoppingList.addEventListener("click", (e) => {
  if (!e.target.classList.contains("done-btn")) return;
  const row = e.target.closest(".item");
  if (!row) return;
  const itemName = row.querySelector(".item-name").textContent;
  completedItems.push(itemName);
  const doneLi = document.createElement("li");
  doneLi.textContent = `Completed: ${itemName}`;
  shoppingList.appendChild(doneLi);
  row.remove();
});

