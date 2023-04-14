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
export enum InstructionName {
  Unknown,
  MintV1,
  Redeem,
  CancelRedeem,
  Transfer,
  Delegate,
  DecompressV1,
  Compress,
  Burn,
  CreateTree,
  VerifyCreator,
  UnverifyCreator,
  VerifyCollection,
  UnverifyCollection,
  SetAndVerifyCollection,
  MintToCollectionV1,
}

/**
 * @category userTypes
 * @category generated
 */
export const instructionNameBeet = beet.fixedScalarEnum(InstructionName) as beet.FixedSizeBeet<
  InstructionName,
  InstructionName
>;