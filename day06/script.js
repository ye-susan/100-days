const playSound = (e) => {
    //the way HTML is set up, the keycode is the attribute, so we wnat the audio's attribute to get the keycode
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
    console.log(key,"1");
    
    //if no audio, return (nothing)
    if(!audio) {
        return;
    } 

    //if you hit it in succession, will rewind audio, so you can continuously play the key. To do this: set audio's currentTime to 0
    audio.currentTime = 0;
    //then play audio
    audio.play();
    //add "playing" to audio's classList, from style.css, to transform and scale the keys on the screen when the key is played
    key.classList.add('playing');


}

//once the key is played, remove transition/transform 
const removeTransition = (e) => {
    for (let i = 0; i < keys.length; i++) {
        if (keys[i].className.includes("playing")) {
            keys[i].classList.remove('playing'); 
        }
    }
}

//listen for keydown event - place in window
window.addEventListener('keydown', playSound);
const keys = Array.from(document.querySelectorAll('.key'));
//eventListener for transitionend is also needed to trigger removeTransition function
keys.forEach(key => key.addEventListener('transitionend', removeTransition));