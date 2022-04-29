import { Keypair, Connection, TransactionInstruction } from '@safecoin/web3.js';
import {
  sendTransactionWithRetry,
  signMetadata,
  StringPublicKey,
  WalletSigner,
} from '@j0nnyboi/common';
import { WalletNotConnectedError } from '@j0nnyboi/wallet-adapter-base';

export async function sendSignMetadata(
  connection: Connection,
  wallet: WalletSigner,
  metadata: StringPublicKey,
) {
  if (!wallet.publicKey) throw new WalletNotConnectedError();

  const signers: Keypair[] = [];
  const instructions: TransactionInstruction[] = [];

  await signMetadata(metadata, wallet.publicKey.toBase58(), instructions);

  await sendTransactionWithRetry(
    connection,
    wallet,
    instructions,
    signers,
    'single',
  );
}
