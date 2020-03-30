const endDate = document.querySelector("input[name='endDate']"); //if we have more than one input, we can specify it by name, this is just for demonstration since we only have one input
const clock = document.querySelector(".clock");
let timeInterval;
let timeStop = true;

endDate.addEventListener("change", function(e){ //whenever endDate value changes, will do function 
    e.preventDefault();
    clearInterval(timeInterval); //clear interval to stop countdown when we change the date or to prevent more than 1 interval from running
    const temp = new Date(endDate.value);
    temp.setHours(0);
    localStorage.setItem("countdown", temp);
    startClock(temp);    
    timeStop = true;
})

const startClock = (d) => {
    function updateCounter () {
        let tlObject = (timeLeft(d)); //timeLeft returns an object

        if(tlObject.total <= 0){  //total is the # of seconds difference between the current date and the selected date. If it's negative, that means the selected date has already passed.
            timeStop = false;
        }
        for (let property in tlObject) { //iterating through object
            //console.log(property, tlObject[property]);  //property is the #, tlObject[prop] gives: days 12
            let el = document.querySelector("."+ property); //to use to append to the span item
            //can use document. // or clock. bc the spans are inside the clock element
            
            if (el) {
                el.innerHTML = tlObject[property]; //change figure displayed if el exists. We're doing this because 'total' returns null since there isnt a document object corresponds with it, unlike day/hour/etc.
            }
        }
    }
    updateCounter();
    if (timeStop) {
        timeInterval = setInterval(updateCounter,1000); //using setInterval, we can updateCounter every second
    } else { //if timeStop is false, meaning that the date probably has passed, we can clear interval to stop countdown
        clearInterval(timeInterval);
    }
}

const timeLeft = (d) => {
    let currentDate = new Date (); 
    //Date() returns string format of date, ex: Thu Mar 26 2020 17:00:00 GMT-0700 (Pacific Daylight Time)
    //console.log(Date.parse(d)) --> 1585267200000 for example, returns the number of milliseconds between that date and midnight, January 1, 1970. Negative number if efore 1970

    //countdown by finding the difference between 2 dates with milliseconds
    let t = Date.parse(d) - Date.parse(currentDate);
    let seconds = Math.floor((t/1000) % 60); //result of % is the seconds, the division is the minutes
    let minutes = Math.floor((t/1000/60) % 60);
    let hours = Math.floor((t/ (1000*60*60)) % 24);
    let days = Math.floor(t/(1000*60*60*24));
    return {"total":t, "days":days, "hours":hours, "minutes":minutes, "seconds":seconds};
}

const savedValue = localStorage.getItem("countdown") || false; //we'll look for a property value called countdown in the localStorage (which we set in the endDate.addEventListener function), if it doesn't exist, savedValue will be set to false
if (savedValue) {
    startClock(savedValue); 
    let inputValue = new Date(savedValue);
    endDate.valueAsDate = inputValue; //valueAsDate, is basically same as .value, but formatted as Date
}

/**
 * if we reset page, we lose our countdown time
 * so we want to use localStorage to store contents so on refresh, the date is still there and the countdown clock is still/already running.
 */