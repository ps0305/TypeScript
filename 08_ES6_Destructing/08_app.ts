    /*
    ---------------------------------------------------------------------------------
     6. Destructing
    ---------------------------------------------------------------------------------
    This is one of the powerful feature in ES6, where in instead of adding a single value
    to a variable from an array, we can do it all by once.

    */

    //Starter

    let array = [10001,'Colt','Developer'];
    let id = array[0];
    let myName = array[1];
    let designation = array[2];

    let student:Array<any> = ['Colt' ,35 , 'Developer'];
    let [ stdName , stdAge , stdJob ]= student;
    console.log(`name ${name} age ${stdAge} job ${stdJob}`);



    // Best usage is to exchange the value btw a & b
    let a = 10;
    let b = 20;
    [b,a] = [a,b];
    console.log(`a: ${a} b: ${b}`);


    // This even works for Objects
    let employee = {
        name : 'Colt',
        age : 35,
        job : 'developer'
    };
    //conventional method
    //let empname = employee.name;
    //let empAge = employee.age;
    //let empJob = employee.job;


    //destructing way
    let {name:empName , age:empAge , job:empJob} = employee;
    console.log(`Name : ${empName} age ${empAge} job ${empJob}`);


