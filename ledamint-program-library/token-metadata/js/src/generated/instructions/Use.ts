/**
 * This code was GENERATED using the solita package.
 * Please DO NOT EDIT THIS FILE, instead rerun solita to update it or write a wrapper to add functionality.
 *
 * See: https://github.com/metaplex-foundation/solita
 */

import * as beet from '@j0nnyboi/beet';
import * as web3 from '@safecoin/web3.js';
import { UseArgs, useArgsBeet } from '../types/UseArgs';

/**
 * @category Instructions
 * @category Use
 * @category generated
 */
export type UseInstructionArgs = {
  useArgs: UseArgs;
};
/**
 * @category Instructions
 * @category Use
 * @category generated
 */
export const UseStruct = new beet.FixableBeetArgsStruct<
  UseInstructionArgs & {
    instructionDiscriminator: number;
  }
>(
  [
    ['instructionDiscriminator', beet.u8],
    ['useArgs', useArgsBeet],
  ],
  'UseInstructionArgs',
);
/**
 * Accounts required by the _Use_ instruction
 *
 * @property [**signer**] authority Token owner or delegate
 * @property [_writable_] delegateRecord (optional) Delegate record PDA
 * @property [_writable_] token (optional) Token account
 * @property [] mint Mint account
 * @property [_writable_] metadata Metadata account
 * @property [_writable_] edition (optional) Edition account
 * @property [**signer**] payer Payer
 * @property [] sysvarInstructions System program
 * @property [] splTokenProgram (optional) SPL Token Program
 * @property [] authorizationRulesProgram (optional) Token Authorization Rules Program
 * @property [] authorizationRules (optional) Token Authorization Rules account
 * @category Instructions
 * @category Use
 * @category generated
 */
export type UseInstructionAccounts = {
  authority: web3.PublicKey;
  delegateRecord?: web3.PublicKey;
  token?: web3.PublicKey;
  mint: web3.PublicKey;
  metadata: web3.PublicKey;
  edition?: web3.PublicKey;
  payer: web3.PublicKey;
  systemProgram?: web3.PublicKey;
  sysvarInstructions: web3.PublicKey;
  splTokenProgram?: web3.PublicKey;
  authorizationRulesProgram?: web3.PublicKey;
  authorizationRules?: web3.PublicKey;
};

export const useInstructionDiscriminator = 51;

/**
 * Creates a _Use_ instruction.
 *
 * Optional accounts that are not provided default to the program ID since
 * this was indicated in the IDL from which this instruction was generated.
 *
 * @param accounts that will be accessed while the instruction is processed
 * @param args to provide as instruction data to the program
 *
 * @category Instructions
 * @category Use
 * @category generated
 */
export function createUseInstruction(
  accounts: UseInstructionAccounts,
  args: UseInstructionArgs,
  programId = new web3.PublicKey('metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s'),
) {
  const [data] = UseStruct.serialize({
    instructionDiscriminator: useInstructionDiscriminator,
    ...args,
  });
  const keys: web3.AccountMeta[] = [
    {
      pubkey: accounts.authority,
      isWritable: false,
      isSigner: true,
    },
    {
      pubkey: accounts.delegateRecord ?? programId,
      isWritable: accounts.delegateRecord != null,
      isSigner: false,
    },
    {
      pubkey: accounts.token ?? programId,
      isWritable: accounts.token != null,
      isSigner: false,
    },
    {
      pubkey: accounts.mint,
      isWritable: false,
      isSigner: false,
    },
    {
      pubkey: accounts.metadata,
      isWritable: true,
      isSigner: false,
    },
    {
      pubkey: accounts.edition ?? programId,
      isWritable: accounts.edition != null,
      isSigner: false,
    },
    {
      pubkey: accounts.payer,
      isWritable: false,
      isSigner: true,
    },
    {
      pubkey: accounts.systemProgram ?? web3.SystemProgram.programId,
      isWritable: false,
      isSigner: false,
    },
    {
      pubkey: accounts.sysvarInstructions,
      isWritable: false,
      isSigner: false,
    },
    {
      pubkey: accounts.splTokenProgram ?? programId,
      isWritable: false,
      isSigner: false,
    },
    {
      pubkey: accounts.authorizationRulesProgram ?? programId,
      isWritable: false,
      isSigner: false,
    },
    {
      pubkey: accounts.authorizationRules ?? programId,
      isWritable: false,
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