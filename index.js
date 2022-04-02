

const NUM = 'number'
const NEGATE = 'negate'
const OP = 'operation'
const EQUALS = '='
const DECIMAL = '.'
const INVALID = "Invalid Operation"
const valid_operations = {multiply:'*',divide:'/',minus:'-',addition:'+'}
let result = 0;
function isOperation(input){
    if (Object.values(valid_operations).indexOf(input) > -1){
        console.log("true ", input)
        return true
    } else {
        console.log("false ", input)
        return false
    }
}

function classification(input){
    if (isNaN(input) || input == DECIMAL){
        if (input == NUM ){
            return NEGATE;
        } else if (input == '='){
            return EQUALS;
        } else if (input == "AC"){
            return "AC";
        }else {
            return input;
        }
    } else {
        return NUM;
    }
}

 function isEmpty( el ){
      return !$.trim(el.html())
  }

function calculation(res, op, val){
    
   
    
    switch(op){
        case (valid_operations.multiply):
            
            return res *= val;
        case (valid_operations.addition):
            res = parseInt(res)
            res += parseInt(val)
            return res.toString();
        case  (valid_operations.divide):
            if (val == 0){
                return undefined
            } 
            return res /= val;
        case ( valid_operations.minus):
            return res -= val;
        default:
            
            return INVALID;
    }
}
let operation =[]
function input(usr){
    let mainDisplay = document.getElementById("main")
    let secondaryDisplay = document.getElementById("secondary")
    let input_class = classification(usr)
    //operation.push({value: usr, type: input_class})

    if (input_class == NUM){
        if (isEmpty($('#main'))){
                mainDisplay.innerText = usr 
            } else {
                mainDisplay.innerText += usr
            }
    } else if (input_class == "AC"){
        operation = []
        mainDisplay.innerText =""
        secondaryDisplay.innerText =""
    }else {
        secondaryDisplay.innerText = mainDisplay.innerText
        operation.push(mainDisplay.innerText)
        mainDisplay.innerText = ""
        if (isOperation(usr)){
            console.log("USR", usr)
            operation.push(usr)
        }
       
        //need to handle % . A/C - before reaching equals
        if (input_class == EQUALS){
            let res = operation[0]
            let length = operation.length
            let op_string = res
            for (let i = 1; i <length; i+=2){
                
                let op = operation[i]
                let val2 = operation[i+1]
                op_string += op + val2
                console.log(res, op, val2)
                console.log(calculation(res,op,val2 ))
                res = calculation(res,op,val2 )
            }
            operation = []
            //operation[0] = res
            mainDisplay.innerText = res
            secondaryDisplay.innerText = op_string
        }
    }
    


    
    
    

    
    console.log(operation)
   


}
