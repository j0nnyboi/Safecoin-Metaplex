"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
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
var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var __spreadArray = (this && this.__spreadArray) || function (to, from) {
    for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
    return to;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.closeGumdrop = exports.buildGumdrop = exports.chunk = exports.validateEditionClaims = exports.validateCandyClaims = exports.validateTransferClaims = exports.dropInfoFor = exports.getCreatorTokenAccount = exports.getMintInfo = exports.getCandyMachine = exports.getCandyConfig = exports.parseClaimants = void 0;
var web3_js_1 = require("@safecoin/web3.js");
var safe_token_1 = require("@safecoin/safe-token");
var anchor = __importStar(require("@project-serum/anchor"));
var js_sha256_1 = require("js-sha256");
var bn_js_1 = __importDefault(require("bn.js"));
var bs58 = __importStar(require("bs58"));
var accounts_1 = require("../accounts");
var constants_1 = require("../constants");
var merkleTree_1 = require("./merkleTree");
var csvStringToArray = function (strData) {
    var objPattern = new RegExp('(\\,|\\r?\\n|\\r|^)(?:"([^"]*(?:""[^"]*)*)"|([^\\,\\r\\n]*))', 'gi');
    var arrMatches = null;
    var arrData = [[]];
    while ((arrMatches = objPattern.exec(strData))) {
        if (arrMatches[1].length && arrMatches[1] !== ',')
            arrData.push([]);
        arrData[arrData.length - 1].push(arrMatches[2]
            ? arrMatches[2].replace(new RegExp('""', 'g'), '"')
            : arrMatches[3]);
    }
    return arrData;
};
var parseClaimants = function (input, filename, method) {
    var extension = filename.match(/\.[0-9a-z]+$/i);
    if (extension === null) {
        throw new Error("Could not parse file extension from " + filename);
    }
    switch (extension[0]) {
        case '.csv': {
            var arr = csvStringToArray(input);
            // TODO: more robust
            var search_1;
            if (method === 'aws-sms') {
                search_1 = 'phone number';
            }
            else if (method === 'aws-email') {
                search_1 = 'email';
            }
            else {
                throw new Error("Cannot parse csv for " + method);
            }
            var foundIdx_1 = arr[0].findIndex(function (s) { return s.includes(search_1); });
            if (foundIdx_1 === -1)
                throw new Error("Could not find " + search_1 + " index");
            var numbers = new Set(arr
                .slice(1)
                .filter(function (arr) { return arr[foundIdx_1].length > 0; })
                .map(function (arr) { return arr[foundIdx_1]; }));
            return __spreadArray([], __read(numbers)).map(function (n, idx) {
                return {
                    handle: n,
                    amount: 1,
                    edition: idx,
                };
            });
        }
        case '.json': {
            var json = JSON.parse(input);
            return json.map(function (obj) {
                return {
                    handle: obj.handle,
                    amount: obj.amount,
                    edition: obj.edition,
                    url: obj.url,
                };
            });
        }
        default: {
            throw new Error("Cannot parse file format " + extension + " from " + filename);
        }
    }
};
exports.parseClaimants = parseClaimants;
var getCandyConfig = function (connection, config) { return __awaiter(void 0, void 0, void 0, function () {
    var configKey, configAccount;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                try {
                    configKey = new web3_js_1.PublicKey(config);
                }
                catch (err) {
                    throw new Error("Invalid config key " + err);
                }
                return [4 /*yield*/, connection.getAccountInfo(configKey)];
            case 1:
                configAccount = _a.sent();
                if (configAccount === null) {
                    throw new Error("Could not fetch config");
                }
                if (!configAccount.owner.equals(constants_1.CANDY_MACHINE_PROGRAM_ID)) {
                    throw new Error("Invalid config owner " + configAccount.owner.toBase58());
                }
                return [2 /*return*/, configKey];
        }
    });
}); };
exports.getCandyConfig = getCandyConfig;
var getCandyMachine = function (connection, candyMachineKey) { return __awaiter(void 0, void 0, void 0, function () {
    var candyMachineCoder, _a, _b, candyMachineAccount;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                _b = (_a = anchor.Coder).bind;
                return [4 /*yield*/, anchor.Program.fetchIdl(constants_1.CANDY_MACHINE_PROGRAM_ID, {
                        connection: connection,
                    })];
            case 1:
                candyMachineCoder = new (_b.apply(_a, [void 0, _c.sent()]))();
                if (candyMachineCoder === null) {
                    throw new Error("Could not fetch candy machine IDL");
                }
                return [4 /*yield*/, connection.getAccountInfo(candyMachineKey)];
            case 2:
                candyMachineAccount = _c.sent();
                if (candyMachineAccount === null) {
                    throw new Error("Could not fetch candy machine");
                }
                return [2 /*return*/, candyMachineCoder.accounts.decode('CandyMachine', candyMachineAccount.data)];
        }
    });
}); };
exports.getCandyMachine = getCandyMachine;
var getMintInfo = function (connection, mint) { return __awaiter(void 0, void 0, void 0, function () {
    var mintKey, mintAccount, mintOwner, mintInfo;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                try {
                    mintKey = new web3_js_1.PublicKey(mint);
                }
                catch (err) {
                    throw new Error("Invalid mint key " + err);
                }
                return [4 /*yield*/, connection.getAccountInfo(mintKey)];
            case 1:
                mintAccount = _a.sent();
                if (mintAccount === null) {
                    throw new Error("Could not fetch mint");
                }
                if (!mintAccount.owner.equals(constants_1.TOKEN_PROGRAM_ID)) {
                    mintOwner = mintAccount.owner.toBase58();
                    throw new Error("Invalid mint owner " + mintOwner);
                }
                if (mintAccount.data.length !== safe_token_1.MintLayout.span) {
                    throw new Error("Invalid mint size " + mintAccount.data.length);
                }
                mintInfo = safe_token_1.MintLayout.decode(Buffer.from(mintAccount.data));
                return [2 /*return*/, {
                        key: mintKey,
                        info: mintInfo,
                    }];
        }
    });
}); };
exports.getMintInfo = getMintInfo;
var getCreatorTokenAccount = function (walletKey, connection, mintKey, totalClaim) { return __awaiter(void 0, void 0, void 0, function () {
    var creatorTokenKey, creatorTokenAccount, creatorTokenInfo;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, accounts_1.getTokenWallet(walletKey, mintKey)];
            case 1:
                creatorTokenKey = _a.sent();
                return [4 /*yield*/, connection.getAccountInfo(creatorTokenKey)];
            case 2:
                creatorTokenAccount = _a.sent();
                if (creatorTokenAccount === null) {
                    throw new Error("Could not fetch creator token account");
                }
                if (creatorTokenAccount.data.length !== safe_token_1.AccountLayout.span) {
                    throw new Error("Invalid token account size " + creatorTokenAccount.data.length);
                }
                creatorTokenInfo = safe_token_1.AccountLayout.decode(Buffer.from(creatorTokenAccount.data));
                if (new bn_js_1.default(creatorTokenInfo.amount, 8, 'le').toNumber() < totalClaim) {
                    throw new Error("Creator token account does not have enough tokens");
                }
                return [2 /*return*/, creatorTokenKey];
        }
    });
}); };
exports.getCreatorTokenAccount = getCreatorTokenAccount;
var explorerUrlFor = function (env, key) {
    return "https://explorer.safecoin.com/address/" + key + "?cluster=" + env;
};
var dropInfoFor = function (env, integration, tokenMint, candyConfig, masterMint) {
    switch (integration) {
        case 'transfer':
            return { type: 'Token', meta: explorerUrlFor(env, tokenMint) };
        case 'candy':
            return { type: 'Candy', meta: explorerUrlFor(env, candyConfig) };
        case 'edition':
            return { type: 'Edition', meta: explorerUrlFor(env, masterMint) };
        default:
            throw new Error("Unknown claim integration method " + integration);
    }
};
exports.dropInfoFor = dropInfoFor;
var validateTransferClaims = function (connection, walletKey, claimants, mintStr) { return __awaiter(void 0, void 0, void 0, function () {
    var total, mint, source;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                claimants.forEach(function (c, idx) {
                    if (!c.handle)
                        throw new Error("Claimant " + idx + " doesn't have handle");
                    if (!c.amount)
                        throw new Error("Claimant " + idx + " doesn't have amount");
                    if (c.amount === 0)
                        throw new Error("Claimant " + idx + " amount is 0");
                });
                total = claimants.reduce(function (acc, c) { return acc + c.amount; }, 0);
                return [4 /*yield*/, exports.getMintInfo(connection, mintStr)];
            case 1:
                mint = _a.sent();
                return [4 /*yield*/, exports.getCreatorTokenAccount(walletKey, connection, mint.key, total)];
            case 2:
                source = _a.sent();
                return [2 /*return*/, {
                        total: total,
                        mint: mint,
                        source: source,
                    }];
        }
    });
}); };
exports.validateTransferClaims = validateTransferClaims;
var validateCandyClaims = function (connection, walletKey, claimants, candyConfig, candyUuid) { return __awaiter(void 0, void 0, void 0, function () {
    var total, configKey, _a, candyMachineKey, candyMachine, remaining;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                claimants.forEach(function (c, idx) {
                    if (!c.handle)
                        throw new Error("Claimant " + idx + " doesn't have handle");
                    if (!c.amount)
                        throw new Error("Claimant " + idx + " doesn't have amount");
                    if (c.amount === 0)
                        throw new Error("Claimant " + idx + " amount is 0");
                });
                total = claimants.reduce(function (acc, c) { return acc + c.amount; }, 0);
                return [4 /*yield*/, exports.getCandyConfig(connection, candyConfig)];
            case 1:
                configKey = _b.sent();
                return [4 /*yield*/, accounts_1.getCandyMachineAddress(configKey, candyUuid)];
            case 2:
                _a = __read.apply(void 0, [_b.sent(), 1]), candyMachineKey = _a[0];
                return [4 /*yield*/, exports.getCandyMachine(connection, candyMachineKey)];
            case 3:
                candyMachine = _b.sent();
                remaining = candyMachine.data.itemsAvailable.toNumber() -
                    candyMachine.itemsRedeemed.toNumber();
                if (isNaN(remaining)) {
                    // TODO: should this have an override?
                    throw new Error("Could not calculate how many candy machine items are remaining");
                }
                if (remaining < total) {
                    throw new Error("Distributor is allocated more mints (" + total + ") " +
                        ("than the candy machine has remaining (" + remaining + ")"));
                }
                if (!candyMachine.authority.equals(walletKey)) {
                    throw new Error("Candy machine authority does not match wallet public key");
                }
                return [2 /*return*/, {
                        total: total,
                        config: configKey,
                        uuid: candyUuid,
                        candyMachineKey: candyMachineKey,
                    }];
        }
    });
}); };
exports.validateCandyClaims = validateCandyClaims;
var getOffsetFromStart = function (edition) {
    return edition.mod(new bn_js_1.default(31 * 8));
};
var getIndex = function (offsetFromStart) {
    return offsetFromStart.div(new bn_js_1.default(8));
};
var getOffsetFromRight = function (offsetFromStart) {
    return new bn_js_1.default(7).sub(offsetFromStart.mod(new bn_js_1.default(8)));
};
var getIndexAndMask = function (edition) {
    var offsetFromStart = getOffsetFromStart(edition);
    return {
        index: getIndex(offsetFromStart).toNumber(),
        mask: new bn_js_1.default(1)
            .shln(getOffsetFromRight(offsetFromStart).toNumber())
            .toNumber(),
    };
};
var editionTaken = function (marker, edition) {
    var m = getIndexAndMask(edition);
    return (marker[m.index] & m.mask) !== 0;
};
var setEditionTaken = function (marker, edition) {
    var m = getIndexAndMask(edition);
    marker[m.index] = marker[m.index] | m.mask;
};
var validateEditionClaims = function (connection, walletKey, claimants, masterMintStr) { return __awaiter(void 0, void 0, void 0, function () {
    var total, masterMint, masterTokenAccount, masterEditionKey, masterEdition, currentSupply, maxSupply, editions, editionMarkers, _loop_1, idx;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                claimants.forEach(function (c, idx) {
                    if (!c.handle)
                        throw new Error("Claimant " + idx + " doesn't have handle");
                    if (c.amount !== 1) {
                        throw new Error("Claimant " + idx + " has amount " + c.amount + ". Expected 1 for edition gumdrop");
                    }
                });
                total = claimants.reduce(function (acc, c) { return acc + c.amount; }, 0);
                return [4 /*yield*/, exports.getMintInfo(connection, masterMintStr)];
            case 1:
                masterMint = _a.sent();
                return [4 /*yield*/, exports.getCreatorTokenAccount(walletKey, connection, masterMint.key, 1)];
            case 2:
                masterTokenAccount = _a.sent();
                return [4 /*yield*/, accounts_1.getMasterEdition(masterMint.key)];
            case 3:
                masterEditionKey = _a.sent();
                return [4 /*yield*/, connection.getAccountInfo(masterEditionKey)];
            case 4:
                masterEdition = _a.sent();
                if (masterEdition === null) {
                    throw new Error("Could not fetch master edition");
                }
                console.log('Master edition', masterEdition);
                currentSupply = new bn_js_1.default(masterEdition.data.slice(1, 1 + 8), 8, 'le').toNumber();
                if (masterEdition.data[9] === 0) {
                    maxSupply = null;
                }
                else {
                    maxSupply = new bn_js_1.default(masterEdition.data.slice(10, 10 + 8), 8, 'le').toNumber();
                }
                console.log('Max supply', maxSupply);
                console.log('Current supply', currentSupply);
                if (maxSupply !== null && maxSupply < total) {
                    throw new Error("Distributor is allocated more editions (" + total + ") " +
                        ("than the master has total (" + maxSupply + ")"));
                }
                editions = {};
                editionMarkers = [];
                _loop_1 = function (idx) {
                    var c, edition, markerKey, markerData, markerAcc;
                    return __generator(this, function (_b) {
                        switch (_b.label) {
                            case 0:
                                c = claimants[idx];
                                if (c.edition === undefined)
                                    throw new Error("Claimant " + idx + " doesn't have edition");
                                if (c.edition <= 0) {
                                    throw new Error("Claimant " + idx + " assigned invalid edition " + c.edition);
                                }
                                if (maxSupply !== null && c.edition > maxSupply) {
                                    throw new Error("Claimant " + idx + " assigned edition " + c.edition + " which is beyond the max supply");
                                }
                                if (c.edition in editions) {
                                    throw new Error("Claimant " + idx + " and " + editions[c.edition] + " are both assigned to edition " + c.edition);
                                }
                                edition = new bn_js_1.default(c.edition);
                                return [4 /*yield*/, accounts_1.getEditionMarkPda(masterMint.key, edition.toNumber())];
                            case 1:
                                markerKey = _b.sent();
                                markerData = editionMarkers.find(function (pm) { return pm[0].equals(markerKey); });
                                if (!(markerData === undefined)) return [3 /*break*/, 3];
                                return [4 /*yield*/, connection.getAccountInfo(markerKey)];
                            case 2:
                                markerAcc = _b.sent();
                                if (markerAcc === null) {
                                    editionMarkers.push([markerKey, Array(31)]);
                                }
                                else {
                                    editionMarkers.push([markerKey, __spreadArray([], __read(markerAcc.data.slice(1, 32)))]);
                                }
                                markerData = editionMarkers[editionMarkers.length - 1];
                                _b.label = 3;
                            case 3:
                                if (markerData === undefined) {
                                    throw new Error("Internal Error: Edition marker info still undefined " + c.edition);
                                }
                                if (editionTaken(markerData[1], edition)) {
                                    throw new Error("Claimant " + idx + " is assigned to edition " + c.edition + " which is already taken");
                                }
                                setEditionTaken(markerData[1], edition);
                                editions[c.edition] = idx;
                                return [2 /*return*/];
                        }
                    });
                };
                idx = 0;
                _a.label = 5;
            case 5:
                if (!(idx < claimants.length)) return [3 /*break*/, 8];
                return [5 /*yield**/, _loop_1(idx)];
            case 6:
                _a.sent();
                _a.label = 7;
            case 7:
                ++idx;
                return [3 /*break*/, 5];
            case 8: return [2 /*return*/, {
                    total: total,
                    masterMint: masterMint,
                    masterTokenAccount: masterTokenAccount,
                }];
        }
    });
}); };
exports.validateEditionClaims = validateEditionClaims;
var chunk = function (arr, len) {
    var chunks = [];
    var n = arr.length;
    var i = 0;
    while (i < n) {
        chunks.push(arr.slice(i, (i += len)));
    }
    return chunks;
};
exports.chunk = chunk;
var buildGumdrop = function (connection, walletKey, needsPin, claimIntegration, host, baseKey, temporalSigner, claimants, claimInfo, extraParams) {
    if (extraParams === void 0) { extraParams = []; }
    return __awaiter(void 0, void 0, void 0, function () {
        var leafs, idx, claimant, seeds, _a, claimantPda, extra, tree, root, _b, distributor, dbump, idx, proof, verified, claimant, params, query, instructions, _c, distributorWalletKey, _d, distributorTokenKey;
        return __generator(this, function (_e) {
            switch (_e.label) {
                case 0:
                    leafs = [];
                    idx = 0;
                    _e.label = 1;
                case 1:
                    if (!(idx < claimants.length)) return [3 /*break*/, 6];
                    claimant = claimants[idx];
                    if (!!needsPin) return [3 /*break*/, 2];
                    try {
                        claimant.secret = new web3_js_1.PublicKey(claimant.handle);
                    }
                    catch (err) {
                        throw new Error("Invalid claimant wallet handle " + err);
                    }
                    return [3 /*break*/, 4];
                case 2:
                    seeds = __spreadArray(__spreadArray([
                        claimant.seed.toBuffer()
                    ], __read(exports.chunk(Buffer.from(claimant.handle), 32))), [
                        Buffer.from(claimant.pin.toArray('le', 4)),
                    ]);
                    return [4 /*yield*/, web3_js_1.PublicKey.findProgramAddress(seeds.map(function (s) { return s.slice(0, 32); }), constants_1.GUMDROP_DISTRIBUTOR_ID)];
                case 3:
                    _a = __read.apply(void 0, [_e.sent(), 1]), claimantPda = _a[0];
                    claimant.secret = claimantPda;
                    _e.label = 4;
                case 4:
                    extra = claimIntegration === 'edition'
                        ? __spreadArray([], __read(new bn_js_1.default(claimant.edition).toArray('le', 8))) : [];
                    leafs.push(Buffer.from(__spreadArray(__spreadArray(__spreadArray(__spreadArray(__spreadArray([], __read(new bn_js_1.default(idx).toArray('le', 8))), __read(claimant.secret.toBuffer())), __read(claimant.seed.toBuffer())), __read(new bn_js_1.default(claimant.amount).toArray('le', 8))), __read(extra))));
                    _e.label = 5;
                case 5:
                    ++idx;
                    return [3 /*break*/, 1];
                case 6:
                    tree = new merkleTree_1.MerkleTree(leafs);
                    root = tree.getRoot();
                    return [4 /*yield*/, web3_js_1.PublicKey.findProgramAddress([Buffer.from('MerkleDistributor'), baseKey.toBuffer()], constants_1.GUMDROP_DISTRIBUTOR_ID)];
                case 7:
                    _b = __read.apply(void 0, [_e.sent(), 2]), distributor = _b[0], dbump = _b[1];
                    for (idx = 0; idx < claimants.length; ++idx) {
                        proof = tree.getProof(idx);
                        verified = tree.verifyProof(idx, proof, root);
                        if (!verified) {
                            throw new Error('Gumdrop merkle tree verification failed');
                        }
                        claimant = claimants[idx];
                        params = __spreadArray([
                            "distributor=" + distributor,
                            "handle=" + encodeURIComponent(claimant.handle),
                            "amount=" + claimant.amount,
                            "index=" + idx,
                            "proof=" + proof.map(function (b) { return bs58.encode(b); })
                        ], __read(extraParams));
                        if (needsPin) {
                            params.push("pin=" + claimant.pin.toNumber());
                        }
                        else {
                            params.push("pin=NA");
                        }
                        if (claimIntegration === 'transfer') {
                            params.push("tokenAcc=" + claimInfo.source);
                        }
                        else if (claimIntegration === 'candy') {
                            params.push("config=" + claimInfo.config);
                            params.push("uuid=" + claimInfo.uuid);
                        }
                        else {
                            params.push("master=" + claimInfo.masterMint.key);
                            params.push("edition=" + claimant.edition);
                        }
                        query = params.join('&');
                        claimant.url = host + "/claim?" + query;
                    }
                    instructions = Array();
                    instructions.push(new web3_js_1.TransactionInstruction({
                        programId: constants_1.GUMDROP_DISTRIBUTOR_ID,
                        keys: [
                            { pubkey: baseKey, isSigner: true, isWritable: false },
                            { pubkey: distributor, isSigner: false, isWritable: true },
                            { pubkey: walletKey, isSigner: true, isWritable: false },
                            { pubkey: web3_js_1.SystemProgram.programId, isSigner: false, isWritable: false },
                        ],
                        data: Buffer.from(__spreadArray(__spreadArray(__spreadArray(__spreadArray([], __read(Buffer.from(js_sha256_1.sha256.digest('global:new_distributor')).slice(0, 8))), __read(new bn_js_1.default(dbump).toArray('le', 1))), __read(root)), __read(temporalSigner.toBuffer()))),
                    }));
                    if (!(claimIntegration === 'transfer')) return [3 /*break*/, 8];
                    instructions.push(safe_token_1.Token.createApproveInstruction(constants_1.TOKEN_PROGRAM_ID, claimInfo.source, distributor, walletKey, [], claimInfo.total));
                    return [3 /*break*/, 12];
                case 8:
                    if (!(claimIntegration === 'candy')) return [3 /*break*/, 10];
                    return [4 /*yield*/, web3_js_1.PublicKey.findProgramAddress([Buffer.from('Wallet'), distributor.toBuffer()], constants_1.GUMDROP_DISTRIBUTOR_ID)];
                case 9:
                    _c = __read.apply(void 0, [_e.sent(), 1]), distributorWalletKey = _c[0];
                    instructions.push(new web3_js_1.TransactionInstruction({
                        programId: constants_1.CANDY_MACHINE_PROGRAM_ID,
                        keys: [
                            {
                                pubkey: claimInfo.candyMachineKey,
                                isSigner: false,
                                isWritable: true,
                            },
                            { pubkey: walletKey, isSigner: true, isWritable: false },
                        ],
                        data: Buffer.from(__spreadArray(__spreadArray(__spreadArray([], __read(Buffer.from(js_sha256_1.sha256.digest('global:update_authority')).slice(0, 8))), __read(new bn_js_1.default(1).toArray('le', 1))), __read(distributorWalletKey.toBuffer()))),
                    }));
                    return [3 /*break*/, 12];
                case 10:
                    if (!(claimIntegration === 'edition')) return [3 /*break*/, 12];
                    return [4 /*yield*/, web3_js_1.PublicKey.findProgramAddress([
                            distributor.toBuffer(),
                            constants_1.TOKEN_PROGRAM_ID.toBuffer(),
                            claimInfo.masterMint.key.toBuffer(),
                        ], constants_1.SPL_ASSOCIATED_TOKEN_ACCOUNT_PROGRAM_ID)];
                case 11:
                    _d = __read.apply(void 0, [_e.sent(), 1]), distributorTokenKey = _d[0];
                    instructions.push(safe_token_1.Token.createAssociatedTokenAccountInstruction(constants_1.SPL_ASSOCIATED_TOKEN_ACCOUNT_PROGRAM_ID, constants_1.TOKEN_PROGRAM_ID, claimInfo.masterMint.key, distributorTokenKey, distributor, walletKey));
                    instructions.push(safe_token_1.Token.createTransferInstruction(constants_1.TOKEN_PROGRAM_ID, claimInfo.masterTokenAccount, distributorTokenKey, walletKey, [], 1));
                    _e.label = 12;
                case 12: return [2 /*return*/, instructions];
            }
        });
    });
};
exports.buildGumdrop = buildGumdrop;
var closeGumdrop = function (connection, walletKey, base, claimMethod, transferMint, candyConfig, candyUuid, masterMint) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, distributorKey, dbump, _b, distributorWalletKey, wbump, extraKeys, instructions, mint, source, configKey, _c, candyMachineKey, masterMintKey, _d, distributorTokenKey, _e, walletTokenKey;
    return __generator(this, function (_f) {
        switch (_f.label) {
            case 0: return [4 /*yield*/, web3_js_1.PublicKey.findProgramAddress([Buffer.from('MerkleDistributor'), base.publicKey.toBuffer()], constants_1.GUMDROP_DISTRIBUTOR_ID)];
            case 1:
                _a = __read.apply(void 0, [_f.sent(), 2]), distributorKey = _a[0], dbump = _a[1];
                return [4 /*yield*/, web3_js_1.PublicKey.findProgramAddress([Buffer.from('Wallet'), distributorKey.toBuffer()], constants_1.GUMDROP_DISTRIBUTOR_ID)];
            case 2:
                _b = __read.apply(void 0, [_f.sent(), 2]), distributorWalletKey = _b[0], wbump = _b[1];
                instructions = Array();
                if (!(claimMethod === 'transfer')) return [3 /*break*/, 5];
                return [4 /*yield*/, exports.getMintInfo(connection, transferMint)];
            case 3:
                mint = _f.sent();
                return [4 /*yield*/, exports.getCreatorTokenAccount(walletKey, connection, mint.key, 0)];
            case 4:
                source = _f.sent();
                // distributor is about to be closed anyway so this is redundant but...
                instructions.push(safe_token_1.Token.createRevokeInstruction(constants_1.TOKEN_PROGRAM_ID, source, walletKey, []));
                _f.label = 5;
            case 5:
                if (!(claimMethod === 'candy')) return [3 /*break*/, 8];
                return [4 /*yield*/, exports.getCandyConfig(connection, candyConfig)];
            case 6:
                configKey = _f.sent();
                return [4 /*yield*/, accounts_1.getCandyMachineAddress(configKey, candyUuid)];
            case 7:
                _c = __read.apply(void 0, [_f.sent(), 1]), candyMachineKey = _c[0];
                extraKeys = [
                    { pubkey: candyMachineKey, isSigner: false, isWritable: true },
                    { pubkey: constants_1.CANDY_MACHINE_PROGRAM_ID, isSigner: false, isWritable: false },
                ];
                return [3 /*break*/, 9];
            case 8:
                extraKeys = [];
                _f.label = 9;
            case 9:
                if (!(claimMethod === 'edition')) return [3 /*break*/, 12];
                masterMintKey = void 0;
                try {
                    masterMintKey = new web3_js_1.PublicKey(masterMint);
                }
                catch (err) {
                    throw new Error("Invalid mint key " + err);
                }
                return [4 /*yield*/, web3_js_1.PublicKey.findProgramAddress([
                        distributorKey.toBuffer(),
                        constants_1.TOKEN_PROGRAM_ID.toBuffer(),
                        masterMintKey.toBuffer(),
                    ], constants_1.SPL_ASSOCIATED_TOKEN_ACCOUNT_PROGRAM_ID)];
            case 10:
                _d = __read.apply(void 0, [_f.sent(), 1]), distributorTokenKey = _d[0];
                return [4 /*yield*/, web3_js_1.PublicKey.findProgramAddress([
                        walletKey.toBuffer(),
                        constants_1.TOKEN_PROGRAM_ID.toBuffer(),
                        masterMintKey.toBuffer(),
                    ], constants_1.SPL_ASSOCIATED_TOKEN_ACCOUNT_PROGRAM_ID)];
            case 11:
                _e = __read.apply(void 0, [_f.sent(), 1]), walletTokenKey = _e[0];
                instructions.push(new web3_js_1.TransactionInstruction({
                    programId: constants_1.GUMDROP_DISTRIBUTOR_ID,
                    keys: [
                        { pubkey: base.publicKey, isSigner: true, isWritable: false },
                        { pubkey: distributorKey, isSigner: false, isWritable: false },
                        { pubkey: distributorTokenKey, isSigner: false, isWritable: true },
                        { pubkey: walletTokenKey, isSigner: false, isWritable: true },
                        { pubkey: walletKey, isSigner: false, isWritable: true },
                        {
                            pubkey: web3_js_1.SystemProgram.programId,
                            isSigner: false,
                            isWritable: false,
                        },
                        { pubkey: constants_1.TOKEN_PROGRAM_ID, isSigner: false, isWritable: false },
                    ],
                    data: Buffer.from(__spreadArray(__spreadArray([], __read(Buffer.from(js_sha256_1.sha256.digest('global:close_distributor_token_account')).slice(0, 8))), __read(new bn_js_1.default(dbump).toArray('le', 1)))),
                }));
                _f.label = 12;
            case 12:
                instructions.push(new web3_js_1.TransactionInstruction({
                    programId: constants_1.GUMDROP_DISTRIBUTOR_ID,
                    keys: __spreadArray([
                        { pubkey: base.publicKey, isSigner: true, isWritable: false },
                        { pubkey: distributorKey, isSigner: false, isWritable: true },
                        { pubkey: distributorWalletKey, isSigner: false, isWritable: true },
                        { pubkey: walletKey, isSigner: true, isWritable: true },
                        { pubkey: web3_js_1.SystemProgram.programId, isSigner: false, isWritable: false },
                        { pubkey: constants_1.TOKEN_PROGRAM_ID, isSigner: false, isWritable: false }
                    ], __read(extraKeys)),
                    data: Buffer.from(__spreadArray(__spreadArray(__spreadArray([], __read(Buffer.from(js_sha256_1.sha256.digest('global:close_distributor')).slice(0, 8))), __read(new bn_js_1.default(dbump).toArray('le', 1))), __read(new bn_js_1.default(wbump).toArray('le', 1)))),
                }));
                return [2 /*return*/, instructions];
        }
    });
}); };
exports.closeGumdrop = closeGumdrop;
