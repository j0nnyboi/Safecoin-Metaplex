import { Connection, Keypair, TransactionInstruction } from '@safecoin/web3.js';
import { MintLayout } from '@safecoin/safe-token';
import { WalletContextState } from '@j0nnyboi/wallet-adapter-react';
import { StringPublicKey } from '@j0nnyboi/common';

import { createMintAndAccountWithOne } from '../../../actions/createMintAndAccountWithOne';

interface Response {
  mint: StringPublicKey;
  account: StringPublicKey;
  instructions: TransactionInstruction[];
  signers: Keypair[];
}

export async function getNewMint(
  wallet: WalletContextState,
  connection: Connection,
): Promise<Response> {
  const instructions: TransactionInstruction[] = [];
  const signers: Keypair[] = [];

  if (!wallet.publicKey) {
    throw new Error('Wallet pubKey is not provided');
  }

  const mintRentExempt = await connection.getMinimumBalanceForRentExemption(
    MintLayout.span,
  );

  const newMint = await createMintAndAccountWithOne(
    wallet,
    wallet.publicKey.toString(),
    mintRentExempt,
    instructions,
    signers,
  );

  return { ...newMint, instructions, signers };
}
