let block;
let funcListElement;
let funcArray = [];
const movementArray = ["right", "left", "up", "down"];
let instructions = document.createElement("div");

if (funcListElement === undefined) {
    instructions.textContent = "Press any arrow keys to queue the path that the block will travel. If you made a mistake, simply click on the direction to erase that step. Press 'c' for random color change, and 'r' for random direction to add to the queue. Press 'enter' or space when you're finished setting the path.";
    instructions.style.width = "300px";
    instructions.style.height = "150px";
    instructions.style.backgroundColor = "white";
    instructions.style.lineHeight = "15px";
    instructions.style.textAlign = "center";
    instructions.style.position = "absolute";
    instructions.style.top = "200px";
    instructions.style.left = "350px";

    document.body.appendChild(instructions);    
    setTimeout(function () {
        document.body.removeChild(instructions);
    }, 15000);
} 


document.addEventListener("DOMContentLoaded", function(){
    block = document.createElement("div");
    
    block.textContent = 'Hello World';

    block.style.width = "100px";
    block.style.height = "100px";
    block.style.backgroundColor = "rgb(88, 156, 14)" ;
    block.style.color = "white";
    block.style.lineHeight = "100px";
    block.style.textAlign = "center";
    block.style.position = "absolute";
    block.style.top = "100px";
    block.style.left = "150px";

    document.body.appendChild(block);

    funcListElement = document.createElement("div");
    document.body.appendChild(funcListElement);
})

document.addEventListener("keydown", function(e) {
    e.preventDefault(); //although we're not anticipating needing this, just a good idea to add it anyway
    let keyC = e.keyCode;
    switch (keyC) {
        case 37: 
            addFunc("left");
            break;
        case 39:
            addFunc("right");
            break;
        case 38:
            addFunc("up");
            break;
        case 40:
            addFunc("down");
            break;
        case 67: 
            block.style.backgroundColor = randomColor();
            break;
        case 82:
            let randomMove = movementArray[Math.floor(Math.random()*movementArray.length)];
            addFunc(randomMove);
        case (13 || 32): //13 = enter, 32 = space, 
            moveBlock();
            break;
    }
})

const addFunc = (value) => {
    let sequence = document.createElement("span");
    sequence.textContent = "+ "+ value;
    sequence.style.padding = "10px";
    sequence.style.border = "1px solid #ddd";
    sequence.addEventListener("mouseover", function(){
        this.style.backgroundColor = "red";
        this.style.color = "white";
    })
    sequence.addEventListener("mouseout", function(){
        this.style.backgroundColor = "white";
        this.style.color = "black";
    })
    sequence.addEventListener("click", function(){
        let currentIndex = funcArray.indexOf(this);
        let tempRemove = funcArray.splice(currentIndex, 1); //remove from array
        funcListElement.removeChild(this); //remove element from the visible list
    })

    funcListElement.appendChild(sequence);
    funcArray.push(sequence);
}

const moveBlock = () => {
    if (funcArray.length > 0) {        
        let currentPosition = block.getBoundingClientRect(); //give us current coordinates of the block
        let element = funcArray.shift();
        let item = element.textContent.replace("+ ","");
        funcListElement.removeChild(element);
        block.innerHTML = "Move: " + item;
        if (item === "left") {
            block.style.left = currentPosition.left - currentPosition.width + "px";
        }
        if (item === "right") {
            block.style.left = currentPosition.left + currentPosition.width + "px";
        }
        if (item === "down") {
            block.style.top = currentPosition.top + currentPosition.height + "px";
        }
        if (item === "up") {
            block.style.top = currentPosition.top - currentPosition.height + "px";
        }
        setTimeout(moveBlock, 500);
    } else {
        block.innerHTML = "Set Path";  //if we've finished running all the commands
        return; //so we don't execute anything else on this moveBlock function
    }
}

const randomColor = () => {
    let randomC = Math.random().toString(16).substr(-6); // return the last 6 digits of the random float
    return "#" + randomC;
}


/* Don't need these anymore, since we're moving the block inside moveBlock()

const goLeft = () => {
    let temp = block.offsetLeft;
    temp -= 50;
    block.style.left = temp + "px";
}
const goRight = () => {
    let temp = block.offsetLeft;
    temp += 50;
    block.style.left = temp + "px";
}
const goUp = () => {
    let temp = block.offsetTop;
    temp -= 50;
    block.style.top = temp + "px";
}
const goDown = () => {
    let temp = block.offsetTop;
    temp += 50;
    block.style.top = temp + "px";
}
*/
