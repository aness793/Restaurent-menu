"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.orderModel = exports.orderItemSchema = void 0;
var mongoose_1 = require("mongoose");
var food_1 = require("./food");
var order_status_1 = require("../order_status");
exports.orderItemSchema = new mongoose_1.Schema({
    food: { type: food_1.foodSchema, required: true },
    price: { type: Number, required: true },
    quantity: { type: Number, required: true },
});
var orderSchema = new mongoose_1.Schema({
    name: { type: String, required: true },
    adress: { type: String, required: true },
    totalPrice: { type: Number, required: true },
    phone: { type: Number, required: true },
    items: { type: [exports.orderItemSchema], required: true },
    status: { type: String, default: order_status_1.OrderStatus.new },
}, {
    timestamps: true,
    toJSON: {
        virtuals: true
    },
    toObject: {
        virtuals: true,
    }
});
exports.orderModel = (0, mongoose_1.model)('orders', orderSchema);
