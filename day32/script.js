const copy = document.querySelectorAll(".copyMe");
const bin = document.getElementById("garbage");

let holder = {}; 

copy.forEach(function (elem, index){
    elem.addEventListener("click", function(e){
        holder.obj = elem.cloneNode(true); //duplicates node on which this element was called
        holder.obj.style.cursor = "move";
        holder.obj.style.left = elem.offsetLeft + "px";
        holder.obj.style.top = elem.offsetTop + 200 + "px";
        
        //moving the clones
        holder.obj.startX = elem.offsetLeft;
        holder.obj.startY = elem.offsetTop;
        holder.obj.moves = Math.floor(Math.random() * 25);
        holder.obj.int = setInterval(mover, 25); //move every 25ms

        function mover() { //allows the clones to "fall" down from the original
            if (holder.obj.moves <= 0){
                clearInterval(holder.obj.int); //exit interval, should have this so we don't have indefinite movement
            } else {
                holder.obj.moves--;
                holder.obj.startY += 10;
                holder.obj.startX += 1;
                holder.obj.style.top = holder.obj.startY + "px";
                holder.obj.style.left = holder.obj.startX + "px";
            }
        }
        document.body.appendChild(holder.obj);
        dragEle(holder.obj);
    })
    elem.style.left = index * 200 + "px"; //spacing out the different 'copyme' elements
})

function dragEle(ele) {
    let coord = {};
    ele.onmousedown = dragMouse;

    function dragMouse(e) {
        coord.newX = e.clientX; //record the positions where the mouse/cursor lands
        coord.newY = e.clientY;
        document.onmouseup = function() { //disable moving when mouseUp, so no interference from listeners
            document.onmouseup = null;
            document.onmousemove = null;
        }
        document.onmousemove = function(e){//updating the element's position with the record positions of where the mouse dragged
            coord.oldX = coord.newX - e.clientX; 
            coord.oldY = coord.newY - e.clientY;
            coord.newY = e.clientY;
            coord.newX = e.clientX;
            if (collisionCheck (ele)){
                ele.onmousedown = null;
                ele.parentElement.removeChild(ele); //go up a lvl, to parent, in order to remove child
            }
            ele.style.top = (ele.offsetTop - coord.oldY) + "px";
            ele.style.left = (ele.offsetLeft - coord.oldX) + "px";
        }
    }
}

function randomColor () {
    function color(){
        let hex = Math.floor(Math.random() * 256).toString(16);
        hex = ("0" + String(hex)).substr(-2);
        return hex;
    }
    return `#${color()}${color()}${color()}`;
}

//collision detection : see if clones are touching/overlapping the garbage block - if so, pass in element and delete them
function collisionCheck(a) {
    let aRect = a.getBoundingClientRect();
    let bRect = bin.getBoundingClientRect();
    return !(
        (aRect.bottom < bRect.top) || (aRect.top > bRect.bottom) || (aRect.right < bRect.left) || (aRect.left > bRect.right)
    )
}
