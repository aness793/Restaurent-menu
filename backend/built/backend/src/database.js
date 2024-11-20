"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dbConnect = void 0;
var mongoose_1 = require("mongoose");
var dbConnect = function () {
    (0, mongoose_1.connect)('mongodb+srv://aness:k61dYe41cYgE7wuW@cluster0.5ibxkfe.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0');
    try {
        console.log('connected seccussfully  ');
    }
    catch (error) {
        console.log(error);
    }
};
exports.dbConnect = dbConnect;
