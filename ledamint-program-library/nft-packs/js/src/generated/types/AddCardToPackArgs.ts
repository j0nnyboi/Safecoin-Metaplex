/**
 * This code was GENERATED using the solita package.
 * Please DO NOT EDIT THIS FILE, instead rerun solita to update it or write a wrapper to add functionality.
 *
 * See: https://github.com/metaplex-foundation/solita
 */

import * as beet from '@j0nnyboi/beet';
export type AddCardToPackArgs = {
  maxSupply: number;
  weight: number;
  index: number;
};

/**
 * @category userTypes
 * @category generated
 */
export const addCardToPackArgsBeet = new beet.BeetArgsStruct<AddCardToPackArgs>(
  [
    ['maxSupply', beet.u32],
    ['weight', beet.u16],
    ['index', beet.u32],
  ],
  'AddCardToPackArgs',
);