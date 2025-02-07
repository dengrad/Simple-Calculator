let display = document.getElementById("display");


function appendNumber(number) {
    display.value += number;
}

function appendOperator(operator) {
    display.value += ` ${operator} `;
}


function clearDisplay() {
    display.value = "";
}


function calculate() {
    try {
        
        display.value = eval(display.value.replace('÷', '/'));
    } catch {
        display.value = "Error";
    }
}

document.addEventListener("keydown", function(event) {
    if (event.key >= "0" && event.key <= "9") {
        appendNumber(event.key);
    } else if (event.key === "+" || event.key === "-" || event.key === "*" || event.key === "÷") {
        appendOperator(event.key);
    } else if (event.key === "Enter") {
        calculate();
    } else if (event.key === "Backspace") {
        clearDisplay();
    }
});
