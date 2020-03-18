const inputs = document.querySelectorAll('.controls input');
//querySelector gives you a nodeList, methods for Nodelist are much more limited than arrays, not necessary to convert to Array here

function handleUpdate() {
    const suffix = this.dataset.sizing || ''; //sizing or nothing, as an alternative since not all of the elements have sizing options.
    //we're doing this so that spacing and blur are attached with the suffix "px" and base color won't need anything attached to it
    //dataset is an object that will contain all the data attributes of the object. It's an object that's ready to be used, don't have to select it. It will take anything with 'data- ' on that element and put it into a nice tidy object for you.

    //update variable as user selects new value for the property
    document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);
}

//change only accounts for when the range/colors have changed
inputs.forEach(input => input.addEventListener('change',handleUpdate));
//mousemoves will allow for continuous change as the user moves the slider
inputs.forEach(input => input.addEventListener('mousemove',handleUpdate));