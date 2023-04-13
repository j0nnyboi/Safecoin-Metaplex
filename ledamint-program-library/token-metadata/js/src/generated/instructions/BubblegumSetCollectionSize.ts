/**
 * This code was GENERATED using the solita package.
 * Please DO NOT EDIT THIS FILE, instead rerun solita to update it or write a wrapper to add functionality.
 *
 * See: https://github.com/metaplex-foundation/solita
 */

import * as beet from '@j0nnyboi/beet';
import * as web3 from '@safecoin/web3.js';
import { SetCollectionSizeArgs, setCollectionSizeArgsBeet } from '../types/SetCollectionSizeArgs';

/**
 * @category Instructions
 * @category BubblegumSetCollectionSize
 * @category generated
 */
export type BubblegumSetCollectionSizeInstructionArgs = {
  setCollectionSizeArgs: SetCollectionSizeArgs;
};
/**
 * @category Instructions
 * @category BubblegumSetCollectionSize
 * @category generated
 */
export const BubblegumSetCollectionSizeStruct = new beet.BeetArgsStruct<
  BubblegumSetCollectionSizeInstructionArgs & {
    instructionDiscriminator: number;
  }
>(
  [
    ['instructionDiscriminator', beet.u8],
    ['setCollectionSizeArgs', setCollectionSizeArgsBeet],
  ],
  'BubblegumSetCollectionSizeInstructionArgs',
);
/**
 * Accounts required by the _BubblegumSetCollectionSize_ instruction
 *
 * @property [_writable_] collectionMetadata Collection Metadata account
 * @property [_writable_, **signer**] collectionAuthority Collection Update authority
 * @property [] collectionMint Mint of the Collection
 * @property [**signer**] bubblegumSigner Signing PDA of Bubblegum program
 * @property [] collectionAuthorityRecord (optional) Collection Authority Record PDA
 * @category Instructions
 * @category BubblegumSetCollectionSize
 * @category generated
 */
export type BubblegumSetCollectionSizeInstructionAccounts = {
  collectionMetadata: web3.PublicKey;
  collectionAuthority: web3.PublicKey;
  collectionMint: web3.PublicKey;
  bubblegumSigner: web3.PublicKey;
  collectionAuthorityRecord?: web3.PublicKey;
};

export const bubblegumSetCollectionSizeInstructionDiscriminator = 36;

/**
 * Creates a _BubblegumSetCollectionSize_ instruction.
 *
 * Optional accounts that are not provided will be omitted from the accounts
 * array passed with the instruction.
 * An optional account that is set cannot follow an optional account that is unset.
 * Otherwise an Error is raised.
 *
 * @param accounts that will be accessed while the instruction is processed
 * @param args to provide as instruction data to the program
 *
 * @category Instructions
 * @category BubblegumSetCollectionSize
 * @category generated
 */
export function createBubblegumSetCollectionSizeInstruction(
  accounts: BubblegumSetCollectionSizeInstructionAccounts,
  args: BubblegumSetCollectionSizeInstructionArgs,
  programId = new web3.PublicKey('metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s'),
) {
  const [data] = BubblegumSetCollectionSizeStruct.serialize({
    instructionDiscriminator: bubblegumSetCollectionSizeInstructionDiscriminator,
    ...args,
  });
  const keys: web3.AccountMeta[] = [
    {
      pubkey: accounts.collectionMetadata,
      isWritable: true,
      isSigner: false,
    },
    {
      pubkey: accounts.collectionAuthority,
      isWritable: true,
      isSigner: true,
    },
    {
      pubkey: accounts.collectionMint,
      isWritable: false,
      isSigner: false,
    },
    {
      pubkey: accounts.bubblegumSigner,
      isWritable: false,
      isSigner: true,
    },
  ];

  if (accounts.collectionAuthorityRecord != null) {
    keys.push({
      pubkey: accounts.collectionAuthorityRecord,
      isWritable: false,
      isSigner: false,
    });
  }

  const ix = new web3.TransactionInstruction({
    programId,
    keys,
    data,
  });
  return ix;
}
