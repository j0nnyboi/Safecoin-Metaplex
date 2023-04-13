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
 * @category UpdateEntangledPair
 * @category generated
 */
export type UpdateEntangledPairInstructionArgs = {
  price: beet.bignum;
  paysEveryTime: boolean;
};
/**
 * @category Instructions
 * @category UpdateEntangledPair
 * @category generated
 */
const updateEntangledPairStruct = new beet.BeetArgsStruct<
  UpdateEntangledPairInstructionArgs & {
    instructionDiscriminator: number[] /* size: 8 */;
  }
>(
  [
    ['instructionDiscriminator', beet.uniformFixedSizeArray(beet.u8, 8)],
    ['price', beet.u64],
    ['paysEveryTime', beet.bool],
  ],
  'UpdateEntangledPairInstructionArgs',
);
/**
 * Accounts required by the _updateEntangledPair_ instruction
 *
 * @property [**signer**] authority
 * @property [] newAuthority
 * @property [_writable_] entangledPair
 * @category Instructions
 * @category UpdateEntangledPair
 * @category generated
 */
export type UpdateEntangledPairInstructionAccounts = {
  authority: web3.PublicKey;
  newAuthority: web3.PublicKey;
  entangledPair: web3.PublicKey;
};

const updateEntangledPairInstructionDiscriminator = [41, 97, 247, 218, 98, 162, 75, 244];

/**
 * Creates a _UpdateEntangledPair_ instruction.
 *
 * @param accounts that will be accessed while the instruction is processed
 * @param args to provide as instruction data to the program
 *
 * @category Instructions
 * @category UpdateEntangledPair
 * @category generated
 */
export function createUpdateEntangledPairInstruction(
  accounts: UpdateEntangledPairInstructionAccounts,
  args: UpdateEntangledPairInstructionArgs,
) {
  const { authority, newAuthority, entangledPair } = accounts;

  const [data] = updateEntangledPairStruct.serialize({
    instructionDiscriminator: updateEntangledPairInstructionDiscriminator,
    ...args,
  });
  const keys: web3.AccountMeta[] = [
    {
      pubkey: authority,
      isWritable: false,
      isSigner: true,
    },
    {
      pubkey: newAuthority,
      isWritable: false,
      isSigner: false,
    },
    {
      pubkey: entangledPair,
      isWritable: true,
      isSigner: false,
    },
  ];

  const ix = new web3.TransactionInstruction({
    programId: new web3.PublicKey('qntmGodpGkrM42mN68VCZHXnKqDCT8rdY23wFcXCLPd'),
    keys,
    data,
  });
  return ix;
}
