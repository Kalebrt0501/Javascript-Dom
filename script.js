function changeGreeting() {
    document.getElementById("greeting").textContent = `Hello JavaScript!`;
}

function changeBackground(){
    document.body.style.backgroundColor = "lightblue";
}

function showName() {
    let name = document.getElementById("user_input").value;
    document.getElementById("output").textContent = `Hello, ${name}`;
}

let count = 0;
function increaseCount() {
    count++;
    document.querySelector("#count").textContent = String(count);
}

function changeLogo() {
    document.getElementById("logo").src = "img/Paris_X_Gen.png";
}

function toggleText() {
    let text = document.querySelector("#text");
    text.style.display = text.style.display === "none" ? "block": "none";
}

function increaseFontSize() {
    document.querySelector("#text_size").style.fontSize = "50px";
}

function updateContent() {
    document.querySelector("#title").textContent = "New Title";
    document.querySelector("#description").textContent = "This text has changed!";
    document.querySelector("#description").style.color = "red";
}

function calculateSquare() {
    let num = document.querySelector("#number_input").value;
    let square = Math.pow(num, 2);
    document.querySelector("#result").textContent = `The square of ${num} is ${square}`;
}