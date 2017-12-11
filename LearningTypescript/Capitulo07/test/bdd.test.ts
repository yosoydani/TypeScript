import {MathDemo} from "../source/math_demo"; 
import { MathInterface, CalculatorWidgetInterface } from "../source/interfaces";
import{CalculatorWidget} from "../source/calculator_widget";
import * as sinon from "sinon";

var expect = chai.expect;

// Test suite
describe('BDD test example for MathDemo class \n', () =>{
    before(function(){
        /* se invoca antes de todos los test */

    });

    after(function(){
        // se invoca después de todos los tests
    });

    beforeEach(()=>{
        // se invoca antes de CADA test
    });

    afterEach(()=>{
        // se infoca despues de CADA test
    });

    // Unit test
    it('should return the correct numeric value for PI \n',()=>{
        var math: MathInterface = new MathDemo();
        expect(math.PI).to.equals(3.14159265359);
        expect(math.PI).to.be.a('number');
    });

    it('should return the correct numeric value for pow \n', () => {
        var math : MathInterface = new MathDemo();
        var result = math.pow(3,5);
        var expected = 243;
        expect(result).to.be.a('number');
        expect(result).to.equal(expected);
    });

    describe('BDD test example for CalculatorWidget \n',()=>{
        before(function(){
            $("body").append('<div id="widget" />');
        });
        
        beforeEach(function(){
            $('#widget').empty();
        });
    } );

    it('onSubmit Should be invoked then #submit is clicked',()=>{
        var math: MathInterface = new MathDemo();
        var cal = new CalculatorWidget(math);
        cal.render("#widget");
        $('#base').val('2');
        $('#exponent').val('3');
        // spy on submit
        var onSubmitSpy = sinon.spy(cal, "onSubmit");
        $('#submit').trigger('click');
        // assert cal.onSubmit
      //  expect(onSubmitSpy.called).to.equal(true);
       // expect(onSubmitSpy.callCount).to.equal(1);
        expect($('#result').val()).to.equal("8");
        

    })




    



})