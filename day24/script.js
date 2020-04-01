const message = document.querySelector(".message");
const gameArea = document.querySelector(".gameArea");
const button = document.querySelector("button");

const gameColors = ["pink", "skyblue","lightgreen", "palegoldenrod"];
let gamePattern = [];
let userPattern = [];
let inPlay = false;
let playSeq = 2; //Sequence of pattern gets longer as user continues to correctly match pattern

window.addEventListener("load", setup);
button.addEventListener("click", function() {
    if (!inPlay) {
        player();
    }
})

function player() {
    button.disabled = true;
    messenger(`Match Pattern: This is level ${playSeq-1}`);
    gamePattern = [];
    userPattern = [];
    runSequence(playSeq);
}

function runSequence(num) {
    let squares = document.querySelectorAll(".box");
    num--;
    if (num < 0) {
        inPlay = true;
        return;
    }
    let randomNumber = Math.floor(Math.random() * gameColors.length);
    gamePattern.push(gameColors[randomNumber]);
    squares[randomNumber].style.opacity = "1";
    squares[randomNumber].style.transform = "scale(1.3)";
    setTimeout(function() {
        squares[randomNumber].style.opacity = "0.5";
        squares[randomNumber].style.transform = "scale(1.0)";
        setTimeout(function() {
            runSequence(num);
        },100);
    }, 500);
}

function setup() {
    for(let x = 0; x < gameColors.length; x++) {
        let div = createEle("div");
        div.style.backgroundColor = gameColors[x];
        div.classList.add("box");
        div.style.opacity = "0.5";
        div.myColor = gameColors[x]; 
        div.addEventListener("click", checkAnswer);
        gameArea.appendChild(div);
    }
}

function checkAnswer(e) {
    if (inPlay) {
        let el = e.target;
        userPattern.push(el.myColor);
        el.style.opacity="1";
        setTimeout(function(){
            el.style.opacity = "0.5";
        }, 500);
        if(userPattern.length == gamePattern.length){
            inPlay = false;
            endGame();
        }
    }
}

function endGame() {
    button.disabled = false;
    if (userPattern.toString() == gamePattern.toString()) {
        playSeq++;
        messenger("Correct! Press Start for a new level. ")
    } else {
        messenger("Try again. Restarting from level 1.")
        playSeq = 2;
    }
}

function createEle(eleType) {
    let ele = document.createElement(eleType);
    return ele;
}

function messenger (msg) {
    message.innerText = msg;
}