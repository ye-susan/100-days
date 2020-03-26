const accordion = document.querySelectorAll('.panel');
accordion.forEach(function (node) {
    node.addEventListener('click', toggleElement);
})

function toggleElement(e) {
    accordion.forEach(function(node){
        //parentElement are the panels, which are nodes of accordion
        //e.target are the subclasses within panels
        console.log(e.target.parentElement);
        console.log(e.target);
        
        if(e.target.parentElement === node) {
            node.classList.toggle('active');
        } else {
            node.classList.remove('active');
        }
    })
}