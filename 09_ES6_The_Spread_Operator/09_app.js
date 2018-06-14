/*
---------------------------------------------------------------------------------
 7. The Spread Operator
---------------------------------------------------------------------------------
This is looks like var arg method in java but this is more than that.

In this, an array can be expanded and pass it as arguments to an another function which
Accepts '0' or more number of arguments as values.

*/
//Ex:
function Employee() {
    var values = [];
    for (var i = 0; i < arguments.length; i++) {
        values[i] = arguments[i];
    }
    return values;
}
/*let values = Array.prototype.splice.call(arguments,[0]);
return values;*/
var values = [10, 20, 30, 40, 50];
var min = Math.min.apply(Math, values);
console.log("The min values is : " + min);
//user spread operator to add element inside another array
var arr1 = [10, 20, 30];
var arr2 = arr1.concat([40, 50, 60]);
console.log(arr2);
//use spread to create new copy of array
var array1 = [10, 20, 3, 0, 40, 50];
var array2 = array1.slice();
if (array1 === array2) {
    console.log("equal");
}
else {
    console.log('not equal');
}
