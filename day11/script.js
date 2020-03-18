const button = document.querySelector("button");
const output = document.querySelector(".output");
const input = document.querySelector("input");
const html = document.querySelector("html");

const showMessage = () => {
    const date = new Date();
    const currentHour = date.getHours();
    
    
    if (currentHour > 3 && currentHour < 12) {
        output.textContent = `Good morning, ${input.value}!`;  
        html.style.backgroundImage = "url('https://images.unsplash.com/photo-1470252649378-9c29740c9fa8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80')";
        html.style.backgroundSize = "cover";
    } 
    else if (currentHour >= 12 && currentHour < 17) {
        output.textContent = `Good afternoon, ${input.value}!`;
        html.style.backgroundImage = "url('https://images.unsplash.com/photo-1516893623281-98535aaa2205?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80')";  
    } 
    else if (currentHour >=17 && currentHour <=19) {
        output.textContent = `Good evening, ${input.value}!`; 
        html.style.backgroundImage = "url('https://images.unsplash.com/photo-1532885009583-90db14e3efae?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80')";
    } 
    else {
        output.textContent = `Have a good night, ${input.value}!`;  
        html.style.backgroundImage = "url('https://images.unsplash.com/photo-1506606401543-2e73709cebb4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80')";
    }
}

button.addEventListener("click", showMessage);

