const buttons = document.querySelectorAll("button");
const score = document.querySelector(".score")
const message = document.querySelector(".message");
const reset = document.querySelector(".reset");

let scoreCard = [0,0]; //index [0] is player, [1] is computer
let msg = "";

//initiates game, randomizes computer's selection and displays results
const playGame = (e) => {
    let playerSelection = e.target.innerText;
    let computerSelection = Math.random();
    if (computerSelection < 0.34) {
        computerSelection = 'Rock';
    } else if (computerSelection <= 0.67) {
        computerSelection = 'Paper';
    } else {
        computerSelection = 'Scissor';
    }
    let result = checkWinner(playerSelection, computerSelection);
    if (result === "Player") {
        msg = "Player wins!";
        scoreCard[0]++;
    } else if (result === "Computer"){
        msg = "Computer wins!";
        scoreCard[1]++;
    } else {
        msg = "This round was a tie."
    }

    setTimeout(function () {
        message.innerHTML = `You selected <strong>${playerSelection}</strong>, the Computer selected <strong>${computerSelection}</strong>. <br> ${msg}`;
        score.innerText = `Player: ${scoreCard[0]} points vs. Computer: ${scoreCard[1]}`
    }, 200);
    
}


const checkWinner = (player, computer) => {
    if (player == computer) {
        return "Draw";
    }
    if (player === "Rock") {
        if(computer === "Paper") {
            return "Computer";
        } else {
            return "Player";
        }
    }
    if (player === "Paper") {
        if(computer === "Scissor") {
            return "Computer";
        } else {
            return "Player";
        }
    } 
    if (player == "Scissor") {
        if (computer == "Rock"){
            return "Computer";
        } else {
            return "Player";
        }
    }
}

const resetGame = () => {
    scoreCard = [0,0];
    score.innerText = `Player: ${scoreCard[0]} points vs. Computer: ${scoreCard[1]}`;
    msg = "";
    message.innerText = "You've chosen to reset the game."
}

buttons.forEach(b => {
    if (b.textContent.includes("Reset")) {
        b.addEventListener("click", resetGame);
    } else {
        b.addEventListener("click", playGame);
    }
    
})
