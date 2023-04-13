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
 * @category SellRemainingAccounts
 * @category generated
 */
export const sellRemainingAccountsStruct = new beet.BeetArgsStruct<{
  instructionDiscriminator: number[] /* size: 8 */;
}>(
  [['instructionDiscriminator', beet.uniformFixedSizeArray(beet.u8, 8)]],
  'SellRemainingAccountsInstructionArgs',
);
/**
 * Accounts required by the _sellRemainingAccounts_ instruction
 *
 * @property [] metadataProgram
 * @property [_writable_] delegateRecord
 * @property [_writable_] tokenRecord
 * @property [] tokenMint
 * @property [] edition
 * @property [] authRulesProgram
 * @property [] authRules
 * @property [] sysvarInstructions
 * @category Instructions
 * @category SellRemainingAccounts
 * @category generated
 */
export type SellRemainingAccountsInstructionAccounts = {
  metadataProgram: web3.PublicKey;
  delegateRecord: web3.PublicKey;
  tokenRecord: web3.PublicKey;
  tokenMint: web3.PublicKey;
  edition: web3.PublicKey;
  authRulesProgram: web3.PublicKey;
  authRules: web3.PublicKey;
  sysvarInstructions: web3.PublicKey;
  anchorRemainingAccounts?: web3.AccountMeta[];
};

export const sellRemainingAccountsInstructionDiscriminator = [113, 23, 199, 41, 25, 203, 234, 30];

/**
 * Creates a _SellRemainingAccounts_ instruction.
 *
 * @param accounts that will be accessed while the instruction is processed
 * @category Instructions
 * @category SellRemainingAccounts
 * @category generated
 */
export function createSellRemainingAccountsInstruction(
  accounts: SellRemainingAccountsInstructionAccounts,
  programId = new web3.PublicKey('hausS13jsjafwWwGqZTUQRmWyvyxn9EQpqMwV1PBBmk'),
) {
  const [data] = sellRemainingAccountsStruct.serialize({
    instructionDiscriminator: sellRemainingAccountsInstructionDiscriminator,
  });
  const keys: web3.AccountMeta[] = [
    {
      pubkey: accounts.metadataProgram,
      isWritable: false,
      isSigner: false,
    },
    {
      pubkey: accounts.delegateRecord,
      isWritable: true,
      isSigner: false,
    },
    {
      pubkey: accounts.tokenRecord,
      isWritable: true,
      isSigner: false,
    },
    {
      pubkey: accounts.tokenMint,
      isWritable: false,
      isSigner: false,
    },
    {
      pubkey: accounts.edition,
      isWritable: false,
      isSigner: false,
    },
    {
      pubkey: accounts.authRulesProgram,
      isWritable: false,
      isSigner: false,
    },
    {
      pubkey: accounts.authRules,
      isWritable: false,
      isSigner: false,
    },
    {
      pubkey: accounts.sysvarInstructions,
      isWritable: false,
      isSigner: false,
    },
  ];

  if (accounts.anchorRemainingAccounts != null) {
    for (const acc of accounts.anchorRemainingAccounts) {
      keys.push(acc);
    }
  }

  const ix = new web3.TransactionInstruction({
    programId,
    keys,
    data,
  });
  return ix;
}
