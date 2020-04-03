const message = document.querySelector(".message");
const button = document.querySelector("button");
const gameArea = document.querySelector(".gameArea");

let playArea = {};
playArea.inPlay = false;

messenger("Click Start to Begin");

button.addEventListener("click", function(){
    if(!playArea.inPlay) {
        playArea.inPlay = true;
        button.style.display = "none";
        messenger("Click the circles as quickly as you see them");
        playArea.timer = setTimeout(myBox, randomN(2000));
    }
})

function showBox() {
    start = new Date().getTime();
    playArea.timer = setTimeout(myBox, 2000); //add a timer property to playArea and set a timeout so that myBox is executed every 3 seconds
}

function myBox() {
    let div = document.createElement("div");
    div.style.backgroundColor = getColor();
    div.style.width = randomN(120)+ 40 + "px";
    div.style.height = randomN(120)+ 40 + "px";
    div.style.borderRadius = "50%";
    div.style.position = "relative";
    div.style.top = randomN(500) + "px";
    div.style.left = randomN(300) + "px";

    div.addEventListener("click", clicked);
    div.start = new Date().getTime();
    gameArea.appendChild(div);
}

function clicked(e) {
    let end = new Date().getTime();
    let start = e.target.start;
    let duration = (end-start)/1000;
    messenger(`It took ${duration}s to click the circle.`);
    clearTimeout(playArea.timer);
    gameArea.children[0].remove(); //remove circle after it's been clicked - it's the first and only child of gameArea
    playArea.timer = setTimeout(myBox, randomN(2000));
}

function getColor() {
    function subColor() {
        let hex = "0" + randomN(255).toString(16); //turns number into hexadecimal values
        return ("0"+ String(hex)).substr(-2); //ensure that it always returns 2 digits, and attach 0 in front of single digit numbers
    }
    return "#" + subColor() + subColor() + subColor();
}

function randomN(num) {
    let tempVal = Math.floor(Math.random() * num);
    return tempVal;
}

function messenger(msg) {
    message.innerHTML = msg;
}
