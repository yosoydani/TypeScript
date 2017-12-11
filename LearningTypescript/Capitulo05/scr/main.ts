class Person {
    public name : string;
    public surname: string;
    public age: number = 0;
    constructor (name: string, surname: string, age: number) {
        this.name = name;
        this.surname = surname;
        this.age =age;
    }
    greet():string {
        var msg: string =`Hi! my name is ${this.name} ${this.surname}`;
        msg += `I'm ${this.age}`;
        return msg;
    }
}
function makeArmy():any {
    var shooters: any = [];
    for(var i:number = 0; i < 10; i++) {
        var shooter: any = function():any {
            // a shooter is a function
            console.log((i));
            // which should alert it's number
        };
        shooters.push(shooter);
    }
    return shooters;
}
var army:any = makeArmy();
army[1]()
army[3]();
army[5]();

function newmakeArmy():any {
        var shooters:any = [];
    for(var i:number = 0; i < 10; i++) {
        (function(i:number):any {
            var shooter: any = function():any {
                console.log(i);
            };
            shooters.push(shooter);
         })(i);
        }
        return shooters;
}
var newarmy: any = newmakeArmy();
newarmy[0](); // 0
newarmy[5](); // 5