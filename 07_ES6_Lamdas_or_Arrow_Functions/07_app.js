/*
---------------------------------------------------------------------------------
 5. Lambdas (Arrow Functions)
---------------------------------------------------------------------------------
A lambda expression is an anonymous function that you can use to create
delegates or expression tree types. By using lambda expressions,
you can write local functions that can be passed as arguments or
returned as the value of function calls

*/
//ex:
//Normal no-args function,same Arrow function
var greet = function () {
    return "Good morning from conventional function...!";
};
var greetArrow = function () { return "Greetings from Arrow Function.....!"; };
var greeting = greetArrow();
console.log(greeting);
//example
var greetArgsNormal = function (name) {
    return "Good Morning " + name;
};
greeting = greetArgsNormal('Colt');
console.log(greeting);
//Arrow Function
var greetArgsArrow = function (name) { return "Good Morning " + name; };
greeting = greetArgsArrow('Colt');
console.log(greeting);
//sum of numbers
//normal function
var sumNormal = function (a, b) {
    return a + b;
};
console.log("sum of a and b is : " + sumNormal(10, 20));
var sumArrow = function (a, b) { return "sum of a and b is : " + sumNormal(10, 20); };
//Example
var array = [10, 20, 30, 40, 50];
var arrayLen = function (array) {
    return array.length;
};
console.log("The Length of the array is : " + arrayLen(array));
//Above example with arrow function
var arrayLenArrow = function (array) { return array.length; };
console.log("The Length of the array is : " + arrayLenArrow(array));
//array with the length of each element
var movies = ['Baahubali', 'Dangal', 'Drushyam'];
var movieLength = movies.map(function (movie) {
    return movie.length;
});
//Above example with Arrow function
var moviesLenArrow = movies.map(function (movies) { return movies.length; });
console.log(moviesLenArrow);
console.log(movieLength);
