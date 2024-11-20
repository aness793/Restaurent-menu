"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.db = void 0;
var mongoose_1 = __importDefault(require("mongoose"));
var db = function () {
    mongoose_1.default.connect(process.env.MONGO_URI).then(function () { console.log('connected to databse'); });
};
exports.db = db;
