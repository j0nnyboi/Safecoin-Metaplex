/**
 * This code was GENERATED using the solita package.
 * Please DO NOT EDIT THIS FILE, instead rerun solita to update it or write a wrapper to add functionality.
 *
 * See: https://github.com/metaplex-foundation/solita
 */

import * as beet from '@j0nnyboi/beet';
import { EndSettingType, endSettingTypeBeet } from './EndSettingType';
export type EndSettings = {
  endSettingType: EndSettingType;
  number: beet.bignum;
};

/**
 * @category userTypes
 * @category generated
 */
export const endSettingsBeet = new beet.BeetArgsStruct<EndSettings>(
  [
    ['endSettingType', endSettingTypeBeet],
    ['number', beet.u64],
  ],
  'EndSettings',
);