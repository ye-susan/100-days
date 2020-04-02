const message = document.querySelector(".message");
const score = document.querySelector(".score");
const button = document.querySelectorAll("button");
const gamePlay = document.querySelector(".gamePlay");

let curCardValue = 0;
let scoreValue = 0;
let deck = [];
const ranks = ["A", 2, 3, 4, 5, 6 , 7, 8, 9, 10, "J", "Q", "K"]; 
const suits = ["spades", "hearts", "clubs","diams"];

for (let i = 0; i < button.length; i++) {
    button[i].addEventListener("click", playGame);
}

function playGame(e) {
    console.log("clicked");
    let temp = e.target.innerText;
    let myCard = drawCard();
    console.log(temp);
    if (temp == "Start"){
        message.innerHTML = "Higher or Lower";
        gamePlay.innerHTML = "";
        makeCard(myCard);
        toggleButtons();
        return;
    }
    if (myCard.value == curCardValue) {
        message.innerHTML = "Draw";
    } else {
        if((temp == "Higher"  && (myCard.value > curCardValue)) || ((temp == "Lower") && (myCard.value < curCardValue))) {
            scoreValue++;
            score.innerHTML = scoreValue;
            message.innerHTML = "Correct, Next?";
        } else {
            message.innerHTML = "Incorrect. Game over.";
            toggleButtons();
        }
    }
    makeCard(myCard);
}

function drawCard() {
    if(deck.length > 0) {
        let ranIndex = Math.floor(Math.random() * deck.length);
        let card = deck.splice(ranIndex, 1)[0];
        console.log(card);
        return card;
    } else {
        makeDeck()
        return drawCard();
    }
}

function makeCard(card) {
    let html1 = card.rank + "<br>&" + card.suit + ";"; //big card elemt
    let html2 = card.rank + "&" + card.suit + ";"; //tiny card elemt
    let curCards = document.querySelectorAll(".card");

    let div = document.createElement("div");
    div.setAttribute("class", "card");
    div.style.left = (curCards.length * 25) + "px"; //every new card will be 25px to the left of the prev one
    curCardValue = card.value;
    if(card.suit === "hearts" || card.suit === "diams") {
        div.classList.add("red");
    } else {
        div.classList.add("black");
    }

    let span1 = document.createElement("span"); //creating span to hold content
    span1.setAttribute("class", "tiny");
    span1.innerHTML = html2;
    div.appendChild(span1);

    let span2 = document.createElement("span");
    span2.setAttribute("class", "big");
    span2.innerHTML = html1;
    div.appendChild(span2);

    gamePlay.appendChild(div);
}

function makeDeck() {
    deck = [];
    for(let i = 0; i < suits.length; i++){
        for(let j = 0; j < ranks.length; j++) {
            let card = {};
            card.suit = suits[i];
            card.rank = ranks[j];
            card.value = (j+1);
            deck.push(card);
        }
    }
}

function toggleButtons() {
    button.forEach(function(b){
        b.classList.toggle("hide");
    });
}