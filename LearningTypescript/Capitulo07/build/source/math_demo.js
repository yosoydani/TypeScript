"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class MathDemo {
    constructor() {
        this.PI = 3.14159265359;
    }
    pow(base, exponent) {
        var result = base;
        for (let index = 0; index < exponent - 1; index++) {
            result *= base;
        }
        return result;
    }
}
exports.MathDemo = MathDemo;
