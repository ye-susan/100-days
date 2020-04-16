const alphabet = document.querySelector(".alphabet");
const alphabetLetters = document.querySelectorAll(".alphaLetter");
const message = document.querySelector(".message");
const blank = document.querySelector(".blank");
const guesses = document.querySelector(".guesses");
const startButton = document.querySelector("button");

const wordList = ["CODING", "GAME", "JAVASCRIPT", "GITHUB", "HYPERTEXT"];
let wordBlanks = [];
let word;
let win = 0;
let loss = 0;
let correctCount, incorrectCount;

message.innerHTML = "Guess the word. You'll be given at least 5 guesses, or the length of the word minus 2 guesses for words longer than 7 characters."

startButton.addEventListener("click", startGame);
alphabetLetters.forEach(function(aL){
    aL.addEventListener("click", checker);
});

function startGame() {
    message.innerHTML = "";
    if (wordList.length > 0){
        wordList.sort(function(){
          return 0.5 - Math.random();  
        })
        word = wordList.pop();
        word = word.split("");
        console.log(word);
        alphabet.classList.remove("hide");
        if(word.length <= 7) {
            incorrectCount = 5;
        } 
        if(word.length > 7) {
            incorrectCount = word.length-2;
        }
        
        correctCount = 0;
        buildBlanks(word);
    } else{
        endOfList();
    }
}

function buildBlanks(word){
    word.forEach(element => {
        let blankdiv = document.createElement("div");
        blankdiv.innerHTML = "__";
        blankdiv.classList.add("blankWord");
        blank.appendChild(blankdiv);
    });
    startButton.classList.add("hide");
    guesses.innerHTML = `You have ${incorrectCount} guesses left.`;
    alphabetLetters.forEach(l => l.classList.remove("hide"));
}

function checker(e){
    let targetL = e.target.innerHTML;

    e.target.classList.add("hide");

    if(word.includes(targetL)){
     
        let tempArr = word.reduce(function(tempArr, w, index){
            if(targetL === w){
                tempArr.push(index);
            }
            return tempArr;
        }, []);
        
        tempArr.forEach(function(i){
            blank.children[i].innerHTML = word[i];
            correctCount++;
            console.log(correctCount);
        })
        
        if (correctCount === word.length){
            win++;            
            guesses.innerHTML = winLossMsg();
            message.innerHTML = `Play again?`;
            startButton.classList.remove("hide");
            blank.innerHTML = "";
        }
    }
    if(!(word.includes(targetL))){
        incorrectCount--;
        guesses.innerHTML = `You have ${incorrectCount} guesses left.`;
    }
    if(incorrectCount <= 0){
        loss++;
        gameOver();
    }
    if(wordList.length === 0){
        startButton.classList.add("hide");
        message.innerHTML = "";
        setTimeout(function(){
            endOfList();
        }, 2000);
    }
}

function gameOver(){
    message.innerHTML = "Game Over";
    blank.innerHTML = "";
    guesses.innerHTML = winLossMsg();
    startButton.classList.remove("hide");
}

function endOfList() {
    startButton.classList.add("hide");
    guesses.innerHTML = "";
    blank.innerHTML = "";
    alphabet.innerHTML = "";
    if(loss < win){
        message.innerHTML = `Hurray! You've completed the entire word list!`;
        message.classList.add("win");
    } 
    if (win < loss){
        message.innerHTML = `That's the end of the word list. Better luck next time!`;
        message.classList.add("loss");
    }       
}

function winLossMsg(){
    let time = win === 1 ? 'time' : 'times';
    let game = loss === 1 ? 'game' : 'games';
    return `You've won ${win} ${time} and loss ${loss} ${game}.`;
}