// Arithmetic functions
function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return b !== 0 ? a / b : "Cannot divide by zero";
}

// Event listeners
document.getElementById('add').addEventListener('click', function () {
    calculate(add);
});

document.getElementById('subtract').addEventListener('click', function () {
    calculate(subtract);
});

document.getElementById('multiply').addEventListener('click', function () {
    calculate(multiply);
});

document.getElementById('divide').addEventListener('click', function () {
    calculate(divide);
});

function calculate(operation) {
    const number1 = parseFloat(document.getElementById('number1').value) || 0;
    const number2 = parseFloat(document.getElementById('number2').value) || 0;
    const result = operation(number1, number2);
    document.getElementById('calculation-result').textContent = result;
}
