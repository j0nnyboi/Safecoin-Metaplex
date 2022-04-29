import { programIds } from '@j0nnyboi/common';
import { AccountLayout } from '@safecoin/safe-token';
import { TransactionInstruction } from '@safecoin/web3.js';

import { getCreateAccount } from './getCreateAccount';
import { GetCreateTokenAccounts } from './interface';

export const getCreateTokenAccounts = ({
  cardsToAdd,
  connection,
  walletPublicKey,
}: GetCreateTokenAccounts): Promise<TransactionInstruction[]> =>
  Promise.all(
    cardsToAdd.map(({ toAccount }) =>
      getCreateAccount({
        connection,
        walletPublicKey,
        newAccountPubkey: toAccount.publicKey,
        space: AccountLayout.span,
        programId: programIds().token,
      }),
    ),
  );
