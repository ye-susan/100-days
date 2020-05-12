const btnAdd = document.querySelector("#addNew");
const output = document.querySelector(".output");
const newItem = document.querySelector("#addItem");

let myList = ["bananas", "milk", "apples", "eggs", "cake"];

window.onload = build;

btnAdd.addEventListener("click", function () {
    if (newItem.value) {
        myList.push(newItem.value);
        build();
        newItem.value = "";
    }
})

function build() {
    output.innerHTML = "<h2>My List</h2>";

    const table = document.createElement("table");
    for(let i = 0; i < myList.length; i++) {
        const row = document.createElement("tr"); 
        const cell1 = document.createElement("td"); 
        const cell2 = document.createElement("td");
        const spanDelete = document.createElement("span");
        const spanEdit = document.createElement("span");

        row.index = i; 
        spanDelete.innerText = "Delete";
        spanEdit.innerText = "Edit";    
        cell1.innerHTML = myList[i];
        row.appendChild(cell1);
        
        
        spanDelete.addEventListener("click", function () {
            //let temp = this.closest("tr").ind  // closest is a way to find the closest item to our query, but we dont need it right now since we're including the event function within the build() function
            let itemOut = myList.splice(i, 1);
            build(); //need to rebuild list, since numbering got messed up as we've spliced the item out
        })

        spanEdit.addEventListener("click", function () {
            row.style.backgroundColor = "yellow";
            let tempEle = row.firstElementChild;
            const newInput = document.createElement("input");
            newInput.value = tempEle.innerText;
            newInput.focus();
            tempEle.innerHTML = "";
            tempEle.appendChild(newInput);
            newInput.addEventListener("blur", function () {
                tempEle.innerHTML = newInput.value;
                row.style.backgroundColor = "white";
                myList[i] = newInput.value;
            })
        })

        cell2.appendChild(spanDelete);
        cell2.appendChild(spanEdit);
        row.appendChild(cell2);
        table.appendChild(row);
    }
    console.log(table);
    output.appendChild(table);
}
