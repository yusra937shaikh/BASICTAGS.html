let result = document.getElementById("result");
let operator = null;
let operand1 = null;

function appendToResult(value) {
    result.value += value;
}

function setOperator(op) {
    operator = op;
    operand1 = parseFloat(result.value);
    result.value = "";
}

function calculate() {
    let operand2 = parseFloat(result.value);
    let finalResult;
    switch (operator) {
        case '+': finalResult = operand1 + operand2; break;
        case '-': finalResult = operand1 - operand2; break;
        case '*': finalResult = operand1 * operand2; break;
        case '/': finalResult = operand1 / operand2; break;
    }
    result.value = finalResult;
    operator = null;
    operand1 = null;
}
    function clearResult() {
    result.value = "";
    operator = null;
    operand1 = null;
}
