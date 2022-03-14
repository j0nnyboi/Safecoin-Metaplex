"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SYSTEM = exports.ORACLE_ID = exports.PACK_CREATE_ID = exports.METAPLEX_ID = exports.AUCTION_ID = exports.VAULT_ID = exports.METADATA_PROGRAM_ID = exports.MEMO_ID = exports.BPF_UPGRADE_LOADER_ID = exports.SPL_ASSOCIATED_TOKEN_ACCOUNT_PROGRAM_ID = exports.TOKEN_PROGRAM_ID = exports.WRAPPED_SOL_MINT = exports.pubkeyToString = exports.toPublicKey = exports.LazyAccountInfoProxy = void 0;
const web3_js_1 = require("@safecoin/web3.js");
class LazyAccountInfoProxy {
    constructor() {
        this.executable = false;
        this.owner = '';
        this.lamports = 0;
    }
    get data() {
        //
        return undefined;
    }
}
exports.LazyAccountInfoProxy = LazyAccountInfoProxy;
const PubKeysInternedMap = new Map();
const toPublicKey = (key) => {
    if (typeof key !== 'string') {
        return key;
    }
    let result = PubKeysInternedMap.get(key);
    if (!result) {
        result = new web3_js_1.PublicKey(key);
        PubKeysInternedMap.set(key, result);
    }
    return result;
};
exports.toPublicKey = toPublicKey;
const pubkeyToString = (key = '') => {
    return typeof key === 'string' ? key : (key === null || key === void 0 ? void 0 : key.toBase58()) || '';
};
exports.pubkeyToString = pubkeyToString;
exports.WRAPPED_SOL_MINT = new web3_js_1.PublicKey('Safe111111111111111111111111111111111111111');
exports.TOKEN_PROGRAM_ID = new web3_js_1.PublicKey('ToKLx75MGim1d1jRusuVX8xvdvvbSDESVaNXpRA9PHN');
exports.SPL_ASSOCIATED_TOKEN_ACCOUNT_PROGRAM_ID = new web3_js_1.PublicKey('AToD9iqHSc2fhEP9Jp7UYA6mRjHQ4CTWyzCsw8X3tH7K');
exports.BPF_UPGRADE_LOADER_ID = new web3_js_1.PublicKey('BPFLoaderUpgradeab1e11111111111111111111111');
exports.MEMO_ID = new web3_js_1.PublicKey('MEMWKbqsjEB8o972BvDHExZFSauzGZKvB4xHDVPFowh');
exports.METADATA_PROGRAM_ID = 'FFQ39M4FxfqGN8oA5Vg8ZgSuWDCGoEW4nb2ubgYpAHR3';
exports.VAULT_ID = 'C8M5uDsTwnTVeZFTcPCkPtF81rg2UgyGBVAoKXnAJB9D';
exports.AUCTION_ID = '9AFcqUZfuNQgH7jsNHvBkKBibmrpwv3LZT6T3NNXueqi';
exports.METAPLEX_ID = '314JQqufYJpSJQ8fyqb1zGmbko1m18W7QFQzk51Dbm37';
exports.PACK_CREATE_ID = new web3_js_1.PublicKey('packFeFNZzMfD9aVWL7QbGz1WcU7R9zpf6pvNsw2BLu');
exports.ORACLE_ID = new web3_js_1.PublicKey('rndshKFf48HhGaPbaCd3WQYtgCNKzRgVQ3U2we4Cvf9');
exports.SYSTEM = new web3_js_1.PublicKey('11111111111111111111111111111111');
//# sourceMappingURL=ids.js.map