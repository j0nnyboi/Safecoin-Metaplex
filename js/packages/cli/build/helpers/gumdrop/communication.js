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
exports.urlAndHandleFor = exports.distributeWallet = exports.distributeManual = exports.distributeAwsSes = exports.distributeAwsSns = exports.formatDropMessage = void 0;
var loglevel_1 = __importDefault(require("loglevel"));
var client_sesv2_1 = require("@aws-sdk/client-sesv2");
var client_sns_1 = require("@aws-sdk/client-sns");
var formatDropMessage = function (info, drop, html) {
    var wrap = function (url, text) {
        if (html) {
            return "<a href=\"" + url + "\">" + text + "</a>";
        }
        else {
            return text + " " + url;
        }
    };
    if (drop.type === "Token") {
        return {
            subject: "Gumdrop Token Drop",
            message: "You received " + info.amount + " token(s) "
                + ("(click " + wrap(drop.meta, "here") + " to view more information about the token mint). ")
                + wrap(info.url, "Click here to claim them!"),
        };
    }
    else if (drop.type === "Candy") {
        return {
            subject: "Gumdrop NFT Drop",
            message: "You received " + info.amount + " Candy Machine pre-sale mint(s) "
                + ("(click " + wrap(drop.meta, "here") + " to view the candy machine configuration on explorer). ")
                + wrap(info.url, "Click here to claim them!"),
        };
    }
    else if (drop.type === "Edition") {
        return {
            subject: "Gumdrop NFT Drop",
            message: "You received " + info.amount + " limited-edition print(s) "
                + ("(click " + wrap(drop.meta, "here") + " to view the master edition mint on explorer). ")
                + wrap(info.url, "Click here to claim them!"),
        };
    }
    else {
        throw new Error("Internal Error: Unknown drop type " + drop.type);
    }
};
exports.formatDropMessage = formatDropMessage;
var distributeAwsSns = function (auth, source, claimants, drop) { return __awaiter(void 0, void 0, void 0, function () {
    var client, single, responses, claimants_1, claimants_1_1, c, _a, _b, e_1_1;
    var e_1, _c;
    return __generator(this, function (_d) {
        switch (_d.label) {
            case 0:
                if (!auth.accessKeyId || !auth.secretAccessKey) {
                    throw new Error("AWS SES auth keys not supplied");
                }
                if (claimants.length === 0)
                    return [2 /*return*/, []];
                loglevel_1.default.debug("SES auth", auth);
                client = new client_sns_1.SNSClient({
                    region: "us-east-2",
                    credentials: {
                        accessKeyId: auth.accessKeyId,
                        secretAccessKey: auth.secretAccessKey,
                    },
                });
                single = function (info, drop) { return __awaiter(void 0, void 0, void 0, function () {
                    var formatted, message, response, err_1;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                formatted = exports.formatDropMessage(info, drop, true);
                                message = {
                                    Message: formatted.message,
                                    PhoneNumber: info.handle,
                                };
                                _a.label = 1;
                            case 1:
                                _a.trys.push([1, 3, , 4]);
                                return [4 /*yield*/, client.send(new client_sns_1.PublishCommand(message))];
                            case 2:
                                response = _a.sent();
                                return [2 /*return*/, {
                                        status: "success",
                                        handle: info.handle,
                                        messageId: response.MessageId,
                                    }];
                            case 3:
                                err_1 = _a.sent();
                                return [2 /*return*/, {
                                        status: "error",
                                        handle: info.handle,
                                        error: err_1,
                                    }];
                            case 4: return [2 /*return*/];
                        }
                    });
                }); };
                responses = Array();
                _d.label = 1;
            case 1:
                _d.trys.push([1, 6, 7, 8]);
                claimants_1 = __values(claimants), claimants_1_1 = claimants_1.next();
                _d.label = 2;
            case 2:
                if (!!claimants_1_1.done) return [3 /*break*/, 5];
                c = claimants_1_1.value;
                _b = (_a = responses).push;
                return [4 /*yield*/, single(c, drop)];
            case 3:
                _b.apply(_a, [_d.sent()]);
                _d.label = 4;
            case 4:
                claimants_1_1 = claimants_1.next();
                return [3 /*break*/, 2];
            case 5: return [3 /*break*/, 8];
            case 6:
                e_1_1 = _d.sent();
                e_1 = { error: e_1_1 };
                return [3 /*break*/, 8];
            case 7:
                try {
                    if (claimants_1_1 && !claimants_1_1.done && (_c = claimants_1.return)) _c.call(claimants_1);
                }
                finally { if (e_1) throw e_1.error; }
                return [7 /*endfinally*/];
            case 8: return [2 /*return*/, responses];
        }
    });
}); };
exports.distributeAwsSns = distributeAwsSns;
var distributeAwsSes = function (auth, source, claimants, drop) { return __awaiter(void 0, void 0, void 0, function () {
    var client, single, responses, claimants_2, claimants_2_1, c, _a, _b, e_2_1;
    var e_2, _c;
    return __generator(this, function (_d) {
        switch (_d.label) {
            case 0:
                if (!auth.accessKeyId || !auth.secretAccessKey) {
                    throw new Error("AWS SES auth keys not supplied");
                }
                if (claimants.length === 0)
                    return [2 /*return*/, []];
                loglevel_1.default.debug("SES auth", auth);
                client = new client_sesv2_1.SESv2Client({
                    region: "us-east-2",
                    credentials: {
                        accessKeyId: auth.accessKeyId,
                        secretAccessKey: auth.secretAccessKey,
                    },
                });
                single = function (info, drop) { return __awaiter(void 0, void 0, void 0, function () {
                    var formatted, message, response, err_2;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                formatted = exports.formatDropMessage(info, drop, true);
                                message = {
                                    Destination: {
                                        ToAddresses: [
                                            info.handle,
                                        ]
                                    },
                                    Content: {
                                        Simple: {
                                            Subject: {
                                                Data: formatted.subject,
                                                Charset: "utf-8",
                                            },
                                            Body: {
                                                Html: {
                                                    Data: formatted.message
                                                        + "<br><br>"
                                                        + "<div>"
                                                        + "If you would like to unsubscribe from new Gumdrops, "
                                                        + "change your subscription preferences here: "
                                                        + "<a href='{{amazonSESUnsubscribeUrl}}'>AWS subscription preferences</a>"
                                                        + "</div>",
                                                    Charset: "utf-8",
                                                },
                                            },
                                        },
                                    },
                                    FromEmailAddress: source,
                                    ListManagementOptions: {
                                        ContactListName: "Gumdrop",
                                        TopicName: drop.type,
                                    },
                                };
                                _a.label = 1;
                            case 1:
                                _a.trys.push([1, 3, , 4]);
                                return [4 /*yield*/, client.send(new client_sesv2_1.SendEmailCommand(message))];
                            case 2:
                                response = _a.sent();
                                return [2 /*return*/, {
                                        status: "success",
                                        handle: info.handle,
                                        messageId: response.MessageId,
                                    }];
                            case 3:
                                err_2 = _a.sent();
                                return [2 /*return*/, {
                                        status: "error",
                                        handle: info.handle,
                                        error: err_2,
                                    }];
                            case 4: return [2 /*return*/];
                        }
                    });
                }); };
                responses = Array();
                _d.label = 1;
            case 1:
                _d.trys.push([1, 6, 7, 8]);
                claimants_2 = __values(claimants), claimants_2_1 = claimants_2.next();
                _d.label = 2;
            case 2:
                if (!!claimants_2_1.done) return [3 /*break*/, 5];
                c = claimants_2_1.value;
                _b = (_a = responses).push;
                return [4 /*yield*/, single(c, drop)];
            case 3:
                _b.apply(_a, [_d.sent()]);
                _d.label = 4;
            case 4:
                claimants_2_1 = claimants_2.next();
                return [3 /*break*/, 2];
            case 5: return [3 /*break*/, 8];
            case 6:
                e_2_1 = _d.sent();
                e_2 = { error: e_2_1 };
                return [3 /*break*/, 8];
            case 7:
                try {
                    if (claimants_2_1 && !claimants_2_1.done && (_c = claimants_2.return)) _c.call(claimants_2);
                }
                finally { if (e_2) throw e_2.error; }
                return [7 /*endfinally*/];
            case 8: return [2 /*return*/, responses];
        }
    });
}); };
exports.distributeAwsSes = distributeAwsSes;
/* eslint-disable @typescript-eslint/no-unused-vars */
var distributeManual = function (auth, source, claimants, drop) { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        return [2 /*return*/, Array()];
    });
}); };
exports.distributeManual = distributeManual;
var distributeWallet = function (auth, source, claimants, drop) { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        return [2 /*return*/, Array()];
    });
}); };
exports.distributeWallet = distributeWallet;
/* eslint-enable @typescript-eslint/no-unused-vars */
var urlAndHandleFor = function (claimants) {
    return claimants.map(function (info) {
        return {
            handle: info.handle,
            amount: info.amount,
            url: info.url,
        };
    });
};
exports.urlAndHandleFor = urlAndHandleFor;
