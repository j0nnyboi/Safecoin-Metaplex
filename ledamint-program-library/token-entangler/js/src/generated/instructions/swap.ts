/**
 * This code was GENERATED using the solita package.
 * Please DO NOT EDIT THIS FILE, instead rerun solita to update it or write a wrapper to add functionality.
 *
 * See: https://github.com/metaplex-foundation/solita
 */

import * as splToken from '@safecoin/safe-token';
import * as beet from '@j0nnyboi/beet';
import * as web3 from '@safecoin/web3.js';

/**
 * @category Instructions
 * @category Swap
 * @category generated
 */
const swapStruct = new beet.BeetArgsStruct<{ instructionDiscriminator: number[] /* size: 8 */ }>(
  [['instructionDiscriminator', beet.uniformFixedSizeArray(beet.u8, 8)]],
  'SwapInstructionArgs',
);
/**
 * Accounts required by the _swap_ instruction
 *
 * @property [] treasuryMint
 * @property [**signer**] payer
 * @property [_writable_] paymentAccount
 * @property [] paymentTransferAuthority
 * @property [_writable_] token
 * @property [] tokenMint
 * @property [] replacementTokenMetadata
 * @property [] replacementTokenMint
 * @property [_writable_] replacementToken
 * @property [**signer**] transferAuthority
 * @property [_writable_] tokenAEscrow
 * @property [_writable_] tokenBEscrow
 * @property [_writable_] entangledPair
 * @category Instructions
 * @category Swap
 * @category generated
 */
export type SwapInstructionAccounts = {
  treasuryMint: web3.PublicKey;
  payer: web3.PublicKey;
  paymentAccount: web3.PublicKey;
  paymentTransferAuthority: web3.PublicKey;
  token: web3.PublicKey;
  tokenMint: web3.PublicKey;
  replacementTokenMetadata: web3.PublicKey;
  replacementTokenMint: web3.PublicKey;
  replacementToken: web3.PublicKey;
  transferAuthority: web3.PublicKey;
  tokenAEscrow: web3.PublicKey;
  tokenBEscrow: web3.PublicKey;
  entangledPair: web3.PublicKey;
};

const swapInstructionDiscriminator = [248, 198, 158, 145, 225, 117, 135, 200];

/**
 * Creates a _Swap_ instruction.
 *
 * @param accounts that will be accessed while the instruction is processed
 * @category Instructions
 * @category Swap
 * @category generated
 */
export function createSwapInstruction(accounts: SwapInstructionAccounts) {
  const {
    treasuryMint,
    payer,
    paymentAccount,
    paymentTransferAuthority,
    token,
    tokenMint,
    replacementTokenMetadata,
    replacementTokenMint,
    replacementToken,
    transferAuthority,
    tokenAEscrow,
    tokenBEscrow,
    entangledPair,
  } = accounts;

  const [data] = swapStruct.serialize({
    instructionDiscriminator: swapInstructionDiscriminator,
  });
  const keys: web3.AccountMeta[] = [
    {
      pubkey: treasuryMint,
      isWritable: false,
      isSigner: false,
    },
    {
      pubkey: payer,
      isWritable: false,
      isSigner: true,
    },
    {
      pubkey: paymentAccount,
      isWritable: true,
      isSigner: false,
    },
    {
      pubkey: paymentTransferAuthority,
      isWritable: false,
      isSigner: false,
    },
    {
      pubkey: token,
      isWritable: true,
      isSigner: false,
    },
    {
      pubkey: tokenMint,
      isWritable: false,
      isSigner: false,
    },
    {
      pubkey: replacementTokenMetadata,
      isWritable: false,
      isSigner: false,
    },
    {
      pubkey: replacementTokenMint,
      isWritable: false,
      isSigner: false,
    },
    {
      pubkey: replacementToken,
      isWritable: true,
      isSigner: false,
    },
    {
      pubkey: transferAuthority,
      isWritable: false,
      isSigner: true,
    },
    {
      pubkey: tokenAEscrow,
      isWritable: true,
      isSigner: false,
    },
    {
      pubkey: tokenBEscrow,
      isWritable: true,
      isSigner: false,
    },
    {
      pubkey: entangledPair,
      isWritable: true,
      isSigner: false,
    },
    {
      pubkey: splToken.TOKEN_PROGRAM_ID,
      isWritable: false,
      isSigner: false,
    },
    {
      pubkey: web3.SystemProgram.programId,
      isWritable: false,
      isSigner: false,
    },
    {
      pubkey: splToken.ASSOCIATED_TOKEN_PROGRAM_ID,
      isWritable: false,
      isSigner: false,
    },
    {
      pubkey: web3.SYSVAR_RENT_PUBKEY,
      isWritable: false,
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
