"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAssetCostToStore = exports.ARWEAVE_UPLOAD_ENDPOINT = exports.LAMPORT_MULTIPLIER = void 0;
const arweave_cost_1 = require("@metaplex/arweave-cost");
const web3_js_1 = require("@safecoin/web3.js");
exports.LAMPORT_MULTIPLIER = web3_js_1.LAMPORTS_PER_SAFE;
exports.ARWEAVE_UPLOAD_ENDPOINT = 'http://www.metaplex.darkartlabs.tech:5000';
async function getAssetCostToStore(files) {
    const sizes = files.map(f => f.size);
    const result = await (0, arweave_cost_1.calculate)(sizes);
    return web3_js_1.LAMPORTS_PER_SAFE * result.safecoin;
}
exports.getAssetCostToStore = getAssetCostToStore;
//# sourceMappingURL=assets.js.map