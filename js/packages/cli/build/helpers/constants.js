"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EXTENSION_JSON = exports.EXTENSION_PNG = exports.DEFAULT_TIMEOUT = exports.CACHE_PATH = exports.CONFIG_LINE_SIZE = exports.CONFIG_ARRAY_START = exports.GUMDROP_TEMPORAL_SIGNER = exports.GUMDROP_DISTRIBUTOR_ID = exports.WRAPPED_SOL_MINT = exports.TOKEN_ENTANGLEMENT_PROGRAM_ID = exports.AUCTION_HOUSE_PROGRAM_ID = exports.FAIR_LAUNCH_PROGRAM_ID = exports.TOKEN_PROGRAM_ID = exports.SPL_ASSOCIATED_TOKEN_ACCOUNT_PROGRAM_ID = exports.TOKEN_METADATA_PROGRAM_ID = exports.CANDY_MACHINE_PROGRAM_ID = exports.ARWEAVE_PAYMENT_WALLET = exports.MAX_CREATOR_LEN = exports.MAX_SYMBOL_LENGTH = exports.MAX_URI_LENGTH = exports.MAX_NAME_LENGTH = exports.TREASURY = exports.FEE_PAYER = exports.B = exports.A = exports.ESCROW = exports.TOKEN_ENTANGLER = exports.AUCTION_HOUSE = exports.CANDY_MACHINE = void 0;
var web3_js_1 = require("@safecoin/web3.js");
exports.CANDY_MACHINE = 'candy_machine';
exports.AUCTION_HOUSE = 'auction_house';
exports.TOKEN_ENTANGLER = 'token_entangler';
exports.ESCROW = 'escrow';
exports.A = 'A';
exports.B = 'B';
exports.FEE_PAYER = 'fee_payer';
exports.TREASURY = 'treasury';
exports.MAX_NAME_LENGTH = 32;
exports.MAX_URI_LENGTH = 200;
exports.MAX_SYMBOL_LENGTH = 10;
exports.MAX_CREATOR_LEN = 32 + 1 + 1;
exports.ARWEAVE_PAYMENT_WALLET = new web3_js_1.PublicKey('6FKvsq4ydWFci6nGq9ckbjYMtnmaqAoatz5c9XWjiDuS');
exports.CANDY_MACHINE_PROGRAM_ID = new web3_js_1.PublicKey('Fge8g9NWgysGk2FdqMFxWaZ8mNLWFZydRquWqVdSfh2N');
exports.TOKEN_METADATA_PROGRAM_ID = new web3_js_1.PublicKey('9VDp1UoquCEaDs42go4ubDvzHBH4S4a295nDNuAXPvYm');
exports.SPL_ASSOCIATED_TOKEN_ACCOUNT_PROGRAM_ID = new web3_js_1.PublicKey('ATokenGPvbdGVxr1b2hvZbsiqW5xWH25efTNsLJA8knL');
exports.TOKEN_PROGRAM_ID = new web3_js_1.PublicKey('TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA');
exports.FAIR_LAUNCH_PROGRAM_ID = new web3_js_1.PublicKey('HNFJk792yXNPAkHu2ZJodk28mfoSttWX7TWd8FcPSYvR');
exports.AUCTION_HOUSE_PROGRAM_ID = new web3_js_1.PublicKey('56gcEM7RFeoAvZzgdWLfhi53bdNPd4doTodaJHcn5pZt');
exports.TOKEN_ENTANGLEMENT_PROGRAM_ID = new web3_js_1.PublicKey('qntmGodpGkrM42mN68VCZHXnKqDCT8rdY23wFcXCLPd');
exports.WRAPPED_SOL_MINT = new web3_js_1.PublicKey('So11111111111111111111111111111111111111112');
exports.GUMDROP_DISTRIBUTOR_ID = new web3_js_1.PublicKey('HPh9XLtCU1LcMi3pSYBkptAZjkue1xKZ7MmzSDWiynKK');
exports.GUMDROP_TEMPORAL_SIGNER = new web3_js_1.PublicKey('MSv9H2sMceAzccBganUXwGq3GXgqYAstmZAbFDZYbAV');
exports.CONFIG_ARRAY_START = 32 + // authority
    4 +
    6 + // uuid + u32 len
    4 +
    10 + // u32 len + symbol
    2 + // seller fee basis points
    1 +
    4 +
    5 * 34 + // optional + u32 len + actual vec
    8 + //max supply
    1 + //is mutable
    1 + // retain authority
    4; // max number of lines;
exports.CONFIG_LINE_SIZE = 4 + 32 + 4 + 200;
exports.CACHE_PATH = './.cache';
exports.DEFAULT_TIMEOUT = 15000;
exports.EXTENSION_PNG = '.png';
exports.EXTENSION_JSON = '.json';
