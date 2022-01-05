import { Connection, PublicKey } from '@safecoin/web3.js';
import { WalletSigner } from '../contexts';
export declare const mintNFT: (connection: Connection, wallet: WalletSigner, owner: PublicKey) => Promise<{
    txid: string;
    mint: PublicKey;
    account: PublicKey;
}>;
//# sourceMappingURL=token.d.ts.map