const output = document.querySelector(".output");
const show = document.querySelector(".show");
const close = document.querySelectorAll(".close");
const images = document.querySelectorAll(".popup img");

images.forEach(function(ele) {
    ele.addEventListener("click", popUpImage);
})

close.forEach(function(ele){
    ele.addEventListener("click", function(){
        show.classList.add("hide");
    })
})

function popUpImage(e) {
    output.querySelector("img").setAttribute("src", this.src);
    show.classList.remove("hide");
}