var Geometry;
(function (Geometry) {
    var Vector2d = (function () {
        function Vector2d(x, y) {
            this._x = x;
            this._y = y;
        }
        Vector2d.prototype.toArray = function (callback) {
            callback([this._x, this._y]);
        };
        Vector2d.prototype.length = function () {
            return Math.sqrt(this._x * this._x + this._y * this._y);
        };
        Vector2d.prototype.normalize = function () {
            var len = 1 / this.length();
            this._x *= len;
            this._y *= len;
        };
        return Vector2d;
    }());
    Geometry.Vector2d = Vector2d;
})(Geometry || (Geometry = {}));
var vector = new Geometry.Vector2d(2, 3);
vector.normalize();
vector.toArray(function (vectorAsArray) {
    console.log("x: " + vectorAsArray[0] + "y:" + vectorAsArray[1]);
});
