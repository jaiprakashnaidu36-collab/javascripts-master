const d = [10,20,30,40,50,60]

for (const i in d) {
    // console.log(d[i]);
}

const myobj = {
    bike : "Honda",
    bike2 : "Classic 350",
    bike3 : "BMW M 1000RR"
}

console.log("Keys are : ")

for (const key in myobj) {
    // console.log(key);
}

console.log("Values are : ")

for(const value in myobj){
    // console.log(myobj[value])
}



// foreach loop

const n = ["ja","ip","ra","ka","sh"]

n.forEach(function (i){
    // console.log(i); 
})

n.forEach( (i,index,arr) => {
    // console.log(i,index,arr);             
})


// if function is defined somewhere else then we just pass the reference of the function as arguments 

const h = function(i){
    console.log(i)
}

// n.forEach(h)

const ml = [ {
        name : "jai",
        rollNo : 12
    },
    {
        name : "kai",
        rollNo : 15
    },
    {
        name : "rai",
        rollNo : 20
    },
]

ml.forEach( (i) => {
    console.log(i.name)
})

// foreach doesn't return anything but filter does return