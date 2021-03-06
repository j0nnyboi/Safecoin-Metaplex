import { Borsh, Transaction } from '@metaplex-foundation/mpl-core';
import { ParamsWithStore } from '@metaplex-foundation/mpl-token-vault';
import { AuctionProgram } from '@metaplex-foundation/mpl-auction';
import { TOKEN_PROGRAM_ID } from '@safecoin/safe-token';
import {
  PublicKey,
  SYSVAR_CLOCK_PUBKEY,
  TransactionCtorFields,
  TransactionInstruction,
} from '@safecoin/web3.js';
import { MetaplexProgram } from '../MetaplexProgram';

export class ClaimBidArgs extends Borsh.Data {
  static readonly SCHEMA = this.struct([['instruction', 'u8']]);

  instruction = 6;
}

type ClaimBidParams = {
  vault: PublicKey;
  auction: PublicKey;
  auctionExtended: PublicKey;
  auctionManager: PublicKey;
  acceptPayment: PublicKey;
  bidder: PublicKey;
  bidderPot: PublicKey;
  bidderPotToken: PublicKey;
  tokenMint: PublicKey;
};

export class ClaimBid extends Transaction {
  constructor(options: TransactionCtorFields, params: ParamsWithStore<ClaimBidParams>) {
    super(options);
    const {
      store,
      vault,
      auction,
      auctionExtended,
      auctionManager,
      bidder,
      bidderPot,
      bidderPotToken,
      acceptPayment,
      tokenMint,
    } = params;

    const data = ClaimBidArgs.serialize();

    this.add(
      new TransactionInstruction({
        keys: [
          {
            pubkey: acceptPayment,
            isSigner: false,
            isWritable: true,
          },
          {
            pubkey: bidderPotToken,
            isSigner: false,
            isWritable: true,
          },
          {
            pubkey: bidderPot,
            isSigner: false,
            isWritable: true,
          },

          {
            pubkey: auctionManager,
            isSigner: false,
            isWritable: true,
          },
          {
            pubkey: auction,
            isSigner: false,
            isWritable: false,
          },
          {
            pubkey: bidder,
            isSigner: false,
            isWritable: false,
          },
          {
            pubkey: tokenMint,
            isSigner: false,
            isWritable: false,
          },
          {
            pubkey: vault,
            isSigner: false,
            isWritable: false,
          },
          {
            pubkey: store,
            isSigner: false,
            isWritable: false,
          },
          {
            pubkey: AuctionProgram.PUBKEY,
            isSigner: false,
            isWritable: false,
          },
          {
            pubkey: SYSVAR_CLOCK_PUBKEY,
            isSigner: false,
            isWritable: false,
          },
          {
            pubkey: TOKEN_PROGRAM_ID,
            isSigner: false,
            isWritable: false,
          },
          {
            pubkey: auctionExtended,
            isSigner: false,
            isWritable: false,
          },
        ],
        programId: MetaplexProgram.PUBKEY,
        data,
      }),
    );
  }
}
