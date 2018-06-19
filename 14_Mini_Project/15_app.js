var CalculatorApp = (function () {
    function CalculatorApp() {
        CalculatorApp.initialize();
        CalculatorApp.addEventListeners();
    }
    CalculatorApp.initialize = function () {
        CalculatorApp.firstNumber = document.querySelector('#firstNumber');
        CalculatorApp.secondNumber = document.querySelector('#secondNumber');
        CalculatorApp.operator = document.querySelector('#operator');
        CalculatorApp.equals_button = document.querySelector('#equals-button');
        CalculatorApp.result_button = document.querySelector('#result-button');
        CalculatorApp.plus_button = document.querySelector('#plus-button');
        CalculatorApp.minus_button = document.querySelector('#minus-button');
        CalculatorApp.divide_button = document.querySelector('#divide-button');
        CalculatorApp.multiply_button = document.querySelector('#multiply-button');
        CalculatorApp.clear_button = document.querySelector('#clear-button');
    };
    CalculatorApp.addEventListeners = function () {
        CalculatorApp.plus_button.addEventListener('click', CalculatorApp.changeOperatorPlus);
        CalculatorApp.minus_button.addEventListener('click', CalculatorApp.changeOperatorMinus);
        CalculatorApp.divide_button.addEventListener('click', CalculatorApp.changeOperatorDivide);
        CalculatorApp.multiply_button.addEventListener('click', CalculatorApp.changeOperatorMultiply);
        CalculatorApp.equals_button.addEventListener('click', CalculatorApp.fetchResults);
        CalculatorApp.clear_button.addEventListener('click', CalculatorApp.clearAll);
    };
    CalculatorApp.changeOperatorPlus = function () {
        CalculatorApp.operator.innerHTML = '+';
    };
    CalculatorApp.changeOperatorMinus = function () {
        CalculatorApp.operator.innerHTML = '-';
    };
    CalculatorApp.changeOperatorDivide = function () {
        CalculatorApp.operator.innerHTML = '/';
    };
    CalculatorApp.changeOperatorMultiply = function () {
        CalculatorApp.operator.innerHTML = '*';
    };
    CalculatorApp.fetchResults = function () {
        var num1 = parseFloat(CalculatorApp.firstNumber.value);
        var num2 = parseFloat(CalculatorApp.secondNumber.value);
        var operation = CalculatorApp.operator.innerHTML.trim();
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
        CalculatorApp.result_button.innerHTML = result + "";
    };
    CalculatorApp.clearAll = function () {
        CalculatorApp.firstNumber.value = "";
        CalculatorApp.secondNumber.value = "";
        CalculatorApp.operator.innerHTML = '+';
        CalculatorApp.result_button.innerHTML = "RESULT";
    };
    return CalculatorApp;
}());
new CalculatorApp();
