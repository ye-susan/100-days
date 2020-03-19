const scoreboard = document.querySelector(".scoreboard");
const message1 = document.querySelector(".message1");
const message2 = document.querySelector(".message2");
const buttons = document.querySelectorAll("button");
let score = [0, 0]; //[0] is player, [1] is computer
const coinArray = ["Heads", "Tails"];

const tossCoin = (e) => {
    let toss = Math.floor(Math.random()*2);
    let playerGuess = e.target.innerText; //target lets us know whether it was heads or tails
    let computerGuess = coinArray[toss];
    
    message1.innerHTML = `Computer has selected ${computerGuess}. <br>`;

    if (playerGuess === computerGuess) {
        score[0]++;
        message2.textContent = `You selected ${playerGuess}, you win.`
    } else {
        score[1]++;
        message2.textContent = `Computer wins.`
    }

    scoreboard.textContent = `Player has: ${score[0]} points, Computer has: ${score[1]} points.`
}

buttons.forEach((b) => {
    b.addEventListener("click", tossCoin);
});
