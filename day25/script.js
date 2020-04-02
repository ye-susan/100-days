const playArea = {};
const player = {};
let gameObj;
let time; 
let highestScore = 0;

const data = {"data":[
     {"icon":"🐷","value":10},{"icon":"🐶","value":30},{"icon":"🐰","value":50},{"icon":"🐥","value":70},{"icon":"🐮","value":75},{"icon":"🐹","value":50},{"icon":"🐒","value":60},{"icon":"🐨","value":40},{"icon":"🦄","value":100},{"icon":"🐝","value":-100},{"icon":"🐊","value":-150},{"icon":"🐍","value":-50}, {"icon":"🦝","value":-20}]};

playArea.stats = document.querySelector(".stats");
playArea.main = document.querySelector(".main"); //opening game page
playArea.game = document.querySelector(".game"); //main game area
playArea.btns = Array.from(document.querySelectorAll(".btn"));//transforming nodelist into an array
playArea.page = Array.from(document.querySelectorAll(".page"));
msg = document.querySelector(".msg");

document.addEventListener("DOMContentLoaded", getData); 
//looping thru
playArea.btns.forEach(function (btnItem){
    btnItem.addEventListener("click", handleButton);
})

//grab icons for the game
function getData() {
    playArea.main.classList.add("visible");
    gameObj = data.data; //function ud(data) {
    buildBoard();
    //fetch method to get data from the url, instead of using the 'data' object above
}

function updateScore() {
    playArea.scorer.innerHTML = `Score: ${player.score}, Lives Remaining: ${player.items}`;
}

function buildBoard() {
    playArea.scorer = document.createElement("span");
    playArea.scorer.innerHTML = "Press Button to Start";
    playArea.stats.appendChild(playArea.scorer);

    let rows = 4;
    let cols = 4;
    let count = 0; //count how many items we have 
    playArea.game.style.width = cols * 100 + (cols*2);
    playArea.game.style.margin = "auto";
    
    //building out the elements (each cell in the table)
    for (let i=0; i < rows; i++) {
        let divMain = document.createElement("div");
        divMain.setAttribute("class", "row");
        divMain.style.width = "100%"; //set to fill up the entire "cols * 100 + (cols*2)" space   
        for (let j=0; j < cols; j++) {
            let div = document.createElement("div");
            div.setAttribute("class", "pop");
            count++
            div.innerText = count; //displays the number of the cell
            div.count = count; //lets us know which div was clicked
            divMain.appendChild(div);
        }
        playArea.game.appendChild(divMain);
    }
}

function handleButton(e) {
    if (e.target.classList.contains("newGame")){
        startGame();
    }
}

function startGame(){
    player.score = 0;
    player.items = 3;

    msg.style.display = "none";

    playArea.main.classList.remove("visible");
    playArea.game.classList.add("visible");

    player.gameOver = false;
    startPop();
    updateScore();
}

function randomUp() { //randomize which cell is pop up next
    const pops = document.querySelectorAll(".pop");
    const index = Math.floor(Math.random()*pops.length);
    
    if (pops[index].count == playArea.last){
        return randomUp();
    }
    playArea.last = pops[index].count;
    return pops[index];
}

function startPop() {
    let newPop = randomUp();
    newPop.classList.add("active");
    newPop.addEventListener("click", hitPop);
    const time = speedUp();
    const val = Math.floor(Math.random()* gameObj.length);

    newPop.old = newPop.innerText;
    newPop.value = gameObj[val].value;

    newPop.innerHTML = gameObj[val].icon + "<br>" + gameObj[val].value; //added the icon and the corresponding points to each cell, based on the random value of val
    playArea.inPlay = setTimeout(function(){
        newPop.classList.remove("active");
        newPop.removeEventListener("click", hitPop);
        newPop.innerText = newPop.old;
        
        //checking if player missed a positive value item, will cost them a life
        if(newPop.value > 0) {
            player.items--;
            updateScore();
        }
        if(player.items <= 0) {
            gameOver();
        }
        if(!player.gameOver){
            startPop();
        }
    }, time);
}

function gameOver() {
    player.gameOver = true;
    playArea.main.classList.add("visible");
    playArea.game.classList.remove("visible");
    document.querySelector(".newGame").innerText = "Replay?";
    if (player.score > highestScore) {
        highestScore = player.score;
    }
    msg.innerHTML = `Highest Score was ${highestScore}.`
    msg.style.display = "block";
}

function hitPop(e){
    let newPop = e.target;
    player.score += e.target.value;
    updateScore();
    newPop.classList.remove("active");
    newPop.removeEventListener("click", hitPop);
    newPop.innerText = newPop.old;
    //remove timeout function set in line 104, to end the click
    clearTimeout(playArea.inPlay);
    if (!player.gameOver) {
        startPop();
    }
}

function speedUp() {   
    if (player.score < 500) {
        time = Math.round(Math.random()*(1500) + 1000); //range of 1.0s to 2.5s
        return time;
    } 
    if ((player.score >= 500) && (player.score < 1000)){
        time = Math.round(Math.random()*(1000) + 1000); //range of 1.0s to 2.0s
        return time;
    }
    if ((player.score >= 1000) && (player.score < 2000)){
        time = Math.round(Math.random()*(1000) + 750); //range of 0.75s to 1.75s
        return time;
    } 
    if ((player.score >= 2000) && (player.score < 3000)){
        time = Math.round(Math.random()*(500) + 750); //range of 0.75s to 1.25s
        return time;    
    } 
    if  ((player.score >= 3000) && (player.score < 4000)){
        time = Math.round(Math.random()*(50) + 750); //range of 0.75s to 0.80s
        return time;    
    }
    if (player.score >= 4000) {
        time = Math.round(Math.random()*(200) + 650); //range of 0.65s to 0.75s
        return time;
    }
}