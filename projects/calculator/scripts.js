const main_ = document.getElementById("main_div")
const ente = document.getElementsByClassName("type")[0]

let firstnumber = ''
let secondnumber = ''
let operator = ''


main_.addEventListener('click',(e)=>{
    if (e.target.tagName !== "BUTTON") return;
    let result = e.target.innerText;
    if(result == 'C'){
        let firstnumber = ''
        let secondnumber = ''
        let operator = ''
        ente.value = ''
        return
    }

    if(result == '+' || result == '-' || result == '/' || result == '*' ){
        if(firstnumber == '')return
        operator = result
        ente.value = `${firstnumber} ${operator}`
        return
    }


    if(result == '='){
        if(firstnumber == '' || secondnumber == '' || operator == '') return
        let num1 = parseFloat(firstnumber)
        let num2 = parseFloat(secondnumber)
        let output = 0;

        switch (operator) {
        case "+":
            output = num1 + num2
            break;
        case "-":
            output = num1 - num2
            break;
        case "*":
            output = num1 * num2
            break;
        case "/":
            output = num2 === 0 ? "Error" : num1 / num2
            break;
        }

        ente.value = output

        // firstnumber = "output.toString()"
        firstnumber = ""
        secondnumber = ""
        operator = ""
        return;
        }
        if(operator == ''){
            firstnumber += result
            ente.value = firstnumber

        }
        else{
            secondnumber += result
            ente.value = firstnumber + " " + operator + " " + secondnumber
        }
})
