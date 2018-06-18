// Create a Student Interface , and printStudent function
    interface Student{
        name : string,
        age : number,
        address : {
            city : string,
            state : string,
            country : string
        }
    }
    function getStudent(student:Student){
        let output = `Name : ${student.name} 
                      Age : ${student.age} 
                      City : ${student.address.city} 
                      State : ${student.address.state}
                      Country : ${student.address.country}`;
        console.log(output);
    }
    let student:Student = {
        name : 'Colt',
        age : 25,
        address : {
            city : 'Hyderabad',
            state : 'Telengana',
            country : 'India'
        }
    };
    getStudent(student);


