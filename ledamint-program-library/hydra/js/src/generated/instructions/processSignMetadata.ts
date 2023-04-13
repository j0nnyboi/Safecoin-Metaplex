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
 * @category ProcessSignMetadata
 * @category generated
 */
export const processSignMetadataStruct = new beet.BeetArgsStruct<{
  instructionDiscriminator: number[] /* size: 8 */;
}>(
  [['instructionDiscriminator', beet.uniformFixedSizeArray(beet.u8, 8)]],
  'ProcessSignMetadataInstructionArgs',
);
/**
 * Accounts required by the _processSignMetadata_ instruction
 *
 * @property [_writable_, **signer**] authority
 * @property [] fanout
 * @property [] holdingAccount
 * @property [_writable_] metadata
 * @property [] tokenMetadataProgram
 * @category Instructions
 * @category ProcessSignMetadata
 * @category generated
 */
export type ProcessSignMetadataInstructionAccounts = {
  authority: web3.PublicKey;
  fanout: web3.PublicKey;
  holdingAccount: web3.PublicKey;
  metadata: web3.PublicKey;
  tokenMetadataProgram: web3.PublicKey;
};

export const processSignMetadataInstructionDiscriminator = [188, 67, 163, 49, 0, 150, 63, 89];

/**
 * Creates a _ProcessSignMetadata_ instruction.
 *
 * @param accounts that will be accessed while the instruction is processed
 * @category Instructions
 * @category ProcessSignMetadata
 * @category generated
 */
export function createProcessSignMetadataInstruction(
  accounts: ProcessSignMetadataInstructionAccounts,
) {
  const { authority, fanout, holdingAccount, metadata, tokenMetadataProgram } = accounts;

  const [data] = processSignMetadataStruct.serialize({
    instructionDiscriminator: processSignMetadataInstructionDiscriminator,
  });
  const keys: web3.AccountMeta[] = [
    {
      pubkey: authority,
      isWritable: true,
      isSigner: true,
    },
    {
      pubkey: fanout,
      isWritable: false,
      isSigner: false,
    },
    {
      pubkey: holdingAccount,
      isWritable: false,
      isSigner: false,
    },
    {
      pubkey: metadata,
      isWritable: true,
      isSigner: false,
    },
    {
      pubkey: tokenMetadataProgram,
      isWritable: false,
      isSigner: false,
    },
  ];

  const ix = new web3.TransactionInstruction({
    programId: new web3.PublicKey('hyDQ4Nz1eYyegS6JfenyKwKzYxRsCWCriYSAjtzP4Vg'),
    keys,
    data,
  });
  return ix;
}
