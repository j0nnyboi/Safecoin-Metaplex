import { Borsh, Transaction } from '@metaplex-foundation/mpl-core';
import { TOKEN_PROGRAM_ID } from '@safecoin/safe-token';
import { PublicKey, TransactionCtorFields, TransactionInstruction } from '@safecoin/web3.js';
import { VaultInstructions } from '../VaultProgram';
import { VaultProgram } from '../VaultProgram';

export class CombineVaultArgs extends Borsh.Data {
  static readonly SCHEMA = this.struct([['instruction', 'u8']]);

  instruction = VaultInstructions.CombineVault;
}

type CombineVaultParams = {
  vault: PublicKey;
  fractionMint: PublicKey;
  fractionTreasury: PublicKey;
  outstandingShareTokenAccount: PublicKey;
  payingTokenAccount: PublicKey;
  redeemTreasury: PublicKey;
  vaultAuthority: PublicKey;
  transferAuthority: PublicKey;
  externalPriceAccount: PublicKey;
  burnAuthority: PublicKey;
  newVaultAuthority?: PublicKey;
};

export class CombineVault extends Transaction {
  constructor(options: TransactionCtorFields, params: CombineVaultParams) {
    super(options);
    const {
      vault,
      vaultAuthority,
      fractionMint,
      fractionTreasury,
      outstandingShareTokenAccount,
      payingTokenAccount,
      redeemTreasury,
      newVaultAuthority,
      transferAuthority,
      externalPriceAccount,
      burnAuthority,
    } = params;

    const data = CombineVaultArgs.serialize();

    this.add(
      new TransactionInstruction({
        keys: [
          {
            pubkey: vault,
            isSigner: false,
            isWritable: true,
          },
          {
            pubkey: outstandingShareTokenAccount,
            isSigner: false,
            isWritable: true,
          },
          {
            pubkey: payingTokenAccount,
            isSigner: false,
            isWritable: true,
          },
          {
            pubkey: fractionMint,
            isSigner: false,
            isWritable: true,
          },
          {
            pubkey: fractionTreasury,
            isSigner: false,
            isWritable: true,
          },
          {
            pubkey: redeemTreasury,
            isSigner: false,
            isWritable: true,
          },
          {
            pubkey: newVaultAuthority || vaultAuthority,
            isSigner: false,
            isWritable: false,
          },
          {
            pubkey: vaultAuthority,
            isSigner: true,
            isWritable: false,
          },
          {
            pubkey: transferAuthority,
            isSigner: true,
            isWritable: false,
          },
          {
            pubkey: burnAuthority,
            isSigner: false,
            isWritable: false,
          },
          {
            pubkey: externalPriceAccount,
            isSigner: false,
            isWritable: false,
          },
          {
            pubkey: TOKEN_PROGRAM_ID,
            isSigner: false,
            isWritable: false,
          },
        ],
        programId: VaultProgram.PUBKEY,
        data,
      }),
    );
  }
}
