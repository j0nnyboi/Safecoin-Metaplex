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
 * @category Transfer
 * @category generated
 */
export type TransferInstructionArgs = {
  root: number[] /* size: 32 */;
  dataHash: number[] /* size: 32 */;
  creatorHash: number[] /* size: 32 */;
  nonce: beet.bignum;
  index: number;
};
/**
 * @category Instructions
 * @category Transfer
 * @category generated
 */
export const transferStruct = new beet.BeetArgsStruct<
  TransferInstructionArgs & {
    instructionDiscriminator: number[] /* size: 8 */;
  }
>(
  [
    ['instructionDiscriminator', beet.uniformFixedSizeArray(beet.u8, 8)],
    ['root', beet.uniformFixedSizeArray(beet.u8, 32)],
    ['dataHash', beet.uniformFixedSizeArray(beet.u8, 32)],
    ['creatorHash', beet.uniformFixedSizeArray(beet.u8, 32)],
    ['nonce', beet.u64],
    ['index', beet.u32],
  ],
  'TransferInstructionArgs',
);
/**
 * Accounts required by the _transfer_ instruction
 *
 * @property [] treeAuthority
 * @property [] leafOwner
 * @property [] leafDelegate
 * @property [] newLeafOwner
 * @property [_writable_] merkleTree
 * @property [] logWrapper
 * @property [] compressionProgram
 * @category Instructions
 * @category Transfer
 * @category generated
 */
export type TransferInstructionAccounts = {
  treeAuthority: web3.PublicKey;
  leafOwner: web3.PublicKey;
  leafDelegate: web3.PublicKey;
  newLeafOwner: web3.PublicKey;
  merkleTree: web3.PublicKey;
  logWrapper: web3.PublicKey;
  compressionProgram: web3.PublicKey;
  systemProgram?: web3.PublicKey;
  anchorRemainingAccounts?: web3.AccountMeta[];
};

export const transferInstructionDiscriminator = [163, 52, 200, 231, 140, 3, 69, 186];

/**
 * Creates a _Transfer_ instruction.
 *
 * @param accounts that will be accessed while the instruction is processed
 * @param args to provide as instruction data to the program
 *
 * @category Instructions
 * @category Transfer
 * @category generated
 */
export function createTransferInstruction(
  accounts: TransferInstructionAccounts,
  args: TransferInstructionArgs,
  programId = new web3.PublicKey('BGUMAp9Gq7iTEuizy4pqaxsTyUCBK68MDfK752saRPUY'),
) {
  const [data] = transferStruct.serialize({
    instructionDiscriminator: transferInstructionDiscriminator,
    ...args,
  });
  const keys: web3.AccountMeta[] = [
    {
      pubkey: accounts.treeAuthority,
      isWritable: false,
      isSigner: false,
    },
    {
      pubkey: accounts.leafOwner,
      isWritable: false,
      isSigner: false,
    },
    {
      pubkey: accounts.leafDelegate,
      isWritable: false,
      isSigner: false,
    },
    {
      pubkey: accounts.newLeafOwner,
      isWritable: false,
      isSigner: false,
    },
    {
      pubkey: accounts.merkleTree,
      isWritable: true,
      isSigner: false,
    },
    {
      pubkey: accounts.logWrapper,
      isWritable: false,
      isSigner: false,
    },
    {
      pubkey: accounts.compressionProgram,
      isWritable: false,
      isSigner: false,
    },
    {
      pubkey: accounts.systemProgram ?? web3.SystemProgram.programId,
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