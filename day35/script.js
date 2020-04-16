const modalButton = document.querySelectorAll(".modal");
const modalWrapper = document.querySelector(".modalWrapper");
const body = document.querySelector("body");

modalButton.forEach(function(button){
    addClick(button);
})

function addClick(ele) {
    ele.addEventListener("click", function(){
        modalWrapper.classList.add("showModal");
        const closeButton = document.querySelector(".close");
        closeButton.addEventListener("click", function(){
            return modalWrapper.classList.remove("showModal");
        })
        modalWrapper.addEventListener("click", function(){
            return modalWrapper.classList.remove("showModal");
        })
        body.addEventListener("keydown", function(e){
            if(e.keyCode === 27){ //esc key
                return modalWrapper.classList.remove("showModal");
            }
        })
    })
}