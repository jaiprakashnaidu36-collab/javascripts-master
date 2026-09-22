function loop(){

for(let i = 0 ; i < 5 ; i++){
    
    console.log(i)
}

}

// loop()

function arr(myarr){

    for(let i = 0 ; i < myarr.length ; i++){
        
        console.log(myarr[i]);

    }

}

const a = [10,20,30,40]

// arr(a)


const val = function(value_,...c ){
    for(let i = 0 ; i < c.length ; i++){
        if(c[i] == value_){
            break
        }
        console.log(c[i])
    }

    console.log("Using continue keyword to skip the value : \t")

    for(let i = 0 ; i < c.length ; i++){
        if(c[i] == value_){
            continue
        }
        console.log(c[i])
    }
}

const aa = [10,20,30,40,50]
l = 40
val(l,...aa )

