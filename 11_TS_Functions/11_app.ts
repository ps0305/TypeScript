 let htmlElement = document.getElementById('display');
// Create a simple function to add two numbers
    function add(a:number,b:number):number{
        let sum:number = a+b;
        return sum;
    }
    let output:string = `The sum of a & b is : ${add(10,20)}`;
    console.log(output);
    htmlElement.innerHTML = output;


// Create the same add function with first number as 'any' type
    function addAny(a:number,b:number){
        let sum:number = 0;
        if(typeof a === 'string'){
            if(isNaN((parseFloat(a)))){
                sum = b;
            }else{
                a = parseFloat(a);
                sum = a+b;
            }
        }else if(typeof  a === 'number'){
            sum = a+b;
        }else{
            sum = b;
        }
    return sum;
 }


// Function Overloading in TypeScript , findMax of 1 , 2 , 3 numbers
    let maxValue = 0;
    function findMax(a:number);
    function findMax(a:number,b:number):number;
    function findMax(a:number,b:number,c:number);
    //?=> optional value
    function findMax(a:number,b?:number,c?:number){
        if(b === undefined && c === undefined){
            maxValue =a;
        }else if(c=== undefined){
            maxValue = Math.max(a,b);
        }else{
            maxValue = Math.max(a,b,c);
        }
        return maxValue
    }
     output = `The maximum value is : ${findMax(10)}`;
     console.log(output);
     output = `The maximum value is : ${findMax(10,20)}`;
     console.log(output);
     output = `The maximum value is : ${findMax(10,20,30)}`;
     console.log(output);



// Create an Employee function and get an Employee Object
