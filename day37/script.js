const stars = document.querySelectorAll(".star");
const output = document.querySelector(".output");

const events = ["mouseover", "mouseout", "click"];

for (let x = 0; x < stars.length; x++){
    stars[x].starValue = x + 1;

    events.forEach(function(e){
        stars[x].addEventListener(e, starRate);
    })
}

function starRate(e){
    let eventType = e.type;
    let starValue = this.starValue;
    
    if (eventType === "click"){
        if(starValue >= 1) {
            let s = starValue === 1 ? 'star' : 'stars';
            output.innerHTML = `You've rate this ${starValue} ${s}.`;
        }
    }

    stars.forEach(function(ele, index){
        if (eventType === "click"){
            if(index < starValue){
                ele.classList.add("orange");
            } else{
                ele.classList.remove("orange");
            }
        } 
        if(eventType === "mouseover") {
            if(index < starValue){
                ele.classList.add("yellow");
            } else{
                ele.classList.remove("yellow");
            }
        }
    })
}