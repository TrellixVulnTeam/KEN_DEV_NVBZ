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
                        data.nutrientId == 100) {
                        return data;
                    }
                });
                selectedNutrients = nutrientProfile.filter(function (index) { return index !== undefined || null; });
                res.json([foodsArray[0].description, selectedNutrients]);
                return [2 /*return*/];
        }
    });
}); });
app.get('/test', function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        // const data = await fetch(
        //   `https://api.nal.usda.gov/fdc/v1/foods/search?query=${`Hood`}&dataType=Branded&api_key=${process.env.API_KEY}`
        // )
        // const foodsQuery = await data.json()
        // const foodsArray = await foodsQuery.foods.map((i: any) => {
        //   return i
        // })
        res.sendStatus(200);
        return [2 /*return*/];
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QkFBaUIsQ0FBQyxDQUFDOzs7O0tBRXpELENBQUM7QUFHRixHQUFHLENBQUMsR0FBRyxDQUFDLE9BQU8sRUFBRSxVQUFPLEdBQUcsRUFBRSxHQUFHOztRQUc5Qiw0QkFBNEI7UUFDNUIsbUhBQW1IO1FBQ25ILElBQUk7UUFDSix1Q0FBdUM7UUFFdkMsOERBQThEO1FBQzlELGFBQWE7UUFDYixLQUFLO1FBR0wsR0FBRyxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUM7OztLQUVwQixDQUFDO0FBRUYsSUFBTSxJQUFJLEdBQUcsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLElBQUksSUFBSTtBQUNyQyxHQUFHLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRTtJQUNmLE9BQU8sQ0FBQyxHQUFHLENBQUMsbUNBQTRCLElBQUksUUFBSyxDQUFDO0FBQ3BELENBQUMsQ0FBQzs7Ozs7Ozs7Ozs7QUMxR0Y7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7QUNBQTs7Ozs7O1VDQUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7OztVRXRCQTtVQUNBO1VBQ0E7VUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3Byb3RvdHlwZS1mb3Itc2l0ZXMvLi9tYWluRGV2Rm9sZGVyL3NlcnZlci9kYi9pbmRleC50cyIsIndlYnBhY2s6Ly9wcm90b3R5cGUtZm9yLXNpdGVzLy4vbWFpbkRldkZvbGRlci9zZXJ2ZXIvZGIvbnV0cmllbnRtYXAvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vcHJvdG90eXBlLWZvci1zaXRlcy8uL21haW5EZXZGb2xkZXIvc2VydmVyL2RiL251dHJpZW50bWFwL3F1ZXJpZXNfbnV0cmllbnRtYXAvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vcHJvdG90eXBlLWZvci1zaXRlcy8uL21haW5EZXZGb2xkZXIvc2VydmVyL2luZGV4LnRzIiwid2VicGFjazovL3Byb3RvdHlwZS1mb3Itc2l0ZXMvZXh0ZXJuYWwgY29tbW9uanMgXCJjb3JzXCIiLCJ3ZWJwYWNrOi8vcHJvdG90eXBlLWZvci1zaXRlcy9leHRlcm5hbCBjb21tb25qcyBcImRvdGVudi9jb25maWdcIiIsIndlYnBhY2s6Ly9wcm90b3R5cGUtZm9yLXNpdGVzL2V4dGVybmFsIGNvbW1vbmpzIFwiZXhwcmVzc1wiIiwid2VicGFjazovL3Byb3RvdHlwZS1mb3Itc2l0ZXMvZXh0ZXJuYWwgY29tbW9uanMgXCJpc29tb3JwaGljLWZldGNoXCIiLCJ3ZWJwYWNrOi8vcHJvdG90eXBlLWZvci1zaXRlcy9leHRlcm5hbCBjb21tb25qcyBcIm15c3FsXCIiLCJ3ZWJwYWNrOi8vcHJvdG90eXBlLWZvci1zaXRlcy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9wcm90b3R5cGUtZm9yLXNpdGVzL3dlYnBhY2svYmVmb3JlLXN0YXJ0dXAiLCJ3ZWJwYWNrOi8vcHJvdG90eXBlLWZvci1zaXRlcy93ZWJwYWNrL3N0YXJ0dXAiLCJ3ZWJwYWNrOi8vcHJvdG90eXBlLWZvci1zaXRlcy93ZWJwYWNrL2FmdGVyLXN0YXJ0dXAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgbXlzcWwgZnJvbSAnbXlzcWwnO1xuaW1wb3J0IGRhdGFiYXNlX0Z1bmN0aW9uIGZyb20gJy4vbnV0cmllbnRtYXAvcXVlcmllc19udXRyaWVudG1hcCdcbmltcG9ydCAnZG90ZW52L2NvbmZpZyc7XG5cblxuXG5cblxuY29uc3QgbXlzcWxBY2Nlc3MgPSBteXNxbC5jcmVhdGVQb29sKHtcbiAgICBob3N0OnByb2Nlc3MuZW52LkRCX0hPU1QsXG4gICAgcG9ydDpOdW1iZXIocHJvY2Vzcy5lbnYuREJfUE9SVCksXG4gICAgdXNlcjpwcm9jZXNzLmVudi5EQl9VU0VSLFxuICAgIHBhc3N3b3JkOnByb2Nlc3MuZW52LkRCX1BBU1NXT1JELFxuICAgIGRhdGFiYXNlOnByb2Nlc3MuZW52LkRBVEFCQVNFXG59KVxuXG5leHBvcnQgY29uc3QgUXVlcnkgPSAocXVlcnk6c3RyaW5nLHZhbHVlcz86QXJyYXk8c3RyaW5nfG51bWJlcj4pPT57XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlPEFycmF5PGFueT4+KChyZXNvbHZlLHJlamVjdCk9PntcbiAgICAgICAgbXlzcWxBY2Nlc3MucXVlcnkocXVlcnksdmFsdWVzLChlcnIscmVzdWx0cykgPT57XG4gICAgICAgICAgICBpZihlcnIpIHJldHVybiByZWplY3QoZXJyKVxuICAgICAgICAgICAgcmV0dXJuIHJlc29sdmUocmVzdWx0cyk7XG4gICAgICAgIH0pXG4gICAgfSlcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGRhdGFiYXNlX0Z1bmN0aW9uOyIsImltcG9ydCAqIGFzIGV4cHJlc3MgZnJvbSAnZXhwcmVzcydcbmltcG9ydCBkYXRhYmFzZV9GdW5jdGlvbiBmcm9tICcuL3F1ZXJpZXNfbnV0cmllbnRtYXAnXG5cbmNvbnN0IGFwcCA9IGV4cHJlc3MoKVxuXG5hcHAuYWxsKCcvbnV0cmllbnRtYXAvY2xpZW50JywgYXN5bmMgKHJlcSwgcmVzLCBlcnJvcikgPT4ge1xuICBjb25zb2xlLmxvZyhyZXEuYm9keSlcbiAgc3dpdGNoIChyZXEubWV0aG9kKSB7XG4gICAgY2FzZSAnR0VUJzpcbiAgICAgIGNvbnN0IG5ld19EYXRhID0gYXdhaXQgZGF0YWJhc2VfRnVuY3Rpb24uYWxsTWVzc2FnZXMoKVxuICAgICAgbmV3X0RhdGEubWFwKGkgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyhpKVxuICAgICAgfSk7XG4gICAgICByZXMuanNvbihuZXdfRGF0YSlcbiAgICAgIFxuICAgICAgYnJlYWs7XG4gICAgY2FzZSAnUE9TVCc6XG4gICAgICBhd2FpdCBkYXRhYmFzZV9GdW5jdGlvbi5pbnNlcnRDTElFTlQocmVxLmJvZHkpXG4gICAgICByZXMuanNvbihyZXEuYm9keSlcbiAgICAgIGJyZWFrO1xuXG4gICAgY2FzZSAnUFVUJzpcbiAgICAgIGF3YWl0IGRhdGFiYXNlX0Z1bmN0aW9uLnVwZGF0ZU1lc3NhZ2VzKHJlcS5ib2R5LCByZXEuYm9keS5pZClcbiAgICAgIHJlcy5zZW5kKDIwMClcbiAgICAgIGJyZWFrO1xuXG4gICAgY2FzZSAnREVMRVRFJzpcbiAgICAgIGF3YWl0IGRhdGFiYXNlX0Z1bmN0aW9uLmRlbGV0ZU1lc3NhZ2VzKHJlcS5ib2R5LmlkKVxuICAgICAgcmVzLnNlbmQocmVxLm1ldGhvZClcbiAgICAgIGJyZWFrO1xuXG4gICAgZGVmYXVsdDpcblxuICAgICAgcmVzLnNlbmQoKVxuICAgICAgYnJlYWs7XG4gIH1cbn0pXG5cbmFwcC5hbGwoJy9udXRyaWVudG1hcC9pbnN0aXR1dGlvbi86aWQnLCBhc3luYyAocmVxLCByZXMsIGVycm9yKSA9PiB7XG4gIHN3aXRjaCAocmVxLm1ldGhvZCkge1xuICAgIGNhc2UgJ0dFVCc6XG4gICAgICBjb25zdCBuZXdfRGF0YSA9IGF3YWl0IGRhdGFiYXNlX0Z1bmN0aW9uLmFsbE1lc3NhZ2VzKClcbiAgICAgIG5ld19EYXRhLm1hcChpID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coaSlcbiAgICAgIH0pO1xuICAgICAgcmVzLmpzb24obmV3X0RhdGEpXG4gICAgICBcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgJ1BPU1QnOlxuICAgICAgcmVxLmJvZHkuY2xpZW50X0lkID0gcmVxLnBhcmFtcy5pZFxuICAgICAgY29uc29sZS5sb2cocmVxLmJvZHkpXG5cbiAgICAgIGxldCB7aW5zZXJ0SWR9OmFueSA9IGF3YWl0IGRhdGFiYXNlX0Z1bmN0aW9uLmluc2VydEluc3RpdHV0aW9uKHJlcS5ib2R5KVxuICAgICAgY29uc29sZS5sb2coaW5zZXJ0SWQpXG4gICAgICByZXMuc2VuZChyZXEubWV0aG9kKVxuICAgICAgYnJlYWs7XG5cbiAgICBjYXNlICdQVVQnOlxuICAgICAgYXdhaXQgZGF0YWJhc2VfRnVuY3Rpb24udXBkYXRlTWVzc2FnZXMocmVxLmJvZHksIHJlcS5ib2R5LmlkKVxuICAgICAgcmVzLnNlbmQoMjAwKVxuICAgICAgYnJlYWs7XG5cbiAgICBjYXNlICdERUxFVEUnOlxuICAgICAgYXdhaXQgZGF0YWJhc2VfRnVuY3Rpb24uZGVsZXRlTWVzc2FnZXMocmVxLmJvZHkuaWQpXG4gICAgICByZXMuc2VuZChyZXEubWV0aG9kKVxuICAgICAgYnJlYWs7XG5cbiAgICBkZWZhdWx0OlxuXG4gICAgICByZXMuc2VuZCgpXG4gICAgICBicmVhaztcbiAgfVxufSlcblxuZXhwb3J0IGRlZmF1bHQgYXBwXG4iLCJpbXBvcnQgeyBRdWVyeSB9IGZyb20gXCIuLi8uLi9pbmRleFwiO1xuXG5cbmNvbnN0IGFsbE1lc3NhZ2VzID0gYXN5bmMgKCkgPT4gUXVlcnkoJ1NFTEVDVCAqIEZST00gTnV0cmllbnRtYXAubGlmZXN0YWdlcmVmZXJlbmNlJyk7XG4vLyBjb25zdCBzaW5nbGVDaGlycCA9IGFzeW5jIChpZDpzdHJpbmcpID0+IFF1ZXJ5KCdTRUxFQ1QgKiBGUk9NIENoaXJwcyBXSEVSRSBpZCA9ID8nLFtpZF0pO1xuY29uc3QgZGVsZXRlTWVzc2FnZXM9IGFzeW5jKGlkOnN0cmluZyk9PlF1ZXJ5KCdERUxFVEUgRlJPTSBjb250YWN0IFdIRVJFIGlkID0gPycsW2lkXSk7XG5jb25zdCBpbnNlcnRDTElFTlQgPSBhc3luYyh2YWx1ZXMgOmFueSApPT5RdWVyeSgnSU5TRVJUIElOVE8gTnV0cmllbnRtYXAuY2xpZW50IFNFVCA/JyAsdmFsdWVzKTtcbmNvbnN0IGluc2VydEluc3RpdHV0aW9uID0gYXN5bmModmFsdWVzIDphbnkgKT0+UXVlcnkoJ0lOU0VSVCBJTlRPIE51dHJpZW50bWFwLmluc3RpdHV0aW9uIFNFVCA/JyAsdmFsdWVzKTtcblxuY29uc3QgdXBkYXRlTWVzc2FnZXMgPSBhc3luYyAobmV3Q29udGVudDphbnksaWQ6YW55KSA9PlF1ZXJ5KCdVUERBVEUgY29udGFjdCBTRVQgPyBXSEVSRSBpZCA9ID8nLCBbbmV3Q29udGVudCxpZF0pXG4vLyBjb25zdCBhbGxVc2VycyA9IGFzeW5jICgpID0+IFF1ZXJ5KCdTRUxFQ1QgKiBGUk9NIFVzZXJzJyk7XG4vLyBjb25zdCBpbnNlcnRVc2VycyA9IGFzeW5jKHVzZXIgOmFueSApPT5RdWVyeSgnSU5TRVJUIElOVE8gY2xpZW50cyBTRVQgPycgLFt1c2VyXSk7XG4vLyBjb25zdCBpbnNlcnRQaHlzaWNhbCA9IGFzeW5jKHBoeXNpY2FsIDphbnksY2xpZW50aWQ6bnVtYmVyICk9PlF1ZXJ5KCdJTlNFUlQgSU5UTyBjbGllbnRfbGlmZXN0eWxlIFNFVCA/JyAsW3BoeXNpY2FsXSk7XG5cblxuXG5cblxuZXhwb3J0IGRlZmF1bHQge1xuICAgIGFsbE1lc3NhZ2VzLFxuICAgIC8vIHNpbmdsZUNoaXJwLFxuICAgIGRlbGV0ZU1lc3NhZ2VzLFxuICAgIGluc2VydENMSUVOVCxcbiAgICB1cGRhdGVNZXNzYWdlcyxcbiAgICBpbnNlcnRJbnN0aXR1dGlvblxuICAgIC8vIGFsbFVzZXJzLFxuICAgIC8vIGluc2VydFVzZXJzLFxuICAgIC8vIGluc2VydFBoeXNpY2FsXG4gICAgXG59IiwiaW1wb3J0ICogYXMgZXhwcmVzcyBmcm9tICdleHByZXNzJ1xuaW1wb3J0ICogYXMgY29ycyBmcm9tICdjb3JzJ1xuaW1wb3J0IE51dHJpZW50bWFwIGZyb20gJy4vZGIvbnV0cmllbnRtYXAnXG5pbXBvcnQgKiBhcyBmZXRjaCBmcm9tICdpc29tb3JwaGljLWZldGNoJ1xuaW1wb3J0ICogYXMgcGF0aCBmcm9tICdwYXRoJ1xuaW1wb3J0IGJvZHlQYXJzZXIgZnJvbSAnYm9keS1wYXJzZXInXG5pbXBvcnQgeyBQdWxsUmVxdWVzdE91dGxpbmVkIH0gZnJvbSAnQGFudC1kZXNpZ24vaWNvbnMnXG5pbXBvcnQgJ2RvdGVudi9jb25maWcnXG5cbmNvbnN0IGFwcCA9IGV4cHJlc3MoKVxuYXBwLnVzZShOdXRyaWVudG1hcClcbmFwcC51c2UoZXhwcmVzcy5zdGF0aWMoJ3B1YmxpYycpKVxuYXBwLnVzZShjb3JzKCkpXG5hcHAudXNlKGV4cHJlc3MuanNvbigpKVxuYXBwLnNldCgndHJ1c3QgcHJveHknLCB0cnVlKVxuXG4vLyBhcHAucG9zdCgnL3Bvc3QnLCBhc3luYyAocmVxLHJlcykgPT57XG4vLyAgICAgbGV0IGZpcnN0ZGF0YT0gcmVxLmJvZHlbMF1cblxuLy8gICAgIGNvbnN0IGRhdGEgPSBhd2FpdCBmZXRjaChgaHR0cHM6Ly9hcGkubmFsLnVzZGEuZ292L2ZkYy92MS9mb29kcy9zZWFyY2g/cXVlcnk9JHtmaXJzdGRhdGF9JnBhZ2VTaXplPTExJmFwaV9rZXk9dHo4RmlreEZrU2ZZN1Y1dnBTQ2hNZXFneHRob1I5SUxjdkx0QTBZYWApXG4vLyAgICAgY29uc3QgaXRlbSA9IGF3YWl0IGRhdGEuanNvbigpXG5cbi8vICAgICBpdGVtLmZvb2RzWzBdLmZvb2ROdXRyaWVudHMubWFwKChpOmFueSk9Pntjb25zb2xlLmxvZyhpKX0pXG5cbi8vICAgICByZXMuc2VuZChpdGVtKVxuLy8gfSlcblxuY29uc3QgbmV3VXNlID0gYXBwLnVzZSgocmVxLCByZXMsIG5leHQpID0+IHtcbiAgcmVzLmhlYWRlcignQWNjZXNzLUNvbnRyb2wtQWxsb3ctT3JpZ2luJywgJyonKVxuICByZXMuaGVhZGVyKCdBY2Nlc3MtQ29udHJvbC1BbGxvdy1IZWFkZXJzJywgJyonKVxuICBuZXh0KClcbn0pXG5cbmxldCBmb29kc0FycmF5OltdO1xuXG5cbmFwcC5wb3N0KCcvbnV0cml0aW9uYWxEYXRhJywgYXN5bmMgKHJlcSwgcmVzLCBlcnJvcikgPT4ge1xuICBjb25zdCBkYXRhID0gYXdhaXQgZmV0Y2goXG4gICAgYGh0dHBzOi8vYXBpLm5hbC51c2RhLmdvdi9mZGMvdjEvZm9vZHMvc2VhcmNoP3F1ZXJ5PSR7cmVxLmJvZHkuZm9vZFNlbGVjdGlvbn0mcGFnZVNpemU9NCZkYXRhVHlwZT1Gb3VuZGF0aW9uJmFwaV9rZXk9JHtwcm9jZXNzLmVudi5BUElfS0VZfWBcbiAgKVxuICBjb25zdCBmb29kc1F1ZXJ5ID0gYXdhaXQgZGF0YS5qc29uKClcblxuICBjb25zdCBmb29kc0FycmF5ID0gYXdhaXQgZm9vZHNRdWVyeS5mb29kcy5tYXAoKGk6IGFueSkgPT4ge1xuICAgIHJldHVybiBpXG4gIH0pXG4gIGxldCBhcnJheVNvcnQgPSBmb29kc0FycmF5WzBdLmZvb2ROdXRyaWVudHMuc29ydCgoYTogYW55LCBiOiBhbnkpID0+IHtcbiAgICBjb25zdCBuYW1lQSA9IGEubnV0cmllbnROYW1lLnRvVXBwZXJDYXNlKCkgLy8gaWdub3JlIHVwcGVyIGFuZCBsb3dlcmNhc2VcbiAgICBjb25zdCBuYW1lQiA9IGIubnV0cmllbnROYW1lLnRvVXBwZXJDYXNlKCkgLy8gaWdub3JlIHVwcGVyIGFuZCBsb3dlcmNhc2VcbiAgICBpZiAobmFtZUEgPCBuYW1lQikge1xuICAgICAgcmV0dXJuIC0xXG4gICAgfVxuICAgIGlmIChuYW1lQSA+IG5hbWVCKSB7XG4gICAgICByZXR1cm4gMVxuICAgIH1cblxuICAgIC8vIG5hbWVzIG11c3QgYmUgZXF1YWxcbiAgICByZXR1cm4gMFxuICB9KVxuXG5cblxuICBjb25zdCBudXRyaWVudFByb2ZpbGU6IFtdID0gYXJyYXlTb3J0Lm1hcCgoZGF0YTogYW55LCBpbmRleDogbnVtYmVyKSA9PiB7XG4gICAgaWYgKFxuICAgICAgZGF0YS5udXRyaWVudElkID09IDEwMDMgfHxcbiAgICAgIGRhdGEubnV0cmllbnRJZCA9PSAxMDA1IHx8XG4gICAgICBkYXRhLm51dHJpZW50SWQgPT0gMTA3OSB8fFxuICAgICAgZGF0YS5udXRyaWVudElkID09IDExMDkgfHxcbiAgICAgIGRhdGEubnV0cmllbnRJZCA9PSAxMTE0IHx8XG4gICAgICBkYXRhLm51dHJpZW50SWQgPT0gMTE2MiB8fFxuICAgICAgZGF0YS5udXRyaWVudElkID09IDEwOTAgfHxcbiAgICAgIGRhdGEubnV0cmllbnRJZCA9PSAxMDg3IHx8XG4gICAgICBkYXRhLm51dHJpZW50SWQgPT0gMTAwXG5cbiAgICApIHtcbiAgICAgIHJldHVybiBkYXRhXG4gICAgfVxuICB9KVxuICBsZXQgc2VsZWN0ZWROdXRyaWVudHMgPSBudXRyaWVudFByb2ZpbGUuZmlsdGVyKFxuICAgIGluZGV4ID0+IGluZGV4ICE9PSB1bmRlZmluZWQgfHwgbnVsbFxuICApXG5cbiAgcmVzLmpzb24oW2Zvb2RzQXJyYXlbMF0uZGVzY3JpcHRpb24sIHNlbGVjdGVkTnV0cmllbnRzXSlcblxufSlcblxuXG5hcHAuZ2V0KCcvdGVzdCcsIGFzeW5jIChyZXEsIHJlcykgPT4ge1xuICBcbiAgXG4gIC8vIGNvbnN0IGRhdGEgPSBhd2FpdCBmZXRjaChcbiAgLy8gICBgaHR0cHM6Ly9hcGkubmFsLnVzZGEuZ292L2ZkYy92MS9mb29kcy9zZWFyY2g/cXVlcnk9JHtgSG9vZGB9JmRhdGFUeXBlPUJyYW5kZWQmYXBpX2tleT0ke3Byb2Nlc3MuZW52LkFQSV9LRVl9YFxuICAvLyApXG4gIC8vIGNvbnN0IGZvb2RzUXVlcnkgPSBhd2FpdCBkYXRhLmpzb24oKVxuXG4gIC8vIGNvbnN0IGZvb2RzQXJyYXkgPSBhd2FpdCBmb29kc1F1ZXJ5LmZvb2RzLm1hcCgoaTogYW55KSA9PiB7XG4gIC8vICAgcmV0dXJuIGlcbiAgLy8gfSlcbiAgXG5cbiAgcmVzLnNlbmRTdGF0dXMoMjAwKVxuXG59KVxuXG5jb25zdCBQT1JUID0gcHJvY2Vzcy5lbnYuUE9SVCB8fCA4MDgwXG5hcHAubGlzdGVuKFBPUlQsICgpID0+IHtcbiAgY29uc29sZS5sb2coYFNlcnZlciBsaXN0ZW5pbmcgb24gcG9ydCAke1BPUlR9Li4uYClcbn0pXG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJjb3JzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImRvdGVudi9jb25maWdcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZXhwcmVzc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJpc29tb3JwaGljLWZldGNoXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm15c3FsXCIpOyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIiLCIvLyBzdGFydHVwXG4vLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbi8vIFRoaXMgZW50cnkgbW9kdWxlIGlzIHJlZmVyZW5jZWQgYnkgb3RoZXIgbW9kdWxlcyBzbyBpdCBjYW4ndCBiZSBpbmxpbmVkXG52YXIgX193ZWJwYWNrX2V4cG9ydHNfXyA9IF9fd2VicGFja19yZXF1aXJlX18oXCIuL21haW5EZXZGb2xkZXIvc2VydmVyL2luZGV4LnRzXCIpO1xuIiwiIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9