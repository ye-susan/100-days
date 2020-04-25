const copyText = document.querySelector("textarea[name=copyText]");
const finalText = document.querySelector("textarea[name=finalText]");
const moverBtn = document.querySelector(".moverBtn");
const copyBtn = document.querySelector(".copyBtn");
const output = document.querySelector(".output");

moverBtn.addEventListener("click", moveText);
copyBtn.addEventListener("click", copyTextFunc);
finalText.addEventListener("click", selectAll);
copyText.addEventListener("click", selectAll);

function copyTextFunc() {
    let temp = copyText.value;
    copytoClipboard(temp);
}

function copytoClipboard(str) {
    const textarea = document.createElement("textarea");
    textarea.value = str;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand("copy"); //copies the text
    document.body.removeChild(textarea);
    output.innerHTML = `<h3>Copied content: </h3> ${textarea.value}`; //paste the copied content
}

function moveText() {
    let temp = copyText.value;
    finalText.value = temp;
}

function selectAll() {
    this.select();
}