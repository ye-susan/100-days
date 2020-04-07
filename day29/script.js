let moveCounter = 0;
let offset;
let moveMouse = false;

document.addEventListener("DOMContentLoaded", function(event) {
    const body = document.querySelector("body");
    body.style.textAlign = "center";
    let output = document.createElement("div");

    output. innerHTML = "Click or Move the Button";
    output.style.fontSize = "1.3em";
    output.style.fontFamily = "Arial";
    output.style.padding = "5px";
    output.style.marginTop = "4%";
    output.style.marginLeft = "5%";
    output.setAttribute("class", "message");
    body.appendChild(output);

    let btn = document.createElement("button");
    btn.innerHTML = "Move Me";
    btn.style.border = "1px solid #ddd";
    btn.style.padding = "10px";
    btn.style.fontSize = "1.1em";
    btn.style.textAlign = "center";
    btn.style.position = "absolute";
    btn.style.margin = "0 auto";

    body.appendChild(btn);

    btn.addEventListener("mousedown", function(e){
        moveMouse = true;
        offset = [btn.offsetLeft - e.clientX,
        btn.offsetTop - e.clientY];
    });
    btn.addEventListener("mousemove", function(e){
        e.preventDefault();
        if (moveMouse === true) {
            mousePosition = {
                x : e.clientX,
                y : e.clientY
            };    
            btn.style.left = (mousePosition.x + offset[0]) + "px";
            btn.style.top = (mousePosition.y + offset[1] + "px");    
        }
    })
    btn.addEventListener("mouseup", function(){
        moveMouse = false;
        moveCounter++;
        document.querySelector(".message").innerHTML = `You've moved the button ${moveCounter} times`;    
    });
})
