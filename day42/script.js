const popups = document.querySelectorAll(".popup");
const popup = document.querySelector(".output");
const popMessage = document.querySelector(".message");
const closeButton = document.querySelector(".close");
const icon = document.querySelectorAll(".icon");

const icons = [
    "https://media.istockphoto.com/vectors/vector-icon-of-orange-javascript-shield-isolated-simple-flat-il-vector-id523183831?k=6&m=523183831&s=612x612&w=0&h=NReiHOWzgy4yPbHbjc8GzLF5Zdoe6wM904QyMEgUpPQ=",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/1280px-Node.js_logo.svg.png",
    "https://cdn-images-1.medium.com/max/1200/1*0ei2MOQxAzF7krm-v60wnQ.jpeg"
]

closeButton.addEventListener("click", function() {
    popup.classList.add("hide");
})

for(let x = 0; x < popups.length; x++) {
    icon[x].setAttribute("src", icons[x]);
    popups[x].addEventListener("click", function() {
        let outputText = this.getAttribute("data-message");
        message(outputText);        
    })
}

function message(output) {
    popup.classList.remove("hide");
    popMessage.innerHTML = output;
}