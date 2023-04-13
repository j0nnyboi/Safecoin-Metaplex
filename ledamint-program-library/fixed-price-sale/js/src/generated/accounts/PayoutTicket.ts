/**
 * This code was GENERATED using the solita package.
 * Please DO NOT EDIT THIS FILE, instead rerun solita to update it or write a wrapper to add functionality.
 *
 * See: https://github.com/metaplex-foundation/solita
 */

import * as beet from '@j0nnyboi/beet';
import * as web3 from '@safecoin/web3.js';
import * as beetSolana from '@j0nnyboi/beet-safecoin';

/**
 * Arguments used to create {@link PayoutTicket}
 * @category Accounts
 * @category generated
 */
export type PayoutTicketArgs = {
  used: boolean;
};

export const payoutTicketDiscriminator = [153, 222, 52, 216, 192, 152, 175, 80];
/**
 * Holds the data for the {@link PayoutTicket} Account and provides de/serialization
 * functionality for that data
 *
 * @category Accounts
 * @category generated
 */
export class PayoutTicket implements PayoutTicketArgs {
  private constructor(readonly used: boolean) {}

  /**
   * Creates a {@link PayoutTicket} instance from the provided args.
   */
  static fromArgs(args: PayoutTicketArgs) {
    return new PayoutTicket(args.used);
  }

  /**
   * Deserializes the {@link PayoutTicket} from the data of the provided {@link web3.AccountInfo}.
   * @returns a tuple of the account data and the offset up to which the buffer was read to obtain it.
   */
  static fromAccountInfo(
    accountInfo: web3.AccountInfo<Buffer>,
    offset = 0,
  ): [PayoutTicket, number] {
    return PayoutTicket.deserialize(accountInfo.data, offset);
  }

  /**
   * Retrieves the account info from the provided address and deserializes
   * the {@link PayoutTicket} from its data.
   *
   * @throws Error if no account info is found at the address or if deserialization fails
   */
  static async fromAccountAddress(
    connection: web3.Connection,
    address: web3.PublicKey,
    commitmentOrConfig?: web3.Commitment | web3.GetAccountInfoConfig,
  ): Promise<PayoutTicket> {
    const accountInfo = await connection.getAccountInfo(address, commitmentOrConfig);
    if (accountInfo == null) {
      throw new Error(`Unable to find PayoutTicket account at ${address}`);
    }
    return PayoutTicket.fromAccountInfo(accountInfo, 0)[0];
  }

  /**
   * Provides a {@link web3.Connection.getProgramAccounts} config builder,
   * to fetch accounts matching filters that can be specified via that builder.
   *
   * @param programId - the program that owns the accounts we are filtering
   */
  static gpaBuilder(
    programId: web3.PublicKey = new web3.PublicKey('SaLeTjyUa5wXHnGuewUSyJ5JWZaHwz3TxqUntCE9czo'),
  ) {
    return beetSolana.GpaBuilder.fromStruct(programId, payoutTicketBeet);
  }

  /**
   * Deserializes the {@link PayoutTicket} from the provided data Buffer.
   * @returns a tuple of the account data and the offset up to which the buffer was read to obtain it.
   */
  static deserialize(buf: Buffer, offset = 0): [PayoutTicket, number] {
    return payoutTicketBeet.deserialize(buf, offset);
  }

  /**
   * Serializes the {@link PayoutTicket} into a Buffer.
   * @returns a tuple of the created Buffer and the offset up to which the buffer was written to store it.
   */
  serialize(): [Buffer, number] {
    return payoutTicketBeet.serialize({
      accountDiscriminator: payoutTicketDiscriminator,
      ...this,
    });
  }

  /**
   * Returns the byteSize of a {@link Buffer} holding the serialized data of
   * {@link PayoutTicket}
   */
  static get byteSize() {
    return payoutTicketBeet.byteSize;
  }

  /**
   * Fetches the minimum balance needed to exempt an account holding
   * {@link PayoutTicket} data from rent
   *
   * @param connection used to retrieve the rent exemption information
   */
  static async getMinimumBalanceForRentExemption(
    connection: web3.Connection,
    commitment?: web3.Commitment,
  ): Promise<number> {
    return connection.getMinimumBalanceForRentExemption(PayoutTicket.byteSize, commitment);
  }

  /**
   * Determines if the provided {@link Buffer} has the correct byte size to
   * hold {@link PayoutTicket} data.
   */
  static hasCorrectByteSize(buf: Buffer, offset = 0) {
    return buf.byteLength - offset === PayoutTicket.byteSize;
  }

  /**
   * Returns a readable version of {@link PayoutTicket} properties
   * and can be used to convert to JSON and/or logging
   */
  pretty() {
    return {
      used: this.used,
    };
  }
}

/**
 * @category Accounts
 * @category generated
 */
export const payoutTicketBeet = new beet.BeetStruct<
  PayoutTicket,
  PayoutTicketArgs & {
    accountDiscriminator: number[] /* size: 8 */;
  }
>(
  [
    ['accountDiscriminator', beet.uniformFixedSizeArray(beet.u8, 8)],
    ['used', beet.bool],
  ],
  PayoutTicket.fromArgs,
  'PayoutTicket',
);
