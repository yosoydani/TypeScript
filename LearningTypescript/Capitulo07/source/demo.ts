import { MathDemo } from "./math_demo";
import {CalculatorWidget} from "./calculator_widget";
var math = new MathDemo();
console.log(math.PI);
var cal: CalculatorWidget = new CalculatorWidget(math);
(<any>window).calculator = cal;
cal.render("#widget");
