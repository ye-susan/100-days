const rawText = document.querySelector("textarea[name=txtArea]");
const finishedText = document.querySelector("textarea[name=output]");
const button = document.querySelector("button");
const counter = document.querySelector(".counter");

button.addEventListener("click", function() {
    let temp = rawText.value;
    let exp = /([A-Za-z0-9._-]+@[A-Za-z0-9._-]+\.[A-Za-z0-9._-]+)/gi;
    let emailData = temp.match(exp);
    let holder = [];

    for (let x = 0; x < emailData.length; x++) {
        if (holder.indexOf(emailData[x]) == -1) {
            holder.push(emailData[x]);
        }
    }
    let stringHolder = holder.join("\n");

    counter.innerText = `Emails found: ${holder.length}`
    finishedText.innerHTML =  stringHolder;
})

finishedText.addEventListener("click", function () {
    this.select();
})