
var button = document.querySelector("button");
var body = document.getElementsByClassName("container")[0];


function changeColor(){
    body.style.background = randomColor();
}

function randomColor () {
	var randomC = '#'+(Math.random()*0xFFFFFF<<0).toString(16);
	return randomC;
}

button.addEventListener("click", changeColor);