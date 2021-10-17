"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LinkedListCollections = void 0;
var LinkedListCollections = /** @class */ (function () {
    function LinkedListCollections(data) {
        this.data = data;
    }
    Object.defineProperty(LinkedListCollections.prototype, "length", {
        get: function () {
            return this.data.length;
        },
        enumerable: false,
        configurable: true
    });
    LinkedListCollections.prototype.compare = function (leftIndex, rightIndex) {
        return this.data[leftIndex] > this.data[rightIndex];
    };
    LinkedListCollections.prototype.swap = function (leftIndex, rightIndex) {
        var leftHand = this.data[leftIndex];
        this.data[leftIndex] = this.data[rightIndex];
        this.data[rightIndex] = leftHand;
    };
    return LinkedListCollections;
}());
exports.LinkedListCollections = LinkedListCollections;
