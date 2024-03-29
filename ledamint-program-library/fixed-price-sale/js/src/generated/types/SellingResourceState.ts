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
export enum SellingResourceState {
  Uninitialized,
  Created,
  InUse,
  Exhausted,
  Stopped,
}

/**
 * @category userTypes
 * @category generated
 */
export const sellingResourceStateBeet = beet.fixedScalarEnum(
  SellingResourceState,
) as beet.FixedSizeBeet<SellingResourceState, SellingResourceState>;
