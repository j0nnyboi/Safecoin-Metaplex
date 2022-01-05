import { Connection } from '@safecoin/web3.js';
import { MetaState } from './types';
export declare const subscribeAccountsChange: (connection: Connection, getState: () => MetaState, setState: (v: MetaState) => void) => () => void;
//# sourceMappingURL=subscribeAccountsChange.d.ts.map