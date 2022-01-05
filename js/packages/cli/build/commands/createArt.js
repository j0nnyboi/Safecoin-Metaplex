"use strict";
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
var __values = (this && this.__values) || function(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createGenerativeArt = void 0;
var os_1 = __importDefault(require("os"));
var promises_1 = require("fs/promises");
var canvas_1 = require("canvas");
var imagemin_1 = __importDefault(require("imagemin"));
var imagemin_pngquant_1 = __importDefault(require("imagemin-pngquant"));
var loglevel_1 = __importDefault(require("loglevel"));
var various_1 = require("../helpers/various");
var metadata_1 = require("../helpers/metadata");
function makeCreateImageWithCanvas(order, width, height) {
    return function makeCreateImage(canvas, context) {
        return function createImage(image) {
            return __awaiter(this, void 0, void 0, function () {
                var start, ID, order_1, order_1_1, cur, imageLocation, loadedImage, e_1_1, buffer, optimizedImage, end, duration;
                var e_1, _a;
                return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0:
                            start = Date.now();
                            ID = parseInt(image.id, 10) - 1;
                            _b.label = 1;
                        case 1:
                            _b.trys.push([1, 6, 7, 8]);
                            order_1 = __values(order), order_1_1 = order_1.next();
                            _b.label = 2;
                        case 2:
                            if (!!order_1_1.done) return [3 /*break*/, 5];
                            cur = order_1_1.value;
                            imageLocation = metadata_1.TRAITS_DIRECTORY + "/" + cur + "/" + image[cur];
                            return [4 /*yield*/, canvas_1.loadImage(imageLocation)];
                        case 3:
                            loadedImage = _b.sent();
                            context.patternQuality = 'best';
                            context.quality = 'best';
                            context.drawImage(loadedImage, 0, 0, width, height);
                            _b.label = 4;
                        case 4:
                            order_1_1 = order_1.next();
                            return [3 /*break*/, 2];
                        case 5: return [3 /*break*/, 8];
                        case 6:
                            e_1_1 = _b.sent();
                            e_1 = { error: e_1_1 };
                            return [3 /*break*/, 8];
                        case 7:
                            try {
                                if (order_1_1 && !order_1_1.done && (_a = order_1.return)) _a.call(order_1);
                            }
                            finally { if (e_1) throw e_1.error; }
                            return [7 /*endfinally*/];
                        case 8:
                            buffer = canvas.toBuffer('image/png');
                            context.clearRect(0, 0, width, height);
                            return [4 /*yield*/, imagemin_1.default.buffer(buffer, {
                                    plugins: [
                                        imagemin_pngquant_1.default({
                                            quality: [0.6, 0.95],
                                        }),
                                    ],
                                })];
                        case 9:
                            optimizedImage = _b.sent();
                            return [4 /*yield*/, promises_1.writeFile(metadata_1.ASSETS_DIRECTORY + "/" + ID + ".png", optimizedImage)];
                        case 10:
                            _b.sent();
                            end = Date.now();
                            loglevel_1.default.info("Placed " + ID + ".png into " + metadata_1.ASSETS_DIRECTORY + ".");
                            duration = end - start;
                            loglevel_1.default.info('Image generated in:', duration + "ms.");
                            return [2 /*return*/];
                    }
                });
            });
        };
    };
}
var CONCURRENT_WORKERS = os_1.default.cpus().length;
var worker = function (work, next_) { return function () { return __awaiter(void 0, void 0, void 0, function () {
    var next;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (!(next = next_())) return [3 /*break*/, 2];
                return [4 /*yield*/, work(next)];
            case 1:
                _a.sent();
                return [3 /*break*/, 0];
            case 2: return [2 /*return*/];
        }
    });
}); }; };
function createGenerativeArt(configLocation, randomizedSets) {
    return __awaiter(this, void 0, void 0, function () {
        var start, _a, order, width, height, makeCreateImage, imagesNb, workers, workerNb, i, canvas, context, work, w, end, duration;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    start = Date.now();
                    return [4 /*yield*/, various_1.readJsonFile(configLocation)];
                case 1:
                    _a = _b.sent(), order = _a.order, width = _a.width, height = _a.height;
                    makeCreateImage = makeCreateImageWithCanvas(order, width, height);
                    imagesNb = randomizedSets.length;
                    workers = [];
                    workerNb = Math.min(CONCURRENT_WORKERS, imagesNb);
                    loglevel_1.default.info("Instanciating " + workerNb + " workers to generate " + imagesNb + " images.");
                    for (i = 0; i < workerNb; i++) {
                        canvas = canvas_1.createCanvas(width, height);
                        context = canvas.getContext('2d');
                        work = makeCreateImage(canvas, context);
                        w = worker(work, randomizedSets.pop.bind(randomizedSets));
                        workers.push(w());
                    }
                    return [4 /*yield*/, Promise.all(workers)];
                case 2:
                    _b.sent();
                    end = Date.now();
                    duration = end - start;
                    loglevel_1.default.info("Generated " + imagesNb + " images in", duration / 1000 + "s.");
                    return [2 /*return*/];
            }
        });
    });
}
exports.createGenerativeArt = createGenerativeArt;
