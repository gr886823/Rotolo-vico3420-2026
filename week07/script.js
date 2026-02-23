// Function with NO parameters
function showWelcome() {
    document.getElementById("output").innerHTML = "Welcome to my function assignment!";
}

// Function with ONE parameter
function greetUser(name) {
    document.getElementById("output").innerHTML = "Hello, " + name + "!";
}

// Function with TWO parameters AND returns a value
function calculateTotal(price, quantity) {
    let total = price * quantity;
    let message = "Total cost is $" + total;

    document.getElementById("output").innerHTML = message;

    return total; // satisfies return requirement
}