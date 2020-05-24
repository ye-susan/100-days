//What floor does Santa end up on? 
// ")" DOWN 1 floor      "(" UP 1 floor
//Part 1: What floor does Santa end up on?
//Part 2: What position does Santa first end up in the basement?

const fs = require('fs');

fs.readFile('./santasHelper.txt', (err, data) => {
    console.time('nodeHelper');
    let floor = 0;
    let basementInd = 0;
    let basementIndFound = false;
    const moves = data.toString();
    const movesArr = moves.split("");
    
    for (let i = 0; i < movesArr.length; i++) {
        if (movesArr[i] === "("){
            floor++;
        } else {
            floor--;
        }
        while (basementIndFound == false) {
            if (floor == -1) {
                basementInd = i + 1;
                basementIndFound = true;
            } else {
                break;
            }
        }
    }

    console.log(`Santa's last floor: ${floor}`);
    console.log(`Position that Santa first entered the basement: ${basementInd}`);
    console.timeEnd('nodeHelper');
    if(err){
        console.log("error");
    }
})

