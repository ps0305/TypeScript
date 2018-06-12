/*
---------------------------------------------------------------------------------
    1. Default Parameters
---------------------------------------------------------------------------------
    This feature is to provide some default values to optional parameters.
    If any of the parameter is not supplied the program will be using this default
parameters
*/
function greet(name:string='Colt',hrs:number=35):string {
    let greeting:string = "Web developer Bootcamp by "+name + "zero to hero"+hrs+"long";
    return greeting;
}
let output:string = greet();
console.log(output);
document.getElementById('display').innerHTML = output;

// Starter Function

function countdownStarter(final,initial,interval){
    let current  = initial;
    while(current < final){
        current += interval;
        console.log(current);
    }
}

countdownStarter(0,10,1);

