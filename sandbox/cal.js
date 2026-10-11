const obj = {
    name : "jai prakash",
    weigth : 90 + "kgs" ,
}

// for (const [key,val] in obj) {
//     console.log(obj[val])
// }

for (const key in obj) {
       console.log(obj[key]);
}