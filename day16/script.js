const myArray = ["lion", "cougar", "leopard"];


//creates divs for each animal in  the array, and set attributes so css styles can be applied, all without any HTML
const init = () => {
    myArray.forEach(function(item){
        let div = document.createElement("div");
        div.setAttribute("class", "animal " + item);
        div.innerText = item.toUpperCase();
        div.addEventListener("click", function(){
            playSound(item);
        })
        document.body.appendChild(div);
    })
}

//passes in  the animal name and create variable to attach the audio file name to
const playSound = (animal) => {
    
    let activeElement = document.querySelector("." + animal);
    console.log(activeElement);
    let sound = new Audio("sounds/" + animal + ".mp3");
    sound.play();

    activeElement.classList.add("active");
    setTimeout(function(){
        activeElement.classList.remove("active");
    }, 200)
}

//when DOM content is loaded, do init function 
document.addEventListener("DOMContentLoaded",init);