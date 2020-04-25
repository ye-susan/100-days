const calculator = document.querySelector(".calculator");
const hist = document.querySelector(".hist");

const keys = [["1","2","3","+"], ["4","5","6","-"], ["7","8","9","*"],["C","0","=","/"]];
const operators = ["+", "-", "*", "/"];
let output; 
let histArr = [];

document.addEventListener("DOMContentLoaded", function() {
    output = document.createElement("div");
    output.innerHTML = "0";
    output.classList.add("output");
    calculator.appendChild(output);
    
    for(let y = 0; y < keys.length; y++) {
        let div = document.createElement("div");
        div.classList.add("row");
        for(let x = 0; x < keys[y].length; x++) {
            let btn = document.createElement("div");
            btn.innerHTML = keys[y][x];
            btn.classList.add("btn");
            btn.addEventListener("click", btnHit);
            div.appendChild(btn);
        }
        calculator.appendChild(div);
    }
})

function btnHit(e) {
    let value = this.innerText;
    let cal = output.innerText;
    
    if(cal == "0") {
        cal = "";
    }
    
    if(value == "=") {
        cal = eval(cal); 
    } else {
        let lastChar = cal.substring(cal.length-1);

        if(operators.includes(value)) {
            if (operators.includes(lastChar)){
                cal = cal.substring(0, cal.length-1);
            } else {
                cal = eval(cal); //eval calculates the expression
            } 
        }  
        cal = cal + value;  
    }
    if (value == "C") {
        cal = "0";
    }    
    output.innerText = cal;
}