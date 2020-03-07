//Add event listeners and functionailty to each button  

const minusCountBtn = document.getElementsByClassName("prevBtn")[0];
const plusCountBtn = document.getElementsByClassName("nextBtn")[0];
let counter = document.getElementById("counter");
let count = 0;

//addEventListener to buttons
minusCountBtn.addEventListener("click", function() {
  count--;
  counter.textContent = count;
  addStyleToCounter();
});
plusCountBtn.addEventListener("click", function() {
  count++;
  counter.textContent = count;
  addStyleToCounter();
});

//adding style to counter
function addStyleToCounter () {
  if (count < 0) {
    return counter.style.color = "red";
  } else if (count > 0) {
    return counter.style.color = "green";
  } else {
    return counter.style.color = "black";
  }
}
