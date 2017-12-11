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
