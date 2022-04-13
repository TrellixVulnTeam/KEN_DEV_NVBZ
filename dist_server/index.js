/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./mainDevFolder/server/db/index.ts":
/*!******************************************!*\
  !*** ./mainDevFolder/server/db/index.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Query = void 0;
var mysql = __webpack_require__(/*! mysql */ "mysql");
var queries_nutrientmap_1 = __webpack_require__(/*! ./nutrientmap/queries_nutrientmap */ "./mainDevFolder/server/db/nutrientmap/queries_nutrientmap/index.ts");
__webpack_require__(/*! dotenv/config */ "dotenv/config");
var mysqlAccess = mysql.createPool({
    host: process.env.DB_HOST,
    port: Number(process.env.DB_PORT),
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DATABASE
});
var Query = function (query, values) {
    return new Promise(function (resolve, reject) {
        mysqlAccess.query(query, values, function (err, results) {
            if (err)
                return reject(err);
            return resolve(results);
        });
    });
};
exports.Query = Query;
exports["default"] = queries_nutrientmap_1.default;


/***/ }),

/***/ "./mainDevFolder/server/db/nutrientmap/index.ts":
/*!******************************************************!*\
  !*** ./mainDevFolder/server/db/nutrientmap/index.ts ***!
  \******************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


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
        while (_) try {
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
Object.defineProperty(exports, "__esModule", ({ value: true }));
var express = __webpack_require__(/*! express */ "express");
var queries_nutrientmap_1 = __webpack_require__(/*! ./queries_nutrientmap */ "./mainDevFolder/server/db/nutrientmap/queries_nutrientmap/index.ts");
var app = express();
app.all('/nutrientmap/client', function (req, res, error) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, new_Data;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                console.log(req.body);
                _a = req.method;
                switch (_a) {
                    case 'GET': return [3 /*break*/, 1];
                    case 'POST': return [3 /*break*/, 3];
                    case 'PUT': return [3 /*break*/, 5];
                    case 'DELETE': return [3 /*break*/, 7];
                }
                return [3 /*break*/, 9];
            case 1: return [4 /*yield*/, queries_nutrientmap_1.default.allMessages()];
            case 2:
                new_Data = _b.sent();
                new_Data.map(function (i) {
                    console.log(i);
                });
                res.json(new_Data);
                return [3 /*break*/, 10];
            case 3: return [4 /*yield*/, queries_nutrientmap_1.default.insertCLIENT(req.body)];
            case 4:
                _b.sent();
                res.json(req.body);
                return [3 /*break*/, 10];
            case 5: return [4 /*yield*/, queries_nutrientmap_1.default.updateMessages(req.body, req.body.id)];
            case 6:
                _b.sent();
                res.send(200);
                return [3 /*break*/, 10];
            case 7: return [4 /*yield*/, queries_nutrientmap_1.default.deleteMessages(req.body.id)];
            case 8:
                _b.sent();
                res.send(req.method);
                return [3 /*break*/, 10];
            case 9:
                res.send();
                return [3 /*break*/, 10];
            case 10: return [2 /*return*/];
        }
    });
}); });
app.all('/nutrientmap/institution/:id', function (req, res, error) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, new_Data, insertId;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _a = req.method;
                switch (_a) {
                    case 'GET': return [3 /*break*/, 1];
                    case 'POST': return [3 /*break*/, 3];
                    case 'PUT': return [3 /*break*/, 5];
                    case 'DELETE': return [3 /*break*/, 7];
                }
                return [3 /*break*/, 9];
            case 1: return [4 /*yield*/, queries_nutrientmap_1.default.allMessages()];
            case 2:
                new_Data = _b.sent();
                new_Data.map(function (i) {
                    console.log(i);
                });
                res.json(new_Data);
                return [3 /*break*/, 10];
            case 3:
                req.body.client_Id = req.params.id;
                console.log(req.body);
                return [4 /*yield*/, queries_nutrientmap_1.default.insertInstitution(req.body)];
            case 4:
                insertId = (_b.sent()).insertId;
                console.log(insertId);
                res.send(req.method);
                return [3 /*break*/, 10];
            case 5: return [4 /*yield*/, queries_nutrientmap_1.default.updateMessages(req.body, req.body.id)];
            case 6:
                _b.sent();
                res.send(200);
                return [3 /*break*/, 10];
            case 7: return [4 /*yield*/, queries_nutrientmap_1.default.deleteMessages(req.body.id)];
            case 8:
                _b.sent();
                res.send(req.method);
                return [3 /*break*/, 10];
            case 9:
                res.send();
                return [3 /*break*/, 10];
            case 10: return [2 /*return*/];
        }
    });
}); });
exports["default"] = app;


/***/ }),

/***/ "./mainDevFolder/server/db/nutrientmap/queries_nutrientmap/index.ts":
/*!**************************************************************************!*\
  !*** ./mainDevFolder/server/db/nutrientmap/queries_nutrientmap/index.ts ***!
  \**************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


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
        while (_) try {
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
Object.defineProperty(exports, "__esModule", ({ value: true }));
var index_1 = __webpack_require__(/*! ../../index */ "./mainDevFolder/server/db/index.ts");
var allMessages = function () { return __awaiter(void 0, void 0, void 0, function () { return __generator(this, function (_a) {
    return [2 /*return*/, (0, index_1.Query)('SELECT * FROM Nutrientmap.lifestagereference')];
}); }); };
// const singleChirp = async (id:string) => Query('SELECT * FROM Chirps WHERE id = ?',[id]);
var deleteMessages = function (id) { return __awaiter(void 0, void 0, void 0, function () { return __generator(this, function (_a) {
    return [2 /*return*/, (0, index_1.Query)('DELETE FROM contact WHERE id = ?', [id])];
}); }); };
var insertCLIENT = function (values) { return __awaiter(void 0, void 0, void 0, function () { return __generator(this, function (_a) {
    return [2 /*return*/, (0, index_1.Query)('INSERT INTO Nutrientmap.client SET ?', values)];
}); }); };
var insertInstitution = function (values) { return __awaiter(void 0, void 0, void 0, function () { return __generator(this, function (_a) {
    return [2 /*return*/, (0, index_1.Query)('INSERT INTO Nutrientmap.institution SET ?', values)];
}); }); };
var updateMessages = function (newContent, id) { return __awaiter(void 0, void 0, void 0, function () { return __generator(this, function (_a) {
    return [2 /*return*/, (0, index_1.Query)('UPDATE contact SET ? WHERE id = ?', [newContent, id])
        // const allUsers = async () => Query('SELECT * FROM Users');
        // const insertUsers = async(user :any )=>Query('INSERT INTO clients SET ?' ,[user]);
        // const insertPhysical = async(physical :any,clientid:number )=>Query('INSERT INTO client_lifestyle SET ?' ,[physical]);
    ];
}); }); };
// const allUsers = async () => Query('SELECT * FROM Users');
// const insertUsers = async(user :any )=>Query('INSERT INTO clients SET ?' ,[user]);
// const insertPhysical = async(physical :any,clientid:number )=>Query('INSERT INTO client_lifestyle SET ?' ,[physical]);
exports["default"] = {
    allMessages: allMessages,
    // singleChirp,
    deleteMessages: deleteMessages,
    insertCLIENT: insertCLIENT,
    updateMessages: updateMessages,
    insertInstitution: insertInstitution
    // allUsers,
    // insertUsers,
    // insertPhysical
};


/***/ }),

/***/ "./mainDevFolder/server/index.ts":
/*!***************************************!*\
  !*** ./mainDevFolder/server/index.ts ***!
  \***************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


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
        while (_) try {
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
Object.defineProperty(exports, "__esModule", ({ value: true }));
var express = __webpack_require__(/*! express */ "express");
var cors = __webpack_require__(/*! cors */ "cors");
var nutrientmap_1 = __webpack_require__(/*! ./db/nutrientmap */ "./mainDevFolder/server/db/nutrientmap/index.ts");
var fetch = __webpack_require__(/*! isomorphic-fetch */ "isomorphic-fetch");
__webpack_require__(/*! dotenv/config */ "dotenv/config");
var app = express();
app.use(nutrientmap_1.default);
app.use(express.static('public'));
app.use(cors());
app.use(express.json());
app.set('trust proxy', true);
// app.post('/post', async (req,res) =>{
//     let firstdata= req.body[0]
//     const data = await fetch(`https://api.nal.usda.gov/fdc/v1/foods/search?query=${firstdata}&pageSize=11&api_key=tz8FikxFkSfY7V5vpSChMeqgxthoR9ILcvLtA0Ya`)
//     const item = await data.json()
//     item.foods[0].foodNutrients.map((i:any)=>{console.log(i)})
//     res.send(item)
// })
var newUse = app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', '*');
    next();
});
var foodsArray;
app.post('/nutritionalData', function (req, res, error) { return __awaiter(void 0, void 0, void 0, function () {
    var data, foodsQuery, foodsArray, arraySort, nutrientProfile, selectedNutrients;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, fetch("https://api.nal.usda.gov/fdc/v1/foods/search?query=".concat(req.body.foodSelection, "&pageSize=4&dataType=Foundation&api_key=").concat(process.env.API_KEY))];
            case 1:
                data = _a.sent();
                return [4 /*yield*/, data.json()];
            case 2:
                foodsQuery = _a.sent();
                return [4 /*yield*/, foodsQuery.foods.map(function (i) {
                        return i;
                    })];
            case 3:
                foodsArray = _a.sent();
                arraySort = foodsArray[0].foodNutrients.sort(function (a, b) {
                    var nameA = a.nutrientName.toUpperCase(); // ignore upper and lowercase
                    var nameB = b.nutrientName.toUpperCase(); // ignore upper and lowercase
                    if (nameA < nameB) {
                        return -1;
                    }
                    if (nameA > nameB) {
                        return 1;
                    }
                    // names must be equal
                    return 0;
                });
                nutrientProfile = arraySort.map(function (data, index) {
                    if (data.nutrientId == 1003 ||
                        data.nutrientId == 1005 ||
                        data.nutrientId == 1079 ||
                        data.nutrientId == 1109 ||
                        data.nutrientId == 1114 ||
                        data.nutrientId == 1162 ||
                        data.nutrientId == 1090 ||
                        data.nutrientId == 1087 ||
                        data.nutrientId == 1008) {
                        return data;
                    }
                });
                selectedNutrients = nutrientProfile.filter(function (index) { return index !== undefined || null; });
                res.json([foodsArray[0].description, selectedNutrients]);
                return [2 /*return*/];
        }
    });
}); });
app.post('/testRoute', function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var data, foodsQuery;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, fetch("https://api.nal.usda.gov/fdc/v1/foods/search?query=".concat("Hood", "&dataType=Branded&api_key=").concat(process.env.API_KEY))];
            case 1:
                data = _a.sent();
                return [4 /*yield*/, data.json()
                    // const foodsArray = await foodsQuery.foods.map((i: any) => {
                    //   return i
                    // })
                ];
            case 2:
                foodsQuery = _a.sent();
                // const foodsArray = await foodsQuery.foods.map((i: any) => {
                //   return i
                // })
                res.json(foodsQuery);
                return [2 /*return*/];
        }
    });
}); });
var PORT = process.env.PORT || 8080;
app.listen(PORT, function () {
    console.log("Server listening on port ".concat(PORT, "..."));
});


/***/ }),

/***/ "cors":
/*!***********************!*\
  !*** external "cors" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("cors");

/***/ }),

/***/ "dotenv/config":
/*!********************************!*\
  !*** external "dotenv/config" ***!
  \********************************/
/***/ ((module) => {

module.exports = require("dotenv/config");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/***/ ((module) => {

module.exports = require("express");

/***/ }),

/***/ "isomorphic-fetch":
/*!***********************************!*\
  !*** external "isomorphic-fetch" ***!
  \***********************************/
/***/ ((module) => {

module.exports = require("isomorphic-fetch");

/***/ }),

/***/ "mysql":
/*!************************!*\
  !*** external "mysql" ***!
  \************************/
/***/ ((module) => {

module.exports = require("mysql");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./mainDevFolder/server/index.ts");
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QkFBaUIsQ0FBQyxDQUFDOzs7O0tBRXpELENBQUM7QUFHRixHQUFHLENBQUMsSUFBSSxDQUFDLFlBQVksRUFBRSxVQUFPLEdBQUcsRUFBRSxHQUFHOzs7O29CQUd2QixxQkFBTSxLQUFLLENBQ3RCLDZEQUFzRCxNQUFNLHVDQUE2QixPQUFPLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBRSxDQUMvRzs7Z0JBRkssSUFBSSxHQUFHLFNBRVo7Z0JBQ2tCLHFCQUFNLElBQUksQ0FBQyxJQUFJLEVBQUU7b0JBRXBDLDhEQUE4RDtvQkFDOUQsYUFBYTtvQkFDYixLQUFLO2tCQUorQjs7Z0JBQTlCLFVBQVUsR0FBRyxTQUFpQjtnQkFFcEMsOERBQThEO2dCQUM5RCxhQUFhO2dCQUNiLEtBQUs7Z0JBR0wsR0FBRyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUM7Ozs7S0FFckIsQ0FBQztBQUVGLElBQU0sSUFBSSxHQUFHLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxJQUFJLElBQUk7QUFDckMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUU7SUFDZixPQUFPLENBQUMsR0FBRyxDQUFDLG1DQUE0QixJQUFJLFFBQUssQ0FBQztBQUNwRCxDQUFDLENBQUM7Ozs7Ozs7Ozs7O0FDMUdGOzs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7O0FDQUE7Ozs7OztVQ0FBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7VUV0QkE7VUFDQTtVQUNBO1VBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wcm90b3R5cGUtZm9yLXNpdGVzLy4vbWFpbkRldkZvbGRlci9zZXJ2ZXIvZGIvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vcHJvdG90eXBlLWZvci1zaXRlcy8uL21haW5EZXZGb2xkZXIvc2VydmVyL2RiL251dHJpZW50bWFwL2luZGV4LnRzIiwid2VicGFjazovL3Byb3RvdHlwZS1mb3Itc2l0ZXMvLi9tYWluRGV2Rm9sZGVyL3NlcnZlci9kYi9udXRyaWVudG1hcC9xdWVyaWVzX251dHJpZW50bWFwL2luZGV4LnRzIiwid2VicGFjazovL3Byb3RvdHlwZS1mb3Itc2l0ZXMvLi9tYWluRGV2Rm9sZGVyL3NlcnZlci9pbmRleC50cyIsIndlYnBhY2s6Ly9wcm90b3R5cGUtZm9yLXNpdGVzL2V4dGVybmFsIGNvbW1vbmpzIFwiY29yc1wiIiwid2VicGFjazovL3Byb3RvdHlwZS1mb3Itc2l0ZXMvZXh0ZXJuYWwgY29tbW9uanMgXCJkb3RlbnYvY29uZmlnXCIiLCJ3ZWJwYWNrOi8vcHJvdG90eXBlLWZvci1zaXRlcy9leHRlcm5hbCBjb21tb25qcyBcImV4cHJlc3NcIiIsIndlYnBhY2s6Ly9wcm90b3R5cGUtZm9yLXNpdGVzL2V4dGVybmFsIGNvbW1vbmpzIFwiaXNvbW9ycGhpYy1mZXRjaFwiIiwid2VicGFjazovL3Byb3RvdHlwZS1mb3Itc2l0ZXMvZXh0ZXJuYWwgY29tbW9uanMgXCJteXNxbFwiIiwid2VicGFjazovL3Byb3RvdHlwZS1mb3Itc2l0ZXMvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcHJvdG90eXBlLWZvci1zaXRlcy93ZWJwYWNrL2JlZm9yZS1zdGFydHVwIiwid2VicGFjazovL3Byb3RvdHlwZS1mb3Itc2l0ZXMvd2VicGFjay9zdGFydHVwIiwid2VicGFjazovL3Byb3RvdHlwZS1mb3Itc2l0ZXMvd2VicGFjay9hZnRlci1zdGFydHVwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIG15c3FsIGZyb20gJ215c3FsJztcbmltcG9ydCBkYXRhYmFzZV9GdW5jdGlvbiBmcm9tICcuL251dHJpZW50bWFwL3F1ZXJpZXNfbnV0cmllbnRtYXAnXG5pbXBvcnQgJ2RvdGVudi9jb25maWcnO1xuXG5cblxuXG5cbmNvbnN0IG15c3FsQWNjZXNzID0gbXlzcWwuY3JlYXRlUG9vbCh7XG4gICAgaG9zdDpwcm9jZXNzLmVudi5EQl9IT1NULFxuICAgIHBvcnQ6TnVtYmVyKHByb2Nlc3MuZW52LkRCX1BPUlQpLFxuICAgIHVzZXI6cHJvY2Vzcy5lbnYuREJfVVNFUixcbiAgICBwYXNzd29yZDpwcm9jZXNzLmVudi5EQl9QQVNTV09SRCxcbiAgICBkYXRhYmFzZTpwcm9jZXNzLmVudi5EQVRBQkFTRVxufSlcblxuZXhwb3J0IGNvbnN0IFF1ZXJ5ID0gKHF1ZXJ5OnN0cmluZyx2YWx1ZXM/OkFycmF5PHN0cmluZ3xudW1iZXI+KT0+e1xuICAgIHJldHVybiBuZXcgUHJvbWlzZTxBcnJheTxhbnk+PigocmVzb2x2ZSxyZWplY3QpPT57XG4gICAgICAgIG15c3FsQWNjZXNzLnF1ZXJ5KHF1ZXJ5LHZhbHVlcywoZXJyLHJlc3VsdHMpID0+e1xuICAgICAgICAgICAgaWYoZXJyKSByZXR1cm4gcmVqZWN0KGVycilcbiAgICAgICAgICAgIHJldHVybiByZXNvbHZlKHJlc3VsdHMpO1xuICAgICAgICB9KVxuICAgIH0pXG59O1xuXG5leHBvcnQgZGVmYXVsdCBkYXRhYmFzZV9GdW5jdGlvbjsiLCJpbXBvcnQgKiBhcyBleHByZXNzIGZyb20gJ2V4cHJlc3MnXG5pbXBvcnQgZGF0YWJhc2VfRnVuY3Rpb24gZnJvbSAnLi9xdWVyaWVzX251dHJpZW50bWFwJ1xuXG5jb25zdCBhcHAgPSBleHByZXNzKClcblxuYXBwLmFsbCgnL251dHJpZW50bWFwL2NsaWVudCcsIGFzeW5jIChyZXEsIHJlcywgZXJyb3IpID0+IHtcbiAgY29uc29sZS5sb2cocmVxLmJvZHkpXG4gIHN3aXRjaCAocmVxLm1ldGhvZCkge1xuICAgIGNhc2UgJ0dFVCc6XG4gICAgICBjb25zdCBuZXdfRGF0YSA9IGF3YWl0IGRhdGFiYXNlX0Z1bmN0aW9uLmFsbE1lc3NhZ2VzKClcbiAgICAgIG5ld19EYXRhLm1hcChpID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coaSlcbiAgICAgIH0pO1xuICAgICAgcmVzLmpzb24obmV3X0RhdGEpXG4gICAgICBcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgJ1BPU1QnOlxuICAgICAgYXdhaXQgZGF0YWJhc2VfRnVuY3Rpb24uaW5zZXJ0Q0xJRU5UKHJlcS5ib2R5KVxuICAgICAgcmVzLmpzb24ocmVxLmJvZHkpXG4gICAgICBicmVhaztcblxuICAgIGNhc2UgJ1BVVCc6XG4gICAgICBhd2FpdCBkYXRhYmFzZV9GdW5jdGlvbi51cGRhdGVNZXNzYWdlcyhyZXEuYm9keSwgcmVxLmJvZHkuaWQpXG4gICAgICByZXMuc2VuZCgyMDApXG4gICAgICBicmVhaztcblxuICAgIGNhc2UgJ0RFTEVURSc6XG4gICAgICBhd2FpdCBkYXRhYmFzZV9GdW5jdGlvbi5kZWxldGVNZXNzYWdlcyhyZXEuYm9keS5pZClcbiAgICAgIHJlcy5zZW5kKHJlcS5tZXRob2QpXG4gICAgICBicmVhaztcblxuICAgIGRlZmF1bHQ6XG5cbiAgICAgIHJlcy5zZW5kKClcbiAgICAgIGJyZWFrO1xuICB9XG59KVxuXG5hcHAuYWxsKCcvbnV0cmllbnRtYXAvaW5zdGl0dXRpb24vOmlkJywgYXN5bmMgKHJlcSwgcmVzLCBlcnJvcikgPT4ge1xuICBzd2l0Y2ggKHJlcS5tZXRob2QpIHtcbiAgICBjYXNlICdHRVQnOlxuICAgICAgY29uc3QgbmV3X0RhdGEgPSBhd2FpdCBkYXRhYmFzZV9GdW5jdGlvbi5hbGxNZXNzYWdlcygpXG4gICAgICBuZXdfRGF0YS5tYXAoaSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKGkpXG4gICAgICB9KTtcbiAgICAgIHJlcy5qc29uKG5ld19EYXRhKVxuICAgICAgXG4gICAgICBicmVhaztcbiAgICBjYXNlICdQT1NUJzpcbiAgICAgIHJlcS5ib2R5LmNsaWVudF9JZCA9IHJlcS5wYXJhbXMuaWRcbiAgICAgIGNvbnNvbGUubG9nKHJlcS5ib2R5KVxuXG4gICAgICBsZXQge2luc2VydElkfTphbnkgPSBhd2FpdCBkYXRhYmFzZV9GdW5jdGlvbi5pbnNlcnRJbnN0aXR1dGlvbihyZXEuYm9keSlcbiAgICAgIGNvbnNvbGUubG9nKGluc2VydElkKVxuICAgICAgcmVzLnNlbmQocmVxLm1ldGhvZClcbiAgICAgIGJyZWFrO1xuXG4gICAgY2FzZSAnUFVUJzpcbiAgICAgIGF3YWl0IGRhdGFiYXNlX0Z1bmN0aW9uLnVwZGF0ZU1lc3NhZ2VzKHJlcS5ib2R5LCByZXEuYm9keS5pZClcbiAgICAgIHJlcy5zZW5kKDIwMClcbiAgICAgIGJyZWFrO1xuXG4gICAgY2FzZSAnREVMRVRFJzpcbiAgICAgIGF3YWl0IGRhdGFiYXNlX0Z1bmN0aW9uLmRlbGV0ZU1lc3NhZ2VzKHJlcS5ib2R5LmlkKVxuICAgICAgcmVzLnNlbmQocmVxLm1ldGhvZClcbiAgICAgIGJyZWFrO1xuXG4gICAgZGVmYXVsdDpcblxuICAgICAgcmVzLnNlbmQoKVxuICAgICAgYnJlYWs7XG4gIH1cbn0pXG5cbmV4cG9ydCBkZWZhdWx0IGFwcFxuIiwiaW1wb3J0IHsgUXVlcnkgfSBmcm9tIFwiLi4vLi4vaW5kZXhcIjtcblxuXG5jb25zdCBhbGxNZXNzYWdlcyA9IGFzeW5jICgpID0+IFF1ZXJ5KCdTRUxFQ1QgKiBGUk9NIE51dHJpZW50bWFwLmxpZmVzdGFnZXJlZmVyZW5jZScpO1xuLy8gY29uc3Qgc2luZ2xlQ2hpcnAgPSBhc3luYyAoaWQ6c3RyaW5nKSA9PiBRdWVyeSgnU0VMRUNUICogRlJPTSBDaGlycHMgV0hFUkUgaWQgPSA/JyxbaWRdKTtcbmNvbnN0IGRlbGV0ZU1lc3NhZ2VzPSBhc3luYyhpZDpzdHJpbmcpPT5RdWVyeSgnREVMRVRFIEZST00gY29udGFjdCBXSEVSRSBpZCA9ID8nLFtpZF0pO1xuY29uc3QgaW5zZXJ0Q0xJRU5UID0gYXN5bmModmFsdWVzIDphbnkgKT0+UXVlcnkoJ0lOU0VSVCBJTlRPIE51dHJpZW50bWFwLmNsaWVudCBTRVQgPycgLHZhbHVlcyk7XG5jb25zdCBpbnNlcnRJbnN0aXR1dGlvbiA9IGFzeW5jKHZhbHVlcyA6YW55ICk9PlF1ZXJ5KCdJTlNFUlQgSU5UTyBOdXRyaWVudG1hcC5pbnN0aXR1dGlvbiBTRVQgPycgLHZhbHVlcyk7XG5cbmNvbnN0IHVwZGF0ZU1lc3NhZ2VzID0gYXN5bmMgKG5ld0NvbnRlbnQ6YW55LGlkOmFueSkgPT5RdWVyeSgnVVBEQVRFIGNvbnRhY3QgU0VUID8gV0hFUkUgaWQgPSA/JywgW25ld0NvbnRlbnQsaWRdKVxuLy8gY29uc3QgYWxsVXNlcnMgPSBhc3luYyAoKSA9PiBRdWVyeSgnU0VMRUNUICogRlJPTSBVc2VycycpO1xuLy8gY29uc3QgaW5zZXJ0VXNlcnMgPSBhc3luYyh1c2VyIDphbnkgKT0+UXVlcnkoJ0lOU0VSVCBJTlRPIGNsaWVudHMgU0VUID8nICxbdXNlcl0pO1xuLy8gY29uc3QgaW5zZXJ0UGh5c2ljYWwgPSBhc3luYyhwaHlzaWNhbCA6YW55LGNsaWVudGlkOm51bWJlciApPT5RdWVyeSgnSU5TRVJUIElOVE8gY2xpZW50X2xpZmVzdHlsZSBTRVQgPycgLFtwaHlzaWNhbF0pO1xuXG5cblxuXG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgICBhbGxNZXNzYWdlcyxcbiAgICAvLyBzaW5nbGVDaGlycCxcbiAgICBkZWxldGVNZXNzYWdlcyxcbiAgICBpbnNlcnRDTElFTlQsXG4gICAgdXBkYXRlTWVzc2FnZXMsXG4gICAgaW5zZXJ0SW5zdGl0dXRpb25cbiAgICAvLyBhbGxVc2VycyxcbiAgICAvLyBpbnNlcnRVc2VycyxcbiAgICAvLyBpbnNlcnRQaHlzaWNhbFxuICAgIFxufSIsImltcG9ydCAqIGFzIGV4cHJlc3MgZnJvbSAnZXhwcmVzcydcbmltcG9ydCAqIGFzIGNvcnMgZnJvbSAnY29ycydcbmltcG9ydCBOdXRyaWVudG1hcCBmcm9tICcuL2RiL251dHJpZW50bWFwJ1xuaW1wb3J0ICogYXMgZmV0Y2ggZnJvbSAnaXNvbW9ycGhpYy1mZXRjaCdcbmltcG9ydCAqIGFzIHBhdGggZnJvbSAncGF0aCdcbmltcG9ydCBib2R5UGFyc2VyIGZyb20gJ2JvZHktcGFyc2VyJ1xuaW1wb3J0IHsgUHVsbFJlcXVlc3RPdXRsaW5lZCB9IGZyb20gJ0BhbnQtZGVzaWduL2ljb25zJ1xuaW1wb3J0ICdkb3RlbnYvY29uZmlnJ1xuXG5jb25zdCBhcHAgPSBleHByZXNzKClcbmFwcC51c2UoTnV0cmllbnRtYXApXG5hcHAudXNlKGV4cHJlc3Muc3RhdGljKCdwdWJsaWMnKSlcbmFwcC51c2UoY29ycygpKVxuYXBwLnVzZShleHByZXNzLmpzb24oKSlcbmFwcC5zZXQoJ3RydXN0IHByb3h5JywgdHJ1ZSlcblxuLy8gYXBwLnBvc3QoJy9wb3N0JywgYXN5bmMgKHJlcSxyZXMpID0+e1xuLy8gICAgIGxldCBmaXJzdGRhdGE9IHJlcS5ib2R5WzBdXG5cbi8vICAgICBjb25zdCBkYXRhID0gYXdhaXQgZmV0Y2goYGh0dHBzOi8vYXBpLm5hbC51c2RhLmdvdi9mZGMvdjEvZm9vZHMvc2VhcmNoP3F1ZXJ5PSR7Zmlyc3RkYXRhfSZwYWdlU2l6ZT0xMSZhcGlfa2V5PXR6OEZpa3hGa1NmWTdWNXZwU0NoTWVxZ3h0aG9SOUlMY3ZMdEEwWWFgKVxuLy8gICAgIGNvbnN0IGl0ZW0gPSBhd2FpdCBkYXRhLmpzb24oKVxuXG4vLyAgICAgaXRlbS5mb29kc1swXS5mb29kTnV0cmllbnRzLm1hcCgoaTphbnkpPT57Y29uc29sZS5sb2coaSl9KVxuXG4vLyAgICAgcmVzLnNlbmQoaXRlbSlcbi8vIH0pXG5cbmNvbnN0IG5ld1VzZSA9IGFwcC51c2UoKHJlcSwgcmVzLCBuZXh0KSA9PiB7XG4gIHJlcy5oZWFkZXIoJ0FjY2Vzcy1Db250cm9sLUFsbG93LU9yaWdpbicsICcqJylcbiAgcmVzLmhlYWRlcignQWNjZXNzLUNvbnRyb2wtQWxsb3ctSGVhZGVycycsICcqJylcbiAgbmV4dCgpXG59KVxuXG5sZXQgZm9vZHNBcnJheTpbXTtcblxuXG5hcHAucG9zdCgnL251dHJpdGlvbmFsRGF0YScsIGFzeW5jIChyZXEsIHJlcywgZXJyb3IpID0+IHtcbiAgY29uc3QgZGF0YSA9IGF3YWl0IGZldGNoKFxuICAgIGBodHRwczovL2FwaS5uYWwudXNkYS5nb3YvZmRjL3YxL2Zvb2RzL3NlYXJjaD9xdWVyeT0ke3JlcS5ib2R5LmZvb2RTZWxlY3Rpb259JnBhZ2VTaXplPTQmZGF0YVR5cGU9Rm91bmRhdGlvbiZhcGlfa2V5PSR7cHJvY2Vzcy5lbnYuQVBJX0tFWX1gXG4gIClcbiAgY29uc3QgZm9vZHNRdWVyeSA9IGF3YWl0IGRhdGEuanNvbigpXG5cbiAgY29uc3QgZm9vZHNBcnJheSA9IGF3YWl0IGZvb2RzUXVlcnkuZm9vZHMubWFwKChpOiBhbnkpID0+IHtcbiAgICByZXR1cm4gaVxuICB9KVxuICBsZXQgYXJyYXlTb3J0ID0gZm9vZHNBcnJheVswXS5mb29kTnV0cmllbnRzLnNvcnQoKGE6IGFueSwgYjogYW55KSA9PiB7XG4gICAgY29uc3QgbmFtZUEgPSBhLm51dHJpZW50TmFtZS50b1VwcGVyQ2FzZSgpIC8vIGlnbm9yZSB1cHBlciBhbmQgbG93ZXJjYXNlXG4gICAgY29uc3QgbmFtZUIgPSBiLm51dHJpZW50TmFtZS50b1VwcGVyQ2FzZSgpIC8vIGlnbm9yZSB1cHBlciBhbmQgbG93ZXJjYXNlXG4gICAgaWYgKG5hbWVBIDwgbmFtZUIpIHtcbiAgICAgIHJldHVybiAtMVxuICAgIH1cbiAgICBpZiAobmFtZUEgPiBuYW1lQikge1xuICAgICAgcmV0dXJuIDFcbiAgICB9XG5cbiAgICAvLyBuYW1lcyBtdXN0IGJlIGVxdWFsXG4gICAgcmV0dXJuIDBcbiAgfSlcblxuXG5cbiAgY29uc3QgbnV0cmllbnRQcm9maWxlOiBbXSA9IGFycmF5U29ydC5tYXAoKGRhdGE6IGFueSwgaW5kZXg6IG51bWJlcikgPT4ge1xuICAgIGlmIChcbiAgICAgIGRhdGEubnV0cmllbnRJZCA9PSAxMDAzIHx8XG4gICAgICBkYXRhLm51dHJpZW50SWQgPT0gMTAwNSB8fFxuICAgICAgZGF0YS5udXRyaWVudElkID09IDEwNzkgfHxcbiAgICAgIGRhdGEubnV0cmllbnRJZCA9PSAxMTA5IHx8XG4gICAgICBkYXRhLm51dHJpZW50SWQgPT0gMTExNCB8fFxuICAgICAgZGF0YS5udXRyaWVudElkID09IDExNjIgfHxcbiAgICAgIGRhdGEubnV0cmllbnRJZCA9PSAxMDkwIHx8XG4gICAgICBkYXRhLm51dHJpZW50SWQgPT0gMTA4NyB8fFxuICAgICAgZGF0YS5udXRyaWVudElkID09IDEwMDhcblxuICAgICkge1xuICAgICAgcmV0dXJuIGRhdGFcbiAgICB9XG4gIH0pXG4gIGxldCBzZWxlY3RlZE51dHJpZW50cyA9IG51dHJpZW50UHJvZmlsZS5maWx0ZXIoXG4gICAgaW5kZXggPT4gaW5kZXggIT09IHVuZGVmaW5lZCB8fCBudWxsXG4gIClcblxuICByZXMuanNvbihbZm9vZHNBcnJheVswXS5kZXNjcmlwdGlvbiwgc2VsZWN0ZWROdXRyaWVudHNdKVxuXG59KVxuXG5cbmFwcC5wb3N0KCcvdGVzdFJvdXRlJywgYXN5bmMgKHJlcSwgcmVzKSA9PiB7XG4gIFxuICBcbiAgY29uc3QgZGF0YSA9IGF3YWl0IGZldGNoKFxuICAgIGBodHRwczovL2FwaS5uYWwudXNkYS5nb3YvZmRjL3YxL2Zvb2RzL3NlYXJjaD9xdWVyeT0ke2BIb29kYH0mZGF0YVR5cGU9QnJhbmRlZCZhcGlfa2V5PSR7cHJvY2Vzcy5lbnYuQVBJX0tFWX1gXG4gIClcbiAgY29uc3QgZm9vZHNRdWVyeSA9IGF3YWl0IGRhdGEuanNvbigpXG5cbiAgLy8gY29uc3QgZm9vZHNBcnJheSA9IGF3YWl0IGZvb2RzUXVlcnkuZm9vZHMubWFwKChpOiBhbnkpID0+IHtcbiAgLy8gICByZXR1cm4gaVxuICAvLyB9KVxuICBcblxuICByZXMuanNvbihmb29kc1F1ZXJ5KVxuXG59KVxuXG5jb25zdCBQT1JUID0gcHJvY2Vzcy5lbnYuUE9SVCB8fCA4MDgwXG5hcHAubGlzdGVuKFBPUlQsICgpID0+IHtcbiAgY29uc29sZS5sb2coYFNlcnZlciBsaXN0ZW5pbmcgb24gcG9ydCAke1BPUlR9Li4uYClcbn0pXG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJjb3JzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImRvdGVudi9jb25maWdcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZXhwcmVzc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJpc29tb3JwaGljLWZldGNoXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm15c3FsXCIpOyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIiLCIvLyBzdGFydHVwXG4vLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbi8vIFRoaXMgZW50cnkgbW9kdWxlIGlzIHJlZmVyZW5jZWQgYnkgb3RoZXIgbW9kdWxlcyBzbyBpdCBjYW4ndCBiZSBpbmxpbmVkXG52YXIgX193ZWJwYWNrX2V4cG9ydHNfXyA9IF9fd2VicGFja19yZXF1aXJlX18oXCIuL21haW5EZXZGb2xkZXIvc2VydmVyL2luZGV4LnRzXCIpO1xuIiwiIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9