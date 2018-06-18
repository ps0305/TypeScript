function getStudent(student) {
    var output = "Name : " + student.name + " \n                      Age : " + student.age + " \n                      City : " + student.address.city + " \n                      State : " + student.address.state + "\n                      Country : " + student.address.country;
    console.log(output);
}
var student = {
    name: 'Colt',
    age: 25,
    address: {
        city: 'Hyderabad',
        state: 'Telengana',
        country: 'India'
    }
};
getStudent(student);
