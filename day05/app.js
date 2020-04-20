//set up imgs in an array
const gallery = [
  "pic0",
  "pic1",
  "pic2",
  "pic3",
  "pic4"
];

//set up selectors for elements
const btn = document.querySelectorAll(".btn");
const imgContainer= document.querySelector(".img-container");
let counter = 0;

//forEach button, add addListeners to buttons
btn.forEach(function(button){
  button.addEventListener("click", function(input){
    //if right button was clicked...
    if (button.classList.contains('btn-right')){
      counter++;
      if (counter > gallery.length-1) {
        counter = 0;
      }
      imgContainer.style.backgroundImage = `url('./img/${gallery[counter]}.jpg')`;
    }
    //if left button was click....
    if (button.classList.contains("btn-left")){
      counter--;
      if (counter < 0) {
        counter = gallery.length-1;
      }
      imgContainer.style.backgroundImage = `url('./img/${gallery[counter]}.jpg')`;
    }  
  })
})
