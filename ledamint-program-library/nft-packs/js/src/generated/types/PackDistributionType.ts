/**
 * This code was GENERATED using the solita package.
 * Please DO NOT EDIT THIS FILE, instead rerun solita to update it or write a wrapper to add functionality.
 *
 * See: https://github.com/metaplex-foundation/solita
 */

import * as beet from '@j0nnyboi/beet';
/**
 * @category enums
 * @category generated
 */
export enum PackDistributionType {
  MaxSupply,
  Fixed,
  Unlimited,
}

/**
 * @category userTypes
 * @category generated
 */
export const packDistributionTypeBeet = beet.fixedScalarEnum(
  PackDistributionType,
) as beet.FixedSizeBeet<PackDistributionType, PackDistributionType>;
