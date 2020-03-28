const message = document.querySelector(".message");
const guess = document.querySelector("input");
const button = document.querySelectorAll("button");
const level = document.querySelectorAll(".level");
const start = document.querySelector(".start");
const easy = document.querySelector(".easy");
const med = document.querySelector(".med");
const hard = document.querySelector(".hard");
 
const easyWords = ["website", "html", "document","data"];
const medWords = ["javascript", "algorithms", "theories", "computers", "science"];
const hardWords = ["initialization", "currying", "object-oriented", "multi-paradigm"];

let inPlay = false;
let origWord = "";
let scrambled = "";
let score = 0;
let arr = [];
let indexTracker = [];

//MAIN
level.forEach(function(lev) {
    lev.addEventListener("click", function(){
        if (lev.innerHTML == "Easy"){
            arr = easyWords;
        } else if (lev.innerHTML == "Medium") {
            arr = medWords;
        } else if (lev.innerHTML == "Hard") {
            arr = hardWords;
        }
        origWord = createWord(arr);

        level.forEach(function(l) {
            l.classList.add("hidden");
        })
        
        start.classList.toggle("hidden");
    
        button.forEach(function(b){
            b.addEventListener("click", function(){
                if (!inPlay) {
                    inPlay = true;
                    score = 0;
                    start.innerHTML = "Guess";
                    guess.classList.toggle("hidden");
                    scrambled = (scrambleWord(origWord.split(""))).join("");
                    message.innerHTML = scrambled;
                } else {
                    let tempGuess = guess.value;
                    score++;
                    if (tempGuess === origWord) {
                        inPlay = false;
                        if (score > 1) {
                            message.innerHTML = `Correct! The word was <strong>${origWord}</strong>. It took ${score} guesses.`
                        } else {
                            message.innerHTML = `Correct! The word was <strong>${origWord}</strong>. It took ${score} guess.`
                        }
                        start.innerHTML = "Start";
                        origWord = createWord(arr);

                        guess.classList.toggle("hidden");
                    } else {
                        message.innerHTML = `Try again: ${scrambleWord(origWord.split("")).join("")}`;
                    }
                }
            })
        }) 
    })
})


const createWord = () => {
    let randomIndex;
    if(arr.length > 0) {
        randomIndex = Math.floor(Math.random() * arr.length);
    } else {
        gameEnd();
    }
    
    let tempWord = arr[randomIndex];
    indexTracker.push(randomIndex);
    arr.splice(randomIndex, 1);
    return tempWord;
}

const scrambleWord = (array) => {
    for (let i = array.length-1; i > 0 ; i--){
        let temp = array[i];
        let j = Math.floor(Math.random() * (i+1));
        array[i] = array[j];
        array[j] = temp;
    }
    return array;
}

const gameEnd = () => {
    message.innerHTML = `Congrats! You've completed the this level! Replay?`;
    guess.classList.toggle("hidden");
}
