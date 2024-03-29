/**
 * This code was GENERATED using the solita package.
 * Please DO NOT EDIT THIS FILE, instead rerun solita to update it or write a wrapper to add functionality.
 *
 * See: https://github.com/metaplex-foundation/solita
 */

import * as beet from '@j0nnyboi/beet';
import { PackDistributionType, packDistributionTypeBeet } from './PackDistributionType';
export type InitPackSetArgs = {
  name: number[] /* size: 32 */;
  description: string;
  uri: string;
  mutable: boolean;
  distributionType: PackDistributionType;
  allowedAmountToRedeem: number;
  redeemStartDate: beet.COption<beet.bignum>;
  redeemEndDate: beet.COption<beet.bignum>;
};

/**
 * @category userTypes
 * @category generated
 */
export const initPackSetArgsBeet = new beet.FixableBeetArgsStruct<InitPackSetArgs>(
  [
    ['name', beet.uniformFixedSizeArray(beet.u8, 32)],
    ['description', beet.utf8String],
    ['uri', beet.utf8String],
    ['mutable', beet.bool],
    ['distributionType', packDistributionTypeBeet],
    ['allowedAmountToRedeem', beet.u32],
    ['redeemStartDate', beet.coption(beet.u64)],
    ['redeemEndDate', beet.coption(beet.u64)],
  ],
  'InitPackSetArgs',
);
