const button = document.querySelectorAll("button");
const output = document.querySelector(".output");
const bill = document.querySelector("input");
let tip = 0;
let total = 0;

button[0].addEventListener("click", function(){
    tip = (bill.value * 0.15).toFixed(2); //make sure only 2 decimal places
    total = (bill.value *1.15).toFixed(2);
    output.textContent = `A 15% tip would be $${tip}, making your total $${total}.`;
});


button[1].addEventListener("click", function(){
    tip = (bill.value * 0.2).toFixed(2); //make sure only 2 decimal places
    total = (bill.value *1.2).toFixed(2);
    output.textContent = `A 20% tip would be $${tip}, making your total $${total}.`;
});