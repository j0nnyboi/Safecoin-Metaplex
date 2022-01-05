#!/usr/bin/env ts-node
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
var fs = __importStar(require("fs"));
var path = __importStar(require("path"));
var commander_1 = require("commander");
var loglevel_1 = __importDefault(require("loglevel"));
var client_sesv2_1 = require("@aws-sdk/client-sesv2");
var anchor = __importStar(require("@project-serum/anchor"));
var discord = __importStar(require("discord.js"));
var web3_js_1 = require("@safecoin/web3.js");
var bn_js_1 = __importDefault(require("bn.js"));
var crypto = __importStar(require("crypto"));
var claimant_1 = require("./helpers/gumdrop/claimant");
var communication_1 = require("./helpers/gumdrop/communication");
var constants_1 = require("./helpers/constants");
var transactions_1 = require("./helpers/transactions");
commander_1.program.version('0.0.1');
var LOG_PATH = './.log';
if (!fs.existsSync(LOG_PATH)) {
    fs.mkdirSync(LOG_PATH);
}
loglevel_1.default.setLevel(loglevel_1.default.levels.INFO);
programCommand('create')
    .option('--claim-integration <method>', 'Backend for claims. Either `transfer` for token-transfers through approve-delegate, `candy` for minting through a candy-machine, or `edition` for minting through a master edition')
    .option('--transfer-mint <mint>', 'transfer: public key of mint')
    .option('--candy-config <config>', 'candy: public key of the candy machine config')
    .option('--candy-uuid <uuid>', 'candy: uuid used to construct the candy machine')
    .option('--edition-mint <mint>', 'edition: mint of the master edition')
    .option('--distribution-method <method>', 
// TODO: more explanation
'Off-chain distribution of claims. Either `aws-email`, `aws-sms`, `discord`, `manual`, or `wallets`')
    .option('--aws-ses-access-key-id <string>', 'Access Key Id')
    .option('--aws-ses-secret-access-key <string>', 'Secret Access Key')
    .option('--discord-token <string>', 'Discord bot token')
    .option('--discord-guild <string>', 'Discord guild with members')
    .option('--otp-auth <auth>', 'Off-chain OTP from claim. Either `default` for AWS OTP endpoint or `none` to skip OTP')
    .option('--distribution-list <path>', 'List of users to build gumdrop from.')
    .option('--resend-only', 'Distribute list with off-chain method only. Assumes a validator and urls already exist')
    .option('--host <string>', 'Website to claim gumdrop', 'https://lwus.github.io/gumdrop')
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    .action(function (options, cmd) { return __awaiter(void 0, void 0, void 0, function () {
    var wallet, connection, getTemporalSigner, temporalSigner, claimantsStr, claimants, dropInfo, distribute, responses_1, respPath_1, claimInfo, _a, base, extraParams, instructions, basePath, urlPath, createResult, responses, respPath;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                loglevel_1.default.info("Parsed options:", options);
                wallet = loadWalletKey(options.keypair);
                connection = new anchor.web3.Connection(
                //@ts-ignore
                options.rpcUrl || anchor.web3.clusterApiUrl(options.env));
                getTemporalSigner = function (auth) {
                    switch (auth) {
                        case 'default':
                            return constants_1.GUMDROP_TEMPORAL_SIGNER;
                        case 'none':
                            return web3_js_1.PublicKey.default;
                        default:
                            throw new Error("Unknown OTP authorization type " + auth);
                    }
                };
                if (!options.host) {
                    throw new Error('No host website specified');
                }
                switch (options.distributionMethod) {
                    case 'wallets':
                        temporalSigner = constants_1.GUMDROP_DISTRIBUTOR_ID;
                        break;
                    case 'manual':
                    case 'aws-email':
                    case 'aws-sms':
                    case 'discord':
                        temporalSigner = getTemporalSigner(options.otpAuth);
                        break;
                    default:
                        throw new Error("Distribution method must either be 'aws-email', 'aws-sms', 'discord', 'manual', or 'wallets'.");
                }
                console.log("temporal signer: " + temporalSigner.toBase58());
                try {
                    claimantsStr = fs.readFileSync(options.distributionList).toString();
                }
                catch (err) {
                    throw new Error("Could not read distribution list " + err);
                }
                claimants = claimant_1.parseClaimants(claimantsStr, options.distributionList, options.distributionMethod);
                if (claimants.length === 0) {
                    throw new Error("No claimants provided");
                }
                dropInfo = claimant_1.dropInfoFor(options.env, options.claimIntegration, options.transferMint, options.candyConfig, options.editionMint);
                distribute = function (claimants) {
                    switch (options.distributionMethod) {
                        case 'wallets':
                            return communication_1.distributeWallet({}, '', claimants, dropInfo);
                        case 'manual':
                            return communication_1.distributeManual({}, '', claimants, dropInfo);
                        case 'aws-email':
                            return communication_1.distributeAwsSes({
                                accessKeyId: options.awsSesAccessKeyId,
                                secretAccessKey: options.awsSesSecretAccessKey,
                            }, 'santa@aws.metaplex.com', claimants, dropInfo);
                        case 'aws-sms':
                            return communication_1.distributeAwsSns({
                                accessKeyId: options.awsSesAccessKeyId,
                                secretAccessKey: options.awsSesSecretAccessKey,
                            }, '', claimants, dropInfo);
                        case 'discord':
                            return distributeDiscord({
                                botToken: options.discordToken,
                                guild: options.discordGuild,
                            }, '', claimants, dropInfo);
                    }
                };
                return [4 /*yield*/, distribute([])];
            case 1:
                _b.sent(); // check that auth is correct...
                if (!options.resendOnly) return [3 /*break*/, 3];
                if (claimants.some(function (c) { return typeof c.url !== 'string'; })) {
                    throw new Error("Specified resend only but not all claimants have a 'url'");
                }
                return [4 /*yield*/, distribute(claimants)];
            case 2:
                responses_1 = _b.sent();
                respPath_1 = logPath(options.env, "resp-" + web3_js_1.Keypair.generate().publicKey.toBase58() + ".json");
                console.log("writing responses to " + respPath_1);
                fs.writeFileSync(respPath_1, JSON.stringify(responses_1));
                return [2 /*return*/];
            case 3:
                _a = options.claimIntegration;
                switch (_a) {
                    case 'transfer': return [3 /*break*/, 4];
                    case 'candy': return [3 /*break*/, 6];
                    case 'edition': return [3 /*break*/, 8];
                }
                return [3 /*break*/, 10];
            case 4: return [4 /*yield*/, claimant_1.validateTransferClaims(connection, wallet.publicKey, claimants, options.transferMint)];
            case 5:
                claimInfo = _b.sent();
                return [3 /*break*/, 11];
            case 6: return [4 /*yield*/, claimant_1.validateCandyClaims(connection, wallet.publicKey, claimants, options.candyConfig, options.candyUuid)];
            case 7:
                claimInfo = _b.sent();
                return [3 /*break*/, 11];
            case 8: return [4 /*yield*/, claimant_1.validateEditionClaims(connection, wallet.publicKey, claimants, options.editionMint)];
            case 9:
                claimInfo = _b.sent();
                return [3 /*break*/, 11];
            case 10: throw new Error("Claim integration must either be 'transfer', 'candy', or 'edition'.");
            case 11:
                claimants.forEach(function (c) {
                    c.pin = new bn_js_1.default(randomBytes());
                    c.seed =
                        options.claimIntegration === 'transfer'
                            ? claimInfo.mint.key
                            : options.claimIntegration === 'candy'
                                ? claimInfo.config
                                : /* === edition */ claimInfo.masterMint.key;
                });
                base = web3_js_1.Keypair.generate();
                extraParams = [];
                if (options.distributionMethod === 'discord') {
                    extraParams.push("guild=" + options.discordGuild);
                }
                return [4 /*yield*/, claimant_1.buildGumdrop(connection, wallet.publicKey, options.distributionMethod !== 'wallets', options.claimIntegration, options.host, base.publicKey, temporalSigner, claimants, claimInfo, extraParams)];
            case 12:
                instructions = _b.sent();
                basePath = logPath(options.env, base.publicKey.toBase58() + ".json");
                console.log("writing base to " + basePath);
                fs.writeFileSync(basePath, JSON.stringify(__spreadArray([], __read(base.secretKey))));
                urlPath = logPath(options.env, "urls-" + base.publicKey.toBase58() + ".json");
                console.log("writing claims to " + urlPath);
                fs.writeFileSync(urlPath, JSON.stringify(communication_1.urlAndHandleFor(claimants)));
                return [4 /*yield*/, sendTransactionWithRetry(connection, wallet, instructions, [base])];
            case 13:
                createResult = _b.sent();
                console.log(createResult);
                if (typeof createResult === 'string') {
                    throw new Error(createResult);
                }
                else {
                    console.log('gumdrop creation succeeded', "https://explorer.safecoin.com/tx/" + createResult.txid + "?cluster=" + options.env);
                }
                console.log('distributing claim URLs');
                return [4 /*yield*/, distribute(claimants)];
            case 14:
                responses = _b.sent();
                respPath = logPath(options.env, "resp-" + base.publicKey.toBase58() + ".json");
                console.log("writing responses to " + respPath);
                fs.writeFileSync(respPath, JSON.stringify(responses));
                return [2 /*return*/];
        }
    });
}); });
programCommand('close')
    .option('--claim-integration <method>', 'Backend for claims. Either `transfer` for token-transfers through approve-delegate, `candy` for minting through a candy-machine, or `edition` for minting through a master edition')
    .option('--transfer-mint <mint>', 'transfer: public key of mint')
    .option('--candy-config <config>', 'candy: public key of the candy machine config')
    .option('--candy-uuid <uuid>', 'candy: uuid used to construct the candy machine')
    .option('--edition-mint <mint>', 'edition: mint of the master edition')
    .option('--base <path>', 'gumdrop authority generated on create')
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    .action(function (options, cmd) { return __awaiter(void 0, void 0, void 0, function () {
    var wallet, base, connection, instructions, closeResult;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                loglevel_1.default.info("Parsed options:", options);
                wallet = loadWalletKey(options.keypair);
                base = loadWalletKey(options.base);
                connection = new anchor.web3.Connection(
                //@ts-ignore
                options.rpcUrl || anchor.web3.clusterApiUrl(options.env));
                switch (options.claimIntegration) {
                    case 'transfer': {
                        if (!options.transferMint) {
                            throw new Error("No transfer-mint provided. Used to check we're not accidentally losing ownership of other accounts");
                        }
                        break;
                    }
                    case 'candy': {
                        if (!options.candyConfig || !options.candyUuid) {
                            throw new Error('No candy-config or candy-uuid provided. Needed to transfer back candy-machine authority');
                        }
                        break;
                    }
                    case 'edition': {
                        if (!options.editionMint) {
                            throw new Error('No master-mint provided. Needed to transfer back master');
                        }
                        break;
                    }
                    default:
                        throw new Error("Claim integration must either be 'transfer', 'candy', or 'edition'.");
                }
                return [4 /*yield*/, claimant_1.closeGumdrop(connection, wallet.publicKey, base, options.claimIntegration, options.transferMint, options.candyConfig, options.candyUuid, options.editionMint)];
            case 1:
                instructions = _a.sent();
                return [4 /*yield*/, sendTransactionWithRetry(connection, wallet, instructions, [base])];
            case 2:
                closeResult = _a.sent();
                console.log(closeResult);
                if (typeof closeResult === 'string') {
                    throw new Error(closeResult);
                }
                else {
                    console.log('gumdrop close succeeded', "https://explorer.safecoin.com/tx/" + closeResult.txid + "?cluster=" + options.env);
                }
                return [2 /*return*/];
        }
    });
}); });
programCommand('create_contact_list')
    .option('--cli-input-json <filename>')
    .option('--aws-ses-access-key-id <string>', 'Access Key Id')
    .option('--aws-ses-secret-access-key <string>', 'Secret Access Key')
    .addHelpText('before', 'A thin wrapper mimicking `aws sesv2 create-contact-list`')
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    .action(function (options, cmd) { return __awaiter(void 0, void 0, void 0, function () {
    var message, client, response, err_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                loglevel_1.default.info("Parsed options:", options);
                try {
                    message = JSON.parse(fs.readFileSync(options.cliInputJson).toString());
                }
                catch (err) {
                    throw new Error("Could not read distribution list " + err);
                }
                client = new client_sesv2_1.SESv2Client({
                    region: 'us-east-2',
                    credentials: {
                        accessKeyId: options.awsSesAccessKeyId,
                        secretAccessKey: options.awsSesSecretAccessKey,
                    },
                });
                _a.label = 1;
            case 1:
                _a.trys.push([1, 3, , 4]);
                return [4 /*yield*/, client.send(new client_sesv2_1.CreateContactListCommand(message))];
            case 2:
                response = _a.sent();
                loglevel_1.default.debug(response);
                if (response.$metadata.httpStatusCode !== 200) {
                    //   throw new Error(`AWS SES ssemed to fail to send email: ${response[0].reject_reason}`);
                }
                return [3 /*break*/, 4];
            case 3:
                err_1 = _a.sent();
                loglevel_1.default.error(err_1);
                return [3 /*break*/, 4];
            case 4:
                loglevel_1.default.info("Created contact list " + message.ContactListName);
                return [2 /*return*/];
        }
    });
}); });
programCommand('get_contact')
    .argument('<email>', 'email address to query')
    .option('--aws-ses-access-key-id <string>', 'Access Key Id')
    .option('--aws-ses-secret-access-key <string>', 'Secret Access Key')
    .addHelpText('before', 'A thin wrapper mimicking `aws sesv2 get-contact`')
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    .action(function (email, options, cmd) { return __awaiter(void 0, void 0, void 0, function () {
    var client, response, err_2;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                loglevel_1.default.info("Parsed options:", options);
                client = new client_sesv2_1.SESv2Client({
                    region: 'us-east-2',
                    credentials: {
                        accessKeyId: options.awsSesAccessKeyId,
                        secretAccessKey: options.awsSesSecretAccessKey,
                    },
                });
                _a.label = 1;
            case 1:
                _a.trys.push([1, 3, , 4]);
                return [4 /*yield*/, client.send(new client_sesv2_1.GetContactCommand({
                        ContactListName: 'Gumdrop',
                        EmailAddress: email,
                    }))];
            case 2:
                response = _a.sent();
                console.log(response);
                return [3 /*break*/, 4];
            case 3:
                err_2 = _a.sent();
                loglevel_1.default.error(err_2);
                return [3 /*break*/, 4];
            case 4: return [2 /*return*/];
        }
    });
}); });
function programCommand(name) {
    return commander_1.program
        .command(name)
        .option('-e, --env <string>', 'safecoin cluster env name', 'devnet')
        .option('-k, --keypair <path>', "safecoin wallet location", '--keypair not provided')
        .option('-r, --rpc-url <string>', 'Custom rpc url')
        .option('-l, --log-level <string>', 'log level', setLogLevel);
}
// eslint-disable-next-line @typescript-eslint/no-unused-vars
function setLogLevel(value, prev) {
    if (value === undefined || value === null) {
        return;
    }
    loglevel_1.default.info('setting the log value to: ' + value);
    loglevel_1.default.setLevel(value);
}
function loadWalletKey(keypair) {
    if (!keypair || keypair == '') {
        throw new Error('Keypair is required!');
    }
    var loaded = web3_js_1.Keypair.fromSecretKey(new Uint8Array(JSON.parse(fs.readFileSync(keypair).toString())));
    loglevel_1.default.info("wallet public key: " + loaded.publicKey);
    return loaded;
}
function logPath(env, logName, cPath) {
    if (cPath === void 0) { cPath = LOG_PATH; }
    return path.join(cPath, env + "-" + logName);
}
// NB: assumes no overflow
function randomBytes() {
    // TODO: some predictable seed? sha256?
    return crypto.randomBytes(4);
}
function sendTransactionWithRetry(connection, wallet, instructions, signers, commitment) {
    if (commitment === void 0) { commitment = 'singleGossip'; }
    return __awaiter(this, void 0, void 0, function () {
        var transaction, _a;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    transaction = new web3_js_1.Transaction();
                    instructions.forEach(function (instruction) { return transaction.add(instruction); });
                    _a = transaction;
                    return [4 /*yield*/, connection.getRecentBlockhash(commitment)];
                case 1:
                    _a.recentBlockhash = (_b.sent()).blockhash;
                    transaction.setSigners.apply(transaction, __spreadArray([
                        // fee payed by the wallet owner
                        wallet.publicKey], __read(signers.map(function (s) { return s.publicKey; }))));
                    if (signers.length > 0) {
                        transaction.partialSign.apply(transaction, __spreadArray([], __read(signers)));
                    }
                    transaction.partialSign(wallet);
                    return [2 /*return*/, transactions_1.sendSignedTransaction({
                            connection: connection,
                            signedTransaction: transaction,
                        })];
            }
        });
    });
}
function distributeDiscord(auth, source, claimants, drop) {
    return __awaiter(this, void 0, void 0, function () {
        var client, guild, members, single, responses, claimants_1, claimants_1_1, c, _a, _b, e_1_1;
        var e_1, _c;
        var _this = this;
        return __generator(this, function (_d) {
            switch (_d.label) {
                case 0:
                    if (!auth.botToken || !auth.guild) {
                        throw new Error('Discord auth keys not supplied');
                    }
                    if (claimants.length === 0)
                        return [2 /*return*/, []];
                    loglevel_1.default.debug('Discord auth', auth);
                    client = new discord.Client();
                    return [4 /*yield*/, client.login(auth.botToken)];
                case 1:
                    _d.sent();
                    return [4 /*yield*/, client.guilds.fetch(auth.guild)];
                case 2:
                    guild = _d.sent();
                    return [4 /*yield*/, guild.members.fetch({
                            user: claimants.map(function (c) { return c.handle; }),
                        })];
                case 3:
                    members = _d.sent();
                    single = function (info, drop) { return __awaiter(_this, void 0, void 0, function () {
                        var user, formatted, response;
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0:
                                    user = members.get(info.handle);
                                    if (user === undefined) {
                                        return [2 /*return*/, {
                                                status: 'error',
                                                handle: info.handle,
                                                error: 'notfound',
                                            }];
                                    }
                                    formatted = communication_1.formatDropMessage(info, drop, false);
                                    return [4 /*yield*/, user.send(formatted.message)];
                                case 1:
                                    response = _a.sent();
                                    // canonoical way to check if message succeeded?
                                    if (response.id) {
                                        return [2 /*return*/, {
                                                status: 'success',
                                                handle: info.handle,
                                                messageId: response.id,
                                            }];
                                    }
                                    else {
                                        return [2 /*return*/, {
                                                status: 'error',
                                                handle: info.handle,
                                                error: response, // TODO
                                            }];
                                    }
                                    return [2 /*return*/];
                            }
                        });
                    }); };
                    responses = Array();
                    _d.label = 4;
                case 4:
                    _d.trys.push([4, 9, 10, 11]);
                    claimants_1 = __values(claimants), claimants_1_1 = claimants_1.next();
                    _d.label = 5;
                case 5:
                    if (!!claimants_1_1.done) return [3 /*break*/, 8];
                    c = claimants_1_1.value;
                    _b = (_a = responses).push;
                    return [4 /*yield*/, single(c, drop)];
                case 6:
                    _b.apply(_a, [_d.sent()]);
                    _d.label = 7;
                case 7:
                    claimants_1_1 = claimants_1.next();
                    return [3 /*break*/, 5];
                case 8: return [3 /*break*/, 11];
                case 9:
                    e_1_1 = _d.sent();
                    e_1 = { error: e_1_1 };
                    return [3 /*break*/, 11];
                case 10:
                    try {
                        if (claimants_1_1 && !claimants_1_1.done && (_c = claimants_1.return)) _c.call(claimants_1);
                    }
                    finally { if (e_1) throw e_1.error; }
                    return [7 /*endfinally*/];
                case 11:
                    client.destroy();
                    return [2 /*return*/, responses];
            }
        });
    });
}
commander_1.program.parse(process.argv);
