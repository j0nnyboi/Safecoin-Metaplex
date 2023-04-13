import { Connection, Keypair } from '@safecoin/web3.js';
import { Amman } from '@j0nnyboi/amman-client';

import { connectionURL } from '../utils';
import { cusper } from '../../src';

export const createPrerequisites = async () => {
  const payer = Keypair.generate();

  const connection = new Connection(connectionURL, 'confirmed');
  const amman = await Amman.instance({ errorResolver: cusper });
  await amman.airdrop(connection, payer.publicKey, 30);

  return {
    payer,
    connection,
    transactionHandler: amman.payerTransactionHandler(connection, payer),
  };
};
