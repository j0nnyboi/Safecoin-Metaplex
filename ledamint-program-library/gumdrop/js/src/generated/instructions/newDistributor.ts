/**
 * This code was GENERATED using the solita package.
 * Please DO NOT EDIT THIS FILE, instead rerun solita to update it or write a wrapper to add functionality.
 *
 * See: https://github.com/metaplex-foundation/solita
 */

import * as web3 from '@safecoin/web3.js';
import * as beet from '@j0nnyboi/beet';
import * as beetSolana from '@j0nnyboi/beet-safecoin';

/**
 * @category Instructions
 * @category NewDistributor
 * @category generated
 */
export type NewDistributorInstructionArgs = {
  bump: number;
  root: number[] /* size: 32 */;
  temporal: web3.PublicKey;
};
/**
 * @category Instructions
 * @category NewDistributor
 * @category generated
 */
const newDistributorStruct = new beet.BeetArgsStruct<
  NewDistributorInstructionArgs & {
    instructionDiscriminator: number[] /* size: 8 */;
  }
>(
  [
    ['instructionDiscriminator', beet.uniformFixedSizeArray(beet.u8, 8)],
    ['bump', beet.u8],
    ['root', beet.uniformFixedSizeArray(beet.u8, 32)],
    ['temporal', beetSolana.publicKey],
  ],
  'NewDistributorInstructionArgs',
);
/**
 * Accounts required by the _newDistributor_ instruction
 * @category Instructions
 * @category NewDistributor
 * @category generated
 */
export type NewDistributorInstructionAccounts = {
  base: web3.PublicKey;
  distributor: web3.PublicKey;
  payer: web3.PublicKey;
};

const newDistributorInstructionDiscriminator = [32, 139, 112, 171, 0, 2, 225, 155];

/**
 * Creates a _NewDistributor_ instruction.
 *
 * @param accounts that will be accessed while the instruction is processed
 * @param args to provide as instruction data to the program
 *
 * @category Instructions
 * @category NewDistributor
 * @category generated
 */
export function createNewDistributorInstruction(
  accounts: NewDistributorInstructionAccounts,
  args: NewDistributorInstructionArgs,
) {
  const { base, distributor, payer } = accounts;

  const [data] = newDistributorStruct.serialize({
    instructionDiscriminator: newDistributorInstructionDiscriminator,
    ...args,
  });
  const keys: web3.AccountMeta[] = [
    {
      pubkey: base,
      isWritable: false,
      isSigner: true,
    },
    {
      pubkey: distributor,
      isWritable: true,
      isSigner: false,
    },
    {
      pubkey: payer,
      isWritable: false,
      isSigner: true,
    },
    {
      pubkey: web3.SystemProgram.programId,
      isWritable: false,
      isSigner: false,
    },
  ];

  const ix = new web3.TransactionInstruction({
    programId: new web3.PublicKey('gdrpGjVffourzkdDRrQmySw4aTHr8a3xmQzzxSwFD1a'),
    keys,
    data,
  });
  return ix;
}