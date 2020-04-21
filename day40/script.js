const tooltips = document.querySelectorAll(".tooltip");
const output = document.querySelector(".output");

let interval;

tooltips.forEach(function (t){
    t.addEventListener("mouseover", function(e){
        let holder = this.getAttribute("data-toolcontent"); //get text of data-toolContent that was set in HTML
        
        clearInterval(interval);
        output.style.display = "block";
        output.style.left = e.clientX + 5 + "px";
        output.style.top = e.clientY + 5 + "px";
        output.innerHTML = holder;

        interval = setInterval(function (){
            output.style.display = "none";
        }, 3000); 
    })
    t.addEventListener("mouseout", function(e){
        output.style.display = "none";
    });
})