const button = document.querySelector("button");
const player1 = document.querySelector("#player1");
const player2 = document.querySelector("#player2");
const output = document.querySelector("#output");

const rollDice = (num) => {
    let randomN = Math.floor(Math.random()*num) + 1;
    let n = 9855 + randomN; //adding decimal codes to display dice emoticons
    let char ="&#" + n + ";";
    return randomN + " " + char;
}

button.addEventListener("click", function() {
  let rolls = [rollDice(6), rollDice(6)];   //[0] is player, [1] is Computer

  let temp = "";
  if (rolls[0] === rolls[1]) {
      temp = "It was a draw.";
  } else if (rolls[0] > rolls[1]) {
      temp = "Player wins!";
  } else {
    temp = "Computer wins!";
  }
  console.log(rolls);
  console.log(temp);
  output.innerHTML = temp;
  player1.innerHTML = rolls[0];
  player2.innerHTML = rolls[1];
})

