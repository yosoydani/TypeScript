"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const math_demo_1 = require("./math_demo");
const calculator_widget_1 = require("./calculator_widget");
var math = new math_demo_1.MathDemo();
console.log(math.PI);
var cal = new calculator_widget_1.CalculatorWidget(math);
window.calculator = cal;
cal.render("#widget");
