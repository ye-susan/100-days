
const secondHand = document.getElementsByClassName('second-hand')[0];
const minHand = document.getElementsByClassName('min-hand')[0];
const hourHand = document.getElementsByClassName('hour-hand')[0];
const hand = document.getElementsByClassName('hand')[0];


//run every second
const setDate = () => {
    const now = new Date();  //current time
    const seconds = now.getSeconds();//getting seconds of the current minute
    const minutes = now.getMinutes();
    const hours = now.getHours();

    const secondsDegrees = ((seconds / 60) * 360) + 90; //convert seconds to degrees
    secondHand.style.transform = `rotate(${secondsDegrees}deg)`;
    
    const minDegrees = ((minutes / 60) * 360) + 90;
    minHand.style.transform = `rotate(${minDegrees}deg)`;
    
    const hrDegrees = ((hours / 12 ) * 360) + 90;
    hourHand.style.transform = `rotate(${hrDegrees}deg)`;

    // if (secondsDegrees >= 360) {
    //     //temporarily take off transition
    //     setTimeout(removeTransition, 1000);
    // }
}

//Need to come back to: implement remove Transition when degrees >= 360 so hands will move continuously and not go backwards to start at 12:00
// const removeTransition = () => {
//     
// }


//run every second
setInterval(setDate, 1000); //1000ms equals 1 second
setDate();
//minutes and hours