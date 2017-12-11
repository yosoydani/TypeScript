class Person {
    constructor(name, surname, age) {
        this.age = 0;
        this.name = name;
        this.surname = surname;
        this.age = age;
    }
    greet() {
        var msg = `Hi! my name is ${this.name} ${this.surname}`;
        msg += `I'm ${this.age}`;
        return msg;
    }
}
function makeArmy() {
    var shooters = [];
    for (var i = 0; i < 10; i++) {
        var shooter = function () {
            // a shooter is a function
            console.log((i));
            // which should alert it's number
        };
        shooters.push(shooter);
    }
    return shooters;
}
var army = makeArmy();
army[1]();
army[3]();
army[5]();
function newmakeArmy() {
    var shooters = [];
    for (var i = 0; i < 10; i++) {
        (function (i) {
            var shooter = function () {
                console.log(i);
            };
            shooters.push(shooter);
        })(i);
    }
    return shooters;
}
var newarmy = newmakeArmy();
newarmy[0](); // 0
newarmy[5](); // 5
//# sourceMappingURL=main.js.map