const gameArea = document.querySelector(".game");
const button = document.querySelector(".start");
const message = document.querySelector(".message");
const inputDigits = document.querySelector(".userDigits");
let gamePlay = false;
let guessCount = 0;


button.addEventListener("click", function(){
    if(!gamePlay) {
        gamePlay = true;
        guessCount = 0; //reset score when game resets if more than one round is played
        gameArea.innerHTML = "";
        createDigit(inputDigits.value);
        message.innerHTML = "Guess the Combination";
        button.innerHTML = "Check";
    } else {
        guessCount++;
        message.innerHTML = "Guesses " + guessCount;
      
        const numbers = document.querySelectorAll(".num");
        let winCondition = 0;
        for (let i = 0; i < numbers.length; i++) {
            if(numbers[i].value == numbers[i].correct){
                numbers[i].style.backgroundColor = "green";
                numbers[i].style.color = "white";
                winCondition++;
            } else {
                let color = (numbers[i].value < numbers[i].correct) ? "blue" : "red";
                numbers[i].style.backgroundColor = color;
                numbers[i].style.color = "black";
            }
            if (winCondition == numbers.length) {
                gameEnd();
            }
        }
    }
}) 

const createDigit = (num) => {
    for (let i = 0; i < num; i++) { //need to create 4 digits
        let el = document.createElement("input");
        el.setAttribute("type", "number"); //make el a number type
        el.max = 9; //max and min values for the digit
        el.min = 0;
        el.size = 1; //how many digits to have
        el.order = i; //not being used but could use if we chose a different order, The order property specifies the order of a flexible item relative to the rest of the flexible items inside the same container.
        el.classList.add("num");

        el.correct = Math.floor(Math.random() * 10); //create a 'correct' random number to assign to this digit
        el.value = 0;
        el.style.width = "50px";
        gameArea.appendChild(el);
    }
}

const gameEnd = () => {
    message.innerHTML = "You solved the combo in " + guessCount + " guesses.";
    gamePlay = false;
    button.innerHTML = "Restart Game";
}
