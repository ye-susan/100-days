const myForm = document.querySelector("form");
const inputs = document.querySelectorAll(".inputs");
const errors = document.querySelectorAll(".error");

const required = ["email", "username"];

myForm.addEventListener("submit", validation);

function validation(e) {
    e.preventDefault();
    let data = {};

    inputs.forEach( function (elemt) {
        let tempName = elemt.getAttribute("name");
        console.log(tempName);
        if(tempName != null) {
            elemt.style.borderColor = "#ddd";
            if(elemt.value.length == 0 && required.includes(tempName)){
                addError( elemt, "Required Field", tempname);
            }
            data[tempName] = elemt.value;
        }
    }) 
}

function addError (elemt, msg, fieldName) {
    let temp = elemt.nextElementSibling;
    temp.classList.remove("hide");
    temp.textContent = ` ${fieldName.toUpperCase()} ${msg}`;
    
    elemt.style.borderColor = "red";
    elemt.focus(); //built-in method to focus on the specified element, for text boxes, the cursor will focus on those text areas if it does not meet the requirements
}