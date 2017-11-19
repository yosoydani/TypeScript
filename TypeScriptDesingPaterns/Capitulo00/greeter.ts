// greeter.js
// clases
class Student {
	fullname:string;
	constructor(public firstName: string, public middleInitial: string,	public lastName: string){
		this.fullname = firstName + " " + middleInitial + " " + lastName;
	} // constructor
}// class student

let user = new Student("Mary","J.","Watson" ) 

// interfaces
interface Person {
	firstName: string;
	lastName: string;
}

// functions
function greeter(person: Person){
	return "Hello, " + person.firstName + " " + person.lastName;
}

// let user = {firstName: "Jane", lastName:"User"};

document.body.innerHTML = greeter(user) + "<h1>"+ user.fullname +"</h1>"
