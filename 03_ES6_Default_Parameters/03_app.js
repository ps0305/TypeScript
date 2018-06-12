/*
---------------------------------------------------------------------------------
    1. Default Parameters
---------------------------------------------------------------------------------
    This feature is to provide some default values to optional parameters.
    If any of the parameter is not supplied the program will be using this default
parameters
*/
function greet(name, hrs) {
    if (name === void 0) { name = 'Colt'; }
    if (hrs === void 0) { hrs = 35; }
    var greeting = "Web developer Bootcamp by " + name + "zero to hero" + hrs + "long";
    return greeting;
}
var output = greet();
console.log(output);
document.getElementById('display').innerHTML = output;
// Starter Function
function countdownStarter(final, initial, interval) {
    var current = initial;
    while (current < final) {
        current += interval;
        console.log(current);
    }
}
countdownStarter(0, 10, 1);
