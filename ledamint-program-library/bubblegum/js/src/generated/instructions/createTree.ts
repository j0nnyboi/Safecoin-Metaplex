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
 * @category CreateTree
 * @category generated
 */
export type CreateTreeInstructionArgs = {
  maxDepth: number;
  maxBufferSize: number;
  public: beet.COption<boolean>;
};
/**
 * @category Instructions
 * @category CreateTree
 * @category generated
 */
export const createTreeStruct = new beet.FixableBeetArgsStruct<
  CreateTreeInstructionArgs & {
    instructionDiscriminator: number[] /* size: 8 */;
  }
>(
  [
    ['instructionDiscriminator', beet.uniformFixedSizeArray(beet.u8, 8)],
    ['maxDepth', beet.u32],
    ['maxBufferSize', beet.u32],
    ['public', beet.coption(beet.bool)],
  ],
  'CreateTreeInstructionArgs',
);
/**
 * Accounts required by the _createTree_ instruction
 *
 * @property [_writable_] treeAuthority
 * @property [_writable_] merkleTree
 * @property [_writable_, **signer**] payer
 * @property [**signer**] treeCreator
 * @property [] logWrapper
 * @property [] compressionProgram
 * @category Instructions
 * @category CreateTree
 * @category generated
 */
export type CreateTreeInstructionAccounts = {
  treeAuthority: web3.PublicKey;
  merkleTree: web3.PublicKey;
  payer: web3.PublicKey;
  treeCreator: web3.PublicKey;
  logWrapper: web3.PublicKey;
  compressionProgram: web3.PublicKey;
  systemProgram?: web3.PublicKey;
  anchorRemainingAccounts?: web3.AccountMeta[];
};

export const createTreeInstructionDiscriminator = [165, 83, 136, 142, 89, 202, 47, 220];

/**
 * Creates a _CreateTree_ instruction.
 *
 * @param accounts that will be accessed while the instruction is processed
 * @param args to provide as instruction data to the program
 *
 * @category Instructions
 * @category CreateTree
 * @category generated
 */
export function createCreateTreeInstruction(
  accounts: CreateTreeInstructionAccounts,
  args: CreateTreeInstructionArgs,
  programId = new web3.PublicKey('BGUMAp9Gq7iTEuizy4pqaxsTyUCBK68MDfK752saRPUY'),
) {
  const [data] = createTreeStruct.serialize({
    instructionDiscriminator: createTreeInstructionDiscriminator,
    ...args,
  });
  const keys: web3.AccountMeta[] = [
    {
      pubkey: accounts.treeAuthority,
      isWritable: true,
      isSigner: false,
    },
    {
      pubkey: accounts.merkleTree,
      isWritable: true,
      isSigner: false,
    },
    {
      pubkey: accounts.payer,
      isWritable: true,
      isSigner: true,
    },
    {
      pubkey: accounts.treeCreator,
      isWritable: false,
      isSigner: true,
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
