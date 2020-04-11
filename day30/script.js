const output = document.querySelector(".output");
const text = document.querySelector("textarea");

["keyup", "keydown", "change"].forEach(function (e){
    text.addEventListener(e, textCounter);
})

const maxLength = 50;
const warnLength = 10;
output.innerHTML = `${maxLength} characters left`;
function textCounter(e) {
    let count = text.value.length;
    console.log(count);
    output.innerHTML = `${maxLength - count} characters left`;

    if (count >= maxLength){
        console.log(text.value.substr(0, maxLength));
        text.value = text.value.substr(0, maxLength);
    }

    if ((maxLength - count) <= warnLength) {
        output.classList.add("red");
    } else {
        output.classList.remove("red");
    }

    if(maxLength - count === -1) {
        output.innerHTML = `0 characters left`;
    }
}