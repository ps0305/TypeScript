/*
---------------------------------------------------------------------------------
 3. Let & Const
---------------------------------------------------------------------------------
 This 'let' is an ES6 Feature to declare variables like 'var' in javascript.

*/
//problem when iterating values in for loop
for (var i = 0; i < 10; i++) {
}
console.log("The value of i is " + i); //'i' is accessible from outside when,var keyword used
for (var j = 0; j < 10; j++) {
}
// console.log('The value of j is : ${j}');//'j' is not accessible from outside when,"let" keyword used
//same applicable for if,else condition
if (100 === 100) {
    var dept1 = 'Jr Developer';
    var dept2 = 'Sr Developer';
}
console.log(dept1); //accessible with 'var' keyword
//console.log(dept2);  //not accessible with 'let' keyword
//const keyword
var COURSE_NAME = 'web development';
