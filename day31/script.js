const button = document.querySelector("button");
const container = document.querySelector("#containerEle");
const content = document.querySelector("#content");
const speed = document.querySelector("input");
const output = document.querySelector(".output");

const text = "<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est itaque adipisci libero expedita, et eveniet sed debitis perspiciatis id, ipsa eaque? Perferendis necessitatibus voluptatem, natus voluptas dignissimos sint possimus molestiae.</p><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est itaque adipisci libero expedita, et eveniet sed debitis perspiciatis id, ipsa eaque? Perferendis necessitatibus voluptatem, natus voluptas dignissimos sint possimus molestiae.</p>";
let scroller = true;

window.onload = setupScroll();

button.addEventListener("click", function(){
    scroller^= true; //toggles scroller on/off, true/false
    button.innerText = scroller ? "Stop" : "Start";
})

container.addEventListener("mouseenter", scrollSpeed);
container.addEventListener("mouseleave", scrollSpeed);

function setupScroll () {
    content.innerHTML = text;
    let temp = content.getBoundingClientRect();

    container.style.height = temp.height + "px"; 
    content.style.top = temp.height + "px";
    let scrollInterval = setInterval(scrollingEle, 50);
}

function scrollingEle() {
    let scrollSpeed = speed.value;
    if (scroller) {        
        let coordY = parseInt(content.style.top) //converts the 238px to integer '238'

        if (coordY + content.clientHeight > 0) {
            content.style.top = coordY - scrollSpeed + "px";
        } else {
            content.style.top = container.clientHeight + "px";
        }
    }
    //output.innerHTML = `Scroll speed: ${scrollSpeed}`
}

function scrollSpeed (e) {
    //e.type: shows what type of event e was (i.e. mouseenter, mouseleave)
    scroller = (e.type === "mouseenter") ? false : true; //stops the scrolling if mouseenters into container
}