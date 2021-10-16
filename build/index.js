"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Sorter = void 0;
var Sorter = /** @class */ (function () {
    function Sorter(collection) {
        this.collection = collection;
    }
    Sorter.prototype.sort = function () {
        var length = this.collection.length;
        for (var i = 0; i < length; i++) {
            for (var j = 0; j < length - i - 1; j++) {
                var left = this.collection[j];
                var right = this.collection[j + 1];
                if (left > right) {
                    var temp = left;
                    this.collection[j] = this.collection[j + 1];
                    this.collection[j + 1] = temp;
                }
            }
        }
    };
    return Sorter;
}());
exports.Sorter = Sorter;
var sorter = new Sorter([10, 3, -5, 0]);
console.log(sorter.collection);
sorter.sort();
console.log(sorter.collection);
