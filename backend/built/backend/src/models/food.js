"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.foodModel = exports.foodSchema = void 0;
var mongoose_1 = require("mongoose");
exports.foodSchema = new mongoose_1.Schema({
    name: { type: String, required: true },
    price: { type: Number, required: true },
    tags: { type: [String] },
    favorite: { type: Boolean, required: false },
    imgUrl: { type: String, required: true },
}, {
    toJSON: {
        virtuals: true
    },
    toObject: {
        virtuals: true
    },
    timestamps: true
});
exports.foodModel = (0, mongoose_1.model)('food-List', exports.foodSchema);
