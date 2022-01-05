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
exports.getAuctionHouseFromOpts = void 0;
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
function getAuctionHouseFromOpts(auctionHouse, walletKeyPair, tMintKey) {
    return __awaiter(this, void 0, void 0, function () {
        var auctionHouseKey;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!auctionHouse) return [3 /*break*/, 1];
                    auctionHouseKey = new anchor_1.web3.PublicKey(auctionHouse);
                    return [3 /*break*/, 3];
                case 1:
                    loglevel_1.default.info('No auction house explicitly passed in, assuming you are creator on it and deriving key...');
                    return [4 /*yield*/, accounts_1.getAuctionHouse(walletKeyPair.publicKey, tMintKey)];
                case 2:
                    auctionHouseKey = (_a.sent())[0];
                    _a.label = 3;
                case 3: return [2 /*return*/, auctionHouseKey];
            }
        });
    });
}
exports.getAuctionHouseFromOpts = getAuctionHouseFromOpts;
programCommand('show_escrow')
    .option('-ah, --auction-house <string>', 'Specific auction house')
    .option('-w, --wallet <string>', 'Specific wallet owner of escrow. If not present, we use your keypair.')
    .action(function (directory, cmd) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, keypair, env, auctionHouse, wallet, otherWallet, walletKeyPair, anchorProgram, auctionHouseKey, auctionHouseObj, escrow, amount;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _a = cmd.opts(), keypair = _a.keypair, env = _a.env, auctionHouse = _a.auctionHouse, wallet = _a.wallet;
                otherWallet = wallet ? new anchor_1.web3.PublicKey(wallet) : null;
                walletKeyPair = accounts_1.loadWalletKey(keypair);
                return [4 /*yield*/, accounts_1.loadAuctionHouseProgram(walletKeyPair, env)];
            case 1:
                anchorProgram = _b.sent();
                auctionHouseKey = new anchor_1.web3.PublicKey(auctionHouse);
                return [4 /*yield*/, anchorProgram.account.auctionHouse.fetch(auctionHouseKey)];
            case 2:
                auctionHouseObj = _b.sent();
                if (!otherWallet) {
                    loglevel_1.default.info('No --wallet passed in, defaulting to keypair');
                }
                return [4 /*yield*/, accounts_1.getAuctionHouseBuyerEscrow(auctionHouseKey, otherWallet || walletKeyPair.publicKey)];
            case 3:
                escrow = (_b.sent())[0];
                return [4 /*yield*/, accounts_1.getTokenAmount(anchorProgram, escrow, 
                    //@ts-ignore
                    auctionHouseObj.treasuryMint)];
            case 4:
                amount = _b.sent();
                loglevel_1.default.info(otherWallet.toBase58() || walletKeyPair.publicKey.toBase58(), 'Balance:', amount);
                return [2 /*return*/];
        }
    });
}); });
programCommand('withdraw')
    .option('-ah, --auction-house <string>', 'Specific auction house')
    .option('-ak, --auction-house-keypair <string>', 'If this auction house requires sign off, pass in keypair for it')
    .option('-a, --amount <string>', 'Amount to withdraw')
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    .action(function (directory, cmd) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, keypair, env, amount, auctionHouse, auctionHouseKeypair, auctionHouseKey, walletKeyPair, auctionHouseKeypairLoaded, anchorProgram, auctionHouseObj, amountAdjusted, _b, escrowPaymentAccount, bump, isNative, ata, signers, currBal, instruction;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                _a = cmd.opts(), keypair = _a.keypair, env = _a.env, amount = _a.amount, auctionHouse = _a.auctionHouse, auctionHouseKeypair = _a.auctionHouseKeypair;
                auctionHouseKey = new anchor_1.web3.PublicKey(auctionHouse);
                walletKeyPair = accounts_1.loadWalletKey(keypair);
                auctionHouseKeypairLoaded = auctionHouseKeypair
                    ? accounts_1.loadWalletKey(auctionHouseKeypair)
                    : null;
                return [4 /*yield*/, accounts_1.loadAuctionHouseProgram(walletKeyPair, env)];
            case 1:
                anchorProgram = _c.sent();
                return [4 /*yield*/, anchorProgram.account.auctionHouse.fetch(auctionHouseKey)];
            case 2:
                auctionHouseObj = _c.sent();
                return [4 /*yield*/, various_1.getPriceWithMantissa(amount, 
                    //@ts-ignore
                    auctionHouseObj.treasuryMint, walletKeyPair, anchorProgram)];
            case 3:
                amountAdjusted = _c.sent();
                return [4 /*yield*/, accounts_1.getAuctionHouseBuyerEscrow(auctionHouseKey, walletKeyPair.publicKey)];
            case 4:
                _b = __read.apply(void 0, [_c.sent(), 2]), escrowPaymentAccount = _b[0], bump = _b[1];
                isNative = auctionHouseObj.treasuryMint.equals(constants_1.WRAPPED_SOL_MINT);
                return [4 /*yield*/, accounts_1.getAtaForMint(
                    //@ts-ignore
                    auctionHouseObj.treasuryMint, walletKeyPair.publicKey)];
            case 5:
                ata = (_c.sent())[0];
                signers = [];
                return [4 /*yield*/, accounts_1.getTokenAmount(anchorProgram, escrowPaymentAccount, 
                    //@ts-ignore
                    auctionHouseObj.treasuryMint)];
            case 6:
                currBal = _c.sent();
                return [4 /*yield*/, anchorProgram.instruction.withdraw(bump, new anchor_1.BN(amountAdjusted), {
                        accounts: {
                            wallet: walletKeyPair.publicKey,
                            receiptAccount: isNative ? walletKeyPair.publicKey : ata,
                            escrowPaymentAccount: escrowPaymentAccount,
                            //@ts-ignore
                            treasuryMint: auctionHouseObj.treasuryMint,
                            //@ts-ignore
                            authority: auctionHouseObj.authority,
                            auctionHouse: auctionHouseKey,
                            //@ts-ignore
                            auctionHouseFeeAccount: auctionHouseObj.auctionHouseFeeAccount,
                            tokenProgram: constants_1.TOKEN_PROGRAM_ID,
                            systemProgram: anchor_1.web3.SystemProgram.programId,
                            rent: anchor_1.web3.SYSVAR_RENT_PUBKEY,
                            ataProgram: safe_token_1.ASSOCIATED_TOKEN_PROGRAM_ID,
                        },
                        signers: signers,
                    })];
            case 7:
                instruction = _c.sent();
                if (auctionHouseKeypairLoaded) {
                    signers.push(auctionHouseKeypairLoaded);
                    instruction.keys
                        .filter(function (k) { return k.pubkey.equals(auctionHouseKeypairLoaded.publicKey); })
                        .map(function (k) { return (k.isSigner = true); });
                }
                instruction.keys
                    .filter(function (k) { return k.pubkey.equals(walletKeyPair.publicKey); })
                    .map(function (k) { return (k.isSigner = true); });
                return [4 /*yield*/, transactions_1.sendTransactionWithRetryWithKeypair(anchorProgram.provider.connection, walletKeyPair, [instruction], signers, 'max')];
            case 8:
                _c.sent();
                loglevel_1.default.info('Withdrew', amountAdjusted, 'from your account with Auction House', auctionHouse, '. New Balance:', currBal - amountAdjusted);
                return [2 /*return*/];
        }
    });
}); });
programCommand('sell')
    .option('-ah, --auction-house <string>', 'Specific auction house')
    .option('-ak, --auction-house-keypair <string>', 'If this auction house requires sign off, pass in keypair for it')
    .option('-aks, --auction-house-signs', 'If you want to simulate the auction house changing the price without your sign off')
    .option('-b, --buy-price <string>', 'Price you wish to sell for')
    .option('-m, --mint <string>', 'Mint of the token to purchase')
    .option('-t, --token-size <string>', 'Amount of tokens you want to sell')
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    .action(function (directory, cmd) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, keypair, env, auctionHouse, auctionHouseKeypair, buyPrice, mint, tokenSize, auctionHouseSigns, auctionHouseKey, walletKeyPair, mintKey, auctionHouseKeypairLoaded, anchorProgram, auctionHouseObj, buyPriceAdjusted, _b, tokenSizeAdjusted, _c, tokenAccountKey, _d, programAsSigner, programAsSignerBump, _e, tradeState, tradeBump, _f, freeTradeState, freeTradeBump, signers, instruction, _g, _h, _j;
    var _k, _l;
    return __generator(this, function (_m) {
        switch (_m.label) {
            case 0:
                _a = cmd.opts(), keypair = _a.keypair, env = _a.env, auctionHouse = _a.auctionHouse, auctionHouseKeypair = _a.auctionHouseKeypair, buyPrice = _a.buyPrice, mint = _a.mint, tokenSize = _a.tokenSize, auctionHouseSigns = _a.auctionHouseSigns;
                auctionHouseKey = new anchor_1.web3.PublicKey(auctionHouse);
                walletKeyPair = accounts_1.loadWalletKey(keypair);
                mintKey = new anchor_1.web3.PublicKey(mint);
                auctionHouseKeypairLoaded = auctionHouseKeypair
                    ? accounts_1.loadWalletKey(auctionHouseKeypair)
                    : null;
                return [4 /*yield*/, accounts_1.loadAuctionHouseProgram(auctionHouseSigns ? auctionHouseKeypairLoaded : walletKeyPair, env)];
            case 1:
                anchorProgram = _m.sent();
                return [4 /*yield*/, anchorProgram.account.auctionHouse.fetch(auctionHouseKey)];
            case 2:
                auctionHouseObj = _m.sent();
                _b = anchor_1.BN.bind;
                return [4 /*yield*/, various_1.getPriceWithMantissa(buyPrice, 
                    //@ts-ignore
                    auctionHouseObj.treasuryMint, walletKeyPair, anchorProgram)];
            case 3:
                buyPriceAdjusted = new (_b.apply(anchor_1.BN, [void 0, _m.sent()]))();
                _c = anchor_1.BN.bind;
                return [4 /*yield*/, various_1.getPriceWithMantissa(tokenSize, mintKey, walletKeyPair, anchorProgram)];
            case 4:
                tokenSizeAdjusted = new (_c.apply(anchor_1.BN, [void 0, _m.sent()]))();
                return [4 /*yield*/, accounts_1.getAtaForMint(mintKey, walletKeyPair.publicKey)];
            case 5:
                tokenAccountKey = (_m.sent())[0];
                return [4 /*yield*/, accounts_1.getAuctionHouseProgramAsSigner()];
            case 6:
                _d = __read.apply(void 0, [_m.sent(), 2]), programAsSigner = _d[0], programAsSignerBump = _d[1];
                return [4 /*yield*/, accounts_1.getAuctionHouseTradeState(auctionHouseKey, walletKeyPair.publicKey, tokenAccountKey, 
                    //@ts-ignore
                    auctionHouseObj.treasuryMint, mintKey, tokenSizeAdjusted, buyPriceAdjusted)];
            case 7:
                _e = __read.apply(void 0, [_m.sent(), 2]), tradeState = _e[0], tradeBump = _e[1];
                return [4 /*yield*/, accounts_1.getAuctionHouseTradeState(auctionHouseKey, walletKeyPair.publicKey, tokenAccountKey, 
                    //@ts-ignore
                    auctionHouseObj.treasuryMint, mintKey, tokenSizeAdjusted, new anchor_1.BN(0))];
            case 8:
                _f = __read.apply(void 0, [_m.sent(), 2]), freeTradeState = _f[0], freeTradeBump = _f[1];
                signers = [];
                _h = (_g = anchorProgram.instruction).sell;
                _j = [tradeBump,
                    freeTradeBump,
                    programAsSignerBump,
                    buyPriceAdjusted,
                    tokenSizeAdjusted];
                _k = {};
                _l = {
                    wallet: walletKeyPair.publicKey
                };
                return [4 /*yield*/, accounts_1.getMetadata(mintKey)];
            case 9: return [4 /*yield*/, _h.apply(_g, _j.concat([(_k.accounts = (_l.metadata = _m.sent(),
                        _l.tokenAccount = tokenAccountKey,
                        //@ts-ignore
                        _l.authority = auctionHouseObj.authority,
                        _l.auctionHouse = auctionHouseKey,
                        //@ts-ignore
                        _l.auctionHouseFeeAccount = auctionHouseObj.auctionHouseFeeAccount,
                        _l.sellerTradeState = tradeState,
                        _l.freeSellerTradeState = freeTradeState,
                        _l.tokenProgram = constants_1.TOKEN_PROGRAM_ID,
                        _l.systemProgram = anchor_1.web3.SystemProgram.programId,
                        _l.programAsSigner = programAsSigner,
                        _l.rent = anchor_1.web3.SYSVAR_RENT_PUBKEY,
                        _l),
                        _k.signers = signers,
                        _k)]))];
            case 10:
                instruction = _m.sent();
                if (auctionHouseKeypairLoaded) {
                    signers.push(auctionHouseKeypairLoaded);
                    instruction.keys
                        .filter(function (k) { return k.pubkey.equals(auctionHouseKeypairLoaded.publicKey); })
                        .map(function (k) { return (k.isSigner = true); });
                }
                if (!auctionHouseSigns) {
                    instruction.keys
                        .filter(function (k) { return k.pubkey.equals(walletKeyPair.publicKey); })
                        .map(function (k) { return (k.isSigner = true); });
                }
                return [4 /*yield*/, transactions_1.sendTransactionWithRetryWithKeypair(anchorProgram.provider.connection, auctionHouseSigns ? auctionHouseKeypairLoaded : walletKeyPair, [instruction], signers, 'max')];
            case 11:
                _m.sent();
                loglevel_1.default.info('Set', tokenSize, mint, 'for sale for', buyPrice, 'from your account with Auction House', auctionHouse);
                return [2 /*return*/];
        }
    });
}); });
programCommand('withdraw_from_treasury')
    .option('-tm, --treasury-mint <string>', 'Optional. Mint address of treasury. If not used, default to SOL. Ignored if providing -ah arg')
    .option('-ah, --auction-house <string>', 'Specific auction house(if not provided, we assume you are asking for your own)')
    .option('-a, --amount <string>', 'Amount to withdraw')
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    .action(function (directory, cmd) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, keypair, env, auctionHouse, treasuryMint, amount, walletKeyPair, anchorProgram, tMintKey, auctionHouseKey, auctionHouseObj, amountAdjusted, _b, signers, instruction;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                _a = cmd.opts(), keypair = _a.keypair, env = _a.env, auctionHouse = _a.auctionHouse, treasuryMint = _a.treasuryMint, amount = _a.amount;
                walletKeyPair = accounts_1.loadWalletKey(keypair);
                return [4 /*yield*/, accounts_1.loadAuctionHouseProgram(walletKeyPair, env)];
            case 1:
                anchorProgram = _c.sent();
                if (!treasuryMint) {
                    loglevel_1.default.info('No treasury mint detected, using SOL.');
                    tMintKey = constants_1.WRAPPED_SOL_MINT;
                }
                else {
                    tMintKey = new anchor_1.web3.PublicKey(treasuryMint);
                }
                return [4 /*yield*/, getAuctionHouseFromOpts(auctionHouse, walletKeyPair, tMintKey)];
            case 2:
                auctionHouseKey = _c.sent();
                return [4 /*yield*/, anchorProgram.account.auctionHouse.fetch(auctionHouseKey)];
            case 3:
                auctionHouseObj = _c.sent();
                _b = anchor_1.BN.bind;
                return [4 /*yield*/, various_1.getPriceWithMantissa(amount, 
                    //@ts-ignore
                    auctionHouseObj.treasuryMint, walletKeyPair, anchorProgram)];
            case 4:
                amountAdjusted = new (_b.apply(anchor_1.BN, [void 0, _c.sent()]))();
                signers = [];
                return [4 /*yield*/, anchorProgram.instruction.withdrawFromTreasury(amountAdjusted, {
                        accounts: {
                            //@ts-ignore
                            treasuryMint: auctionHouseObj.treasuryMint,
                            //@ts-ignore
                            authority: auctionHouseObj.authority,
                            treasuryWithdrawalDestination: 
                            //@ts-ignore
                            auctionHouseObj.treasuryWithdrawalDestination,
                            //@ts-ignore
                            auctionHouseTreasury: auctionHouseObj.auctionHouseTreasury,
                            auctionHouse: auctionHouseKey,
                            tokenProgram: constants_1.TOKEN_PROGRAM_ID,
                            systemProgram: anchor_1.web3.SystemProgram.programId,
                        },
                        signers: signers,
                    })];
            case 5:
                instruction = _c.sent();
                return [4 /*yield*/, transactions_1.sendTransactionWithRetryWithKeypair(anchorProgram.provider.connection, walletKeyPair, [instruction], signers, 'max')];
            case 6:
                _c.sent();
                loglevel_1.default.info('Withdrew', amountAdjusted.toNumber(), 'from your account with Auction House', auctionHouse);
                return [2 /*return*/];
        }
    });
}); });
programCommand('withdraw_from_fees')
    .option('-tm, --treasury-mint <string>', 'Optional. Mint address of treasury. If not used, default to SOL. Ignored if providing -ah arg')
    .option('-ah, --auction-house <string>', 'Specific auction house(if not provided, we assume you are asking for your own)')
    .option('-a, --amount <string>', 'Amount to withdraw')
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    .action(function (directory, cmd) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, keypair, env, auctionHouse, treasuryMint, amount, walletKeyPair, anchorProgram, tMintKey, auctionHouseKey, auctionHouseObj, amountAdjusted, _b, signers, instruction;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                _a = cmd.opts(), keypair = _a.keypair, env = _a.env, auctionHouse = _a.auctionHouse, treasuryMint = _a.treasuryMint, amount = _a.amount;
                walletKeyPair = accounts_1.loadWalletKey(keypair);
                return [4 /*yield*/, accounts_1.loadAuctionHouseProgram(walletKeyPair, env)];
            case 1:
                anchorProgram = _c.sent();
                if (!treasuryMint) {
                    loglevel_1.default.info('No treasury mint detected, using SOL.');
                    tMintKey = constants_1.WRAPPED_SOL_MINT;
                }
                else {
                    tMintKey = new anchor_1.web3.PublicKey(treasuryMint);
                }
                return [4 /*yield*/, getAuctionHouseFromOpts(auctionHouse, walletKeyPair, tMintKey)];
            case 2:
                auctionHouseKey = _c.sent();
                return [4 /*yield*/, anchorProgram.account.auctionHouse.fetch(auctionHouseKey)];
            case 3:
                auctionHouseObj = _c.sent();
                _b = anchor_1.BN.bind;
                return [4 /*yield*/, various_1.getPriceWithMantissa(amount, 
                    //@ts-ignore
                    auctionHouseObj.treasuryMint, walletKeyPair, anchorProgram)];
            case 4:
                amountAdjusted = new (_b.apply(anchor_1.BN, [void 0, _c.sent()]))();
                signers = [];
                return [4 /*yield*/, anchorProgram.instruction.withdrawFromFee(amountAdjusted, {
                        accounts: {
                            //@ts-ignore
                            authority: auctionHouseObj.authority,
                            feeWithdrawalDestination: 
                            //@ts-ignore
                            auctionHouseObj.feeWithdrawalDestination,
                            //@ts-ignore
                            auctionHouseFeeAccount: auctionHouseObj.auctionHouseFeeAccount,
                            auctionHouse: auctionHouseKey,
                            systemProgram: anchor_1.web3.SystemProgram.programId,
                        },
                        signers: signers,
                    })];
            case 5:
                instruction = _c.sent();
                return [4 /*yield*/, transactions_1.sendTransactionWithRetryWithKeypair(anchorProgram.provider.connection, walletKeyPair, [instruction], signers, 'max')];
            case 6:
                _c.sent();
                loglevel_1.default.info('Withdrew', amountAdjusted.toNumber(), 'from your account with Auction House', auctionHouse);
                return [2 /*return*/];
        }
    });
}); });
programCommand('cancel')
    .option('-ah, --auction-house <string>', 'Specific auction house')
    .option('-ak, --auction-house-keypair <string>', 'If this auction house requires sign off, pass in keypair for it')
    .option('-aks, --auction-house-signs', 'If you want to simulate the auction house changing the price without your sign off')
    .option('-b, --buy-price <string>', 'Price you wish to sell for')
    .option('-m, --mint <string>', 'Mint of the token to purchase')
    .option('-t, --token-size <string>', 'Amount of tokens you want to sell')
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    .action(function (directory, cmd) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, keypair, env, auctionHouse, auctionHouseKeypair, buyPrice, mint, tokenSize, auctionHouseSigns, auctionHouseKey, walletKeyPair, mintKey, auctionHouseKeypairLoaded, anchorProgram, auctionHouseObj, buyPriceAdjusted, _b, tokenSizeAdjusted, _c, tokenAccountKey, tradeState, signers, instruction;
    return __generator(this, function (_d) {
        switch (_d.label) {
            case 0:
                _a = cmd.opts(), keypair = _a.keypair, env = _a.env, auctionHouse = _a.auctionHouse, auctionHouseKeypair = _a.auctionHouseKeypair, buyPrice = _a.buyPrice, mint = _a.mint, tokenSize = _a.tokenSize, auctionHouseSigns = _a.auctionHouseSigns;
                auctionHouseKey = new anchor_1.web3.PublicKey(auctionHouse);
                walletKeyPair = accounts_1.loadWalletKey(keypair);
                mintKey = new anchor_1.web3.PublicKey(mint);
                auctionHouseKeypairLoaded = auctionHouseKeypair
                    ? accounts_1.loadWalletKey(auctionHouseKeypair)
                    : null;
                return [4 /*yield*/, accounts_1.loadAuctionHouseProgram(auctionHouseSigns ? auctionHouseKeypairLoaded : walletKeyPair, env)];
            case 1:
                anchorProgram = _d.sent();
                return [4 /*yield*/, anchorProgram.account.auctionHouse.fetch(auctionHouseKey)];
            case 2:
                auctionHouseObj = _d.sent();
                _b = anchor_1.BN.bind;
                return [4 /*yield*/, various_1.getPriceWithMantissa(buyPrice, 
                    //@ts-ignore
                    auctionHouseObj.treasuryMint, walletKeyPair, anchorProgram)];
            case 3:
                buyPriceAdjusted = new (_b.apply(anchor_1.BN, [void 0, _d.sent()]))();
                _c = anchor_1.BN.bind;
                return [4 /*yield*/, various_1.getPriceWithMantissa(tokenSize, mintKey, walletKeyPair, anchorProgram)];
            case 4:
                tokenSizeAdjusted = new (_c.apply(anchor_1.BN, [void 0, _d.sent()]))();
                return [4 /*yield*/, accounts_1.getAtaForMint(mintKey, walletKeyPair.publicKey)];
            case 5:
                tokenAccountKey = (_d.sent())[0];
                return [4 /*yield*/, accounts_1.getAuctionHouseTradeState(auctionHouseKey, walletKeyPair.publicKey, tokenAccountKey, 
                    //@ts-ignore
                    auctionHouseObj.treasuryMint, mintKey, tokenSizeAdjusted, buyPriceAdjusted)];
            case 6:
                tradeState = (_d.sent())[0];
                signers = [];
                return [4 /*yield*/, anchorProgram.instruction.cancel(buyPriceAdjusted, tokenSizeAdjusted, {
                        accounts: {
                            wallet: walletKeyPair.publicKey,
                            tokenAccount: tokenAccountKey,
                            tokenMint: mintKey,
                            //@ts-ignore
                            authority: auctionHouseObj.authority,
                            auctionHouse: auctionHouseKey,
                            //@ts-ignore
                            auctionHouseFeeAccount: auctionHouseObj.auctionHouseFeeAccount,
                            tradeState: tradeState,
                            tokenProgram: constants_1.TOKEN_PROGRAM_ID,
                        },
                        signers: signers,
                    })];
            case 7:
                instruction = _d.sent();
                if (auctionHouseKeypairLoaded) {
                    signers.push(auctionHouseKeypairLoaded);
                    instruction.keys
                        .filter(function (k) { return k.pubkey.equals(auctionHouseKeypairLoaded.publicKey); })
                        .map(function (k) { return (k.isSigner = true); });
                }
                if (!auctionHouseSigns) {
                    instruction.keys
                        .filter(function (k) { return k.pubkey.equals(walletKeyPair.publicKey); })
                        .map(function (k) { return (k.isSigner = true); });
                }
                return [4 /*yield*/, transactions_1.sendTransactionWithRetryWithKeypair(anchorProgram.provider.connection, auctionHouseSigns ? auctionHouseKeypairLoaded : walletKeyPair, [instruction], signers, 'max')];
            case 8:
                _d.sent();
                loglevel_1.default.info('Cancelled buy or sale of', tokenSize, mint, 'for', buyPrice, 'from your account with Auction House', auctionHouse);
                return [2 /*return*/];
        }
    });
}); });
programCommand('execute_sale')
    .option('-ah, --auction-house <string>', 'Specific auction house')
    .option('-ak, --auction-house-keypair <string>', 'If this auction house requires sign off, pass in keypair for it')
    .option('-aks, --auction-house-signs', 'If you want to simulate the auction house executing the sale without another signer')
    .option('-b, --buy-price <string>', 'Price you wish to sell for')
    .option('-m, --mint <string>', 'Mint of the token to purchase')
    .option('-t, --token-size <string>', 'Amount of tokens you want to sell')
    .option('-bw, --buyer-wallet <string>', 'Buyer wallet')
    .option('-sw, --seller-wallet <string>', 'Buyer wallet')
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    .action(function (directory, cmd) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, keypair, env, auctionHouse, auctionHouseKeypair, buyPrice, mint, tokenSize, auctionHouseSigns, buyerWallet, sellerWallet, auctionHouseKey, walletKeyPair, mintKey, auctionHouseKeypairLoaded, anchorProgram, auctionHouseObj, buyerWalletKey, sellerWalletKey, isNative, buyPriceAdjusted, _b, tokenSizeAdjusted, _c, tokenAccountKey, buyerTradeState, sellerTradeState, _d, freeTradeState, freeTradeStateBump, _e, escrowPaymentAccount, bump, _f, programAsSigner, programAsSignerBump, metadata, metadataObj, metadataDecoded, remainingAccounts, i, _g, _h, signers, tMint, instruction, _j, _k, _l, _m;
    var _o, _p, _q;
    return __generator(this, function (_r) {
        switch (_r.label) {
            case 0:
                _a = cmd.opts(), keypair = _a.keypair, env = _a.env, auctionHouse = _a.auctionHouse, auctionHouseKeypair = _a.auctionHouseKeypair, buyPrice = _a.buyPrice, mint = _a.mint, tokenSize = _a.tokenSize, auctionHouseSigns = _a.auctionHouseSigns, buyerWallet = _a.buyerWallet, sellerWallet = _a.sellerWallet;
                auctionHouseKey = new anchor_1.web3.PublicKey(auctionHouse);
                walletKeyPair = accounts_1.loadWalletKey(keypair);
                mintKey = new anchor_1.web3.PublicKey(mint);
                auctionHouseKeypairLoaded = auctionHouseKeypair
                    ? accounts_1.loadWalletKey(auctionHouseKeypair)
                    : null;
                return [4 /*yield*/, accounts_1.loadAuctionHouseProgram(auctionHouseSigns ? auctionHouseKeypairLoaded : walletKeyPair, env)];
            case 1:
                anchorProgram = _r.sent();
                return [4 /*yield*/, anchorProgram.account.auctionHouse.fetch(auctionHouseKey)];
            case 2:
                auctionHouseObj = _r.sent();
                buyerWalletKey = new anchor_1.web3.PublicKey(buyerWallet);
                sellerWalletKey = new anchor_1.web3.PublicKey(sellerWallet);
                isNative = auctionHouseObj.treasuryMint.equals(constants_1.WRAPPED_SOL_MINT);
                _b = anchor_1.BN.bind;
                return [4 /*yield*/, various_1.getPriceWithMantissa(buyPrice, 
                    //@ts-ignore
                    auctionHouseObj.treasuryMint, walletKeyPair, anchorProgram)];
            case 3:
                buyPriceAdjusted = new (_b.apply(anchor_1.BN, [void 0, _r.sent()]))();
                _c = anchor_1.BN.bind;
                return [4 /*yield*/, various_1.getPriceWithMantissa(tokenSize, mintKey, walletKeyPair, anchorProgram)];
            case 4:
                tokenSizeAdjusted = new (_c.apply(anchor_1.BN, [void 0, _r.sent()]))();
                return [4 /*yield*/, accounts_1.getAtaForMint(mintKey, sellerWalletKey)];
            case 5:
                tokenAccountKey = (_r.sent())[0];
                return [4 /*yield*/, accounts_1.getAuctionHouseTradeState(auctionHouseKey, buyerWalletKey, tokenAccountKey, 
                    //@ts-ignore
                    auctionHouseObj.treasuryMint, mintKey, tokenSizeAdjusted, buyPriceAdjusted)];
            case 6:
                buyerTradeState = (_r.sent())[0];
                return [4 /*yield*/, accounts_1.getAuctionHouseTradeState(auctionHouseKey, sellerWalletKey, tokenAccountKey, 
                    //@ts-ignore
                    auctionHouseObj.treasuryMint, mintKey, tokenSizeAdjusted, buyPriceAdjusted)];
            case 7:
                sellerTradeState = (_r.sent())[0];
                return [4 /*yield*/, accounts_1.getAuctionHouseTradeState(auctionHouseKey, sellerWalletKey, tokenAccountKey, 
                    //@ts-ignore
                    auctionHouseObj.treasuryMint, mintKey, tokenSizeAdjusted, new anchor_1.BN(0))];
            case 8:
                _d = __read.apply(void 0, [_r.sent(), 2]), freeTradeState = _d[0], freeTradeStateBump = _d[1];
                return [4 /*yield*/, accounts_1.getAuctionHouseBuyerEscrow(auctionHouseKey, buyerWalletKey)];
            case 9:
                _e = __read.apply(void 0, [_r.sent(), 2]), escrowPaymentAccount = _e[0], bump = _e[1];
                return [4 /*yield*/, accounts_1.getAuctionHouseProgramAsSigner()];
            case 10:
                _f = __read.apply(void 0, [_r.sent(), 2]), programAsSigner = _f[0], programAsSignerBump = _f[1];
                return [4 /*yield*/, accounts_1.getMetadata(mintKey)];
            case 11:
                metadata = _r.sent();
                return [4 /*yield*/, anchorProgram.provider.connection.getAccountInfo(metadata)];
            case 12:
                metadataObj = _r.sent();
                metadataDecoded = schema_1.decodeMetadata(Buffer.from(metadataObj.data));
                remainingAccounts = [];
                i = 0;
                _r.label = 13;
            case 13:
                if (!(i < metadataDecoded.data.creators.length)) return [3 /*break*/, 16];
                remainingAccounts.push({
                    pubkey: new anchor_1.web3.PublicKey(metadataDecoded.data.creators[i].address),
                    isWritable: true,
                    isSigner: false,
                });
                if (!!isNative) return [3 /*break*/, 15];
                _h = (_g = remainingAccounts).push;
                _o = {};
                return [4 /*yield*/, accounts_1.getAtaForMint(
                    //@ts-ignore
                    auctionHouseObj.treasuryMint, remainingAccounts[remainingAccounts.length - 1].pubkey)];
            case 14:
                _h.apply(_g, [(_o.pubkey = (_r.sent())[0],
                        _o.isWritable = true,
                        _o.isSigner = false,
                        _o)]);
                _r.label = 15;
            case 15:
                i++;
                return [3 /*break*/, 13];
            case 16:
                signers = [];
                tMint = auctionHouseObj.treasuryMint;
                _k = (_j = anchorProgram.instruction).executeSale;
                _l = [bump,
                    freeTradeStateBump,
                    programAsSignerBump,
                    buyPriceAdjusted,
                    tokenSizeAdjusted];
                _p = {};
                _q = {
                    buyer: buyerWalletKey,
                    seller: sellerWalletKey,
                    metadata: metadata,
                    tokenAccount: tokenAccountKey,
                    tokenMint: mintKey,
                    escrowPaymentAccount: escrowPaymentAccount,
                    treasuryMint: tMint
                };
                if (!isNative) return [3 /*break*/, 17];
                _m = sellerWalletKey;
                return [3 /*break*/, 19];
            case 17: return [4 /*yield*/, accounts_1.getAtaForMint(tMint, sellerWalletKey)];
            case 18:
                _m = (_r.sent())[0];
                _r.label = 19;
            case 19:
                _q.sellerPaymentReceiptAccount = _m;
                return [4 /*yield*/, accounts_1.getAtaForMint(mintKey, buyerWalletKey)];
            case 20: return [4 /*yield*/, _k.apply(_j, _l.concat([(_p.accounts = (_q.buyerReceiptTokenAccount = (_r.sent())[0],
                        //@ts-ignore
                        _q.authority = auctionHouseObj.authority,
                        _q.auctionHouse = auctionHouseKey,
                        //@ts-ignore
                        _q.auctionHouseFeeAccount = auctionHouseObj.auctionHouseFeeAccount,
                        //@ts-ignore
                        _q.auctionHouseTreasury = auctionHouseObj.auctionHouseTreasury,
                        _q.sellerTradeState = sellerTradeState,
                        _q.buyerTradeState = buyerTradeState,
                        _q.tokenProgram = constants_1.TOKEN_PROGRAM_ID,
                        _q.systemProgram = anchor_1.web3.SystemProgram.programId,
                        _q.ataProgram = safe_token_1.ASSOCIATED_TOKEN_PROGRAM_ID,
                        _q.programAsSigner = programAsSigner,
                        _q.rent = anchor_1.web3.SYSVAR_RENT_PUBKEY,
                        _q.freeTradeState = freeTradeState,
                        _q),
                        _p.remainingAccounts = remainingAccounts,
                        _p.signers = signers,
                        _p)]))];
            case 21:
                instruction = _r.sent();
                if (auctionHouseKeypairLoaded) {
                    signers.push(auctionHouseKeypairLoaded);
                    instruction.keys
                        .filter(function (k) { return k.pubkey.equals(auctionHouseKeypairLoaded.publicKey); })
                        .map(function (k) { return (k.isSigner = true); });
                }
                if (!auctionHouseSigns) {
                    instruction.keys
                        .filter(function (k) { return k.pubkey.equals(walletKeyPair.publicKey); })
                        .map(function (k) { return (k.isSigner = true); });
                }
                return [4 /*yield*/, transactions_1.sendTransactionWithRetryWithKeypair(anchorProgram.provider.connection, auctionHouseSigns ? auctionHouseKeypairLoaded : walletKeyPair, [instruction], signers, 'max')];
            case 22:
                _r.sent();
                loglevel_1.default.info('Accepted', tokenSize, mint, 'sale from wallet', sellerWalletKey.toBase58(), 'to', buyerWalletKey.toBase58(), 'for', buyPrice, 'from your account with Auction House', auctionHouse);
                return [2 /*return*/];
        }
    });
}); });
programCommand('buy')
    .option('-ah, --auction-house <string>', 'Specific auction house')
    .option('-ak, --auction-house-keypair <string>', 'If this auction house requires sign off, pass in keypair for it')
    .option('-b, --buy-price <string>', 'Price you wish to purchase for')
    .option('-m, --mint <string>', 'Mint of the token to purchase')
    .option('-ta, --token-account <string>', 'Token account of the token to purchase - defaults to finding the one with highest balance (for NFTs)')
    .option('-t, --token-size <string>', 'Amount of tokens you want to purchase')
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    .action(function (directory, cmd) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, keypair, env, auctionHouse, auctionHouseKeypair, buyPrice, mint, tokenSize, tokenAccount, auctionHouseKey, walletKeyPair, mintKey, auctionHouseKeypairLoaded, anchorProgram, auctionHouseObj, buyPriceAdjusted, _b, tokenSizeAdjusted, _c, _d, escrowPaymentAccount, escrowBump, results, tokenAccountKey, _e, tradeState, tradeBump, isNative, ata, transferAuthority, signers, instruction, _f, _g, _h, instructions;
    var _j, _k;
    return __generator(this, function (_l) {
        switch (_l.label) {
            case 0:
                _a = cmd.opts(), keypair = _a.keypair, env = _a.env, auctionHouse = _a.auctionHouse, auctionHouseKeypair = _a.auctionHouseKeypair, buyPrice = _a.buyPrice, mint = _a.mint, tokenSize = _a.tokenSize, tokenAccount = _a.tokenAccount;
                auctionHouseKey = new anchor_1.web3.PublicKey(auctionHouse);
                walletKeyPair = accounts_1.loadWalletKey(keypair);
                mintKey = new anchor_1.web3.PublicKey(mint);
                auctionHouseKeypairLoaded = auctionHouseKeypair
                    ? accounts_1.loadWalletKey(auctionHouseKeypair)
                    : null;
                return [4 /*yield*/, accounts_1.loadAuctionHouseProgram(walletKeyPair, env)];
            case 1:
                anchorProgram = _l.sent();
                return [4 /*yield*/, anchorProgram.account.auctionHouse.fetch(auctionHouseKey)];
            case 2:
                auctionHouseObj = _l.sent();
                _b = anchor_1.BN.bind;
                return [4 /*yield*/, various_1.getPriceWithMantissa(buyPrice, 
                    //@ts-ignore
                    auctionHouseObj.treasuryMint, walletKeyPair, anchorProgram)];
            case 3:
                buyPriceAdjusted = new (_b.apply(anchor_1.BN, [void 0, _l.sent()]))();
                _c = anchor_1.BN.bind;
                return [4 /*yield*/, various_1.getPriceWithMantissa(tokenSize, mintKey, walletKeyPair, anchorProgram)];
            case 4:
                tokenSizeAdjusted = new (_c.apply(anchor_1.BN, [void 0, _l.sent()]))();
                return [4 /*yield*/, accounts_1.getAuctionHouseBuyerEscrow(auctionHouseKey, walletKeyPair.publicKey)];
            case 5:
                _d = __read.apply(void 0, [_l.sent(), 2]), escrowPaymentAccount = _d[0], escrowBump = _d[1];
                return [4 /*yield*/, anchorProgram.provider.connection.getTokenLargestAccounts(mintKey)];
            case 6:
                results = _l.sent();
                tokenAccountKey = tokenAccount
                    ? new anchor_1.web3.PublicKey(tokenAccount)
                    : results.value[0].address;
                return [4 /*yield*/, accounts_1.getAuctionHouseTradeState(auctionHouseKey, walletKeyPair.publicKey, tokenAccountKey, 
                    //@ts-ignore
                    auctionHouseObj.treasuryMint, mintKey, tokenSizeAdjusted, buyPriceAdjusted)];
            case 7:
                _e = __read.apply(void 0, [_l.sent(), 2]), tradeState = _e[0], tradeBump = _e[1];
                isNative = auctionHouseObj.treasuryMint.equals(constants_1.WRAPPED_SOL_MINT);
                return [4 /*yield*/, accounts_1.getAtaForMint(
                    //@ts-ignore
                    auctionHouseObj.treasuryMint, walletKeyPair.publicKey)];
            case 8:
                ata = (_l.sent())[0];
                transferAuthority = anchor_1.web3.Keypair.generate();
                signers = isNative ? [] : [transferAuthority];
                _g = (_f = anchorProgram.instruction).buy;
                _h = [tradeBump,
                    escrowBump,
                    buyPriceAdjusted,
                    tokenSizeAdjusted];
                _j = {};
                _k = {
                    wallet: walletKeyPair.publicKey,
                    paymentAccount: isNative ? walletKeyPair.publicKey : ata,
                    transferAuthority: isNative
                        ? anchor_1.web3.SystemProgram.programId
                        : transferAuthority.publicKey
                };
                return [4 /*yield*/, accounts_1.getMetadata(mintKey)];
            case 9: return [4 /*yield*/, _g.apply(_f, _h.concat([(_j.accounts = (_k.metadata = _l.sent(),
                        _k.tokenAccount = tokenAccountKey,
                        _k.escrowPaymentAccount = escrowPaymentAccount,
                        //@ts-ignore
                        _k.treasuryMint = auctionHouseObj.treasuryMint,
                        //@ts-ignore
                        _k.authority = auctionHouseObj.authority,
                        _k.auctionHouse = auctionHouseKey,
                        //@ts-ignore
                        _k.auctionHouseFeeAccount = auctionHouseObj.auctionHouseFeeAccount,
                        _k.buyerTradeState = tradeState,
                        _k.tokenProgram = constants_1.TOKEN_PROGRAM_ID,
                        _k.systemProgram = anchor_1.web3.SystemProgram.programId,
                        _k.rent = anchor_1.web3.SYSVAR_RENT_PUBKEY,
                        _k),
                        _j)]))];
            case 10:
                instruction = _l.sent();
                if (auctionHouseKeypairLoaded) {
                    signers.push(auctionHouseKeypairLoaded);
                    instruction.keys
                        .filter(function (k) { return k.pubkey.equals(auctionHouseKeypairLoaded.publicKey); })
                        .map(function (k) { return (k.isSigner = true); });
                }
                if (!isNative) {
                    instruction.keys
                        .filter(function (k) { return k.pubkey.equals(transferAuthority.publicKey); })
                        .map(function (k) { return (k.isSigner = true); });
                }
                instructions = __spreadArray(__spreadArray(__spreadArray([], __read((isNative
                    ? []
                    : [
                        safe_token_1.Token.createApproveInstruction(constants_1.TOKEN_PROGRAM_ID, ata, transferAuthority.publicKey, walletKeyPair.publicKey, [], buyPriceAdjusted.toNumber()),
                    ]))), [
                    instruction
                ]), __read((isNative
                    ? []
                    : [
                        safe_token_1.Token.createRevokeInstruction(constants_1.TOKEN_PROGRAM_ID, ata, walletKeyPair.publicKey, []),
                    ])));
                return [4 /*yield*/, transactions_1.sendTransactionWithRetryWithKeypair(anchorProgram.provider.connection, walletKeyPair, instructions, signers, 'max')];
            case 11:
                _l.sent();
                loglevel_1.default.info('Made offer for ', buyPrice);
                return [2 /*return*/];
        }
    });
}); });
programCommand('deposit')
    .option('-ah, --auction-house <string>', 'Specific auction house')
    .option('-ak, --auction-house-keypair <string>', 'If this auction house requires sign off, pass in keypair for it')
    .option('-a, --amount <string>', 'Amount to deposit')
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    .action(function (directory, cmd) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, keypair, env, amount, auctionHouse, auctionHouseKeypair, auctionHouseKey, walletKeyPair, auctionHouseKeypairLoaded, anchorProgram, auctionHouseObj, amountAdjusted, _b, escrowPaymentAccount, bump, isNative, ata, transferAuthority, signers, instruction, currBal, instructions;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                _a = cmd.opts(), keypair = _a.keypair, env = _a.env, amount = _a.amount, auctionHouse = _a.auctionHouse, auctionHouseKeypair = _a.auctionHouseKeypair;
                auctionHouseKey = new anchor_1.web3.PublicKey(auctionHouse);
                walletKeyPair = accounts_1.loadWalletKey(keypair);
                auctionHouseKeypairLoaded = auctionHouseKeypair
                    ? accounts_1.loadWalletKey(auctionHouseKeypair)
                    : null;
                return [4 /*yield*/, accounts_1.loadAuctionHouseProgram(walletKeyPair, env)];
            case 1:
                anchorProgram = _c.sent();
                return [4 /*yield*/, anchorProgram.account.auctionHouse.fetch(auctionHouseKey)];
            case 2:
                auctionHouseObj = _c.sent();
                return [4 /*yield*/, various_1.getPriceWithMantissa(amount, 
                    //@ts-ignore
                    auctionHouseObj.treasuryMint, walletKeyPair, anchorProgram)];
            case 3:
                amountAdjusted = _c.sent();
                return [4 /*yield*/, accounts_1.getAuctionHouseBuyerEscrow(auctionHouseKey, walletKeyPair.publicKey)];
            case 4:
                _b = __read.apply(void 0, [_c.sent(), 2]), escrowPaymentAccount = _b[0], bump = _b[1];
                isNative = auctionHouseObj.treasuryMint.equals(constants_1.WRAPPED_SOL_MINT);
                return [4 /*yield*/, accounts_1.getAtaForMint(
                    //@ts-ignore
                    auctionHouseObj.treasuryMint, walletKeyPair.publicKey)];
            case 5:
                ata = (_c.sent())[0];
                transferAuthority = anchor_1.web3.Keypair.generate();
                signers = isNative ? [] : [transferAuthority];
                return [4 /*yield*/, anchorProgram.instruction.deposit(bump, new anchor_1.BN(amountAdjusted), {
                        accounts: {
                            wallet: walletKeyPair.publicKey,
                            paymentAccount: isNative ? walletKeyPair.publicKey : ata,
                            transferAuthority: isNative
                                ? anchor_1.web3.SystemProgram.programId
                                : transferAuthority.publicKey,
                            escrowPaymentAccount: escrowPaymentAccount,
                            //@ts-ignore
                            treasuryMint: auctionHouseObj.treasuryMint,
                            //@ts-ignore
                            authority: auctionHouseObj.authority,
                            auctionHouse: auctionHouseKey,
                            //@ts-ignore
                            auctionHouseFeeAccount: auctionHouseObj.auctionHouseFeeAccount,
                            tokenProgram: constants_1.TOKEN_PROGRAM_ID,
                            systemProgram: anchor_1.web3.SystemProgram.programId,
                            rent: anchor_1.web3.SYSVAR_RENT_PUBKEY,
                        },
                    })];
            case 6:
                instruction = _c.sent();
                if (auctionHouseKeypairLoaded) {
                    signers.push(auctionHouseKeypairLoaded);
                    instruction.keys
                        .filter(function (k) { return k.pubkey.equals(auctionHouseKeypairLoaded.publicKey); })
                        .map(function (k) { return (k.isSigner = true); });
                }
                if (!isNative) {
                    instruction.keys
                        .filter(function (k) { return k.pubkey.equals(transferAuthority.publicKey); })
                        .map(function (k) { return (k.isSigner = true); });
                }
                return [4 /*yield*/, accounts_1.getTokenAmount(anchorProgram, escrowPaymentAccount, 
                    //@ts-ignore
                    auctionHouseObj.treasuryMint)];
            case 7:
                currBal = _c.sent();
                instructions = __spreadArray(__spreadArray(__spreadArray([], __read((isNative
                    ? []
                    : [
                        safe_token_1.Token.createApproveInstruction(constants_1.TOKEN_PROGRAM_ID, ata, transferAuthority.publicKey, walletKeyPair.publicKey, [], amountAdjusted),
                    ]))), [
                    instruction
                ]), __read((isNative
                    ? []
                    : [
                        safe_token_1.Token.createRevokeInstruction(constants_1.TOKEN_PROGRAM_ID, ata, walletKeyPair.publicKey, []),
                    ])));
                return [4 /*yield*/, transactions_1.sendTransactionWithRetryWithKeypair(anchorProgram.provider.connection, walletKeyPair, instructions, signers, 'max')];
            case 8:
                _c.sent();
                loglevel_1.default.info('Deposited ', amountAdjusted, 'to your account with Auction House', auctionHouse, '. New Balance:', currBal + amountAdjusted);
                return [2 /*return*/];
        }
    });
}); });
programCommand('show')
    .option('-tm, --treasury-mint <string>', 'Optional. Mint address of treasury. If not used, default to SOL. Ignored if providing -ah arg')
    .option('-ah, --auction-house <string>', 'Specific auction house(if not provided, we assume you are asking for your own)')
    .action(function (directory, cmd) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, keypair, env, auctionHouse, treasuryMint, walletKeyPair, anchorProgram, tMintKey, auctionHouseKey, auctionHouseObj, treasuryAmount, feeAmount;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _a = cmd.opts(), keypair = _a.keypair, env = _a.env, auctionHouse = _a.auctionHouse, treasuryMint = _a.treasuryMint;
                walletKeyPair = accounts_1.loadWalletKey(keypair);
                return [4 /*yield*/, accounts_1.loadAuctionHouseProgram(walletKeyPair, env)];
            case 1:
                anchorProgram = _b.sent();
                if (!treasuryMint) {
                    loglevel_1.default.info('No treasury mint detected, using SOL.');
                    tMintKey = constants_1.WRAPPED_SOL_MINT;
                }
                else {
                    tMintKey = new anchor_1.web3.PublicKey(treasuryMint);
                }
                return [4 /*yield*/, getAuctionHouseFromOpts(auctionHouse, walletKeyPair, tMintKey)];
            case 2:
                auctionHouseKey = _b.sent();
                return [4 /*yield*/, anchorProgram.account.auctionHouse.fetch(auctionHouseKey)];
            case 3:
                auctionHouseObj = _b.sent();
                return [4 /*yield*/, accounts_1.getTokenAmount(anchorProgram, 
                    //@ts-ignore
                    auctionHouseObj.auctionHouseTreasury, 
                    //@ts-ignore
                    auctionHouseObj.treasuryMint)];
            case 4:
                treasuryAmount = _b.sent();
                return [4 /*yield*/, anchorProgram.provider.connection.getBalance(
                    //@ts-ignore
                    auctionHouseObj.auctionHouseFeeAccount)];
            case 5:
                feeAmount = _b.sent();
                loglevel_1.default.info('-----');
                loglevel_1.default.info('Auction House:', auctionHouseKey.toBase58());
                //@ts-ignore
                loglevel_1.default.info('Mint:', auctionHouseObj.treasuryMint.toBase58());
                //@ts-ignore
                loglevel_1.default.info('Authority:', auctionHouseObj.authority.toBase58());
                //@ts-ignore
                loglevel_1.default.info('Creator:', auctionHouseObj.creator.toBase58());
                loglevel_1.default.info('Fee Payer Acct:', 
                //@ts-ignore
                auctionHouseObj.auctionHouseFeeAccount.toBase58());
                //@ts-ignore
                loglevel_1.default.info('Treasury Acct:', auctionHouseObj.auctionHouseTreasury.toBase58());
                loglevel_1.default.info('Fee Payer Withdrawal Acct:', 
                //@ts-ignore
                auctionHouseObj.feeWithdrawalDestination.toBase58());
                loglevel_1.default.info('Treasury Withdrawal Acct:', 
                //@ts-ignore
                auctionHouseObj.treasuryWithdrawalDestination.toBase58());
                loglevel_1.default.info('Fee Payer Bal:', feeAmount);
                loglevel_1.default.info('Treasury Bal:', treasuryAmount);
                //@ts-ignore
                loglevel_1.default.info('Seller Fee Basis Points:', auctionHouseObj.sellerFeeBasisPoints);
                //@ts-ignore
                loglevel_1.default.info('Requires Sign Off:', auctionHouseObj.requiresSignOff);
                //@ts-ignore
                loglevel_1.default.info('Can Change Sale Price:', auctionHouseObj.canChangeSalePrice);
                //@ts-ignore
                loglevel_1.default.info('AH Bump:', auctionHouseObj.bump);
                //@ts-ignore
                loglevel_1.default.info('AH Fee Bump:', auctionHouseObj.feePayerBump);
                //@ts-ignore
                loglevel_1.default.info('AH Treasury Bump:', auctionHouseObj.treasuryBump);
                return [2 /*return*/];
        }
    });
}); });
programCommand('create_auction_house')
    .option('-tm, --treasury-mint <string>', 'Mint address of treasury. If not used, default to SOL.')
    .option('-sfbp, --seller-fee-basis-points <string>', 'Auction house cut of each txn, 10000 = 100%')
    .option('-ccsp, --can-change-sale-price <string>', 'if true, and user initially places item for sale for 0, then AH can make new sell prices without consent(off chain price matching). Should only be used in concert with requires-sign-off, so AH is controlling every txn hitting the system.')
    .option('-rso, --requires-sign-off <string>', 'if true, no txn can occur against this Auction House without AH authority as signer. Good if you are doing all txns through a pass-through GCP or something.')
    .option('-twd, --treasury-withdrawal-destination <string>', 'if you wish to empty the treasury account, this is where it will land, default is your keypair. Pass in a wallet, not an ATA - ATA will be made for you if not present.')
    .option('-fwd, --fee-withdrawal-destination <string>', 'if you wish to empty the fee paying account, this is where it will land, default is your keypair')
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    .action(function (directory, cmd) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, keypair, env, sellerFeeBasisPoints, canChangeSalePrice, requiresSignOff, treasuryWithdrawalDestination, feeWithdrawalDestination, treasuryMint, sfbp, walletKeyPair, anchorProgram, twdKey, fwdKey, tMintKey, twdAta, _b, _c, auctionHouse, bump, _d, feeAccount, feeBump, _e, treasuryAccount, treasuryBump;
    return __generator(this, function (_f) {
        switch (_f.label) {
            case 0:
                _a = cmd.opts(), keypair = _a.keypair, env = _a.env, sellerFeeBasisPoints = _a.sellerFeeBasisPoints, canChangeSalePrice = _a.canChangeSalePrice, requiresSignOff = _a.requiresSignOff, treasuryWithdrawalDestination = _a.treasuryWithdrawalDestination, feeWithdrawalDestination = _a.feeWithdrawalDestination, treasuryMint = _a.treasuryMint;
                sfbp = parseInt(sellerFeeBasisPoints);
                walletKeyPair = accounts_1.loadWalletKey(keypair);
                return [4 /*yield*/, accounts_1.loadAuctionHouseProgram(walletKeyPair, env)];
            case 1:
                anchorProgram = _f.sent();
                if (!treasuryWithdrawalDestination) {
                    loglevel_1.default.info('No treasury withdrawal dest detected, using keypair');
                    twdKey = walletKeyPair.publicKey;
                }
                else {
                    twdKey = new anchor_1.web3.PublicKey(treasuryWithdrawalDestination);
                }
                if (!feeWithdrawalDestination) {
                    loglevel_1.default.info('No fee withdrawal dest detected, using keypair');
                    fwdKey = walletKeyPair.publicKey;
                }
                else {
                    fwdKey = new anchor_1.web3.PublicKey(feeWithdrawalDestination);
                }
                if (!treasuryMint) {
                    loglevel_1.default.info('No treasury mint detected, using SOL.');
                    tMintKey = constants_1.WRAPPED_SOL_MINT;
                }
                else {
                    tMintKey = new anchor_1.web3.PublicKey(treasuryMint);
                }
                if (!tMintKey.equals(constants_1.WRAPPED_SOL_MINT)) return [3 /*break*/, 2];
                _b = twdKey;
                return [3 /*break*/, 4];
            case 2: return [4 /*yield*/, accounts_1.getAtaForMint(tMintKey, twdKey)];
            case 3:
                _b = (_f.sent())[0];
                _f.label = 4;
            case 4:
                twdAta = _b;
                return [4 /*yield*/, accounts_1.getAuctionHouse(walletKeyPair.publicKey, tMintKey)];
            case 5:
                _c = __read.apply(void 0, [_f.sent(), 2]), auctionHouse = _c[0], bump = _c[1];
                return [4 /*yield*/, accounts_1.getAuctionHouseFeeAcct(auctionHouse)];
            case 6:
                _d = __read.apply(void 0, [_f.sent(), 2]), feeAccount = _d[0], feeBump = _d[1];
                return [4 /*yield*/, accounts_1.getAuctionHouseTreasuryAcct(auctionHouse)];
            case 7:
                _e = __read.apply(void 0, [_f.sent(), 2]), treasuryAccount = _e[0], treasuryBump = _e[1];
                return [4 /*yield*/, anchorProgram.rpc.createAuctionHouse(bump, feeBump, treasuryBump, sfbp, requiresSignOff == 'true', canChangeSalePrice == 'true', {
                        accounts: {
                            treasuryMint: tMintKey,
                            payer: walletKeyPair.publicKey,
                            authority: walletKeyPair.publicKey,
                            feeWithdrawalDestination: fwdKey,
                            treasuryWithdrawalDestination: twdAta,
                            treasuryWithdrawalDestinationOwner: twdKey,
                            auctionHouse: auctionHouse,
                            auctionHouseFeeAccount: feeAccount,
                            auctionHouseTreasury: treasuryAccount,
                            tokenProgram: constants_1.TOKEN_PROGRAM_ID,
                            systemProgram: anchor_1.web3.SystemProgram.programId,
                            ataProgram: safe_token_1.ASSOCIATED_TOKEN_PROGRAM_ID,
                            rent: anchor_1.web3.SYSVAR_RENT_PUBKEY,
                        },
                    })];
            case 8:
                _f.sent();
                loglevel_1.default.info('Created auction house', auctionHouse.toBase58());
                return [2 /*return*/];
        }
    });
}); });
programCommand('update_auction_house')
    .option('-tm, --treasury-mint <string>', 'Mint address of treasury used during creation. If not used, default to SOL. Ignored if providing -ah arg')
    .option('-ah, --auction-house <string>', 'Specific auction house(if not provided, we assume you are asking for your own)')
    .option('-a, --new-authority <string>', 'New authority of auction house - defaults to current authority')
    .option('-f, --force', 'Cannot set authority without this flag being set.')
    .option('-sfbp, --seller-fee-basis-points <string>', 'Auction house cut of each txn, 10000 = 100%')
    .option('-ccsp, --can-change-sale-price <string>', 'if true, and user initially places item for sale for 0, then AH can make new sell prices without consent(off chain price matching). Should only be used in concert with requires-sign-off, so AH is controlling every txn hitting the system.')
    .option('-rso, --requires-sign-off <string>', 'if true, no txn can occur against this Auction House without AH authority as signer. Good if you are doing all txns through a pass-through GCP or something.')
    .option('-twd, --treasury-withdrawal-destination <string>', 'if you wish to empty the treasury account, this is where it will land, default is your keypair. Pass in a wallet, not an ATA - ATA will be made for you if not present.')
    .option('-fwd, --fee-withdrawal-destination <string>', 'if you wish to empty the fee paying account, this is where it will land, default is your keypair')
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    .action(function (directory, cmd) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, keypair, env, sellerFeeBasisPoints, canChangeSalePrice, requiresSignOff, treasuryWithdrawalDestination, feeWithdrawalDestination, treasuryMint, auctionHouse, newAuthority, force, walletKeyPair, anchorProgram, tMintKey, auctionHouseKey, auctionHouseObj, twdKey, fwdKey, _b, _c, _d, _e, twdAta, _f, sfbp, newAuth, ccsp, rso;
    return __generator(this, function (_g) {
        switch (_g.label) {
            case 0:
                _a = cmd.opts(), keypair = _a.keypair, env = _a.env, sellerFeeBasisPoints = _a.sellerFeeBasisPoints, canChangeSalePrice = _a.canChangeSalePrice, requiresSignOff = _a.requiresSignOff, treasuryWithdrawalDestination = _a.treasuryWithdrawalDestination, feeWithdrawalDestination = _a.feeWithdrawalDestination, treasuryMint = _a.treasuryMint, auctionHouse = _a.auctionHouse, newAuthority = _a.newAuthority, force = _a.force;
                walletKeyPair = accounts_1.loadWalletKey(keypair);
                return [4 /*yield*/, accounts_1.loadAuctionHouseProgram(walletKeyPair, env)];
            case 1:
                anchorProgram = _g.sent();
                if (!treasuryMint) {
                    loglevel_1.default.info('No treasury mint detected, using SOL.');
                    tMintKey = constants_1.WRAPPED_SOL_MINT;
                }
                else {
                    tMintKey = new anchor_1.web3.PublicKey(treasuryMint);
                }
                return [4 /*yield*/, getAuctionHouseFromOpts(auctionHouse, walletKeyPair, tMintKey)];
            case 2:
                auctionHouseKey = _g.sent();
                return [4 /*yield*/, anchorProgram.account.auctionHouse.fetch(auctionHouseKey)];
            case 3:
                auctionHouseObj = _g.sent();
                //@ts-ignore
                tMintKey = auctionHouseObj.treasuryMint;
                if (!!treasuryWithdrawalDestination) return [3 /*break*/, 7];
                loglevel_1.default.info('No treasury withdrawal dest detected, using original value');
                if (!tMintKey.equals(constants_1.WRAPPED_SOL_MINT)) return [3 /*break*/, 4];
                _b = auctionHouseObj.treasuryWithdrawalDestination;
                return [3 /*break*/, 6];
            case 4:
                _c = accounts_1.deserializeAccount;
                _e = (_d = Buffer).from;
                return [4 /*yield*/, anchorProgram.provider.connection.getAccountInfo(
                    //@ts-ignore
                    auctionHouseObj.treasuryWithdrawalDestination)];
            case 5:
                _b = _c.apply(void 0, [_e.apply(_d, [(_g.sent()).data])]).owner;
                _g.label = 6;
            case 6:
                twdKey = _b;
                return [3 /*break*/, 8];
            case 7:
                twdKey = new anchor_1.web3.PublicKey(treasuryWithdrawalDestination);
                _g.label = 8;
            case 8:
                if (!feeWithdrawalDestination) {
                    loglevel_1.default.info('No fee withdrawal dest detected, using original value');
                    //@ts-ignore
                    fwdKey = auctionHouseObj.feeWithdrawalDestination;
                }
                else {
                    fwdKey = new anchor_1.web3.PublicKey(feeWithdrawalDestination);
                }
                if (!tMintKey.equals(constants_1.WRAPPED_SOL_MINT)) return [3 /*break*/, 9];
                _f = twdKey;
                return [3 /*break*/, 11];
            case 9: return [4 /*yield*/, accounts_1.getAtaForMint(tMintKey, twdKey)];
            case 10:
                _f = (_g.sent())[0];
                _g.label = 11;
            case 11:
                twdAta = _f;
                if (sellerFeeBasisPoints != undefined && sellerFeeBasisPoints != null) {
                    sfbp = parseInt(sellerFeeBasisPoints);
                }
                else {
                    loglevel_1.default.info('No sfbp passed in, using original value');
                    //@ts-ignore
                    sfbp = auctionHouseObj.sellerFeeBasisPoints;
                }
                if (newAuthority != undefined && newAuthority != null) {
                    if (!force) {
                        throw Error('Cannot change authority without additional force flag. Are you sure you want to do this?');
                    }
                    newAuth = newAuthority;
                }
                else {
                    loglevel_1.default.info('No authority passed in, using original value');
                    //@ts-ignore
                    newAuth = auctionHouseObj.authority;
                }
                if (canChangeSalePrice != undefined && canChangeSalePrice != null) {
                    ccsp = canChangeSalePrice == 'true';
                }
                else {
                    loglevel_1.default.info('No can change sale price passed in, using original value');
                    //@ts-ignore
                    ccsp = auctionHouseObj.canChangeSalePrice;
                }
                if (requiresSignOff != undefined && requiresSignOff != null) {
                    rso = requiresSignOff == 'true';
                }
                else {
                    loglevel_1.default.info('No requires sign off passed in, using original value');
                    //@ts-ignore
                    rso = auctionHouseObj.requiresSignOff;
                }
                return [4 /*yield*/, anchorProgram.rpc.updateAuctionHouse(sfbp, rso, ccsp, {
                        accounts: {
                            treasuryMint: tMintKey,
                            payer: walletKeyPair.publicKey,
                            authority: walletKeyPair.publicKey,
                            // extra safety here even though newAuth should be right
                            //@ts-ignore
                            newAuthority: force ? newAuth : auctionHouseObj.authority,
                            feeWithdrawalDestination: fwdKey,
                            treasuryWithdrawalDestination: twdAta,
                            treasuryWithdrawalDestinationOwner: twdKey,
                            auctionHouse: auctionHouseKey,
                            //@ts-ignore
                            auctionHouseFeeAccount: auctionHouseObj.feePayer,
                            //@ts-ignore
                            auctionHouseTreasury: auctionHouseObj.treasury,
                            tokenProgram: constants_1.TOKEN_PROGRAM_ID,
                            systemProgram: anchor_1.web3.SystemProgram.programId,
                            ataProgram: safe_token_1.ASSOCIATED_TOKEN_PROGRAM_ID,
                            rent: anchor_1.web3.SYSVAR_RENT_PUBKEY,
                        },
                    })];
            case 12:
                _g.sent();
                loglevel_1.default.info('Updated auction house', auctionHouseKey.toBase58());
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
