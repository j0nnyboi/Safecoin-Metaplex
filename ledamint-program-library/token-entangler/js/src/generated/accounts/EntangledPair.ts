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
 * Arguments used to create {@link EntangledPair}
 * @category Accounts
 * @category generated
 */
export type EntangledPairArgs = {
  treasuryMint: web3.PublicKey;
  mintA: web3.PublicKey;
  mintB: web3.PublicKey;
  tokenAEscrow: web3.PublicKey;
  tokenBEscrow: web3.PublicKey;
  authority: web3.PublicKey;
  bump: number;
  tokenAEscrowBump: number;
  tokenBEscrowBump: number;
  price: beet.bignum;
  paid: boolean;
  paysEveryTime: boolean;
};

const entangledPairDiscriminator = [133, 118, 20, 210, 1, 54, 172, 116];
/**
 * Holds the data for the {@link EntangledPair} Account and provides de/serialization
 * functionality for that data
 *
 * @category Accounts
 * @category generated
 */
export class EntangledPair implements EntangledPairArgs {
  private constructor(
    readonly treasuryMint: web3.PublicKey,
    readonly mintA: web3.PublicKey,
    readonly mintB: web3.PublicKey,
    readonly tokenAEscrow: web3.PublicKey,
    readonly tokenBEscrow: web3.PublicKey,
    readonly authority: web3.PublicKey,
    readonly bump: number,
    readonly tokenAEscrowBump: number,
    readonly tokenBEscrowBump: number,
    readonly price: beet.bignum,
    readonly paid: boolean,
    readonly paysEveryTime: boolean,
  ) {}

  /**
   * Creates a {@link EntangledPair} instance from the provided args.
   */
  static fromArgs(args: EntangledPairArgs) {
    return new EntangledPair(
      args.treasuryMint,
      args.mintA,
      args.mintB,
      args.tokenAEscrow,
      args.tokenBEscrow,
      args.authority,
      args.bump,
      args.tokenAEscrowBump,
      args.tokenBEscrowBump,
      args.price,
      args.paid,
      args.paysEveryTime,
    );
  }

  /**
   * Deserializes the {@link EntangledPair} from the data of the provided {@link web3.AccountInfo}.
   * @returns a tuple of the account data and the offset up to which the buffer was read to obtain it.
   */
  static fromAccountInfo(
    accountInfo: web3.AccountInfo<Buffer>,
    offset = 0,
  ): [EntangledPair, number] {
    return EntangledPair.deserialize(accountInfo.data, offset);
  }

  /**
   * Retrieves the account info from the provided address and deserializes
   * the {@link EntangledPair} from its data.
   *
   * @throws Error if no account info is found at the address or if deserialization fails
   */
  static async fromAccountAddress(
    connection: web3.Connection,
    address: web3.PublicKey,
  ): Promise<EntangledPair> {
    const accountInfo = await connection.getAccountInfo(address);
    if (accountInfo == null) {
      throw new Error(`Unable to find EntangledPair account at ${address}`);
    }
    return EntangledPair.fromAccountInfo(accountInfo, 0)[0];
  }

  /**
   * Deserializes the {@link EntangledPair} from the provided data Buffer.
   * @returns a tuple of the account data and the offset up to which the buffer was read to obtain it.
   */
  static deserialize(buf: Buffer, offset = 0): [EntangledPair, number] {
    return entangledPairBeet.deserialize(buf, offset);
  }

  /**
   * Serializes the {@link EntangledPair} into a Buffer.
   * @returns a tuple of the created Buffer and the offset up to which the buffer was written to store it.
   */
  serialize(): [Buffer, number] {
    return entangledPairBeet.serialize({
      accountDiscriminator: entangledPairDiscriminator,
      ...this,
    });
  }

  /**
   * Returns the byteSize of a {@link Buffer} holding the serialized data of
   * {@link EntangledPair}
   */
  static get byteSize() {
    return entangledPairBeet.byteSize;
  }

  /**
   * Fetches the minimum balance needed to exempt an account holding
   * {@link EntangledPair} data from rent
   *
   * @param connection used to retrieve the rent exemption information
   */
  static async getMinimumBalanceForRentExemption(
    connection: web3.Connection,
    commitment?: web3.Commitment,
  ): Promise<number> {
    return connection.getMinimumBalanceForRentExemption(EntangledPair.byteSize, commitment);
  }

  /**
   * Determines if the provided {@link Buffer} has the correct byte size to
   * hold {@link EntangledPair} data.
   */
  static hasCorrectByteSize(buf: Buffer, offset = 0) {
    return buf.byteLength - offset === EntangledPair.byteSize;
  }

  /**
   * Returns a readable version of {@link EntangledPair} properties
   * and can be used to convert to JSON and/or logging
   */
  pretty() {
    return {
      treasuryMint: this.treasuryMint.toBase58(),
      mintA: this.mintA.toBase58(),
      mintB: this.mintB.toBase58(),
      tokenAEscrow: this.tokenAEscrow.toBase58(),
      tokenBEscrow: this.tokenBEscrow.toBase58(),
      authority: this.authority.toBase58(),
      bump: this.bump,
      tokenAEscrowBump: this.tokenAEscrowBump,
      tokenBEscrowBump: this.tokenBEscrowBump,
      price: (() => {
        const x = <{ toNumber: () => number }>this.price;
        if (typeof x.toNumber === 'function') {
          try {
            return x.toNumber();
          } catch (_) {
            return x;
          }
        }
        return x;
      })(),
      paid: this.paid,
      paysEveryTime: this.paysEveryTime,
    };
  }
}

/**
 * @category Accounts
 * @category generated
 */
export const entangledPairBeet = new beet.BeetStruct<
  EntangledPair,
  EntangledPairArgs & {
    accountDiscriminator: number[] /* size: 8 */;
  }
>(
  [
    ['accountDiscriminator', beet.uniformFixedSizeArray(beet.u8, 8)],
    ['treasuryMint', beetSolana.publicKey],
    ['mintA', beetSolana.publicKey],
    ['mintB', beetSolana.publicKey],
    ['tokenAEscrow', beetSolana.publicKey],
    ['tokenBEscrow', beetSolana.publicKey],
    ['authority', beetSolana.publicKey],
    ['bump', beet.u8],
    ['tokenAEscrowBump', beet.u8],
    ['tokenBEscrowBump', beet.u8],
    ['price', beet.u64],
    ['paid', beet.bool],
    ['paysEveryTime', beet.bool],
  ],
  EntangledPair.fromArgs,
  'EntangledPair',
);
