import { Connection, Keypair, Transaction } from '@safecoin/web3.js';
import { PayerTransactionHandler } from '@j0nnyboi/amman-client';
import {
  VerifyCollectionInstructionAccounts,
  createVerifyCollectionInstruction,
} from '@leda-mint-io/lpl-token-metadata';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore createMintToInstruction export actually exist but isn't setup correctly
import { strict as assert } from 'assert';
import { createAndSignTransaction } from '../utils';

type Params = Omit<VerifyCollectionInstructionAccounts, 'payer'> & {
  transactionHandler: PayerTransactionHandler;
  connection: Connection;
  payer: Keypair;
};

export async function verifyCollection({
  transactionHandler,
  connection,
  payer,
  ...params
}: Params) {
  const verifyCollectionInstruction = createVerifyCollectionInstruction({
    payer: payer.publicKey,
    ...params,
  });

  const verifyCollectionTx: Transaction = await createAndSignTransaction(
    connection,
    payer,
    [verifyCollectionInstruction],
    [payer],
  );

  await transactionHandler.sendAndConfirmTransaction(verifyCollectionTx, []).assertSuccess(assert);
}
