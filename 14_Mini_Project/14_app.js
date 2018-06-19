/* Your Code starts from Here */
var firstNumber = document.querySelector('#firstNumber');
var secondNumber = document.querySelector('#secondNumber');
var operator = document.querySelector('#operator');
var equals_button = document.querySelector('#equals-button');
var result_button = document.querySelector('#result-button');
var plus_button = document.querySelector('#plus-button');
var minus_button = document.querySelector('#minus-button');
var divide_button = document.querySelector('#divide-button');
var multiply_button = document.querySelector('#multiply-button');
var clear_button = document.querySelector('#clear-button');
function changeOperatorPlus() {
    operator.innerHTML = '+';
}
function changeOperatorMinus() {
    operator.innerHTML = '-';
}
function changeOperatorDivide() {
    operator.innerHTML = '/';
}
function changeOperatorMultiply() {
    operator.innerHTML = '*';
}
function fetchResults() {
    var num1 = parseFloat(firstNumber.value);
    var num2 = parseFloat(secondNumber.value);
    var operation = operator.innerHTML.trim();
    var result = 0;
    switch (operation) {
        case '+':
            result = num1 + num2;
            break;
        case '-':
            result = num1 - num2;
            break;
        case '/':
            result = num1 / num2;
            break;
        case '*':
            result = num1 * num2;
            break;
        default:
            result = 0;
            break;
    }
    result_button.innerHTML = result + "";
}
function clearAll() {
    firstNumber.value = "";
    secondNumber.value = "";
    operator.innerHTML = '+';
    result_button.innerHTML = "RESULT";
}
// Add Event Listeners
plus_button.addEventListener('click', changeOperatorPlus);
minus_button.addEventListener('click', changeOperatorMinus);
divide_button.addEventListener('click', changeOperatorDivide);
multiply_button.addEventListener('click', changeOperatorMultiply);
equals_button.addEventListener('click', fetchResults);
clear_button.addEventListener('click', clearAll);
