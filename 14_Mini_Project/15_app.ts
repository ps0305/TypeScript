class CalculatorApp{

    private static firstNumber:HTMLInputElement;
    private static secondNumber:HTMLInputElement;
    private static operator:HTMLButtonElement;
    private static equals_button:HTMLButtonElement;
    private static result_button:HTMLButtonElement;
    private static plus_button:HTMLButtonElement;
    private static minus_button:HTMLButtonElement;
    private static divide_button:HTMLButtonElement;
    private static multiply_button:HTMLButtonElement;
    private static clear_button:HTMLButtonElement;

    constructor(){
        CalculatorApp.initialize();
        CalculatorApp.addEventListeners();
    }

    public  static initialize(){
        CalculatorApp.firstNumber = document.querySelector('#firstNumber') as HTMLInputElement;
        CalculatorApp.secondNumber = document.querySelector('#secondNumber') as HTMLInputElement;
        CalculatorApp.operator = document.querySelector('#operator')as HTMLButtonElement;
        CalculatorApp.equals_button = document.querySelector('#equals-button')as HTMLButtonElement;
        CalculatorApp.result_button = document.querySelector('#result-button')as HTMLButtonElement;
        CalculatorApp.plus_button = document.querySelector('#plus-button')as HTMLButtonElement;
        CalculatorApp.minus_button = document.querySelector('#minus-button')as HTMLButtonElement;
        CalculatorApp.divide_button = document.querySelector('#divide-button')as HTMLButtonElement;
        CalculatorApp.multiply_button = document.querySelector('#multiply-button')as HTMLButtonElement;
        CalculatorApp.clear_button = document.querySelector('#clear-button')as HTMLButtonElement;
    }

    public  static addEventListeners(){
        CalculatorApp.plus_button.addEventListener('click',CalculatorApp.changeOperatorPlus);
        CalculatorApp.minus_button.addEventListener('click',CalculatorApp.changeOperatorMinus);
        CalculatorApp.divide_button.addEventListener('click',CalculatorApp.changeOperatorDivide);
        CalculatorApp.multiply_button.addEventListener('click',CalculatorApp.changeOperatorMultiply);
        CalculatorApp.equals_button.addEventListener('click',CalculatorApp.fetchResults);
        CalculatorApp.clear_button.addEventListener('click',CalculatorApp.clearAll);
    }

    public  static changeOperatorPlus(){
        CalculatorApp.operator.innerHTML = '+';
    }

    public  static changeOperatorMinus(){
        CalculatorApp.operator.innerHTML = '-';
    }

    public static changeOperatorDivide(){
        CalculatorApp.operator.innerHTML = '/';
    }

    public static changeOperatorMultiply(){
        CalculatorApp.operator.innerHTML = '*';
    }

    public static fetchResults(){
        let num1:number = parseFloat(CalculatorApp.firstNumber.value);
        let num2:number = parseFloat(CalculatorApp.secondNumber.value);
        let operation = CalculatorApp.operator.innerHTML.trim();
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
        CalculatorApp.result_button.innerHTML = result + "";
    }

    public static clearAll(){
        CalculatorApp.firstNumber.value = "";
        CalculatorApp.secondNumber.value = "";
        CalculatorApp.operator.innerHTML = '+';
        CalculatorApp.result_button.innerHTML = "RESULT";
    }
}

new CalculatorApp();