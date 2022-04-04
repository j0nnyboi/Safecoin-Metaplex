import { PublicKey, AccountInfo } from '@safecoin/web3.js';

export type StringPublicKey = string;

export class LazyAccountInfoProxy<T> {
  executable: boolean = false;
  owner: StringPublicKey = '';
  lamports: number = 0;

  get data() {
    //
    return undefined as unknown as T;
  }
}

export interface LazyAccountInfo {
  executable: boolean;
  owner: StringPublicKey;
  lamports: number;
  data: [string, string];
}

const PubKeysInternedMap = new Map<string, PublicKey>();

export const toPublicKey = (key: string | PublicKey) => {
  if (typeof key !== 'string') {
    return key;
  }

  let result = PubKeysInternedMap.get(key);
  if (!result) {
    result = new PublicKey(key);
    PubKeysInternedMap.set(key, result);
  }

  return result;
};

export const pubkeyToString = (key: PublicKey | null | string = '') => {
  return typeof key === 'string' ? key : key?.toBase58() || '';
};

export interface PublicKeyStringAndAccount<T> {
  pubkey: string;
  account: AccountInfo<T>;
}

export const WRAPPED_SOL_MINT = new PublicKey(
  'Safe111111111111111111111111111111111111111',
);

export const TOKEN_PROGRAM_ID = new PublicKey(
  'ToKLx75MGim1d1jRusuVX8xvdvvbSDESVaNXpRA9PHN',
);

export const SPL_ASSOCIATED_TOKEN_ACCOUNT_PROGRAM_ID = new PublicKey(
  'AToD9iqHSc2fhEP9Jp7UYA6mRjHQ4CTWyzCsw8X3tH7K',
);

export const BPF_UPGRADE_LOADER_ID = new PublicKey(
  'BPFLoaderUpgradeab1e11111111111111111111111',
);

export const MEMO_ID = new PublicKey(
  'MEMWKbqsjEB8o972BvDHExZFSauzGZKvB4xHDVPFowh',
);

export const METADATA_PROGRAM_ID =
  'FFQ39M4FxfqGN8oA5Vg8ZgSuWDCGoEW4nb2ubgYpAHR3' as StringPublicKey;

export const VAULT_ID =
  'C8M5uDsTwnTVeZFTcPCkPtF81rg2UgyGBVAoKXnAJB9D' as StringPublicKey;

export const AUCTION_ID =
  '9AFcqUZfuNQgH7jsNHvBkKBibmrpwv3LZT6T3NNXueqi' as StringPublicKey;

export const METAPLEX_ID =
  '314JQqufYJpSJQ8fyqb1zGmbko1m18W7QFQzk51Dbm37' as StringPublicKey;

export const PACK_CREATE_ID = new PublicKey(
  'packFeFNZzMfD9aVWL7QbGz1WcU7R9zpf6pvNsw2BLu',
);

export const ORACLE_ID = new PublicKey(
  'rndshKFf48HhGaPbaCd3WQYtgCNKzRgVQ3U2we4Cvf9',
);

export const SYSTEM = new PublicKey('11111111111111111111111111111111');
