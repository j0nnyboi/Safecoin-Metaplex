import { activate } from '@j0nnyboi/common';
import { TransactionInstruction } from '@safecoin/web3.js';

import { GetActivateParams } from './interface';

export const getActivate = async ({
  packSetKey,
  walletPublicKey,
}: GetActivateParams): Promise<TransactionInstruction> => {
  return activate({
    packSetKey,
    authority: walletPublicKey.toBase58(),
  });
};
