import { MathInterface } from "./interfaces";

export class MathDemo implements MathInterface {
    public PI : number;
    
    constructor(){
        this.PI = 3.14159265359;
    }
    
    public pow(base: number, exponent: number) {
        var result = base;
        for (let index = 0; index < exponent -1; index++) {
            result *= base;            
        }
        return result;
    }
}
