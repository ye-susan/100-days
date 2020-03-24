const testArray = ["JavaScript (JS) is a fun programming language to learn.", "JavaScript is a multi-paradigm, single-threaded, dynamic language."];

const message = document.querySelector(".message");
const playerText = document.querySelector("textarea");
const button = document.querySelector("button");

let startTime, endTime;

button.addEventListener("click", function(){
    if (this.innerText == "Start") {
        playerText.disabled = false;
        playerText.innerText = "";
        playGame();
    } else if (this.innerText == "Done") {
        playerText.disabled = true;
        button.innerText = "Start";
        endGame();
    }
})

const playGame = () => {
    let ranNumber = Math.floor(Math.random() * testArray.length);
    message.innerText = testArray[ranNumber];
    let date = new Date();
    startTime = date.getTime();
    button.innerText = "Done";
}

const compareWords = (str1, str2) => {
    let word1 = str1.split(" ");
    let word2 = str2.split(" ");
    let correctCount = 0;
    word1.forEach(function(item, index) {
        if(item == word2[index]){
            correctCount++;
        }
    })
    return correctCount;
}

const endGame = () => {
    let date = new Date();
    endTime = date.getTime();
    let totalTime = ((endTime-startTime)/1000);  // total seconds spent on game
    let str = playerText.value;

    //count words
    let wordCount = wordCounter(str);

    //divide total time words/per minute
    let speed = Math.round((wordCount/totalTime)*60);

    //output final message to player
    let finalMessage = `You typed at ${speed} words per minute`;
    
    //check for accuracy
    let testWordCount = message.innerText.split(" ").length;
    let correctlyTyped = compareWords(message.innerText, str);

    finalMessage += `<br> ${correctlyTyped} words out of ${testWordCount} words`;
    if (correctlyTyped == testWordCount) {
        finalMessage += `<br> Great job!`;
    }
    message.innerHTML = finalMessage;
}

const wordCounter = (strWords) => {
    let response = strWords.split(" ").length;
    if (strWords.length == 0){
        return 0;
    }
    return response;
}