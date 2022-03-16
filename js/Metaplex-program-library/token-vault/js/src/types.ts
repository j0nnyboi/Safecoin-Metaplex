import { PublicKey } from '@safecoin/web3.js';

export type ParamsWithStore<P> = P & { store: PublicKey };
