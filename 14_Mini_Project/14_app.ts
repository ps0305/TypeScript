
/* Your Code starts from Here */
let firstNumber:HTMLInputElement = document.querySelector('#firstNumber') as HTMLInputElement;
let secondNumber:HTMLInputElement = document.querySelector('#secondNumber') as HTMLInputElement;
let operator:HTMLButtonElement = document.querySelector('#operator')as HTMLButtonElement;
let equals_button:HTMLButtonElement = document.querySelector('#equals-button')as HTMLButtonElement;
let result_button:HTMLButtonElement = document.querySelector('#result-button')as HTMLButtonElement;
let plus_button:HTMLButtonElement = document.querySelector('#plus-button')as HTMLButtonElement;
let minus_button:HTMLButtonElement = document.querySelector('#minus-button')as HTMLButtonElement;
let divide_button:HTMLButtonElement = document.querySelector('#divide-button')as HTMLButtonElement;
let multiply_button:HTMLButtonElement = document.querySelector('#multiply-button')as HTMLButtonElement;
let clear_button:HTMLButtonElement = document.querySelector('#clear-button')as HTMLButtonElement;


function changeOperatorPlus(){
    operator.innerHTML = '+';
}

function changeOperatorMinus(){
    operator.innerHTML = '-';
}

function changeOperatorDivide(){
    operator.innerHTML = '/';
}


function changeOperatorMultiply(){
    operator.innerHTML = '*';
}


function fetchResults(){
    let num1:number = parseFloat(firstNumber.value);
    let num2:number = parseFloat(secondNumber.value);
    let operation = operator.innerHTML.trim();
    let result:number = 0;
    switch(operation){
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

function clearAll(){
    firstNumber.value = "";
    secondNumber.value = "";
    operator.innerHTML = '+';
    result_button.innerHTML = "RESULT";
}


// Add Event Listeners
plus_button.addEventListener('click',changeOperatorPlus);
minus_button.addEventListener('click',changeOperatorMinus);
divide_button.addEventListener('click',changeOperatorDivide);
multiply_button.addEventListener('click',changeOperatorMultiply);
equals_button.addEventListener('click',fetchResults);
clear_button.addEventListener('click',clearAll);



