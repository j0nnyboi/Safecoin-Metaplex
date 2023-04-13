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
 * @category AuctioneerSell
 * @category generated
 */
export type AuctioneerSellInstructionArgs = {
  tradeStateBump: number;
  freeTradeStateBump: number;
  programAsSignerBump: number;
  tokenSize: beet.bignum;
};
/**
 * @category Instructions
 * @category AuctioneerSell
 * @category generated
 */
export const auctioneerSellStruct = new beet.BeetArgsStruct<
  AuctioneerSellInstructionArgs & {
    instructionDiscriminator: number[] /* size: 8 */;
  }
>(
  [
    ['instructionDiscriminator', beet.uniformFixedSizeArray(beet.u8, 8)],
    ['tradeStateBump', beet.u8],
    ['freeTradeStateBump', beet.u8],
    ['programAsSignerBump', beet.u8],
    ['tokenSize', beet.u64],
  ],
  'AuctioneerSellInstructionArgs',
);
/**
 * Accounts required by the _auctioneerSell_ instruction
 *
 * @property [_writable_] wallet
 * @property [_writable_] tokenAccount
 * @property [] metadata
 * @property [] authority
 * @property [**signer**] auctioneerAuthority
 * @property [] auctionHouse
 * @property [_writable_] auctionHouseFeeAccount
 * @property [_writable_] sellerTradeState
 * @property [_writable_] freeSellerTradeState
 * @property [] ahAuctioneerPda
 * @property [] programAsSigner
 * @category Instructions
 * @category AuctioneerSell
 * @category generated
 */
export type AuctioneerSellInstructionAccounts = {
  wallet: web3.PublicKey;
  tokenAccount: web3.PublicKey;
  metadata: web3.PublicKey;
  authority: web3.PublicKey;
  auctioneerAuthority: web3.PublicKey;
  auctionHouse: web3.PublicKey;
  auctionHouseFeeAccount: web3.PublicKey;
  sellerTradeState: web3.PublicKey;
  freeSellerTradeState: web3.PublicKey;
  ahAuctioneerPda: web3.PublicKey;
  programAsSigner: web3.PublicKey;
  tokenProgram?: web3.PublicKey;
  systemProgram?: web3.PublicKey;
  rent?: web3.PublicKey;
  anchorRemainingAccounts?: web3.AccountMeta[];
};

export const auctioneerSellInstructionDiscriminator = [251, 60, 142, 195, 121, 203, 26, 183];

/**
 * Creates a _AuctioneerSell_ instruction.
 *
 * @param accounts that will be accessed while the instruction is processed
 * @param args to provide as instruction data to the program
 *
 * @category Instructions
 * @category AuctioneerSell
 * @category generated
 */
export function createAuctioneerSellInstruction(
  accounts: AuctioneerSellInstructionAccounts,
  args: AuctioneerSellInstructionArgs,
  programId = new web3.PublicKey('hausS13jsjafwWwGqZTUQRmWyvyxn9EQpqMwV1PBBmk'),
) {
  const [data] = auctioneerSellStruct.serialize({
    instructionDiscriminator: auctioneerSellInstructionDiscriminator,
    ...args,
  });
  const keys: web3.AccountMeta[] = [
    {
      pubkey: accounts.wallet,
      isWritable: true,
      isSigner: false,
    },
    {
      pubkey: accounts.tokenAccount,
      isWritable: true,
      isSigner: false,
    },
    {
      pubkey: accounts.metadata,
      isWritable: false,
      isSigner: false,
    },
    {
      pubkey: accounts.authority,
      isWritable: false,
      isSigner: false,
    },
    {
      pubkey: accounts.auctioneerAuthority,
      isWritable: false,
      isSigner: true,
    },
    {
      pubkey: accounts.auctionHouse,
      isWritable: false,
      isSigner: false,
    },
    {
      pubkey: accounts.auctionHouseFeeAccount,
      isWritable: true,
      isSigner: false,
    },
    {
      pubkey: accounts.sellerTradeState,
      isWritable: true,
      isSigner: false,
    },
    {
      pubkey: accounts.freeSellerTradeState,
      isWritable: true,
      isSigner: false,
    },
    {
      pubkey: accounts.ahAuctioneerPda,
      isWritable: false,
      isSigner: false,
    },
    {
      pubkey: accounts.programAsSigner,
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
    {
      pubkey: accounts.rent ?? web3.SYSVAR_RENT_PUBKEY,
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
