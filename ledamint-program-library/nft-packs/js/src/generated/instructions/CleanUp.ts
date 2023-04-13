/**
 * This code was GENERATED using the solita package.
 * Please DO NOT EDIT THIS FILE, instead rerun solita to update it or write a wrapper to add functionality.
 *
 * See: https://github.com/metaplex-foundation/solita
 */

import * as beet from '@j0nnyboi/beet';
import * as web3 from '@safecoin/web3.js';

/**
 * @category Instructions
 * @category CleanUp
 * @category generated
 */
export const CleanUpStruct = new beet.BeetArgsStruct<{ instructionDiscriminator: number }>(
  [['instructionDiscriminator', beet.u8]],
  'CleanUpInstructionArgs',
);
/**
 * Accounts required by the _CleanUp_ instruction
 *
 * @property [] packSet
 * @property [_writable_] packConfig PDA, ['config', pack]
 * @category Instructions
 * @category CleanUp
 * @category generated
 */
export type CleanUpInstructionAccounts = {
  packSet: web3.PublicKey;
  packConfig: web3.PublicKey;
};

export const cleanUpInstructionDiscriminator = 13;

/**
 * Creates a _CleanUp_ instruction.
 *
 * @param accounts that will be accessed while the instruction is processed
 * @category Instructions
 * @category CleanUp
 * @category generated
 */
export function createCleanUpInstruction(
  accounts: CleanUpInstructionAccounts,
  programId = new web3.PublicKey('packFeFNZzMfD9aVWL7QbGz1WcU7R9zpf6pvNsw2BLu'),
) {
  const [data] = CleanUpStruct.serialize({
    instructionDiscriminator: cleanUpInstructionDiscriminator,
  });
  const keys: web3.AccountMeta[] = [
    {
      pubkey: accounts.packSet,
      isWritable: false,
      isSigner: false,
    },
    {
      pubkey: accounts.packConfig,
      isWritable: true,
      isSigner: false,
    },
  ];

  const ix = new web3.TransactionInstruction({
    programId,
    keys,
    data,
  });
  return ix;
}
