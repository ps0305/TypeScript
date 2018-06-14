/*
---------------------------------------------------------------------------------
 6. Destructing
---------------------------------------------------------------------------------
This is one of the powerful feature in ES6, where in instead of adding a single value
to a variable from an array, we can do it all by once.

*/
//Starter
var array = [10001, 'Colt', 'Developer'];
var id = array[0];
var myName = array[1];
var designation = array[2];
var student = ['Colt', 35, 'Developer'];
var stdName = student[0], stdAge = student[1], stdJob = student[2];
console.log("name " + name + " age " + stdAge + " job " + stdJob);
// Best usage is to exchange the value btw a & b
var a = 10;
var b = 20;
_a = [a, b], b = _a[0], a = _a[1];
console.log("a: " + a + " b: " + b);
// This even works for Objects
var employee = {
    name: 'Colt',
    age: 35,
    job: 'developer'
};
//conventional method
//let empname = employee.name;
//let empAge = employee.age;
//let empJob = employee.job;
//destructing way
var empName = employee.name, empAge = employee.age, empJob = employee.job;
console.log("Name : " + empName + " age " + empAge + " job " + empJob);
var _a;
