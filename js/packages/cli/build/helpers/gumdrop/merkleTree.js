"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.MerkleTree = void 0;
var js_sha3_1 = require("js-sha3");
var MerkleTree = /** @class */ (function () {
    function MerkleTree(leafs) {
        this.leafs = leafs.slice();
        this.layers = [];
        var hashes = this.leafs.map(MerkleTree.nodeHash);
        while (hashes.length > 0) {
            console.log("Hashes", this.layers.length, hashes);
            this.layers.push(hashes.slice());
            if (hashes.length === 1)
                break;
            hashes = hashes.reduce(function (acc, cur, idx, arr) {
                if (idx % 2 === 0) {
                    var nxt = arr[idx + 1];
                    acc.push(MerkleTree.internalHash(cur, nxt));
                }
                return acc;
            }, Array());
        }
    }
    MerkleTree.nodeHash = function (data) {
        return Buffer.from(js_sha3_1.keccak_256.digest(__spreadArray([0x00], __read(data))));
    };
    MerkleTree.internalHash = function (first, second) {
        if (!second)
            return first;
        var _a = __read([first, second].sort(Buffer.compare), 2), fst = _a[0], snd = _a[1];
        return Buffer.from(js_sha3_1.keccak_256.digest(__spreadArray(__spreadArray([0x01], __read(fst)), __read(snd))));
    };
    MerkleTree.prototype.getRoot = function () {
        return this.layers[this.layers.length - 1][0];
    };
    MerkleTree.prototype.getProof = function (idx) {
        return this.layers.reduce(function (proof, layer) {
            var sibling = idx ^ 1;
            if (sibling < layer.length) {
                proof.push(layer[sibling]);
            }
            idx = Math.floor(idx / 2);
            return proof;
        }, []);
    };
    MerkleTree.prototype.getHexRoot = function () {
        return this.getRoot().toString("hex");
    };
    MerkleTree.prototype.getHexProof = function (idx) {
        return this.getProof(idx).map(function (el) { return el.toString("hex"); });
    };
    MerkleTree.prototype.verifyProof = function (idx, proof, root) {
        var e_1, _a;
        var pair = MerkleTree.nodeHash(this.leafs[idx]);
        try {
            for (var proof_1 = __values(proof), proof_1_1 = proof_1.next(); !proof_1_1.done; proof_1_1 = proof_1.next()) {
                var item = proof_1_1.value;
                pair = MerkleTree.internalHash(pair, item);
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (proof_1_1 && !proof_1_1.done && (_a = proof_1.return)) _a.call(proof_1);
            }
            finally { if (e_1) throw e_1.error; }
        }
        return pair.equals(root);
    };
    MerkleTree.verifyClaim = function (leaf, proof, root) {
        var e_2, _a;
        var pair = MerkleTree.nodeHash(leaf);
        try {
            for (var proof_2 = __values(proof), proof_2_1 = proof_2.next(); !proof_2_1.done; proof_2_1 = proof_2.next()) {
                var item = proof_2_1.value;
                pair = MerkleTree.internalHash(pair, item);
            }
        }
        catch (e_2_1) { e_2 = { error: e_2_1 }; }
        finally {
            try {
                if (proof_2_1 && !proof_2_1.done && (_a = proof_2.return)) _a.call(proof_2);
            }
            finally { if (e_2) throw e_2.error; }
        }
        return pair.equals(root);
    };
    return MerkleTree;
}());
exports.MerkleTree = MerkleTree;
