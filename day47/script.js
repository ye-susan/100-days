//All numbers in the elves' list are in feet. How many total square feet of wrapping paper should they order?

const fs = require('fs');

//loop through dimensions
//find smallest multiplier
//add the smallest multiplier to the sum-product

fs.readFile('./list.txt', (err, data) => {
    console.time('adventCal');
    let sumprod = 0;
    let sMult = 0;
    const list = data.toString();
    const listArr = list.split("\r\n");
    console.log(listArr);

    console.timeEnd('adventCal');
    if(err){
        console.log("error");
    }
})

