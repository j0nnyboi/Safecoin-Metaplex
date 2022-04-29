import { addVoucherToPack } from '@j0nnyboi/common';
import { TransactionInstruction } from '@safecoin/web3.js';

import { GetAddVoucherToPackParams } from './interface';

export const getAddVoucherToPack = async ({
  selectedVouchers,
  packSetKey,
  walletPublicKey,
}: GetAddVoucherToPackParams): Promise<TransactionInstruction[]> => {
  const addVouchersToPack = selectedVouchers.map(voucher => {
    return addVoucherToPack({
      ...voucher,
      packSetKey,
      authority: walletPublicKey.toBase58(),
    });
  });

  return Promise.all(addVouchersToPack);
};
