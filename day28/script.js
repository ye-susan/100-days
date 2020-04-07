const wordList = ["javascript", "html", "coding", "initialize", "developer"];
let current = 0;
let startTime;

window.addEventListener("load", init);

function init() {
    let div = document.createElement("div");
    div.setAttribute("class","message");
    div.innerText = "Press Start";
    document.body.appendChild(div);

    let button = document.createElement("button");
    button.type = "button";
    button.innerText = "Start Game";
    button.addEventListener("click", start);
    document.body.appendChild(button);

    let div1 = document.createElement("div");
    div1.classList.add("game");
    document.body.appendChild(div1);
}

function start() {
    
    let tempArr = wordList.slice(0);
    current = 0;

    startTime = Date.parse(new Date());
    this.style.display = "none";
    tempArr.sort(function(a,b){
        return 0.5 - Math.random(); //50/50 chance of sorting as positive or negative, randomly sorting the wordList
    });
    wordList.sort(function(a,b){
        return 0.5 - Math.random();
    });
    /*
    sort function can also do a compare function, compare first element with second element
    will sort by each character's unicode value. Array is sorted in place, so no copy is made.
    Can also randomize order of array as items are sorted. If returning positive 1, will go in descending order; if negative 1, will sort in ascending order.
    */
    const game = document.querySelector(".game");
    tempArr.forEach(function (item){
        let temp = item.split("");
        temp.sort(function(a,b){
            return  0.5 - Math.random();
        }); //scrambling the words themselves
        
        let temp1 = temp.join("");
        let div = document.createElement("div");
        
        div.innerText = "Select"
        div.classList.add("box");
        div.word = item;

        div.addEventListener("mouseenter", function(){
            div.style.backgroundColor = "white";
            div.innerText = temp1;
        })
        div.addEventListener("mouseleave", function(){
            div.style.backgroundColor = "rgb(159, 232, 241)";
            div.innerText = "Select";
        })
        div.addEventListener("click", function(){
            if (div.word === wordList[current]){
                current++;
                this.classList.add("hidden");
                nextWord();
            } else {
                setTimeout(function(){
                    message("Try again");
                }, 500);
                message("Select this word: " + wordList[current]);
            }
            
        })
        game.appendChild(div);
    })
    nextWord();
}

function nextWord() {    
    if (current >= wordList.length) {
        let endTime = Date.parse(new Date());
        let duration = (endTime - startTime)/1000;

        document.querySelector(".game").innerHTML = "";
        document.querySelector("button").style.display = "block";
        message(`Success! It took ${duration} seconds to complete.`);
    } else {
        message("Select this word: " + wordList[current]);
    }
}

function message(output) {
    document.querySelector(".message").innerHTML = output;
}