const score = document.querySelector(".score");
const gameAreaEle = document.querySelector(".gameArea");
const gameArea = gameAreaEle.getBoundingClientRect();
const msg = document.querySelector(".msg");
const startBtn = document.querySelector(".startBtn");

const timeLimit = 60000;
let inPlay = false;
let time, timeOut, timeDisplay;
let box = {};
let actIndex;
let squares = [];
let gamebox = {
    x: Math.floor(gameArea.width/100),
    y: Math.floor(gameArea.height/100)
}
let player = {
    speed: 100, 
    square: 1, 
    score: 0
}

startBtn.addEventListener("click", build);
document.addEventListener("keyup", function(e){
    const allowKey = {
        37: "left",
        38: "up",
        39: "right",
        40: "down"
    }
    if (allowKey[e.keyCode]) {
        handleKeyPress(allowKey[e.keyCode]);
    }
});

function build() {  
    inPlay = true;
    time = timeLimit;
    startBtn.classList.add("hide");
    msg.innerHTML = "";
    timeOut = setTimeout(endGame, timeLimit);
    timeDisplay = setInterval(displayTime, 1000);

    let counter = 1;
    player.score = 0;
    player.square = 1;
    score.innerHTML = player.score;

    for (let y = 0; y < gamebox.y; y++){
        for (let x = 0; x < gamebox.x; x++){
            squares[counter] = document.createElement("div");
            squares[counter].innerHTML = counter;
            squares[counter].classList.add("square");
            gameAreaEle.appendChild(squares[counter]);
            counter++;
        }
    }

    box = document.createElement("div");
    box.classList.add("box");    
    box.x = gameArea.left;
    box.y = gameArea.top;
    box.style.top = box.y + "px";
    box.style.left = box.x + "px";
    gameAreaEle.appendChild(box);

    makeActive();
    makeBlueBox ();
}

function handleKeyPress(key) {
    if(key === "left" && box.x > gameArea.left){
        box.x -= player.speed;
        player.square--;
    }
    if(key === "right" && box.x < gameArea.right - box.offsetWidth){
        box.x += player.speed;
        player.square++;
    }
    if(key === "up" && box.y > gameArea.top){
        box.y -= player.speed;
        player.square -= gamebox.x;
    }
    if(key === "down" && box.y < (gameArea.bottom - box.offsetHeight)){
        box.y += player.speed;
        player.square += gamebox.x;
    }
    box.style.left = box.x + "px";
    box.style.top = box.y + "px";
    
    if(squares[player.square].classList.contains("active")){
        squares[player.square].classList.remove("active");
        squares.forEach (function (e){
            if(e.classList.contains("blueBox")){
                e.classList.remove("blueBox");
            }
        });
        makeActive();
        makeBlueBox();
        player.score++;
        score.innerHTML = player.score;
    }
    if(squares[player.square].classList.contains("blueBox")){
        endGame();
    }
}

function makeActive() {
    let randomIndex = Math.floor(Math.random() * squares.length);
    actIndex = randomIndex;
    if(randomIndex != 0 && (player.square != randomIndex)) {
        squares[randomIndex].classList.add("active");
    } else {
        makeActive();
    }
}

function makeBlueBox () {
    let randomIndex = Math.floor(Math.random() * squares.length);

    if(randomIndex != 0 && (player.square != randomIndex) && (randomIndex != actIndex)) {
        squares[randomIndex].classList.add("blueBox");
    } else {
        makeBlueBox();
    }
}

function displayTime () {
    if (time > 0 && (inPlay === true)){
        time -= 1000;
        msg.innerHTML = `Time Left: ${time/1000}`;    
    } else {
        msg.innerHTML = `Game Over`;
    }
}

function endGame() {
    inPlay = false;
    msg.innerHTML = `Game Over`;
    startBtn.classList.remove("hide");
    startBtn.innerHTML = `Restart?`;

    gameAreaEle.innerHTML = "";
    clearTimeout(timeOut);
    clearInterval(timeDisplay);
}
