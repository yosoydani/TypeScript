// greeter.js
// clases
var Student = /** @class */ (function () {
    function Student(firstName, middleInitial, lastName) {
        this.firstName = firstName;
        this.middleInitial = middleInitial;
        this.lastName = lastName;
        this.fullname = firstName + " " + middleInitial + " " + lastName;
    } // constructor
    return Student;
}()); // class student
var user = new Student("Mary", "J.", "Watson");
// functions
function greeter(person) {
    return "Hello, " + person.firstName + " " + person.lastName;
}
// let user = {firstName: "Jane", lastName:"User"};
document.body.innerHTML = greeter(user) + "<h1>" + user.fullname + "</h1>";
