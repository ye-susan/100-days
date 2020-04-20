const score = document.querySelector(".score");
const gameArea = document.querySelector(".gameArea");
const gameMessage = document.querySelector(".gameMessage");

document.addEventListener("keydown", pressOn);
document.addEventListener("keyup", pressOff);
gameMessage.addEventListener("click", start);

let keys = {
    space:false
}
let player = { 
    score: 0,
    speed: 2,
    inplay: false
};

function start(){
    score.classList.remove("hide");
    gameMessage.classList.add("hide");
    if (!player.inplay) {
        gameArea.innerHTML = "";
        player.targets = 20;
    
        makeFlower();    
        player.inplay = true;
        player.ready = true;
        player.water = 5;
        player.activeWater = 0;
        player.waterScore = 0;
        player.score = 2000; 
        player.bucket = document.createElement("div");
        player.bucket.setAttribute("class", "bucket");
        gameArea.appendChild(player.bucket);
        window.requestAnimationFrame(playGame);
        player.x = player.bucket.offsetLeft; 
        player.y = player.bucket.offsetTop;
    }    
}

function playGame() {
    if(player.inplay){
        moveWater(); 
        if (keys.space){
            makeWater();
        }
        if (keys.ArrowUp && player.y > 50) {
            player.y -= player.speed;
        }
        if (keys.ArrowDown && player.y < 200) {
            player.y += player.speed;
        }
        if (keys.ArrowRight && player.x < (gameArea.offsetWidth - 10)) {
            player.x += player.speed;
        }
        if (keys.ArrowLeft && player.x > 0) {
            player.x -= player.speed;
        }

        player.x += (player.speed * 3); //will always keep bucket moving along
        //to prevent it from running off the screen area
        if (player.x > gameArea.offsetWidth) {
            player.x = 0;
            player.score -= 100;
        }

        if (player.score <0){
            endGame();
        }

        player.bucket.style.left = player.x + "px";
        player.bucket.style.top = player.y + "px";
        window.requestAnimationFrame(playGame);
        score.innerHTML = `Score: ${player.score} <br> Targets Left: ${player.targets+1}`;
    }   
}

function pressOn(e) {
    e.preventDefault();
    let tempKey = (e.key == " ") ? "space": e.key ; 
    keys[tempKey] = true;
}

function pressOff(e) {
    e.preventDefault();
    let tempKey = (e.key == " ") ? "space": e.key ; 
    keys[tempKey] = false;
}

function makeFlower(){
    player.targets--; 
    if (player.targets < 0){
        endGame();    
    } else {
        player.flower = document.createElement("div");
        player.flower.setAttribute("class", "flower");
        player.flower.style.width = Math.floor(Math.random() * 200) + 20 + "px"; //
        player.flower.style.height = Math.floor(Math.random() * 200) + 150 + "px"; 
        player.flower.style.left = Math.floor(Math.random() * (gameArea.offsetWidth - 200)) + 100 + "px"; 
        gameArea.appendChild(player.flower);
    }
}

function makeWater(){
    if(player.ready && (player.activeWater < player.water)) {
        player.score -= 300;
        player.activeWater++;
        player.waterScore ++;

        let water = document.createElement("div");
        water.classList.add("water");
        water.y = player.y;
        water.x = player.x;
        water.style.left = water.x + "px";
        water.style.top = water.y + "px";
        gameArea.appendChild(water);
        player.ready = false;
        setTimeout(function (){
            player.ready = true;
        }, 500);
    }
}

function moveWater() {
    let waters = document.querySelectorAll(".water");
    waters.forEach(function(w){
        w.y += 5;
        w.style.top = w.y + "px";
        if(w.y > 1000){ 
            player.activeWater--;
            w.parentElement.removeChild(w);
        }
        let flowers = document.querySelectorAll(".flower");
        flowers.forEach(function(f){
            if(isCollide(w, f)){
            player.score += 2000;
            player.activeWater--;
            f.parentElement.removeChild(f);
            w.parentElement.removeChild(w);

            let num = Math.floor(Math.random() * 3) + 1;
            for (let i = 0; i < num; i++){
                makeFlower(); 
                }
            }
        })
    })
}

function isCollide(a, b) {
    let aRect = a.getBoundingClientRect();
    let bRect = b.getBoundingClientRect();
    return !(
        (aRect.bottom < bRect.top) || (aRect.top > bRect.bottom) || (aRect.right < bRect.left) || (aRect.left > bRect.right)
    )
}

function endGame() {
    player.inplay = false;
    gameMessage.classList.remove("hide");
    gameMessage.innerHTML = "Play Again?";
}