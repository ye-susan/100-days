const minusCountBtn = document.getElementsByClassName("prevBtn")[0];
const plusCountBtn = document.getElementsByClassName("nextBtn")[0];
let counter = document.getElementById("counter");
let count = 0;

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

function addStyleToCounter () {
  if (count < 0) {
    return counter.style.color = "red";
  } else if (count > 0) {
    return counter.style.color = "green";
  } else {
    return counter.style.color = "black";
  }
}
