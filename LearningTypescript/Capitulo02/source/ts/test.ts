// var t : number = 1;
module Geometry {
	export interface IVector2dInterface {
		toArray(callback: (x: number[])=>void): void;
		length():number;
		normalize(): void;
	}

	export class Vector2d implements IVector2dInterface {
		private _x: number;
		private _y: number;
		constructor(x: number, y: number ) {
			this._x=x;
			this._y=y;
		} // constructor
		toArray(callback:(x:number[]) => void): void {
			callback([this._x,this._y]);
		} // to Array
		length(): number {
			return Math.sqrt(this._x * this._x + this._y * this._y);
		}// lenght
		normalize(): void {
			var len: number = 1 / this.length();
			this._x *= len;
			this._y *= len;
		}// normalize
	}// class vextor2
}// geometry

var vector : Geometry.IVector2dInterface = new Geometry.Vector2d(2,3);
vector.normalize();
vector.toArray(function(vectorAsArray : number[]): void {
	console.log("x: " + vectorAsArray[0] + "y:" + vectorAsArray[1]);
});