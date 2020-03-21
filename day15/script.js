const button = document.querySelector("button");
const player1 = document.querySelector("#player1");
const player2 = document.querySelector("#player2");
const output = document.querySelector(".output");

//building dice and the different dice faces using an array
const dice = [[5], [1,9], [1,5,9], [1,3,7,9], [1,3,5,7,9], [1,3,4,6,7,9]];

const rollDice = (num) => {
    let randomN = Math.floor(Math.random()*num) + 1;
    return randomN;
}

const builder = (num) => { //builds and returns dice
  let div = document.createElement("div"); //creating new div to the page
  let dieArray = dice[num-1];
  for (let i = 1; i < 10; i++) {
    let span = document.createElement("div");  //subdiv
    span.setAttribute("class", "dot");
    if (dieArray.includes(i)){ //"coloring" in the dots to display die face
      span.classList.add("black");
    }
    div.appendChild(span);
  }
  div.setAttribute("class", "dicer");
  return div;
}

const updateOutput = (pl, num) => { //removing old dice and replacing with new
  let temp = builder(num); 
  if (pl.children[0]) { 
    pl.children[0].remove(); //if output already has a div child, remove it and replace with new one 
  }
  pl.appendChild(temp); //adding div to output/parent
}

button.addEventListener("click", function() {
  let rolls = [rollDice(6), rollDice(6)];   //[0] is player1, [1] is player2
  let results = "";

  if (rolls[0] === rolls[1]) {
    results = "It's a Draw";
  } else if (rolls[0] > rolls[2]){
    results = "Player 1 wins!";
  } else {
    results = "Player 2 wins!";
  }

  updateOutput (player1, rolls[0]);
  updateOutput (player2, rolls[1]);
  output.textContent = results;

})


