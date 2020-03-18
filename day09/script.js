const panels = document.querySelectorAll('.panel');

function toggleOpen() {
    this.classList.toggle('open');
}

function toggleActive(e) {
    if (e.propertyName.includes('flex')) {
        this.classList.toggle('open-active');
    } 
}
panels.forEach(panel => panel.addEventListener('click', toggleOpen)); 
//toggleOpen() would open on page load, we don't want that, so no ()
panels.forEach(panel => panel.addEventListener('transitionend', toggleActive)); 
