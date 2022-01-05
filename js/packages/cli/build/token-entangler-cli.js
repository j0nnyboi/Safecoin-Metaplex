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
exports.getEpKeyFromArgs = void 0;
var commander_1 = require("commander");
var loglevel_1 = __importDefault(require("loglevel"));
var accounts_1 = require("./helpers/accounts");
var anchor_1 = require("@project-serum/anchor");
var constants_1 = require("./helpers/constants");
var safe_token_1 = require("@safecoin/safe-token");
var various_1 = require("./helpers/various");
var transactions_1 = require("./helpers/transactions");
var schema_1 = require("./helpers/schema");
commander_1.program.version('0.0.1');
loglevel_1.default.setLevel('info');
var getEpKeyFromArgs = function (anchorProgram, mintA, mintB, entangledPair) { return __awaiter(void 0, void 0, void 0, function () {
    var epKey, obj;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (!!entangledPair) return [3 /*break*/, 5];
                loglevel_1.default.info('No entangled pair detected, generating from mint arguments.');
                return [4 /*yield*/, accounts_1.getTokenEntanglement(mintA, mintB)];
            case 1:
                epKey = (_a.sent())[0];
                return [4 /*yield*/, anchorProgram.provider.connection.getAccountInfo(epKey)];
            case 2:
                obj = _a.sent();
                if (!!obj) return [3 /*break*/, 4];
                return [4 /*yield*/, accounts_1.getTokenEntanglement(mintB, mintA)];
            case 3:
                epKey = (_a.sent())[0];
                _a.label = 4;
            case 4: return [3 /*break*/, 6];
            case 5:
                epKey = new anchor_1.web3.PublicKey(entangledPair);
                _a.label = 6;
            case 6: return [2 /*return*/, epKey];
        }
    });
}); };
exports.getEpKeyFromArgs = getEpKeyFromArgs;
programCommand('show')
    .option('-ep, --entangled-pair <string>', 'Optional. Overrides mint arguments.')
    .option('-ma, --mint-a <string>', 'mint a')
    .option('-mb, --mint-b <string>', 'mint b')
    .action(function (directory, cmd) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, keypair, env, entangledPair, mintA, mintB, walletKeyPair, anchorProgram, epKey, epObj;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _a = cmd.opts(), keypair = _a.keypair, env = _a.env, entangledPair = _a.entangledPair, mintA = _a.mintA, mintB = _a.mintB;
                walletKeyPair = accounts_1.loadWalletKey(keypair);
                return [4 /*yield*/, accounts_1.loadTokenEntanglementProgream(walletKeyPair, env)];
            case 1:
                anchorProgram = _b.sent();
                return [4 /*yield*/, exports.getEpKeyFromArgs(anchorProgram, mintA ? new anchor_1.web3.PublicKey(mintA) : null, mintB ? new anchor_1.web3.PublicKey(mintB) : null, entangledPair)];
            case 2:
                epKey = _b.sent();
                return [4 /*yield*/, anchorProgram.account.entangledPair.fetch(epKey)];
            case 3:
                epObj = _b.sent();
                loglevel_1.default.info('-----');
                loglevel_1.default.info('Entangled Pair:', epKey.toBase58());
                //@ts-ignore
                loglevel_1.default.info('Mint:', epObj.treasuryMint.toBase58());
                //@ts-ignore
                loglevel_1.default.info('Authority:', epObj.authority.toBase58());
                //@ts-ignore
                loglevel_1.default.info('Mint A:', epObj.mintA.toBase58());
                //@ts-ignore
                loglevel_1.default.info('Mint B:', epObj.mintB.toBase58());
                //@ts-ignore
                loglevel_1.default.info('Token A Escrow:', epObj.tokenAEscrow.toBase58());
                //@ts-ignore
                loglevel_1.default.info('Token B Escrow:', epObj.tokenBEscrow.toBase58());
                //@ts-ignore
                loglevel_1.default.info('Price:', epObj.price.toNumber());
                //@ts-ignore
                loglevel_1.default.info('Paid At Least Once:', epObj.paid);
                //@ts-ignore
                loglevel_1.default.info('Pays Every Time:', epObj.paysEveryTime);
                //@ts-ignore
                loglevel_1.default.info('Bump:', epObj.bump);
                return [2 /*return*/];
        }
    });
}); });
programCommand('create_entanglement')
    .option('-tm, --treasury-mint <string>', 'Mint address of treasury. If not used, default to SOL.')
    .option('-a, --authority <string>', 'Authority, defaults to keypair')
    .option('-p, --price <string>', 'Price for a swap')
    .option('-pet, --pays-every-time <string>', 'If true, the user must pay the swapping fee each swap')
    .option('-ma, --mint-a <string>', 'Mint a. You do not even need to own this token to create this entanglement.')
    .option('-mb, --mint-b <string>', 'Mint b. This token will be removed from your token account right now.')
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    .action(function (directory, cmd) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, keypair, env, price, paysEveryTime, mintA, mintB, treasuryMint, authority, priceNumber, walletKeyPair, anchorProgram, authorityKey, tMintKey, mintAKey, mintBKey, _b, entangledPair, bump, _c, reverseEntangledPair, reverseBump, _d, tokenAEscrow, tokenABump, tokenBEscrow, tokenBBump, priceAdjusted, _e, ata, transferAuthority, signers, instruction, _f, _g, _h, instructions;
    var _j, _k;
    return __generator(this, function (_l) {
        switch (_l.label) {
            case 0:
                _a = cmd.opts(), keypair = _a.keypair, env = _a.env, price = _a.price, paysEveryTime = _a.paysEveryTime, mintA = _a.mintA, mintB = _a.mintB, treasuryMint = _a.treasuryMint, authority = _a.authority;
                priceNumber = parseFloat(price);
                walletKeyPair = accounts_1.loadWalletKey(keypair);
                return [4 /*yield*/, accounts_1.loadTokenEntanglementProgream(walletKeyPair, env)];
            case 1:
                anchorProgram = _l.sent();
                if (!authority) {
                    loglevel_1.default.info('No authority detected, using keypair');
                    authorityKey = walletKeyPair.publicKey;
                }
                else {
                    authorityKey = new anchor_1.web3.PublicKey(authority);
                }
                mintAKey = new anchor_1.web3.PublicKey(mintA);
                mintBKey = new anchor_1.web3.PublicKey(mintB);
                if (!treasuryMint) {
                    loglevel_1.default.info('No treasury mint detected, using SOL.');
                    tMintKey = constants_1.WRAPPED_SOL_MINT;
                }
                else {
                    tMintKey = new anchor_1.web3.PublicKey(treasuryMint);
                }
                return [4 /*yield*/, accounts_1.getTokenEntanglement(mintAKey, mintBKey)];
            case 2:
                _b = __read.apply(void 0, [_l.sent(), 2]), entangledPair = _b[0], bump = _b[1];
                return [4 /*yield*/, accounts_1.getTokenEntanglement(mintBKey, mintAKey)];
            case 3:
                _c = __read.apply(void 0, [_l.sent(), 2]), reverseEntangledPair = _c[0], reverseBump = _c[1];
                return [4 /*yield*/, accounts_1.getTokenEntanglementEscrows(mintAKey, mintBKey)];
            case 4:
                _d = __read.apply(void 0, [_l.sent(), 4]), tokenAEscrow = _d[0], tokenABump = _d[1], tokenBEscrow = _d[2], tokenBBump = _d[3];
                _e = anchor_1.BN.bind;
                return [4 /*yield*/, various_1.getPriceWithMantissa(priceNumber, tMintKey, walletKeyPair, anchorProgram)];
            case 5:
                priceAdjusted = new (_e.apply(anchor_1.BN, [void 0, _l.sent()]))();
                return [4 /*yield*/, accounts_1.getAtaForMint(mintBKey, walletKeyPair.publicKey)];
            case 6:
                ata = (_l.sent())[0];
                transferAuthority = anchor_1.web3.Keypair.generate();
                signers = [transferAuthority];
                _g = (_f = anchorProgram.instruction).createEntangledPair;
                _h = [bump,
                    reverseBump,
                    tokenABump,
                    tokenBBump,
                    priceAdjusted,
                    paysEveryTime == 'true'];
                _j = {};
                _k = {
                    treasuryMint: tMintKey,
                    payer: walletKeyPair.publicKey,
                    transferAuthority: transferAuthority.publicKey,
                    authority: authorityKey,
                    mintA: mintAKey
                };
                return [4 /*yield*/, accounts_1.getMetadata(mintAKey)];
            case 7:
                _k.metadataA = _l.sent();
                return [4 /*yield*/, accounts_1.getMasterEdition(mintAKey)];
            case 8:
                _k.editionA = _l.sent(),
                    _k.mintB = mintBKey;
                return [4 /*yield*/, accounts_1.getMetadata(mintBKey)];
            case 9:
                _k.metadataB = _l.sent();
                return [4 /*yield*/, accounts_1.getMasterEdition(mintBKey)];
            case 10: return [4 /*yield*/, _g.apply(_f, _h.concat([(_j.accounts = (_k.editionB = _l.sent(),
                        _k.tokenB = ata,
                        _k.tokenAEscrow = tokenAEscrow,
                        _k.tokenBEscrow = tokenBEscrow,
                        _k.entangledPair = entangledPair,
                        _k.reverseEntangledPair = reverseEntangledPair,
                        _k.tokenProgram = constants_1.TOKEN_PROGRAM_ID,
                        _k.systemProgram = anchor_1.web3.SystemProgram.programId,
                        _k.rent = anchor_1.web3.SYSVAR_RENT_PUBKEY,
                        _k),
                        _j)]))];
            case 11:
                instruction = _l.sent();
                instructions = [
                    safe_token_1.Token.createApproveInstruction(constants_1.TOKEN_PROGRAM_ID, ata, transferAuthority.publicKey, walletKeyPair.publicKey, [], 1),
                    instruction,
                    safe_token_1.Token.createRevokeInstruction(constants_1.TOKEN_PROGRAM_ID, ata, walletKeyPair.publicKey, []),
                ];
                return [4 /*yield*/, transactions_1.sendTransactionWithRetryWithKeypair(anchorProgram.provider.connection, walletKeyPair, instructions, signers, 'max')];
            case 12:
                _l.sent();
                loglevel_1.default.info('Created entanglement', entangledPair.toBase58());
                return [2 /*return*/];
        }
    });
}); });
programCommand('swap')
    .option('-ep, --entangled-pair <string>', 'Optional. Overrides mint arguments.')
    .option('-ma, --mint-a <string>', 'Mint a. You do not even need to own this token to create this entanglement.')
    .option('-mb, --mint-b <string>', 'Mint b. This token will be removed from your token account right now.')
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    .action(function (directory, cmd) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, keypair, env, mintA, mintB, entangledPair, walletKeyPair, anchorProgram, epKey, epObj, mintAKey, mintBKey, aAta, bAta, currABal, token, replacementToken, tokenMint, replacementTokenMint, result, tokenAEscrow, tokenBEscrow, transferAuthority, paymentTransferAuthority, tokenMetadata, signers, isNative, paymentAccount, _b, remainingAccounts, metadataObj, metadataDecoded, i, _c, _d, instruction, instructions;
    var _e;
    return __generator(this, function (_f) {
        switch (_f.label) {
            case 0:
                _a = cmd.opts(), keypair = _a.keypair, env = _a.env, mintA = _a.mintA, mintB = _a.mintB, entangledPair = _a.entangledPair;
                walletKeyPair = accounts_1.loadWalletKey(keypair);
                return [4 /*yield*/, accounts_1.loadTokenEntanglementProgream(walletKeyPair, env)];
            case 1:
                anchorProgram = _f.sent();
                return [4 /*yield*/, exports.getEpKeyFromArgs(anchorProgram, mintA ? new anchor_1.web3.PublicKey(mintA) : null, mintB ? new anchor_1.web3.PublicKey(mintB) : null, entangledPair)];
            case 2:
                epKey = _f.sent();
                return [4 /*yield*/, anchorProgram.account.entangledPair.fetch(epKey)];
            case 3:
                epObj = _f.sent();
                mintAKey = epObj.mintA;
                mintBKey = epObj.mintB;
                return [4 /*yield*/, accounts_1.getAtaForMint(mintAKey, walletKeyPair.publicKey)];
            case 4:
                aAta = (_f.sent())[0];
                return [4 /*yield*/, accounts_1.getAtaForMint(mintBKey, walletKeyPair.publicKey)];
            case 5:
                bAta = (_f.sent())[0];
                return [4 /*yield*/, accounts_1.getTokenAmount(anchorProgram, aAta, mintAKey)];
            case 6:
                currABal = _f.sent();
                token = currABal == 1 ? aAta : bAta, replacementToken = currABal == 1 ? bAta : aAta;
                tokenMint = currABal == 1 ? mintAKey : mintBKey, replacementTokenMint = currABal == 1 ? mintBKey : mintAKey;
                return [4 /*yield*/, accounts_1.getTokenEntanglementEscrows(mintAKey, mintBKey)];
            case 7:
                result = _f.sent();
                tokenAEscrow = result[0];
                tokenBEscrow = result[2];
                transferAuthority = anchor_1.web3.Keypair.generate();
                paymentTransferAuthority = anchor_1.web3.Keypair.generate();
                return [4 /*yield*/, accounts_1.getMetadata(tokenMint)];
            case 8:
                tokenMetadata = _f.sent();
                signers = [transferAuthority];
                isNative = epObj.treasuryMint.equals(constants_1.WRAPPED_SOL_MINT);
                if (!isNative) return [3 /*break*/, 9];
                _b = walletKeyPair.publicKey;
                return [3 /*break*/, 11];
            case 9: return [4 /*yield*/, accounts_1.getAtaForMint(epObj.treasuryMint, walletKeyPair.publicKey)];
            case 10:
                _b = (_f.sent())[0];
                _f.label = 11;
            case 11:
                paymentAccount = _b;
                if (!isNative)
                    signers.push(paymentTransferAuthority);
                remainingAccounts = [];
                return [4 /*yield*/, anchorProgram.provider.connection.getAccountInfo(tokenMetadata)];
            case 12:
                metadataObj = _f.sent();
                metadataDecoded = schema_1.decodeMetadata(Buffer.from(metadataObj.data));
                i = 0;
                _f.label = 13;
            case 13:
                if (!(i < metadataDecoded.data.creators.length)) return [3 /*break*/, 16];
                remainingAccounts.push({
                    pubkey: new anchor_1.web3.PublicKey(metadataDecoded.data.creators[i].address),
                    isWritable: true,
                    isSigner: false,
                });
                if (!!isNative) return [3 /*break*/, 15];
                _d = (_c = remainingAccounts).push;
                _e = {};
                return [4 /*yield*/, accounts_1.getAtaForMint(
                    //@ts-ignore
                    epObj.treasuryMint, remainingAccounts[remainingAccounts.length - 1].pubkey)];
            case 14:
                _d.apply(_c, [(_e.pubkey = (_f.sent())[0],
                        _e.isWritable = true,
                        _e.isSigner = false,
                        _e)]);
                _f.label = 15;
            case 15:
                i++;
                return [3 /*break*/, 13];
            case 16: return [4 /*yield*/, anchorProgram.instruction.swap({
                    accounts: {
                        //@ts-ignore
                        treasuryMint: epObj.treasuryMint,
                        payer: walletKeyPair.publicKey,
                        paymentAccount: paymentAccount,
                        transferAuthority: transferAuthority.publicKey,
                        paymentTransferAuthority: paymentTransferAuthority.publicKey,
                        token: token,
                        tokenMetadata: tokenMetadata,
                        replacementToken: replacementToken,
                        replacementTokenMint: replacementTokenMint,
                        tokenAEscrow: tokenAEscrow,
                        tokenBEscrow: tokenBEscrow,
                        entangledPair: epKey,
                        tokenProgram: constants_1.TOKEN_PROGRAM_ID,
                        systemProgram: anchor_1.web3.SystemProgram.programId,
                        ataProgram: safe_token_1.ASSOCIATED_TOKEN_PROGRAM_ID,
                        rent: anchor_1.web3.SYSVAR_RENT_PUBKEY,
                    },
                    remainingAccounts: remainingAccounts,
                })];
            case 17:
                instruction = _f.sent();
                if (!isNative) {
                    instruction.keys
                        .filter(function (k) { return k.pubkey.equals(paymentTransferAuthority.publicKey); })
                        .map(function (k) { return (k.isSigner = true); });
                }
                instructions = __spreadArray(__spreadArray(__spreadArray([
                    safe_token_1.Token.createApproveInstruction(constants_1.TOKEN_PROGRAM_ID, token, transferAuthority.publicKey, walletKeyPair.publicKey, [], 1)
                ], __read((!isNative
                    ? [
                        safe_token_1.Token.createApproveInstruction(constants_1.TOKEN_PROGRAM_ID, paymentAccount, paymentTransferAuthority.publicKey, walletKeyPair.publicKey, [], 
                        //@ts-ignore
                        epObj.price.toNumber()),
                    ]
                    : []))), [
                    instruction,
                    safe_token_1.Token.createRevokeInstruction(constants_1.TOKEN_PROGRAM_ID, token, walletKeyPair.publicKey, [])
                ]), __read((!isNative
                    ? [
                        safe_token_1.Token.createRevokeInstruction(constants_1.TOKEN_PROGRAM_ID, paymentAccount, walletKeyPair.publicKey, []),
                    ]
                    : [])));
                return [4 /*yield*/, transactions_1.sendTransactionWithRetryWithKeypair(anchorProgram.provider.connection, walletKeyPair, instructions, signers, 'max')];
            case 18:
                _f.sent();
                loglevel_1.default.info('Swapped', tokenMint.toBase58(), 'mint for', replacementTokenMint.toBase58(), ' with entangled pair ', epKey.toBase58());
                return [2 /*return*/];
        }
    });
}); });
programCommand('update_entanglement')
    .option('-ep, --entangled-pair <string>', 'Optional. Overrides mint arguments.')
    .option('-na, --new-authority <string>', 'Authority, defaults to keypair')
    .option('-p, --price <string>', 'Price for a swap')
    .option('-pet, --pays-every-time <string>', 'If true, the user must pay the swapping fee each swap')
    .option('-ma, --mint-a <string>', 'Mint a. You do not even need to own this token to create this entanglement.')
    .option('-mb, --mint-b <string>', 'Mint b. This token will be removed from your token account right now.')
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    .action(function (directory, cmd) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, keypair, env, price, paysEveryTime, mintA, mintB, entangledPair, newAuthority, walletKeyPair, anchorProgram, epKey, epObj, authorityKey, priceAdjusted, _b, _c;
    return __generator(this, function (_d) {
        switch (_d.label) {
            case 0:
                _a = cmd.opts(), keypair = _a.keypair, env = _a.env, price = _a.price, paysEveryTime = _a.paysEveryTime, mintA = _a.mintA, mintB = _a.mintB, entangledPair = _a.entangledPair, newAuthority = _a.newAuthority;
                walletKeyPair = accounts_1.loadWalletKey(keypair);
                return [4 /*yield*/, accounts_1.loadTokenEntanglementProgream(walletKeyPair, env)];
            case 1:
                anchorProgram = _d.sent();
                return [4 /*yield*/, exports.getEpKeyFromArgs(anchorProgram, mintA ? new anchor_1.web3.PublicKey(mintA) : null, mintB ? new anchor_1.web3.PublicKey(mintB) : null, entangledPair)];
            case 2:
                epKey = _d.sent();
                return [4 /*yield*/, anchorProgram.account.entangledPair.fetch(epKey)];
            case 3:
                epObj = _d.sent();
                authorityKey = new anchor_1.web3.PublicKey(newAuthority ? newAuthority : epObj.authority);
                if (!price) return [3 /*break*/, 5];
                _c = anchor_1.BN.bind;
                return [4 /*yield*/, various_1.getPriceWithMantissa(parseFloat(price), 
                    //@ts-ignore
                    epObj.treasuryMint, walletKeyPair, anchorProgram)];
            case 4:
                _b = new (_c.apply(anchor_1.BN, [void 0, _d.sent()]))();
                return [3 /*break*/, 6];
            case 5:
                _b = epObj.price;
                _d.label = 6;
            case 6:
                priceAdjusted = _b;
                return [4 /*yield*/, anchorProgram.rpc.updateEntangledPair(priceAdjusted, paysEveryTime == 'true', {
                        accounts: {
                            newAuthority: authorityKey,
                            //@ts-ignore
                            authority: epObj.authority,
                            entangledPair: epKey,
                        },
                    })];
            case 7:
                _d.sent();
                loglevel_1.default.info('Updated entanglement', epKey.toBase58());
                return [2 /*return*/];
        }
    });
}); });
function programCommand(name) {
    return commander_1.program
        .command(name)
        .option('-e, --env <string>', 'safecoin cluster env name', 'devnet')
        .option('-k, --keypair <path>', "safecoin wallet location", '--keypair not provided')
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
commander_1.program.parse(process.argv);
