// VARIABLES + PROMPTS
let name = prompt("What is your name?");
let age = Number(prompt("How old are you?"));
let color = prompt("What is your favorite color?");

let output = document.getElementById("output");

// IF STATEMENT
if (name === "Gianna") {
    output.innerHTML += "<p>Hey Gianna! Nice to see you 😄</p>";
}

// IF ELSE STATEMENT
if (age >= 18) {
    output.innerHTML += "<p>You are an adult.</p>";
} else {
    output.innerHTML += "<p>You are under 18.</p>";
}

// IF ELSE IF ELSE STATEMENT
if (age < 13) {
    output.innerHTML += "<p>You are a child.</p>";
} else if (age < 20) {
    output.innerHTML += "<p>You are a teenager.</p>";
} else {
    output.innerHTML += "<p>You are an adult age group.</p>";
}

// SWITCH STATEMENT (BONUS)
switch(color) {
    case "red":
        output.innerHTML += "<p>Red is bold!</p>";
        break;

    case "blue":
        output.innerHTML += "<p>Blue is calm.</p>";
        break;

    case "green":
        output.innerHTML += "<p>Green is natural.</p>";
        break;

    default:
        output.innerHTML += "<p>Nice color choice!</p>";
}