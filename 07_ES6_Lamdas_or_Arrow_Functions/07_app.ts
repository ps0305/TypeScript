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

    let greet = function () {
        return "Good morning from conventional function...!";
    };


    let greetArrow = ()=> "Greetings from Arrow Function.....!";
    let greeting = greetArrow();
    console.log(greeting);

    //example
    let greetArgsNormal = function (name):string {
        return `Good Morning ${name}`;
    };
    greeting = greetArgsNormal('Colt');
    console.log(greeting);

    //Arrow Function
    let greetArgsArrow = (name)=> `Good Morning ${name}`;
    greeting = greetArgsArrow('Colt');
    console.log(greeting);


    //sum of numbers
    //normal function
    let sumNormal = function (a:number,b:number) {
    return a+b;
}
    console.log(`sum of a and b is : ${sumNormal(10,20)}`);

    //Sum with arrow function
    let sumArrow = (a , b) => a + b;
    console.log(`The sum of a , b is ${sumArrow(20,30)}`);


    //Example
    let array:Array<any> = [10,20,30,40,50];
    let arrayLen = function (array):number {
        return array.length;
    };
    console.log(`The Length of the array is : ${arrayLen(array)}`);

    //Above example with arrow function
    let arrayLenArrow = (array)=>array.length;
    console.log(`The Length of the array is : ${arrayLenArrow(array)}`);

    //array with the length of each element

    let movies = ['Inception' , 'Limitless' , 'Terminator'];

    let movieLength = movies.map(function (movie) {
            return movie.length;
        }
    );

    //Above example with Arrow function
    let moviesLenArrow = movies.map(movies=>movies.length);
    console.log(moviesLenArrow);

    console.log(movieLength);