/*
---------------------------------------------------------------------------------
 2. Template Strings
---------------------------------------------------------------------------------
 Instead of using String Concatenation Operator for joining two or more
 String Literals Template Strings are best alternative.
 In this we use ` (back tick).

*/
// Starter
var employee = {
    id: 1001,
    name: "Colt",
    designation: "Technical Mentor"
};
var displayName = "Meet Mr ." + employee.name;
var output = "<h1 id='display'>" + displayName + "</h1>"; // String concatenation
// Template String
output = "<h1 id=\"display\"> " + employee.name + " </h1> <span>This is some</span>";
document.getElementById('container').innerHTML = output;
console.log(displayName);
var templateString = "<div style=\"background-color: orangered\">\n                                <h1>" + employee.id + "</h1>\n                                <h1>" + employee.name + "</h1>\n                                <h1>" + employee.designation + "</h1>\n\n                            </div>";
document.getElementById('container').innerHTML = templateString;
