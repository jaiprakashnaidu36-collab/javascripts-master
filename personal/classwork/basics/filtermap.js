// filter

const a = [10,20,30,40,50,60,70,80,90]

const re = a.filter( (num) => num < 50)
// filter can return values but foreach doesn't return anything 
console.log(re);

const ret = a.filter( (n) =>{
    return n > 50
})

console.log(ret)

// map

const s =[1,2,3,4,5,6,7,8,9]

const w = s.map( (i) => i + 10)

console.log(w)

const r = s.map( (i) => {
    return i*10
})

console.log(r)

// chaining 

const retu = 
s.map( (num) => num *10)
.map( (num) => num + 1)
.filter( (num)=> {
    return num > 50
})

console.log(retu)


// reduce 

const add = [1,2,3]

const total = add.reduce( function (acc,current_val){
    return acc + current_val
},0)

console.log(total)

const add_ = [
    {
    name : "js",
    price : 1999
    },
    {
    name : "py",
    price : 5999
    },
    {
    name : "cpp",
    price : 14000
    }
]


const inc = add_.reduce( (avl,curr) => (avl+curr.price),0)
console.log(inc)