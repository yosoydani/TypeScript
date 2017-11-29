// basic types
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
// 1.- boolean
let isDone = false;
// 2.- numbers
let decimal = 6;
let hex = 0xf00d;
let binary = 0b1010;
let octal = 0o744;
// 3.- strings
let color = "blue";
color = "red";
// 4.- Arrays
let list1 = [1, 2, 3];
let list2 = [1, 2, 3];
// 5.- tupla
// declare a tuple type
let x;
x = ["hello", 10];
// 6.- Enum
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
let c = Color.Green;
var Color2;
(function (Color2) {
    Color2[Color2["Red"] = 1] = "Red";
    Color2[Color2["Green"] = 2] = "Green";
    Color2[Color2["Blue"] = 4] = "Blue";
})(Color2 || (Color2 = {}));
let c2 = Color2.Green;
// 7.- Any
let notSure = 4;
notSure = "maybe a string instead";
notSure = false; // okay, definitely a boolean
// 8.- void
// 9.- Null and Undefined
// 10.- Never tipo para variables que nunca llegan a usarse.
// declaración de variables
// var, se van arriba accesibles dentro de la misma función
// let, se quedan accesibles dentro del mismo bloque.
// cons, accesibles dentro del bloque (como let) no se pueden cambiar
console.log(greetNamed("John"));
// console.log(greetUnamed("Jhon"));
// function declaration
function greetNamed(name) {
    if (name) {
        return "Hi " + name;
    }
}
// function expresion
// function type
var greetUnamed = function (name) {
    if (name) {
        return "Hi " + name;
    }
};
function add(foo) {
    var result = 0;
    for (var i = 0; i < foo.length; i++) {
        result += foo[i];
    }
    return console.log(result);
}
add([]);
add([2, 4, 6]);
add([1000, 3585, 55874]);
function test(value) {
    switch (typeof value) {
        case "string":
            return `My name is ${value}.`;
        case "number":
            return `I am ${value} old.`;
        case "boolean":
            return value ? "I am single." : "I'm not single";
        default:
            console.log("Invalid function");
    }
}
console.log(test("Dani"));
console.log(test(37));
console.log(test(false));
// this
let baraja = {
    palos: ["espadas", "copas", "oros", "bastos"],
    cartas: Array(40),
    cogedorDeCartas: function () {
        return () => {
            let cartaCogida = Math.floor(Math.random() * 40);
            let paloCogido = Math.floor(cartaCogida / 10);
            return { palo: this.palos[paloCogido], carta: cartaCogida % 10 };
        };
    }
};
let sacaCartas = baraja.cogedorDeCartas();
let cartaSacada = sacaCartas();
// alert("carta: " + cartaSacada.carta + " palo: " + cartaSacada.palo);
// document.getElementById("text").innerHTML = "carta: " + cartaSacada.carta + " palo: " + cartaSacada.palo;
// iffe funciones invocadas inmediatemente entre parentesis y con () al final.
// se puede utilizar para cerrar el ambito de actuación de las variables.
(function () {
    console.log("Función invocada inmediatamente");
}());
// genericos. Evita la repetición de código.
function getEntities(url, cb) {
    console.log("YEAH");
    // se pasa la función como parámetro y se usa el valor devuelto como parametro de esta función.
    // cb(datos)
    // cb(null)
}
// call back y funciones de orden superior
// callback
var foo = function () {
    console.log("foo");
};
// función de orden superior
function bar(cb) {
    console.log("bar");
    cb();
}
bar(foo);
// arrow functions
class Persona {
    constructor(name) {
        this.name = name;
    }
    greet() {
        console.log("Hi, my name is " + this.name);
    }
    greetDelay(time) {
        setTimeout(() => console.log("Hi, my name is " + this.name), time);
    }
}
var remo = new Persona("dani");
remo.greet();
remo.greetDelay(1000);
// promesas estados: pendiente, cumplida, rechazada
// se le pasa dos funciones que se ejecutan cuando si sale bieno mal respectivamente con then o catch
/*
asyncView.renderAsync() <-- se ejecuta esta función
.then(function(){  alert("render done!"); }) <-- sale bien
.catch(function(e){ console.log(e); }); <-- sale mal
*/
// iteradores y generadores
let list = [4, 5, 6];
for (let i in list) {
    if (list.hasOwnProperty(i)) {
        console.log("for in devuelve la clave " + i); // "0", "1", "2",
    }
}
for (let i of list) {
    console.log("for of devuelve el valor " + i); // "4", "5", "6"
}
// set no funciona en SC5
let pets = ["Cat", "Dog", "Hamster"];
// pets.add("Monkey");
let key = "species";
// pets[key] = "mammals";
for (let pet in pets) {
    if (pets.hasOwnProperty(pet)) {
        console.log("for in devuelve valor " + pet); // "species"
    }
}
for (let pet of pets) {
    console.log("for of devuelve la clave " + pet); // "Cat", "Dog", "Hamster"
}
// generators funciones que se pueden para en mitad de la ejecución y devolver el flujo
function* gene() {
    yield 1;
    yield "peo";
    yield (function () { console.log("tercer paso"); })();
    return "final";
}
var barGene = gene();
var i = 0;
do {
    var j = barGene.next();
    console.log("paso " + i + " " + JSON.stringify(j)); // { value: xxxx, done: false } forever and ever
    i++;
} while (j.done !== true);
// funciones asincronas
// printDelayed is a 'Promise<void>'
function printDelayed(elements) {
    return __awaiter(this, void 0, void 0, function* () {
        for (const element of elements) {
            yield delay(200);
            console.log(element);
        }
    });
}
function delay(milliseconds) {
    return __awaiter(this, void 0, void 0, function* () {
        return new Promise(resolve => {
            setTimeout(resolve, milliseconds);
        });
    });
}
printDelayed(["Hello", "beautiful", "asynchronous", "world"]).then(() => {
    console.log();
    console.log("Printed every element!");
});
//# sourceMappingURL=index.js.map