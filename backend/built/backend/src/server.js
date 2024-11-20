"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var cors_1 = __importDefault(require("cors"));
var data_1 = require("../../frontEnd/src/app/data");
var jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
var express_async_handler_1 = __importDefault(require("express-async-handler"));
var food_1 = require("./models/food");
var users_1 = require("./models/users");
var user_1 = require("../../frontEnd/src/app/shared/modules/user");
var bcrypt = __importStar(require("bcryptjs"));
var order_model_1 = require("./models/order.model");
var dotenv_1 = __importDefault(require("dotenv"));
var database_1 = require("./database");
dotenv_1.default.config();
(0, database_1.dbConnect)();
var app = (0, express_1.default)();
app.use(express_1.default.json());
app.use((0, cors_1.default)({
    credentials: true,
    origin: ['http://localhost:4200'],
}));
// everything you see that is commented in this file is related to a databse and i since i can't use a date base in github i'm using a local file contains the date
app.get('/api/foods/seed', (0, express_async_handler_1.default)(function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var foodCount;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, food_1.foodModel.countDocuments()];
            case 1:
                foodCount = _a.sent();
                if (foodCount > 0) {
                    res.send('seed already done');
                    return [2 /*return*/];
                }
                return [4 /*yield*/, food_1.foodModel.create(data_1.sample_food)];
            case 2:
                _a.sent();
                res.send('seed is done');
                return [2 /*return*/];
        }
    });
}); }));
// app.get('/api/users/seed', asyncHandler(async (req, res)=>{
//     const userCount = await userModel.countDocuments()
//     if(userCount>0){
//         res.send('seed already done')
//         return;
//     }
//     await userModel.create(sample_users)
//     res.send('seed is done')
// }) )
app.get('', (0, express_async_handler_1.default)(function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var allFoods;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, food_1.foodModel.find()];
            case 1:
                allFoods = _a.sent();
                res.send(allFoods);
                return [2 /*return*/];
        }
    });
}); }));
// app.get('', asyncHandler
// (async( req ,res) => {
//     const allFoods =sample_food
//     res.send(allFoods)
// }))
app.get('/api/foods', (0, express_async_handler_1.default)(function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var allFoods;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, food_1.foodModel.find()];
            case 1:
                allFoods = _a.sent();
                res.send(allFoods);
                return [2 /*return*/];
        }
    });
}); }));
// app.get('/api/foods', asyncHandler(
//     async (req, res)=>{
//         const allFoods = sample_food
//         res.send(allFoods)
//     }
// ))
app.get('/api/foods/tags', (0, express_async_handler_1.default)(function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var tags, all;
    var _a;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0: return [4 /*yield*/, food_1.foodModel.aggregate([
                    {
                        $unwind: '$tags'
                    },
                    {
                        $group: {
                            _id: '$tags',
                            count: { $sum: 1 }
                        }
                    },
                    {
                        $project: {
                            _id: 0,
                            name: '$_id',
                            count: '$count'
                        }
                    }
                ]).sort({ count: -1 })];
            case 1:
                tags = _b.sent();
                _a = {
                    name: 'All'
                };
                return [4 /*yield*/, food_1.foodModel.countDocuments()];
            case 2:
                all = (_a.count = _b.sent(),
                    _a);
                tags.unshift(all);
                res.send(tags);
                return [2 /*return*/];
        }
    });
}); }));
// app.get('/api/foods/tags',asyncHandler(
//     async (req ,res)=>{
//         const tags = sample_tag
//         res.send(tags)
//     }
//     ))
app.get('/api/foods/tag/:tag', (0, express_async_handler_1.default)(function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var food;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, food_1.foodModel.find({ tags: req.params.tag })];
            case 1:
                food = _a.sent();
                res.send(food);
                return [2 /*return*/];
        }
    });
}); }));
// app.get('/api/foods/tag/:tag', asyncHandler(
//         async (req ,res)=>{
//             const foodbytag =sample_food.filter(food => food.tags?.includes(req.params.tag))
//             console.log(foodbytag)
//             res.send(foodbytag)
//         }))
app.get('/api/foods/:id', (0, express_async_handler_1.default)(function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var id;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, food_1.foodModel.findById(req.params.id)];
            case 1:
                id = _a.sent();
                res.send(id);
                return [2 /*return*/];
        }
    });
}); }));
// app.get('/api/foods/:id' , asyncHandler(
//     async (req, res)=>{
//         const id =sample_food.find(food=>food.id == parseInt(req.params.id)) ;
//         res.send(id)
//     }
// ))
app.get('/api/foods/search/:searchTerm', (0, express_async_handler_1.default)(function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var searchRegEx, searchWord;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                searchRegEx = new RegExp(req.params.searchTerm, 'i');
                return [4 /*yield*/, food_1.foodModel.find({ name: { $regex: searchRegEx } })];
            case 1:
                searchWord = _a.sent();
                res.send(searchWord);
                return [2 /*return*/];
        }
    });
}); }));
// app.get('/api/foods/search/:searchTerm', asyncHandler(
//     async (req,res) => {
//         const searchTerm = req.params.searchTerm
//         const searchWord = sample_food.filter(food => food.name.toLowerCase().includes(searchTerm.toLowerCase()))
//         console.log(searchWord)
//         res.send(searchWord)
//     }
// ))
app.get('/api/users', function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var usrs;
    return __generator(this, function (_a) {
        usrs = data_1.sample_users;
        res.send(usrs);
        return [2 /*return*/];
    });
}); });
app.post('/api/sign-up', (0, express_async_handler_1.default)(function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, name, email, phone, password, userEmail, userPhone, encryptedPassword, encryptedPhone, NewUser, freshUser;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _a = req.body, name = _a.name, email = _a.email, phone = _a.phone, password = _a.password;
                return [4 /*yield*/, users_1.userModel.findOne({ email: email })];
            case 1:
                userEmail = _b.sent();
                return [4 /*yield*/, users_1.userModel.findOne({ phone: phone })];
            case 2:
                userPhone = _b.sent();
                if (userEmail || userPhone) {
                    res.status(400).send('email  or phone number already exists');
                    return [2 /*return*/];
                }
                return [4 /*yield*/, bcrypt.hash('password', 10)];
            case 3:
                encryptedPassword = _b.sent();
                return [4 /*yield*/, bcrypt.hash('phone', 15)];
            case 4:
                encryptedPhone = _b.sent();
                NewUser = {
                    id: '',
                    name: name,
                    email: email.toLowerCase(),
                    password: encryptedPassword,
                    isAdmin: false,
                    phone: encryptedPhone,
                    token: ''
                };
                return [4 /*yield*/, users_1.userModel.create(NewUser)];
            case 5:
                freshUser = _b.sent();
                res.send(generateToken(freshUser));
                return [2 /*return*/];
        }
    });
}); }));
app.post('/api/users/login', (0, express_async_handler_1.default)(function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, email, password, user;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _a = req.body, email = _a.email, password = _a.password;
                return [4 /*yield*/, users_1.userModel.findOne({ email: email, password: password })];
            case 1:
                user = _b.sent();
                if (user) {
                    res.send(generateToken(user));
                }
                else {
                    res.status(404).send('user not found');
                }
                return [2 /*return*/];
        }
    });
}); }));
app.post('/api/orders/create', (0, express_async_handler_1.default)(function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var requestOrder, newOrder;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                requestOrder = req.body;
                if (requestOrder.items.length <= 0) {
                    res.status(404).send('cart is empty');
                    return [2 /*return*/];
                }
                newOrder = new order_model_1.orderModel(__assign(__assign({}, requestOrder), { user: user_1.user }));
                return [4 /*yield*/, newOrder.save()];
            case 1:
                _a.sent();
                res.send(newOrder);
                return [2 /*return*/];
        }
    });
}); }));
app.get('/api/orders/order', (0, express_async_handler_1.default)(function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var body, order;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                body = req.body;
                return [4 /*yield*/, order_model_1.orderModel.findOne().sort({ createdAt: -1 })];
            case 1:
                order = _a.sent();
                if (order) {
                    res.send(order);
                }
                else {
                    res.status(400).send('no order');
                }
                return [2 /*return*/];
        }
    });
}); }));
var generateToken = function (user) {
    var token = jsonwebtoken_1.default.sign({
        password: user.password, isAdmin: user.isAdmin
    }, 'passCode', { expiresIn: '30d' });
    user.token = token;
    return user;
};
var port = 5000;
app.listen(port, function () { console.log('we are on port ' + port); });
