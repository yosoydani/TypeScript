(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.demo = f()}})(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class CalculatorWidget {
    constructor(math) {
        if (math == null) {
            throw new Error("Argument null exception");
        }
        this._math = math;
    }
    render(id) {
        $(id).html(template);
        this.$base = $("#base");
        this.$exponent = $("#exponent");
        this.$result = $("#result");
        this.$btn = $("#submit");
        this.$btn.on("click", (e) => {
            this.onSubmit();
        });
        //throw new Error("Method not implemented.");
    }
    onSubmit() {
        var base = parseInt(this.$base.val());
        var exponent = parseInt(this.$exponent.val());
        if (isNaN(base) || isNaN(exponent)) {
            alert("Base y exponente han de ser números");
        }
        else {
            this.$result.val(this._math.pow(base, exponent));
        }
        //throw new Error("Method not implemented.");
    }
}
exports.CalculatorWidget = CalculatorWidget;
var template = '<div class="well">' +
    '<div class="row">' +
    '<div class="col-md-3">' +
    '<div class="form-group">' +
    '<label>Base</label>' +
    '<input type="text" class="form-control" id="base" placeholder="0">' +
    '</div>' +
    '</div>' +
    '<div class="col-md-3">' +
    '<div class="form-group">' +
    '<label>Exponent</label>' +
    '<input type="text" class="form-control" id="exponent" placeholder="0">' +
    '</div>' +
    '</div>' +
    '<div class="col-md-3">' +
    '<div class="form-group">' +
    '<label>Result</label>' +
    '<input type="text" class="form-control" id="result" placeholder="1" disabled="disabled">' +
    '</div>' +
    '</div>' +
    '<div class="col-md-3">' +
    '<div class="form-group">' +
    '<button id="submit" type="submit" class="btn btn-primary">Submit</button>' +
    '</div>' +
    '</div>' +
    '</div>' +
    '</div>';

},{}],2:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const math_demo_1 = require("./math_demo");
const calculator_widget_1 = require("./calculator_widget");
var math = new math_demo_1.MathDemo();
console.log(math.PI);
var cal = new calculator_widget_1.CalculatorWidget(math);
window.calculator = cal;
cal.render("#widget");

},{"./calculator_widget":1,"./math_demo":3}],3:[function(require,module,exports){
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

},{}]},{},[2])(2)
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJidWlsZC9zb3VyY2UvY2FsY3VsYXRvcl93aWRnZXQuanMiLCJidWlsZC9zb3VyY2UvZGVtby5qcyIsImJ1aWxkL3NvdXJjZS9tYXRoX2RlbW8uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM1REE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDVEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5jbGFzcyBDYWxjdWxhdG9yV2lkZ2V0IHtcbiAgICBjb25zdHJ1Y3RvcihtYXRoKSB7XG4gICAgICAgIGlmIChtYXRoID09IG51bGwpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIkFyZ3VtZW50IG51bGwgZXhjZXB0aW9uXCIpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuX21hdGggPSBtYXRoO1xuICAgIH1cbiAgICByZW5kZXIoaWQpIHtcbiAgICAgICAgJChpZCkuaHRtbCh0ZW1wbGF0ZSk7XG4gICAgICAgIHRoaXMuJGJhc2UgPSAkKFwiI2Jhc2VcIik7XG4gICAgICAgIHRoaXMuJGV4cG9uZW50ID0gJChcIiNleHBvbmVudFwiKTtcbiAgICAgICAgdGhpcy4kcmVzdWx0ID0gJChcIiNyZXN1bHRcIik7XG4gICAgICAgIHRoaXMuJGJ0biA9ICQoXCIjc3VibWl0XCIpO1xuICAgICAgICB0aGlzLiRidG4ub24oXCJjbGlja1wiLCAoZSkgPT4ge1xuICAgICAgICAgICAgdGhpcy5vblN1Ym1pdCgpO1xuICAgICAgICB9KTtcbiAgICAgICAgLy90aHJvdyBuZXcgRXJyb3IoXCJNZXRob2Qgbm90IGltcGxlbWVudGVkLlwiKTtcbiAgICB9XG4gICAgb25TdWJtaXQoKSB7XG4gICAgICAgIHZhciBiYXNlID0gcGFyc2VJbnQodGhpcy4kYmFzZS52YWwoKSk7XG4gICAgICAgIHZhciBleHBvbmVudCA9IHBhcnNlSW50KHRoaXMuJGV4cG9uZW50LnZhbCgpKTtcbiAgICAgICAgaWYgKGlzTmFOKGJhc2UpIHx8IGlzTmFOKGV4cG9uZW50KSkge1xuICAgICAgICAgICAgYWxlcnQoXCJCYXNlIHkgZXhwb25lbnRlIGhhbiBkZSBzZXIgbsO6bWVyb3NcIik7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aGlzLiRyZXN1bHQudmFsKHRoaXMuX21hdGgucG93KGJhc2UsIGV4cG9uZW50KSk7XG4gICAgICAgIH1cbiAgICAgICAgLy90aHJvdyBuZXcgRXJyb3IoXCJNZXRob2Qgbm90IGltcGxlbWVudGVkLlwiKTtcbiAgICB9XG59XG5leHBvcnRzLkNhbGN1bGF0b3JXaWRnZXQgPSBDYWxjdWxhdG9yV2lkZ2V0O1xudmFyIHRlbXBsYXRlID0gJzxkaXYgY2xhc3M9XCJ3ZWxsXCI+JyArXG4gICAgJzxkaXYgY2xhc3M9XCJyb3dcIj4nICtcbiAgICAnPGRpdiBjbGFzcz1cImNvbC1tZC0zXCI+JyArXG4gICAgJzxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwXCI+JyArXG4gICAgJzxsYWJlbD5CYXNlPC9sYWJlbD4nICtcbiAgICAnPGlucHV0IHR5cGU9XCJ0ZXh0XCIgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIiBpZD1cImJhc2VcIiBwbGFjZWhvbGRlcj1cIjBcIj4nICtcbiAgICAnPC9kaXY+JyArXG4gICAgJzwvZGl2PicgK1xuICAgICc8ZGl2IGNsYXNzPVwiY29sLW1kLTNcIj4nICtcbiAgICAnPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXBcIj4nICtcbiAgICAnPGxhYmVsPkV4cG9uZW50PC9sYWJlbD4nICtcbiAgICAnPGlucHV0IHR5cGU9XCJ0ZXh0XCIgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIiBpZD1cImV4cG9uZW50XCIgcGxhY2Vob2xkZXI9XCIwXCI+JyArXG4gICAgJzwvZGl2PicgK1xuICAgICc8L2Rpdj4nICtcbiAgICAnPGRpdiBjbGFzcz1cImNvbC1tZC0zXCI+JyArXG4gICAgJzxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwXCI+JyArXG4gICAgJzxsYWJlbD5SZXN1bHQ8L2xhYmVsPicgK1xuICAgICc8aW5wdXQgdHlwZT1cInRleHRcIiBjbGFzcz1cImZvcm0tY29udHJvbFwiIGlkPVwicmVzdWx0XCIgcGxhY2Vob2xkZXI9XCIxXCIgZGlzYWJsZWQ9XCJkaXNhYmxlZFwiPicgK1xuICAgICc8L2Rpdj4nICtcbiAgICAnPC9kaXY+JyArXG4gICAgJzxkaXYgY2xhc3M9XCJjb2wtbWQtM1wiPicgK1xuICAgICc8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cFwiPicgK1xuICAgICc8YnV0dG9uIGlkPVwic3VibWl0XCIgdHlwZT1cInN1Ym1pdFwiIGNsYXNzPVwiYnRuIGJ0bi1wcmltYXJ5XCI+U3VibWl0PC9idXR0b24+JyArXG4gICAgJzwvZGl2PicgK1xuICAgICc8L2Rpdj4nICtcbiAgICAnPC9kaXY+JyArXG4gICAgJzwvZGl2Pic7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmNvbnN0IG1hdGhfZGVtb18xID0gcmVxdWlyZShcIi4vbWF0aF9kZW1vXCIpO1xuY29uc3QgY2FsY3VsYXRvcl93aWRnZXRfMSA9IHJlcXVpcmUoXCIuL2NhbGN1bGF0b3Jfd2lkZ2V0XCIpO1xudmFyIG1hdGggPSBuZXcgbWF0aF9kZW1vXzEuTWF0aERlbW8oKTtcbmNvbnNvbGUubG9nKG1hdGguUEkpO1xudmFyIGNhbCA9IG5ldyBjYWxjdWxhdG9yX3dpZGdldF8xLkNhbGN1bGF0b3JXaWRnZXQobWF0aCk7XG53aW5kb3cuY2FsY3VsYXRvciA9IGNhbDtcbmNhbC5yZW5kZXIoXCIjd2lkZ2V0XCIpO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5jbGFzcyBNYXRoRGVtbyB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMuUEkgPSAzLjE0MTU5MjY1MzU5O1xuICAgIH1cbiAgICBwb3coYmFzZSwgZXhwb25lbnQpIHtcbiAgICAgICAgdmFyIHJlc3VsdCA9IGJhc2U7XG4gICAgICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBleHBvbmVudCAtIDE7IGluZGV4KyspIHtcbiAgICAgICAgICAgIHJlc3VsdCAqPSBiYXNlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxufVxuZXhwb3J0cy5NYXRoRGVtbyA9IE1hdGhEZW1vO1xuIl19
