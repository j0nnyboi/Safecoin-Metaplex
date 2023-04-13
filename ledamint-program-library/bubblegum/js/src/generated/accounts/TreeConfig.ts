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
 * Arguments used to create {@link TreeConfig}
 * @category Accounts
 * @category generated
 */
export type TreeConfigArgs = {
  treeCreator: web3.PublicKey;
  treeDelegate: web3.PublicKey;
  totalMintCapacity: beet.bignum;
  numMinted: beet.bignum;
  isPublic: boolean;
};

export const treeConfigDiscriminator = [122, 245, 175, 248, 171, 34, 0, 207];
/**
 * Holds the data for the {@link TreeConfig} Account and provides de/serialization
 * functionality for that data
 *
 * @category Accounts
 * @category generated
 */
export class TreeConfig implements TreeConfigArgs {
  private constructor(
    readonly treeCreator: web3.PublicKey,
    readonly treeDelegate: web3.PublicKey,
    readonly totalMintCapacity: beet.bignum,
    readonly numMinted: beet.bignum,
    readonly isPublic: boolean,
  ) {}

  /**
   * Creates a {@link TreeConfig} instance from the provided args.
   */
  static fromArgs(args: TreeConfigArgs) {
    return new TreeConfig(
      args.treeCreator,
      args.treeDelegate,
      args.totalMintCapacity,
      args.numMinted,
      args.isPublic,
    );
  }

  /**
   * Deserializes the {@link TreeConfig} from the data of the provided {@link web3.AccountInfo}.
   * @returns a tuple of the account data and the offset up to which the buffer was read to obtain it.
   */
  static fromAccountInfo(accountInfo: web3.AccountInfo<Buffer>, offset = 0): [TreeConfig, number] {
    return TreeConfig.deserialize(accountInfo.data, offset);
  }

  /**
   * Retrieves the account info from the provided address and deserializes
   * the {@link TreeConfig} from its data.
   *
   * @throws Error if no account info is found at the address or if deserialization fails
   */
  static async fromAccountAddress(
    connection: web3.Connection,
    address: web3.PublicKey,
    commitmentOrConfig?: web3.Commitment | web3.GetAccountInfoConfig,
  ): Promise<TreeConfig> {
    const accountInfo = await connection.getAccountInfo(address, commitmentOrConfig);
    if (accountInfo == null) {
      throw new Error(`Unable to find TreeConfig account at ${address}`);
    }
    return TreeConfig.fromAccountInfo(accountInfo, 0)[0];
  }

  /**
   * Provides a {@link web3.Connection.getProgramAccounts} config builder,
   * to fetch accounts matching filters that can be specified via that builder.
   *
   * @param programId - the program that owns the accounts we are filtering
   */
  static gpaBuilder(
    programId: web3.PublicKey = new web3.PublicKey('BGUMAp9Gq7iTEuizy4pqaxsTyUCBK68MDfK752saRPUY'),
  ) {
    return beetSolana.GpaBuilder.fromStruct(programId, treeConfigBeet);
  }

  /**
   * Deserializes the {@link TreeConfig} from the provided data Buffer.
   * @returns a tuple of the account data and the offset up to which the buffer was read to obtain it.
   */
  static deserialize(buf: Buffer, offset = 0): [TreeConfig, number] {
    return treeConfigBeet.deserialize(buf, offset);
  }

  /**
   * Serializes the {@link TreeConfig} into a Buffer.
   * @returns a tuple of the created Buffer and the offset up to which the buffer was written to store it.
   */
  serialize(): [Buffer, number] {
    return treeConfigBeet.serialize({
      accountDiscriminator: treeConfigDiscriminator,
      ...this,
    });
  }

  /**
   * Returns the byteSize of a {@link Buffer} holding the serialized data of
   * {@link TreeConfig}
   */
  static get byteSize() {
    return treeConfigBeet.byteSize;
  }

  /**
   * Fetches the minimum balance needed to exempt an account holding
   * {@link TreeConfig} data from rent
   *
   * @param connection used to retrieve the rent exemption information
   */
  static async getMinimumBalanceForRentExemption(
    connection: web3.Connection,
    commitment?: web3.Commitment,
  ): Promise<number> {
    return connection.getMinimumBalanceForRentExemption(TreeConfig.byteSize, commitment);
  }

  /**
   * Determines if the provided {@link Buffer} has the correct byte size to
   * hold {@link TreeConfig} data.
   */
  static hasCorrectByteSize(buf: Buffer, offset = 0) {
    return buf.byteLength - offset === TreeConfig.byteSize;
  }

  /**
   * Returns a readable version of {@link TreeConfig} properties
   * and can be used to convert to JSON and/or logging
   */
  pretty() {
    return {
      treeCreator: this.treeCreator.toBase58(),
      treeDelegate: this.treeDelegate.toBase58(),
      totalMintCapacity: (() => {
        const x = <{ toNumber: () => number }>this.totalMintCapacity;
        if (typeof x.toNumber === 'function') {
          try {
            return x.toNumber();
          } catch (_) {
            return x;
          }
        }
        return x;
      })(),
      numMinted: (() => {
        const x = <{ toNumber: () => number }>this.numMinted;
        if (typeof x.toNumber === 'function') {
          try {
            return x.toNumber();
          } catch (_) {
            return x;
          }
        }
        return x;
      })(),
      isPublic: this.isPublic,
    };
  }
}

/**
 * @category Accounts
 * @category generated
 */
export const treeConfigBeet = new beet.BeetStruct<
  TreeConfig,
  TreeConfigArgs & {
    accountDiscriminator: number[] /* size: 8 */;
  }
>(
  [
    ['accountDiscriminator', beet.uniformFixedSizeArray(beet.u8, 8)],
    ['treeCreator', beetSolana.publicKey],
    ['treeDelegate', beetSolana.publicKey],
    ['totalMintCapacity', beet.u64],
    ['numMinted', beet.u64],
    ['isPublic', beet.bool],
  ],
  TreeConfig.fromArgs,
  'TreeConfig',
);
