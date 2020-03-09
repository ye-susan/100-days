
let form = document.getElementById("message-form");
let message = document.getElementById("message");
let submitBtn = document.getElementById("submitBtn");
let msgContent = document.getElementsByClassName("message-content")[0];
let feedback = document.getElementsByClassName("feedback")[0];

//set up submit button  - prevent it from submitting to form and get user's inputs
form.addEventListener('submit', function(input){
    input.preventDefault();

    //if input is '', show feedback message for 2s
    if (message.value == '') {
        feedback.classList.add('show');
        //if setTimeout was not set, the message just shows indefinitely, even if a valid input was entered
        setTimeout(function(){
            feedback.classList.remove('show');
        }, 2000)
    }
    //else, display message that user inputted
    else {
        msgContent.textContent = message.value;
        message.value = '';
    }

})


/*
New Things Learned

1. preventDefault() 
    is a method that cancels the event if it is cancelable, meaning that the default action belonging to the event won't occur
    --> clicking on submit will prevent it from submitting a form
2. setTimeout()
    is a method that calls a function or evaluates an expression after a number of ms.
    Syntax: setTimeout (function, milliseconds, param1, param2, ...)
*/
