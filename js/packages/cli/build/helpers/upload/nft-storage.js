"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.nftStorageUpload = void 0;
const loglevel_1 = __importDefault(require("loglevel"));
const node_fetch_1 = __importDefault(require("node-fetch"));
const fs_1 = __importDefault(require("fs"));
async function nftStorageUpload(nftStorageKey, image, manifestBuffer) {
    const stats = fs_1.default.statSync(image);
    let fileSizeInBytes = stats.size;
    const readStream = fs_1.default.createReadStream(image);
    loglevel_1.default.info(`Image Upload ${image}`);
    return (0, node_fetch_1.default)('https://api.nft.storage/upload', {
        method: 'POST',
        headers: {
            'Content-length': fileSizeInBytes,
            Authorization: `Bearer ${nftStorageKey}`,
        },
        body: readStream, // Here, stringContent or bufferContent would also work
    })
        .then(response => response.json())
        .then(imageUploadResponse => {
        const mediaURL = `https://${imageUploadResponse.value.cid}.ipfs.dweb.link`;
        loglevel_1.default.info('Upload metadata');
        const manifestJson = JSON.parse(manifestBuffer.toString('utf8'));
        manifestJson.image = mediaURL;
        const metaData = Buffer.from(JSON.stringify(manifestJson));
        fileSizeInBytes = metaData.byteLength;
        return (0, node_fetch_1.default)('https://api.nft.storage/upload', {
            method: 'POST',
            headers: {
                'Content-length': fileSizeInBytes,
                Authorization: `Bearer ${nftStorageKey}`,
            },
            body: metaData, // Here, stringContent or bufferContent would also work
        })
            .then(response => response.json())
            .then(metaUploadResponse => {
            const link = `https://${metaUploadResponse.value.cid}.ipfs.dweb.link`;
            loglevel_1.default.info('Upload End');
            loglevel_1.default.debug([link, mediaURL]);
            return [link, mediaURL];
        })
            .catch(error => {
            loglevel_1.default.debug(error);
            throw new Error(`Metadata Upload Error: ${error}`);
        });
    })
        .catch(error => {
        loglevel_1.default.debug(error);
        throw new Error(`Media Upload Error: ${error}`);
    });
}
exports.nftStorageUpload = nftStorageUpload;
