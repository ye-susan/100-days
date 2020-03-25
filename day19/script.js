const input = document.querySelector("input");
const button = document.querySelector("button");
const message = document.querySelector(".message");
const replay = document.querySelector(".inputReplay");

let answerArray = ["Probably", "Very likely", "Maybe, maybe not", "I'm not sure about that", "Sure thing"];

// const answerQ = (e) => {
//     //find way to output message if no question is asked

//     //
//     let ans = Math.floor(Math.random()* answerArray.length);
//     replay.innerText = input.value;
//     message.innerHTML = "<br>" + answerArray[ans];
//     console.log(input.value);
//     input.value = "";
// }


    button.addEventListener("click", function(){
        let ans = Math.floor(Math.random()* answerArray.length);
        replay.innerText = input.value;
        if (input.value !== ""){

            message.innerHTML = answerArray[ans];
            console.log(input.value);
            input.value = "";
        } else {
            message.innerHTML = "Please ask a question"
        }
    });