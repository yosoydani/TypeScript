// basic types

// 1.- boolean
let isDone: boolean = false;
// 2.- numbers
let decimal: number = 6;
let hex: number = 0xf00d;
let binary: number = 0b1010;
let octal: number = 0o744;
// 3.- strings
let color: string = "blue";
color = "red";
// 4.- Arrays
let list1: number[] = [1, 2, 3];
let list2: Array<number> = [1, 2, 3];
// 5.- tupla
// declare a tuple type
let x: [string, number];
x = ["hello", 10];
// 6.- Enum
enum Color { Red, Green, Blue }
let c: Color = Color.Green;

enum Color2 { Red = 1, Green = 2, Blue = 4 }
let c2: Color2 = Color2.Green;
// 7.- Any
let notSure: any = 4;
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

function greetNamed(name: string): string {
    if (name) {
        return "Hi " + name;
    }
}

// function expresion
// function type
var greetUnamed: (name: string) => string = function (name: string): string {
    if (name) {
        return "Hi " + name;
    }
};

function add(foo: number[]): void {
    var result: number = 0;
    for (var i: number = 0; i < foo.length; i++) {
        result += foo[i];
    }
    return console.log(result);
}

add([]);
add([2, 4, 6]);
add([1000, 3585, 55874]);

// sobrecarga de funciones

function test(name: string): string; // sobrecarga de parametros
function test(age: number): string;
function test(single: boolean): string;
function test(value: (string | number | boolean)): string { // implementación de la sobrecarga
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

// specializaded overloading siganture (parametros especializados?)
// se puede definir una sobrecarga con los mismos parámetros pero que devuevla un
// tipo parametros diferente.

interface IDocument {
    createElement(tagName: "div"): HTMLDivElement; // especializado
    createElement(tagName: "span"): HTMLSpanElement; // especializado
    createElement(tagName: "canvas"): HTMLCanvasElement; // especializado
    createElement(tagName: string): HTMLElement; // no especializado
}

// this
let baraja: any = {
    palos: ["espadas", "copas", "oros", "bastos"],
    cartas: Array(40),
    cogedorDeCartas: function (): any {
        return () => {
            let cartaCogida: number = Math.floor(Math.random() * 40);
            let paloCogido: number = Math.floor(cartaCogida / 10);
            return { palo: this.palos[paloCogido], carta: cartaCogida % 10 };
        };
    }
};
let sacaCartas: any = baraja.cogedorDeCartas();
let cartaSacada: any = sacaCartas();
// alert("carta: " + cartaSacada.carta + " palo: " + cartaSacada.palo);
// document.getElementById("text").innerHTML = "carta: " + cartaSacada.carta + " palo: " + cartaSacada.palo;


// iffe funciones invocadas inmediatemente entre parentesis y con () al final.
// se puede utilizar para cerrar el ambito de actuación de las variables.
(function (): any {
    console.log("Función invocada inmediatamente");
}());

// genericos. Evita la repetición de código.
function getEntities<T>(url: string, cb: (list: T[]) => void): void {
    console.log("YEAH");
    // se pasa la función como parámetro y se usa el valor devuelto como parametro de esta función.
    // cb(datos)
    // cb(null)
}

// call back y funciones de orden superior
// callback
var foo: any = function (): void {
    console.log("foo");
};
// función de orden superior
function bar(cb: () => void): void {
    console.log("bar");
    cb();
}
bar(foo);

// arrow functions
class Persona {
    name: string;
    constructor(name: string) {
        this.name = name;
    }
    greet(): void {
        console.log("Hi, my name is " + this.name);
    }

    greetDelay(time: number): void {
        setTimeout(() => console.log("Hi, my name is " + this.name), time);
    }
}
var remo: Persona = new Persona("dani");
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
let list: number[] = [4, 5, 6];

for (let i in list) {
    if (list.hasOwnProperty(i)) {
        console.log("for in devuelve la clave " + i); // "0", "1", "2",
    }
}

for (let i of list) {
    console.log("for of devuelve el valor " + i); // "4", "5", "6"
}

// set no funciona en SC5
let pets: string[] = ["Cat", "Dog", "Hamster"];
// pets.add("Monkey");
let key: string = "species";
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
 function* gene():any {
     yield 1;
     yield "peo";
     yield (function(): void {console.log("tercer paso");})();
     return "final";
 }

 var barGene:any = gene();
 var i:number = 0;
 do {
     var j = barGene.next();
     console.log("paso " + i + " " + JSON.stringify(j)); // { value: xxxx, done: false } forever and ever
     i++;
}while (j.done!==true);

// funciones asincronas

// printDelayed is a 'Promise<void>'
async function printDelayed(elements: string[]) {
    for (const element of elements) {
        await delay(200);
        console.log(element);
    }
}

async function delay(milliseconds: number) {
    return new Promise<void>(resolve => {
        setTimeout(resolve, milliseconds);
    });
}

printDelayed(["Hello", "beautiful", "asynchronous", "world"]).then(() => {
    console.log();
    console.log("Printed every element!");
});





