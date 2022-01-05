#!/usr/bin/env ts-node
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
var fs = __importStar(require("fs"));
var path = __importStar(require("path"));
var commander_1 = require("commander");
var anchor = __importStar(require("@project-serum/anchor"));
var node_fetch_1 = __importDefault(require("node-fetch"));
var various_1 = require("./helpers/various");
var safe_token_1 = require("@safecoin/safe-token");
var web3_js_1 = require("@safecoin/web3.js");
var constants_1 = require("./helpers/constants");
var accounts_1 = require("./helpers/accounts");
var upload_1 = require("./commands/upload");
var verifyTokenMetadata_1 = require("./commands/verifyTokenMetadata");
var generateConfigurations_1 = require("./commands/generateConfigurations");
var cache_1 = require("./helpers/cache");
var mint_1 = require("./commands/mint");
var sign_1 = require("./commands/sign");
var signAll_1 = require("./commands/signAll");
var loglevel_1 = __importDefault(require("loglevel"));
var metadata_1 = require("./helpers/metadata");
var createArt_1 = require("./commands/createArt");
var withdraw_1 = require("./commands/withdraw");
var updateFromCache_1 = require("./commands/updateFromCache");
commander_1.program.version('0.0.2');
if (!fs.existsSync(constants_1.CACHE_PATH)) {
    fs.mkdirSync(constants_1.CACHE_PATH);
}
loglevel_1.default.setLevel(loglevel_1.default.levels.INFO);
programCommand('upload')
    .argument('<directory>', 'Directory containing images named from 0-n', function (val) {
    return fs.readdirSync("" + val).map(function (file) { return path.join(val, file); });
})
    .option('-n, --number <number>', 'Number of images to upload')
    .option('-b, --batchSize <number>', 'Batch size - defaults to 1000')
    .option('-s, --storage <string>', 'Database to use for storage (arweave, ipfs, aws)', 'arweave')
    .option('--ipfs-infura-project-id <string>', 'Infura IPFS project id (required if using IPFS)')
    .option('--ipfs-infura-secret <string>', 'Infura IPFS scret key (required if using IPFS)')
    .option('--aws-s3-bucket <string>', '(existing) AWS S3 Bucket name (required if using aws)')
    .option('--no-retain-authority', 'Do not retain authority to update metadata')
    .option('--no-mutable', 'Metadata will not be editable')
    .option('-r, --rpc-url <string>', 'custom rpc url since this is a heavy command')
    .action(function (files, options, cmd) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, number, keypair, env, cacheName, storage, ipfsInfuraProjectId, ipfsInfuraSecret, awsS3Bucket, retainAuthority, mutable, rpcUrl, batchSize, ipfsCredentials, pngFileCount, jsonFileCount, parsedNumber, elemCount, startMs, warn, successful, endMs, timeTaken;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _a = cmd.opts(), number = _a.number, keypair = _a.keypair, env = _a.env, cacheName = _a.cacheName, storage = _a.storage, ipfsInfuraProjectId = _a.ipfsInfuraProjectId, ipfsInfuraSecret = _a.ipfsInfuraSecret, awsS3Bucket = _a.awsS3Bucket, retainAuthority = _a.retainAuthority, mutable = _a.mutable, rpcUrl = _a.rpcUrl, batchSize = _a.batchSize;
                if (storage === 'ipfs' && (!ipfsInfuraProjectId || !ipfsInfuraSecret)) {
                    throw new Error('IPFS selected as storage option but Infura project id or secret key were not provided.');
                }
                if (storage === 'aws' && !awsS3Bucket) {
                    throw new Error('aws selected as storage option but existing bucket name (--aws-s3-bucket) not provided.');
                }
                if (!(storage === 'arweave' || storage === 'ipfs' || storage === 'aws')) {
                    throw new Error("Storage option must either be 'arweave', 'ipfs', or 'aws'.");
                }
                ipfsCredentials = {
                    projectId: ipfsInfuraProjectId,
                    secretKey: ipfsInfuraSecret,
                };
                pngFileCount = files.filter(function (it) {
                    return it.endsWith(constants_1.EXTENSION_PNG);
                }).length;
                jsonFileCount = files.filter(function (it) {
                    return it.endsWith(constants_1.EXTENSION_JSON);
                }).length;
                parsedNumber = parseInt(number);
                elemCount = parsedNumber ? parsedNumber : pngFileCount;
                if (pngFileCount !== jsonFileCount) {
                    throw new Error("number of png files (" + pngFileCount + ") is different than the number of json files (" + jsonFileCount + ")");
                }
                if (elemCount < pngFileCount) {
                    throw new Error("max number (" + elemCount + ")cannot be smaller than the number of elements in the source folder (" + pngFileCount + ")");
                }
                loglevel_1.default.info("Beginning the upload for " + elemCount + " (png+json) pairs");
                startMs = Date.now();
                loglevel_1.default.info('started at: ' + startMs.toString());
                warn = false;
                _b.label = 1;
            case 1: return [4 /*yield*/, upload_1.upload(files, cacheName, env, keypair, elemCount, storage, retainAuthority, mutable, rpcUrl, ipfsCredentials, awsS3Bucket, batchSize)];
            case 2:
                successful = _b.sent();
                if (successful) {
                    warn = false;
                    return [3 /*break*/, 4];
                }
                else {
                    warn = true;
                    loglevel_1.default.warn('upload was not successful, rerunning');
                }
                _b.label = 3;
            case 3: return [3 /*break*/, 1];
            case 4:
                endMs = Date.now();
                timeTaken = new Date(endMs - startMs).toISOString().substr(11, 8);
                loglevel_1.default.info("ended at: " + new Date(endMs).toISOString() + ". time taken: " + timeTaken);
                if (warn) {
                    loglevel_1.default.info('not all images have been uploaded, rerun this step.');
                }
                return [2 /*return*/];
        }
    });
}); });
programCommand('withdraw')
    .option('-d ,--dry', 'Show Candy Machine withdraw amount without withdrawing.')
    .option('-ch, --charity <string>', 'Which charity?', '')
    .option('-cp, --charityPercent <string>', 'Which percent to charity?', '0')
    .option('-r, --rpc-url <string>', 'custom rpc url since this is a heavy command')
    .action(function (directory, cmd) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, keypair, env, dry, charity, charityPercent, rpcUrl, walletKeyPair, anchorProgram, configOrCommitment, configs, t, cg, totalValue, cpf, charityPub, donation, errors, configs_1, configs_1_1, cg, tx, e_1, e_2_1, successCount, richness;
    var e_2, _b;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                _a = cmd.opts(), keypair = _a.keypair, env = _a.env, dry = _a.dry, charity = _a.charity, charityPercent = _a.charityPercent, rpcUrl = _a.rpcUrl;
                if (charityPercent < 0 || charityPercent > 100) {
                    loglevel_1.default.error('Charity percentage needs to be between 0 and 100');
                    return [2 /*return*/];
                }
                walletKeyPair = accounts_1.loadWalletKey(keypair);
                return [4 /*yield*/, accounts_1.loadCandyProgram(walletKeyPair, env, rpcUrl)];
            case 1:
                anchorProgram = _c.sent();
                configOrCommitment = {
                    commitment: 'confirmed',
                    filters: [
                        {
                            memcmp: {
                                offset: 8,
                                bytes: walletKeyPair.publicKey.toBase58(),
                            },
                        },
                    ],
                };
                return [4 /*yield*/, accounts_1.getProgramAccounts(anchorProgram.provider.connection, constants_1.CANDY_MACHINE_PROGRAM_ID.toBase58(), configOrCommitment)];
            case 2:
                configs = _c.sent();
                t = 0;
                for (cg in configs) {
                    t += configs[cg].account.lamports;
                }
                totalValue = t / web3_js_1.LAMPORTS_PER_SOL;
                cpf = parseFloat(charityPercent);
                loglevel_1.default.info("Total Number of Candy Machine Config Accounts to drain " + configs.length);
                loglevel_1.default.info(totalValue + " SOL locked up in configs");
                if (!!charity && charityPercent > 0) {
                    donation = totalValue * (100 / charityPercent);
                    charityPub = new web3_js_1.PublicKey(charity);
                    loglevel_1.default.info("Of that " + totalValue + " SOL, " + donation + " will be donated to " + charity + ". Thank you!");
                }
                if (!!dry) return [3 /*break*/, 14];
                errors = [];
                loglevel_1.default.info('WARNING: This command will drain ALL of the Candy Machine config accounts that are owned by your current KeyPair, this will break your Candy Machine if its still in use');
                _c.label = 3;
            case 3:
                _c.trys.push([3, 11, 12, 13]);
                configs_1 = __values(configs), configs_1_1 = configs_1.next();
                _c.label = 4;
            case 4:
                if (!!configs_1_1.done) return [3 /*break*/, 10];
                cg = configs_1_1.value;
                _c.label = 5;
            case 5:
                _c.trys.push([5, 8, , 9]);
                if (!(cg.account.lamports > 0)) return [3 /*break*/, 7];
                return [4 /*yield*/, withdraw_1.withdraw(anchorProgram, walletKeyPair, env, new web3_js_1.PublicKey(cg.pubkey), cg.account.lamports, charityPub, cpf)];
            case 6:
                tx = _c.sent();
                loglevel_1.default.info(cg.pubkey + " has been withdrawn. \nTransaction Signarure: " + tx);
                _c.label = 7;
            case 7: return [3 /*break*/, 9];
            case 8:
                e_1 = _c.sent();
                loglevel_1.default.error("Withdraw has failed for config account " + cg.pubkey + " Error: " + e_1.message);
                errors.push(e_1);
                return [3 /*break*/, 9];
            case 9:
                configs_1_1 = configs_1.next();
                return [3 /*break*/, 4];
            case 10: return [3 /*break*/, 13];
            case 11:
                e_2_1 = _c.sent();
                e_2 = { error: e_2_1 };
                return [3 /*break*/, 13];
            case 12:
                try {
                    if (configs_1_1 && !configs_1_1.done && (_b = configs_1.return)) _b.call(configs_1);
                }
                finally { if (e_2) throw e_2.error; }
                return [7 /*endfinally*/];
            case 13:
                successCount = configs.length - errors.length;
                richness = successCount === configs.length ? 'rich again' : 'kinda rich';
                loglevel_1.default.info("Congratulations, " + successCount + " config accounts have been successfully drained.");
                loglevel_1.default.info("Now you " + richness + ", please consider supporting Open Source developers.");
                _c.label = 14;
            case 14: return [2 /*return*/];
        }
    });
}); });
programCommand('verify_token_metadata')
    .argument('<directory>', 'Directory containing images and metadata files named from 0-n', function (val) {
    return fs
        .readdirSync("" + val)
        .map(function (file) { return path.join(process.cwd(), val, file); });
})
    .option('-n, --number <number>', 'Number of images to upload')
    .action(function (files, options, cmd) {
    var number = cmd.opts().number;
    var startMs = Date.now();
    loglevel_1.default.info('started at: ' + startMs.toString());
    verifyTokenMetadata_1.verifyTokenMetadata({ files: files, uploadElementsCount: number });
    var endMs = Date.now();
    var timeTaken = new Date(endMs - startMs).toISOString().substr(11, 8);
    loglevel_1.default.info("ended at: " + new Date(endMs).toString() + ". time taken: " + timeTaken);
});
programCommand('verify')
    .option('-r, --rpc-url <string>', 'custom rpc url since this is a heavy command')
    .action(function (directory, cmd) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, env, keypair, rpcUrl, cacheName, cacheContent, walletKeyPair, anchorProgram, configAddress, config, allGood, keys, configData, lineCount;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _a = cmd.opts(), env = _a.env, keypair = _a.keypair, rpcUrl = _a.rpcUrl, cacheName = _a.cacheName;
                cacheContent = cache_1.loadCache(cacheName, env);
                walletKeyPair = accounts_1.loadWalletKey(keypair);
                return [4 /*yield*/, accounts_1.loadCandyProgram(walletKeyPair, env, rpcUrl)];
            case 1:
                anchorProgram = _b.sent();
                configAddress = new web3_js_1.PublicKey(cacheContent.program.config);
                return [4 /*yield*/, anchorProgram.provider.connection.getAccountInfo(configAddress)];
            case 2:
                config = _b.sent();
                allGood = true;
                keys = Object.keys(cacheContent.items);
                return [4 /*yield*/, Promise.all(various_1.chunks(Array.from(Array(keys.length).keys()), 500).map(function (allIndexesInSlice) { return __awaiter(void 0, void 0, void 0, function () {
                        var i, key, thisSlice, name_1, uri, cacheItem, json, e_3, body, parsed, check, e_4, text;
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0:
                                    i = 0;
                                    _a.label = 1;
                                case 1:
                                    if (!(i < allIndexesInSlice.length)) return [3 /*break*/, 19];
                                    key = keys[allIndexesInSlice[i]];
                                    loglevel_1.default.debug('Looking at key ', allIndexesInSlice[i]);
                                    thisSlice = config.data.slice(constants_1.CONFIG_ARRAY_START + 4 + constants_1.CONFIG_LINE_SIZE * allIndexesInSlice[i], constants_1.CONFIG_ARRAY_START +
                                        4 +
                                        constants_1.CONFIG_LINE_SIZE * (allIndexesInSlice[i] + 1));
                                    name_1 = various_1.fromUTF8Array(__spreadArray([], __read(thisSlice.slice(4, 36))));
                                    uri = various_1.fromUTF8Array(__spreadArray([], __read(thisSlice.slice(40, 240))));
                                    cacheItem = cacheContent.items[key];
                                    if (!(!name_1.match(cacheItem.name) || !uri.match(cacheItem.link))) return [3 /*break*/, 2];
                                    //leaving here for debugging reasons, but it's pretty useless. if the first upload fails - all others are wrong
                                    // log.info(
                                    //   `Name (${name}) or uri (${uri}) didnt match cache values of (${cacheItem.name})` +
                                    //   `and (${cacheItem.link}). marking to rerun for image`,
                                    //   key,
                                    // );
                                    cacheItem.onChain = false;
                                    allGood = false;
                                    return [3 /*break*/, 18];
                                case 2:
                                    json = void 0;
                                    _a.label = 3;
                                case 3:
                                    _a.trys.push([3, 5, , 6]);
                                    return [4 /*yield*/, node_fetch_1.default(cacheItem.link)];
                                case 4:
                                    json = _a.sent();
                                    return [3 /*break*/, 6];
                                case 5:
                                    e_3 = _a.sent();
                                    json = { status: 404 };
                                    return [3 /*break*/, 6];
                                case 6:
                                    if (!(json.status == 200 ||
                                        json.status == 204 ||
                                        json.status == 202)) return [3 /*break*/, 17];
                                    return [4 /*yield*/, json.text()];
                                case 7:
                                    body = _a.sent();
                                    parsed = JSON.parse(body);
                                    if (!parsed.image) return [3 /*break*/, 15];
                                    check = void 0;
                                    _a.label = 8;
                                case 8:
                                    _a.trys.push([8, 10, , 11]);
                                    return [4 /*yield*/, node_fetch_1.default(parsed.image)];
                                case 9:
                                    check = _a.sent();
                                    return [3 /*break*/, 11];
                                case 10:
                                    e_4 = _a.sent();
                                    check = { status: 404 };
                                    return [3 /*break*/, 11];
                                case 11:
                                    if (!(check.status == 200 ||
                                        check.status == 204 ||
                                        check.status == 202)) return [3 /*break*/, 13];
                                    return [4 /*yield*/, check.text()];
                                case 12:
                                    text = _a.sent();
                                    if (!text.match(/Not found/i)) {
                                        if (text.length == 0) {
                                            loglevel_1.default.info('Name', name_1, 'with', uri, 'has zero length, failing');
                                            cacheItem.link = null;
                                            cacheItem.onChain = false;
                                            allGood = false;
                                        }
                                        else {
                                            loglevel_1.default.info('Name', name_1, 'with', uri, 'checked out');
                                        }
                                    }
                                    else {
                                        loglevel_1.default.info('Name', name_1, 'with', uri, 'never got uploaded to arweave, failing');
                                        cacheItem.link = null;
                                        cacheItem.onChain = false;
                                        allGood = false;
                                    }
                                    return [3 /*break*/, 14];
                                case 13:
                                    loglevel_1.default.info('Name', name_1, 'with', uri, 'returned non-200 from uploader', check.status);
                                    cacheItem.link = null;
                                    cacheItem.onChain = false;
                                    allGood = false;
                                    _a.label = 14;
                                case 14: return [3 /*break*/, 16];
                                case 15:
                                    loglevel_1.default.info('Name', name_1, 'with', uri, 'lacked image in json, failing');
                                    cacheItem.link = null;
                                    cacheItem.onChain = false;
                                    allGood = false;
                                    _a.label = 16;
                                case 16: return [3 /*break*/, 18];
                                case 17:
                                    loglevel_1.default.info('Name', name_1, 'with', uri, 'returned no json from link');
                                    cacheItem.link = null;
                                    cacheItem.onChain = false;
                                    allGood = false;
                                    _a.label = 18;
                                case 18:
                                    i++;
                                    return [3 /*break*/, 1];
                                case 19: return [2 /*return*/];
                            }
                        });
                    }); }))];
            case 3:
                _b.sent();
                if (!allGood) {
                    cache_1.saveCache(cacheName, env, cacheContent);
                    throw new Error("not all NFTs checked out. check out logs above for details");
                }
                return [4 /*yield*/, anchorProgram.account.config.fetch(configAddress)];
            case 4:
                configData = (_b.sent());
                lineCount = new anchor.BN(config.data.slice(247, 247 + 4), undefined, 'le');
                loglevel_1.default.info("uploaded (" + lineCount.toNumber() + ") out of (" + configData.data.maxNumberOfLines + ")");
                if (configData.data.maxNumberOfLines > lineCount.toNumber()) {
                    throw new Error("predefined number of NFTs (" + configData.data.maxNumberOfLines + ") is smaller than the uploaded one (" + lineCount.toNumber() + ")");
                }
                else {
                    loglevel_1.default.info('ready to deploy!');
                }
                cache_1.saveCache(cacheName, env, cacheContent);
                return [2 /*return*/];
        }
    });
}); });
programCommand('verify_price')
    .option('-p, --price <string>')
    .option('--cache-path <string>')
    .option('-r, --rpc-url <string>', 'custom rpc url since this is a heavy command')
    .action(function (directory, cmd) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, keypair, env, price, cacheName, rpcUrl, cachePath, lamports, cacheContent, walletKeyPair, anchorProgram, candyAddress, machine, candyMachineLamports;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _a = cmd.opts(), keypair = _a.keypair, env = _a.env, price = _a.price, cacheName = _a.cacheName, rpcUrl = _a.rpcUrl, cachePath = _a.cachePath;
                lamports = various_1.parsePrice(price);
                if (isNaN(lamports)) {
                    return [2 /*return*/, loglevel_1.default.error("verify_price requires a --price to be set")];
                }
                loglevel_1.default.info("Expected price is: " + lamports);
                cacheContent = cache_1.loadCache(cacheName, env, cachePath);
                if (!cacheContent) {
                    return [2 /*return*/, loglevel_1.default.error("No cache found, can't continue. Make sure you are in the correct directory where the assets are located or use the --cache-path option.")];
                }
                walletKeyPair = accounts_1.loadWalletKey(keypair);
                return [4 /*yield*/, accounts_1.loadCandyProgram(walletKeyPair, env, rpcUrl)];
            case 1:
                anchorProgram = _b.sent();
                candyAddress = new web3_js_1.PublicKey(cacheContent.candyMachineAddress);
                return [4 /*yield*/, anchorProgram.account.candyMachine.fetch(candyAddress)];
            case 2:
                machine = _b.sent();
                candyMachineLamports = machine.data.price.toNumber();
                loglevel_1.default.info("Candymachine price is: " + candyMachineLamports);
                if (lamports != candyMachineLamports) {
                    throw new Error("Expected price and CandyMachine's price do not match!");
                }
                loglevel_1.default.info("Good to go!");
                return [2 /*return*/];
        }
    });
}); });
programCommand('show')
    .option('--cache-path <string>')
    .option('-r, --rpc-url <string>', 'custom rpc url since this is a heavy command')
    .action(function (directory, cmd) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, keypair, env, cacheName, rpcUrl, cachePath, cacheContent, walletKeyPair, anchorProgram, _b, candyMachine, machine, e_5, config;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                _a = cmd.opts(), keypair = _a.keypair, env = _a.env, cacheName = _a.cacheName, rpcUrl = _a.rpcUrl, cachePath = _a.cachePath;
                cacheContent = cache_1.loadCache(cacheName, env, cachePath);
                if (!cacheContent) {
                    return [2 /*return*/, loglevel_1.default.error("No cache found, can't continue. Make sure you are in the correct directory where the assets are located or use the --cache-path option.")];
                }
                walletKeyPair = accounts_1.loadWalletKey(keypair);
                return [4 /*yield*/, accounts_1.loadCandyProgram(walletKeyPair, env, rpcUrl)];
            case 1:
                anchorProgram = _c.sent();
                return [4 /*yield*/, accounts_1.getCandyMachineAddress(new web3_js_1.PublicKey(cacheContent.program.config), cacheContent.program.uuid)];
            case 2:
                _b = __read.apply(void 0, [_c.sent(), 1]), candyMachine = _b[0];
                _c.label = 3;
            case 3:
                _c.trys.push([3, 5, , 6]);
                return [4 /*yield*/, anchorProgram.account.candyMachine.fetch(candyMachine)];
            case 4:
                machine = _c.sent();
                loglevel_1.default.info('...Candy Machine...');
                loglevel_1.default.info('Key:', candyMachine.toBase58());
                //@ts-ignore
                loglevel_1.default.info('authority: ', machine.authority.toBase58());
                //@ts-ignore
                loglevel_1.default.info('wallet: ', machine.wallet.toBase58());
                //@ts-ignore
                loglevel_1.default.info('tokenMint: ', 
                //@ts-ignore
                machine.tokenMint ? machine.tokenMint.toBase58() : null);
                //@ts-ignore
                loglevel_1.default.info('config: ', machine.config.toBase58());
                //@ts-ignore
                loglevel_1.default.info('uuid: ', machine.data.uuid);
                //@ts-ignore
                loglevel_1.default.info('price: ', machine.data.price.toNumber());
                //@ts-ignore
                loglevel_1.default.info('itemsAvailable: ', machine.data.itemsAvailable.toNumber());
                //@ts-ignore
                loglevel_1.default.info('itemsRedeemed: ', machine.itemsRedeemed.toNumber());
                loglevel_1.default.info('goLiveDate: ', 
                //@ts-ignore
                machine.data.goLiveDate
                    ? //@ts-ignore
                        new Date(machine.data.goLiveDate * 1000)
                    : 'N/A');
                return [3 /*break*/, 6];
            case 5:
                e_5 = _c.sent();
                console.log('No machine found');
                return [3 /*break*/, 6];
            case 6: return [4 /*yield*/, anchorProgram.account.config.fetch(cacheContent.program.config)];
            case 7:
                config = _c.sent();
                loglevel_1.default.info('...Config...');
                //@ts-ignore
                loglevel_1.default.info('authority: ', config.authority.toBase58());
                //@ts-ignore
                loglevel_1.default.info('symbol: ', config.data.symbol);
                //@ts-ignore
                loglevel_1.default.info('sellerFeeBasisPoints: ', config.data.sellerFeeBasisPoints);
                //@ts-ignore
                loglevel_1.default.info('creators: ');
                //@ts-ignore
                config.data.creators.map(function (c) {
                    return loglevel_1.default.info(c.address.toBase58(), 'at', c.share, '%');
                }),
                    //@ts-ignore
                    loglevel_1.default.info('maxSupply: ', config.data.maxSupply.toNumber());
                //@ts-ignore
                loglevel_1.default.info('retainAuthority: ', config.data.retainAuthority);
                //@ts-ignore
                loglevel_1.default.info('isMutable: ', config.data.isMutable);
                //@ts-ignore
                loglevel_1.default.info('maxNumberOfLines: ', config.data.maxNumberOfLines);
                return [2 /*return*/];
        }
    });
}); });
programCommand('create_candy_machine')
    .option('-p, --price <string>', 'Price denominated in SOL or safe-token override', '1')
    .option('-t, --safe-token <string>', 'SPL token used to price NFT mint. To use SOL leave this empty.')
    .option('-a, --safe-token-account <string>', 'SPL token account that receives mint payments. Only required if safe-token is specified.')
    .option('-s, --sol-treasury-account <string>', 'SOL account that receives mint payments. Should have minimum 0.1 sol balance')
    .option('-r, --rpc-url <string>', 'custom rpc url since this is a heavy command')
    .action(function (directory, cmd) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, keypair, env, price, cacheName, splToken, splTokenAccount, solTreasuryAccount, rpcUrl, parsedPrice, cacheContent, walletKeyPair, anchorProgram, wallet, remainingAccounts, splTokenKey, splTokenAccountKey, token, mintInfo, tokenAccount, treasuryAccount, treasuryBalance, config, _b, candyMachine, bump;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                _a = cmd.opts(), keypair = _a.keypair, env = _a.env, price = _a.price, cacheName = _a.cacheName, splToken = _a.splToken, splTokenAccount = _a.splTokenAccount, solTreasuryAccount = _a.solTreasuryAccount, rpcUrl = _a.rpcUrl;
                parsedPrice = various_1.parsePrice(price);
                cacheContent = cache_1.loadCache(cacheName, env);
                walletKeyPair = accounts_1.loadWalletKey(keypair);
                return [4 /*yield*/, accounts_1.loadCandyProgram(walletKeyPair, env, rpcUrl)];
            case 1:
                anchorProgram = _c.sent();
                wallet = walletKeyPair.publicKey;
                remainingAccounts = [];
                if (!(splToken || splTokenAccount)) return [3 /*break*/, 4];
                if (solTreasuryAccount) {
                    throw new Error('If safe-token-account or safe-token is set then sol-treasury-account cannot be set');
                }
                if (!splToken) {
                    throw new Error('If safe-token-account is set, safe-token must also be set');
                }
                splTokenKey = new web3_js_1.PublicKey(splToken);
                splTokenAccountKey = new web3_js_1.PublicKey(splTokenAccount);
                if (!splTokenAccount) {
                    throw new Error('If safe-token is set, safe-token-account must also be set');
                }
                token = new safe_token_1.Token(anchorProgram.provider.connection, splTokenKey, safe_token_1.TOKEN_PROGRAM_ID, walletKeyPair);
                return [4 /*yield*/, token.getMintInfo()];
            case 2:
                mintInfo = _c.sent();
                if (!mintInfo.isInitialized) {
                    throw new Error("The specified safe-token is not initialized");
                }
                return [4 /*yield*/, token.getAccountInfo(splTokenAccountKey)];
            case 3:
                tokenAccount = _c.sent();
                if (!tokenAccount.isInitialized) {
                    throw new Error("The specified safe-token-account is not initialized");
                }
                if (!tokenAccount.mint.equals(splTokenKey)) {
                    throw new Error("The safe-token-account's mint (" + tokenAccount.mint.toString() + ") does not match specified safe-token " + splTokenKey.toString());
                }
                wallet = splTokenAccountKey;
                parsedPrice = various_1.parsePrice(price, Math.pow(10, mintInfo.decimals));
                remainingAccounts.push({
                    pubkey: splTokenKey,
                    isWritable: false,
                    isSigner: false,
                });
                _c.label = 4;
            case 4:
                if (!solTreasuryAccount) return [3 /*break*/, 6];
                treasuryAccount = new web3_js_1.PublicKey(solTreasuryAccount);
                return [4 /*yield*/, accounts_1.getBalance(treasuryAccount, env, rpcUrl)];
            case 5:
                treasuryBalance = _c.sent();
                if (treasuryBalance === 0) {
                    throw new Error("Cannot use treasury account with 0 balance!");
                }
                wallet = treasuryAccount;
                _c.label = 6;
            case 6:
                config = new web3_js_1.PublicKey(cacheContent.program.config);
                return [4 /*yield*/, accounts_1.getCandyMachineAddress(config, cacheContent.program.uuid)];
            case 7:
                _b = __read.apply(void 0, [_c.sent(), 2]), candyMachine = _b[0], bump = _b[1];
                return [4 /*yield*/, anchorProgram.rpc.initializeCandyMachine(bump, {
                        uuid: cacheContent.program.uuid,
                        price: new anchor.BN(parsedPrice),
                        itemsAvailable: new anchor.BN(Object.keys(cacheContent.items).length),
                        goLiveDate: null,
                    }, {
                        accounts: {
                            candyMachine: candyMachine,
                            wallet: wallet,
                            config: config,
                            authority: walletKeyPair.publicKey,
                            payer: walletKeyPair.publicKey,
                            systemProgram: anchor.web3.SystemProgram.programId,
                            rent: anchor.web3.SYSVAR_RENT_PUBKEY,
                        },
                        signers: [],
                        remainingAccounts: remainingAccounts,
                    })];
            case 8:
                _c.sent();
                cacheContent.candyMachineAddress = candyMachine.toBase58();
                cache_1.saveCache(cacheName, env, cacheContent);
                loglevel_1.default.info("create_candy_machine finished. candy machine pubkey: " + candyMachine.toBase58());
                return [2 /*return*/];
        }
    });
}); });
programCommand('update_candy_machine')
    .option('-d, --date <string>', 'timestamp - eg "04 Dec 1995 00:12:00 GMT" or "now"')
    .option('-p, --price <string>', 'SOL price')
    .option('-r, --rpc-url <string>', 'custom rpc url since this is a heavy command')
    .option('--new-authority <Pubkey>', 'New Authority. Base58-encoded')
    .action(function (directory, cmd) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, keypair, env, date, rpcUrl, price, newAuthority, cacheName, cacheContent, secondsSinceEpoch, lamports, newAuthorityKey, walletKeyPair, anchorProgram, candyMachine, tx, tx;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _a = cmd.opts(), keypair = _a.keypair, env = _a.env, date = _a.date, rpcUrl = _a.rpcUrl, price = _a.price, newAuthority = _a.newAuthority, cacheName = _a.cacheName;
                cacheContent = cache_1.loadCache(cacheName, env);
                secondsSinceEpoch = date ? various_1.parseDate(date) : null;
                lamports = price ? various_1.parsePrice(price) : null;
                newAuthorityKey = newAuthority ? new web3_js_1.PublicKey(newAuthority) : null;
                walletKeyPair = accounts_1.loadWalletKey(keypair);
                return [4 /*yield*/, accounts_1.loadCandyProgram(walletKeyPair, env, rpcUrl)];
            case 1:
                anchorProgram = _b.sent();
                candyMachine = new web3_js_1.PublicKey(cacheContent.candyMachineAddress);
                if (!(lamports || secondsSinceEpoch)) return [3 /*break*/, 3];
                return [4 /*yield*/, anchorProgram.rpc.updateCandyMachine(lamports ? new anchor.BN(lamports) : null, secondsSinceEpoch ? new anchor.BN(secondsSinceEpoch) : null, {
                        accounts: {
                            candyMachine: candyMachine,
                            authority: walletKeyPair.publicKey,
                        },
                    })];
            case 2:
                tx = _b.sent();
                cacheContent.startDate = secondsSinceEpoch;
                if (date)
                    loglevel_1.default.info(" - updated startDate timestamp: " + secondsSinceEpoch + " (" + date + ")");
                if (lamports)
                    loglevel_1.default.info(" - updated price: " + lamports + " lamports (" + price + " SOL)");
                loglevel_1.default.info('update_candy_machine finished', tx);
                _b.label = 3;
            case 3:
                if (!newAuthorityKey) return [3 /*break*/, 5];
                return [4 /*yield*/, anchorProgram.rpc.updateAuthority(newAuthorityKey, {
                        accounts: {
                            candyMachine: candyMachine,
                            authority: walletKeyPair.publicKey,
                        },
                    })];
            case 4:
                tx = _b.sent();
                cacheContent.authority = newAuthorityKey.toBase58();
                loglevel_1.default.info(" - updated authority: " + newAuthorityKey.toBase58());
                loglevel_1.default.info('update_authority finished', tx);
                _b.label = 5;
            case 5:
                cache_1.saveCache(cacheName, env, cacheContent);
                return [2 /*return*/];
        }
    });
}); });
programCommand('mint_one_token')
    .option('-r, --rpc-url <string>', 'custom rpc url since this is a heavy command')
    .action(function (directory, cmd) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, keypair, env, cacheName, rpcUrl, cacheContent, configAddress, tx;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _a = cmd.opts(), keypair = _a.keypair, env = _a.env, cacheName = _a.cacheName, rpcUrl = _a.rpcUrl;
                cacheContent = cache_1.loadCache(cacheName, env);
                configAddress = new web3_js_1.PublicKey(cacheContent.program.config);
                return [4 /*yield*/, mint_1.mint(keypair, env, configAddress, cacheContent.program.uuid, rpcUrl)];
            case 1:
                tx = _b.sent();
                loglevel_1.default.info('mint_one_token finished', tx);
                return [2 /*return*/];
        }
    });
}); });
programCommand('mint_multiple_tokens')
    .option('-n, --number <string>', 'Number of tokens')
    .option('-r, --rpc-url <string>', 'custom rpc url since this is a heavy command')
    .action(function (_, cmd) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, keypair, env, cacheName, number, rpcUrl, NUMBER_OF_NFTS_TO_MINT, cacheContent, configAddress, mintToken;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _a = cmd.opts(), keypair = _a.keypair, env = _a.env, cacheName = _a.cacheName, number = _a.number, rpcUrl = _a.rpcUrl;
                NUMBER_OF_NFTS_TO_MINT = parseInt(number, 10);
                cacheContent = cache_1.loadCache(cacheName, env);
                configAddress = new web3_js_1.PublicKey(cacheContent.program.config);
                loglevel_1.default.info("Minting " + NUMBER_OF_NFTS_TO_MINT + " tokens...");
                mintToken = function (index) { return __awaiter(void 0, void 0, void 0, function () {
                    var tx;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0: return [4 /*yield*/, mint_1.mint(keypair, env, configAddress, cacheContent.program.uuid, rpcUrl)];
                            case 1:
                                tx = _a.sent();
                                loglevel_1.default.info("transaction " + (index + 1) + " complete", tx);
                                if (!(index < NUMBER_OF_NFTS_TO_MINT - 1)) return [3 /*break*/, 3];
                                loglevel_1.default.info('minting another token...');
                                return [4 /*yield*/, mintToken(index + 1)];
                            case 2:
                                _a.sent();
                                _a.label = 3;
                            case 3: return [2 /*return*/];
                        }
                    });
                }); };
                return [4 /*yield*/, mintToken(0)];
            case 1:
                _b.sent();
                loglevel_1.default.info("minted " + NUMBER_OF_NFTS_TO_MINT + " tokens");
                loglevel_1.default.info('mint_multiple_tokens finished');
                return [2 /*return*/];
        }
    });
}); });
programCommand('sign')
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    .option('-m, --metadata <string>', 'base58 metadata account id')
    .option('-r, --rpc-url <string>', 'custom rpc url since this is a heavy command')
    .action(function (directory, cmd) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, keypair, env, rpcUrl, metadata;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _a = cmd.opts(), keypair = _a.keypair, env = _a.env, rpcUrl = _a.rpcUrl, metadata = _a.metadata;
                return [4 /*yield*/, sign_1.signMetadata(metadata, keypair, env, rpcUrl)];
            case 1:
                _b.sent();
                return [2 /*return*/];
        }
    });
}); });
programCommand('sign_all')
    .option('-b, --batch-size <string>', 'Batch size', '10')
    .option('-d, --daemon', 'Run signing continuously', false)
    .option('-r, --rpc-url <string>', 'custom rpc url since this is a heavy command')
    .action(function (directory, cmd) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, keypair, env, cacheName, rpcUrl, batchSize, daemon, cacheContent, walletKeyPair, anchorProgram, candyAddress, batchSizeParsed;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _a = cmd.opts(), keypair = _a.keypair, env = _a.env, cacheName = _a.cacheName, rpcUrl = _a.rpcUrl, batchSize = _a.batchSize, daemon = _a.daemon;
                cacheContent = cache_1.loadCache(cacheName, env);
                walletKeyPair = accounts_1.loadWalletKey(keypair);
                return [4 /*yield*/, accounts_1.loadCandyProgram(walletKeyPair, env, rpcUrl)];
            case 1:
                anchorProgram = _b.sent();
                candyAddress = cacheContent.candyMachineAddress;
                batchSizeParsed = parseInt(batchSize);
                if (!parseInt(batchSize)) {
                    throw new Error('Batch size needs to be an integer!');
                }
                loglevel_1.default.debug('Creator pubkey: ', walletKeyPair.publicKey.toBase58());
                loglevel_1.default.debug('Environment: ', env);
                loglevel_1.default.debug('Candy machine address: ', candyAddress);
                loglevel_1.default.debug('Batch Size: ', batchSizeParsed);
                return [4 /*yield*/, signAll_1.signAllMetadataFromCandyMachine(anchorProgram.provider.connection, walletKeyPair, candyAddress, batchSizeParsed, daemon)];
            case 2:
                _b.sent();
                return [2 /*return*/];
        }
    });
}); });
programCommand('update_existing_nfts_from_latest_cache_file')
    .option('-b, --batch-size <string>', 'Batch size', '2')
    .option('-nc, --new-cache <string>', 'Path to new updated cache file')
    .option('-d, --daemon', 'Run updating continuously', false)
    .option('-r, --rpc-url <string>', 'custom rpc url since this is a heavy command')
    .action(function (directory, cmd) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, keypair, env, cacheName, rpcUrl, batchSize, daemon, newCache, cacheContent, newCacheContent, walletKeyPair, anchorProgram, candyAddress, batchSizeParsed;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _a = cmd.opts(), keypair = _a.keypair, env = _a.env, cacheName = _a.cacheName, rpcUrl = _a.rpcUrl, batchSize = _a.batchSize, daemon = _a.daemon, newCache = _a.newCache;
                cacheContent = cache_1.loadCache(cacheName, env);
                newCacheContent = cache_1.loadCache(newCache, env);
                walletKeyPair = accounts_1.loadWalletKey(keypair);
                return [4 /*yield*/, accounts_1.loadCandyProgram(walletKeyPair, env, rpcUrl)];
            case 1:
                anchorProgram = _b.sent();
                candyAddress = cacheContent.candyMachineAddress;
                batchSizeParsed = parseInt(batchSize);
                if (!parseInt(batchSize)) {
                    throw new Error('Batch size needs to be an integer!');
                }
                loglevel_1.default.debug('Creator pubkey: ', walletKeyPair.publicKey.toBase58());
                loglevel_1.default.debug('Environment: ', env);
                loglevel_1.default.debug('Candy machine address: ', candyAddress);
                loglevel_1.default.debug('Batch Size: ', batchSizeParsed);
                return [4 /*yield*/, updateFromCache_1.updateFromCache(anchorProgram.provider.connection, walletKeyPair, candyAddress, batchSizeParsed, daemon, cacheContent, newCacheContent)];
            case 2:
                _b.sent();
                return [2 /*return*/];
        }
    });
}); });
// can then upload these
programCommand('randomize_unminted_nfts_in_new_cache_file').action(function (directory, cmd) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, keypair, env, cacheName, cacheContent, walletKeyPair, anchorProgram, candyAddress, candyMachine, itemsRedeemed, keys, shuffledKeys, newItems, i;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _a = cmd.opts(), keypair = _a.keypair, env = _a.env, cacheName = _a.cacheName;
                cacheContent = cache_1.loadCache(cacheName, env);
                walletKeyPair = accounts_1.loadWalletKey(keypair);
                return [4 /*yield*/, accounts_1.loadCandyProgram(walletKeyPair, env)];
            case 1:
                anchorProgram = _b.sent();
                candyAddress = cacheContent.candyMachineAddress;
                loglevel_1.default.debug('Creator pubkey: ', walletKeyPair.publicKey.toBase58());
                loglevel_1.default.debug('Environment: ', env);
                loglevel_1.default.debug('Candy machine address: ', candyAddress);
                return [4 /*yield*/, anchorProgram.account.candyMachine.fetch(candyAddress)];
            case 2:
                candyMachine = _b.sent();
                itemsRedeemed = candyMachine.itemsRedeemed;
                loglevel_1.default.info('Randomizing one later than', itemsRedeemed.toNumber());
                keys = Object.keys(cacheContent.items).filter(function (k) { return parseInt(k) > itemsRedeemed; });
                shuffledKeys = various_1.shuffle(keys.slice());
                newItems = {};
                for (i = 0; i < keys.length; i++) {
                    newItems[keys[i].toString()] =
                        cacheContent.items[shuffledKeys[i].toString()];
                    loglevel_1.default.debug('Setting ', keys[i], 'to ', shuffledKeys[i]);
                    newItems[keys[i].toString()].onChain = false;
                }
                fs.writeFileSync('.cache/' + env + '-' + cacheName + '-randomized', JSON.stringify(__assign(__assign({}, cacheContent), { items: __assign(__assign({}, cacheContent.items), newItems) })));
                return [2 /*return*/];
        }
    });
}); });
programCommand('get_all_mint_addresses').action(function (directory, cmd) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, env, cacheName, keypair, cacheContent, walletKeyPair, anchorProgram, accountsByCreatorAddress, addresses;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _a = cmd.opts(), env = _a.env, cacheName = _a.cacheName, keypair = _a.keypair;
                cacheContent = cache_1.loadCache(cacheName, env);
                walletKeyPair = accounts_1.loadWalletKey(keypair);
                return [4 /*yield*/, accounts_1.loadCandyProgram(walletKeyPair, env)];
            case 1:
                anchorProgram = _b.sent();
                return [4 /*yield*/, signAll_1.getAccountsByCreatorAddress(cacheContent.candyMachineAddress, anchorProgram.provider.connection)];
            case 2:
                accountsByCreatorAddress = _b.sent();
                addresses = accountsByCreatorAddress.map(function (it) {
                    return new web3_js_1.PublicKey(it[0].mint).toBase58();
                });
                console.log(JSON.stringify(addresses, null, 2));
                return [2 /*return*/];
        }
    });
}); });
programCommand('generate_art_configurations')
    .argument('<directory>', 'Directory containing traits named from 0-n', function (val) {
    return fs.readdirSync("" + val);
})
    .action(function (files) { return __awaiter(void 0, void 0, void 0, function () {
    var startMs, successful, endMs, timeTaken;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                loglevel_1.default.info('creating traits configuration file');
                startMs = Date.now();
                return [4 /*yield*/, generateConfigurations_1.generateConfigurations(files)];
            case 1:
                successful = _a.sent();
                endMs = Date.now();
                timeTaken = new Date(endMs - startMs).toISOString().substr(11, 8);
                if (successful) {
                    loglevel_1.default.info('traits-configuration.json has been created!');
                    loglevel_1.default.info("ended at: " + new Date(endMs).toISOString() + ". time taken: " + timeTaken);
                }
                else {
                    loglevel_1.default.info('The art configuration file was not created');
                }
                return [2 /*return*/];
        }
    });
}); });
programCommand('create_generative_art')
    .option('-n, --number-of-images <string>', 'Number of images to be generated', '100')
    .option('-c, --config-location <string>', 'Location of the traits configuration file', './traits-configuration.json')
    .option('-o, --output-location <string>', 'If you wish to do image generation elsewhere, skip it and dump randomized sets to file')
    .option('-ta, --treat-attributes-as-file-names <string>', 'If your attributes are filenames, trim the .png off if set to true')
    .action(function (directory, cmd) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, numberOfImages, configLocation, outputLocation, treatAttributesAsFileNames, randomSets;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _a = cmd.opts(), numberOfImages = _a.numberOfImages, configLocation = _a.configLocation, outputLocation = _a.outputLocation, treatAttributesAsFileNames = _a.treatAttributesAsFileNames;
                loglevel_1.default.info('Loaded configuration file');
                return [4 /*yield*/, metadata_1.createMetadataFiles(numberOfImages, configLocation, treatAttributesAsFileNames == 'true')];
            case 1:
                randomSets = _b.sent();
                loglevel_1.default.info('JSON files have been created within the assets directory');
                if (!!outputLocation) return [3 /*break*/, 3];
                return [4 /*yield*/, createArt_1.createGenerativeArt(configLocation, randomSets)];
            case 2:
                _b.sent();
                loglevel_1.default.info('Images have been created successfully!');
                return [3 /*break*/, 4];
            case 3:
                fs.writeFileSync(outputLocation, JSON.stringify(randomSets));
                loglevel_1.default.info('Traits written!');
                _b.label = 4;
            case 4: return [2 /*return*/];
        }
    });
}); });
function programCommand(name) {
    return commander_1.program
        .command(name)
        .option('-e, --env <string>', 'safecoin cluster env name', 'devnet')
        .option('-k, --keypair <path>', "safecoin wallet location", '--keypair not provided')
        .option('-l, --log-level <string>', 'log level', setLogLevel)
        .option('-c, --cache-name <string>', 'Cache file name', 'temp');
}
// eslint-disable-next-line @typescript-eslint/no-unused-vars
function setLogLevel(value, prev) {
    if (value === undefined || value === null) {
        return;
    }
    loglevel_1.default.info('setting the log value to: ' + value);
    loglevel_1.default.setLevel(value);
}
commander_1.program.parse(process.argv);
