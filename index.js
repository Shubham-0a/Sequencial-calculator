document.getElementById("displaycontent").innerText = "Result = ";

function sum() {
    const num1 = document.getElementById("uservalue1").value;
    const num2 = document.getElementById("uservalue2").value;
    let sumResult = parseInt(num1) + parseInt(num2);
    document.getElementById("displaycontent").innerText = "Result = "+sumResult;
    reset();
}

let currentEntry = "";
// calculator
let lastvalue = "0";
let currentvalue = "0";
let currentResult = 0;
let valueResult = "0";
let lastsign = "";
let currentsign = "+";
let problem = document.getElementById("problem-display").innerText = "";
// for keys
function inputnum(num){
    currentEntry = num;
    currentvalue = currentvalue + num;
    appendproblem(num);
}

let n=1;
function inputsign(sign){
    
    if(n==1){
        lastvalue = currentvalue;
        currentsign = sign;
    }
    else{
        currentResult = parseInt(calculation(lastvalue,currentvalue,currentsign));
        lastvalue = currentResult;
        lastsign = currentsign;
        currentsign = sign;
    }
    n--;
    currentvalue = "0";
    appendproblem(sign);
}
function reset(){
    let problem = document.getElementById("problem-display").innerText = "0";
    document.getElementById("result-display").innerText = "";
    currentvalue = "0";
    lastvalue = "0";
    n=1;
}

function appendproblem(xy){
    let problem = document.getElementById("problem-display").innerText += "";
    if(problem == "0"){
        problem = document.getElementById("problem-display").innerText = xy;
    }
    else{
        document.getElementById("problem-display").innerText += xy;
    }
}

//all functions
function calculation(y,x,z){
    let result;
    if (z == "+") {
        result = parseInt(x) + parseInt(y);
    } else if (z == "-") {
        result = parseInt(x) - parseInt(y);
    } else if (z == "*") {
        result = parseInt(x) * parseInt(y);
    } else if (z == "/") {
        result = parseInt(x) / parseInt(y);
    }
    else{
        result = lastvalue;
    }
    return result;
}
function backspace(){

}

function compute(){
    if(n==0){
        valueResult = parseInt(calculation(currentvalue,lastvalue,currentsign));
    }
    else{
        valueResult = parseInt(calculation(currentvalue,currentResult,currentsign));
    }
    //valueResult = calculation(lastvalue,currentvalue,currentsign);
    document.getElementById("result-display").innerText = "= "+valueResult;
}



document.addEventListener('keypress',(event) => {
    var name = event.key;
    var code = event.keyCode;
    if(name==1){
        inputnum(1);
    } else if(name==2){
        inputnum(2);
    } else if(name==3){
        inputnum(3);
    } else if(name==4){
        inputnum(4);
    } else if(name==5){
        inputnum(5);
    }else if(name==6){
        inputnum(6);
    }else if(name==7){
        inputnum(7);
    }else if(name == 8){
        inputnum(8);
    }else if(name == 9){
        inputnum(9);
    }else if(name == 0){
        inputnum(0);
    }else if(name == '+'){
        inputsign('+');
    }else if(name == '-'){
        inputsign('-');
    }else if(name =='*'){
        inputsign('*');
    }else if(name == '/'){
        inputsign('/');
    }else if(name=='=' | name=='Enter'){
        compute();
    }else if(code === 8){
        backspace();
    }else{
        alert("Error: code entered wrong");
        reset();
    }
},false);




























// alert(currentvalue);
// alert(lastvalue);
// alert(currentsign);
// alert(lastsign);
// alert(currentResult);

// function sumnum() {
//     sign="+";
//     appendproblem(sign);
//     lastvalue = currentvalue;
//     currentvalue = "0";
//     lastvalue = parseInt(lastvalue) + parseInt(currentvalue);
// }
// function diffnum(){
//     sign="-";
//     appendproblem(sign);
//     valueResult = parseInt(lastvalue) - parseInt(currentvalue);
//     lastvalue = valueResult;
//     currentvalue = "0";
// }
// function divnum(){
//     sign="/";
//     appendproblem(sign);
//     valueResult = parseInt(lastvalue) / parseInt(currentvalue);
//     lastvalue = valueResult;
//     currentvalue = "0";
// }
// function pronum(){
//     sign="*";
//     appendproblem(sign);
//     valueResult = parseInt(lastvalue) * parseInt(currentvalue);
//     lastvalue = valueResult;
//     currentvalue = "0";
// }


// function compute(){
//     if(sign=="+"){
//         valueResult = parseInt(lastvalue) + parseInt(currentvalue);
//     }
//     else if(sign=="-"){
//         valueResult = parseInt(lastvalue) - parseInt(currentvalue);
//     }
//     document.getElementById("result-display").innerText = "= "+valueResult;
// }