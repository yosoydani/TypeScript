// clases y herencia
class Person {
    constructor(name, suurname, email) {
        this.name = name;
        this.surname = suurname;
    }
    greet() {
        alert("Hi! I'm " + this.name);
    }
} // person class
class Email {
    constructor(email) {
        if (this.validateEmail(email)) {
            this.email = email;
        }
        else {
            throw new Error("invalid email");
        }
    }
    validateEmail(email) {
        // tslint:disable-next-line:max-line-length
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    }
} // email class
class Teacher extends Person {
    constructor(name, surname, email, subjects) {
        super(name, surname, email);
        this.subjects = subjects;
    }
    greet() {
        super.greet();
        alert("I teach " + this.subjects);
    }
    teach() {
        alert("Welcome to class!");
    }
}
class SchoolPrincipal extends Teacher {
    manageTeachers() {
        alert("We need to help students to help stauden to get better results!");
    }
}
var email = new Email("example@gmail.com");
var me = new Person("daniel", "sanchez", email);
var teacher = new Teacher("dani", "reason", new Email("profesonr@gmail.com"), ["math", "physics"]);
// me.greet();
// teacher.teach();
// mixin to solve multiple inheritance
// es algo parecido a una herencia parcial.
// limitaciones: solo se hereda de los padres directos. Si hay 2 metodos con el mismo nombre
// se implementa el ultimo que se pase como parámetros.
////////////////////////////////////////
// in your runtime library somewhere
////////////////////////////////////////
function applyMixins(derivedCtor, baseCtors) {
    baseCtors.forEach(baseCtor => {
        Object.getOwnPropertyNames(baseCtor.prototype).forEach(name => {
            derivedCtor.prototype[name] = baseCtor.prototype[name];
        });
    });
}
//
class Mammal {
    breathe() {
        return "I'm alive";
    }
}
class WingedAnimal {
    fly() {
        return "I can fly";
    }
}
// se crea la clase con la signatura
class Bat {
}
applyMixins(Bat, [Mammal, WingedAnimal]);
var batman = new Bat();
console.log(batman.breathe());
console.log(batman.fly());
// clases gnericass
/*
import * as Q from "q";
import * as $ from "jquery";
import { resolve } from "path";
class User implements IValidateInterface {
    constructor(public name: string, public password: string) {}
    isValid(): boolean {
        return true;
    }
}

class NotGenericUserRepository {
    private _url: string;
    constructor(url: string) {
        this._url = url;
    }
    public getAsync(): any {
        return Q.Promise((resolve: (users: User[])=> void, reject) => {
            $.ajax({
                url: this._url,
                method: "GET",
                dataType: "json",
                success:
                (data) => {
                    var users: any  = <User[]>data.items;
                    resolve(users);
                },
                error: (e) => {
                    reject(e);
                }
            });// ajax
        });// q.promises
    }// getAsync
} // class

// con la interface se consigue que un metodo generico use metdos ya que limitamos los tipos que se pueden utilizar
// a los que tenga implementada esa interface. Si se quiere implementar 2 interface hay qeu mezclarlas en una inferface
// de inivel superior
class GenericUserRepository<T extends IValidateInterface> {
    private _url: string;
    constructor(url: string) {
        this._url = url;
    }
    public getAsync(): any {
        return Q.Promise((resolve: (entitis: T[])=> void, reject) => {
            $.ajax({
                url: this._url,
                method: "GET",
                dataType: "json",
                success:
                (data) => {
                    var list: T[]  = <T[]>data.items;
                    // validar el tipo se introduce un método en el tipo
                    for(let i: number = 0; i<list.length;i++) {
                        if(list[i].isValid()) {
                            // do something
                        }
                    }
                    resolve(list);
                },
                error: (e) => {
                    reject(e);
                }
            });// ajax
        });// q.promises
    }// getAsync
} // class
var usuario: User = new User("daniel","123456");

interface IValidateInterface {
    isValid(): boolean;
}

// function factoryNotWorking<T>(): T { return new T();} // error
// hqy que indicar un nuevo constructor
function factory<T>(): T {
    var type : {new(): T;};
    return new type();
}
*/
// namespace
// las referencias se usan al principio del archivo
// sirven para juntar los ficheros. como los hago de 1 enuno no hacen falta.
/// <reference path="./namespaces/Validation.ts" />
/// <reference path="./namespaces/LettersOnlyValidator.ts" />
/// <reference path="./namespaces/ZipCodeValidator.ts" />
// some samples to try
let strings = ["Hello", "98052", "101"];
// validators to use
let validators = {};
validators["ZIP code"] = new Validation.ZipCodeValidator();
validators["Letters only"] = new Validation.LettersOnlyValidator();
// show whether each string passed each validator
for (let s of strings) {
    // tslint:disable-next-line:forin
    for (let name in validators) {
        let isMatch = validators[name].isAcceptable(s);
        console.log(`'${s}' ${isMatch ? "matches" : "does not match"} '${name}'.`);
    }
}
//# sourceMappingURL=main.js.map