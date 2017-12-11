export interface MathInterface {
    PI: number;
    pow(base: number, exponent: number);
}

export interface CalculatorWidgetInterface {
    render (id: string);
    onSubmit (): void;
}