/**
 * This code was GENERATED using the solita package.
 * Please DO NOT EDIT THIS FILE, instead rerun solita to update it or write a wrapper to add functionality.
 *
 * See: https://github.com/metaplex-foundation/solita
 */

import * as splToken from '@safecoin/safe-token';
import * as beet from '@j0nnyboi/beet';
import * as web3 from '@safecoin/web3.js';
import { ClaimPackArgs, claimPackArgsBeet } from '../types/ClaimPackArgs';

/**
 * @category Instructions
 * @category ClaimPack
 * @category generated
 */
export type ClaimPackInstructionArgs = {
  claimPackArgs: ClaimPackArgs;
};
/**
 * @category Instructions
 * @category ClaimPack
 * @category generated
 */
export const ClaimPackStruct = new beet.BeetArgsStruct<
  ClaimPackInstructionArgs & {
    instructionDiscriminator: number;
  }
>(
  [
    ['instructionDiscriminator', beet.u8],
    ['claimPackArgs', claimPackArgsBeet],
  ],
  'ClaimPackInstructionArgs',
);
/**
 * Accounts required by the _ClaimPack_ instruction
 *
 * @property [] packSet
 * @property [_writable_] provingProcess PDA, ['proving', pack, user_wallet]
 * @property [**signer**] userWallet
 * @property [_writable_] packCard PDA, ['card', pack, index]
 * @property [_writable_] userToken User token account to hold new minted edition
 * @property [] newMetadata
 * @property [] newEdition
 * @property [] masterEdition
 * @property [] newMint
 * @property [**signer**] newMintAuthority
 * @property [] metadata
 * @property [] metadataMint
 * @property [] editionMarker
 * @property [] tokenMetadataProgram Metaplex Token Metadata Program
 * @category Instructions
 * @category ClaimPack
 * @category generated
 */
export type ClaimPackInstructionAccounts = {
  packSet: web3.PublicKey;
  provingProcess: web3.PublicKey;
  userWallet: web3.PublicKey;
  packCard: web3.PublicKey;
  userToken: web3.PublicKey;
  newMetadata: web3.PublicKey;
  newEdition: web3.PublicKey;
  masterEdition: web3.PublicKey;
  newMint: web3.PublicKey;
  newMintAuthority: web3.PublicKey;
  metadata: web3.PublicKey;
  metadataMint: web3.PublicKey;
  editionMarker: web3.PublicKey;
  rent?: web3.PublicKey;
  tokenMetadataProgram: web3.PublicKey;
  tokenProgram?: web3.PublicKey;
  systemProgram?: web3.PublicKey;
};

export const claimPackInstructionDiscriminator = 6;

/**
 * Creates a _ClaimPack_ instruction.
 *
 * @param accounts that will be accessed while the instruction is processed
 * @param args to provide as instruction data to the program
 *
 * @category Instructions
 * @category ClaimPack
 * @category generated
 */
export function createClaimPackInstruction(
  accounts: ClaimPackInstructionAccounts,
  args: ClaimPackInstructionArgs,
  programId = new web3.PublicKey('packFeFNZzMfD9aVWL7QbGz1WcU7R9zpf6pvNsw2BLu'),
) {
  const [data] = ClaimPackStruct.serialize({
    instructionDiscriminator: claimPackInstructionDiscriminator,
    ...args,
  });
  const keys: web3.AccountMeta[] = [
    {
      pubkey: accounts.packSet,
      isWritable: false,
      isSigner: false,
    },
    {
      pubkey: accounts.provingProcess,
      isWritable: true,
      isSigner: false,
    },
    {
      pubkey: accounts.userWallet,
      isWritable: false,
      isSigner: true,
    },
    {
      pubkey: accounts.packCard,
      isWritable: true,
      isSigner: false,
    },
    {
      pubkey: accounts.userToken,
      isWritable: true,
      isSigner: false,
    },
    {
      pubkey: accounts.newMetadata,
      isWritable: false,
      isSigner: false,
    },
    {
      pubkey: accounts.newEdition,
      isWritable: false,
      isSigner: false,
    },
    {
      pubkey: accounts.masterEdition,
      isWritable: false,
      isSigner: false,
    },
    {
      pubkey: accounts.newMint,
      isWritable: false,
      isSigner: false,
    },
    {
      pubkey: accounts.newMintAuthority,
      isWritable: false,
      isSigner: true,
    },
    {
      pubkey: accounts.metadata,
      isWritable: false,
      isSigner: false,
    },
    {
      pubkey: accounts.metadataMint,
      isWritable: false,
      isSigner: false,
    },
    {
      pubkey: accounts.editionMarker,
      isWritable: false,
      isSigner: false,
    },
    {
      pubkey: accounts.rent ?? web3.SYSVAR_RENT_PUBKEY,
      isWritable: false,
      isSigner: false,
    },
    {
      pubkey: accounts.tokenMetadataProgram,
      isWritable: false,
      isSigner: false,
    },
    {
      pubkey: accounts.tokenProgram ?? splToken.TOKEN_PROGRAM_ID,
      isWritable: false,
      isSigner: false,
    },
    {
      pubkey: accounts.systemProgram ?? web3.SystemProgram.programId,
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
