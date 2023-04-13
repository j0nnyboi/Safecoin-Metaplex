/**
 * This code was GENERATED using the solita package.
 * Please DO NOT EDIT THIS FILE, instead rerun solita to update it or write a wrapper to add functionality.
 *
 * See: https://github.com/metaplex-foundation/solita
 */

import * as beet from '@j0nnyboi/beet';
/**
 * This type is used to derive the {@link CollectionDetails} type as well as the de/serializer.
 * However don't refer to it in your code but use the {@link CollectionDetails} type instead.
 *
 * @category userTypes
 * @category enums
 * @category generated
 * @private
 */
export type CollectionDetailsRecord = {
  V1: { size: beet.bignum };
};

/**
 * Union type respresenting the CollectionDetails data enum defined in Rust.
 *
 * NOTE: that it includes a `__kind` property which allows to narrow types in
 * switch/if statements.
 * Additionally `isCollectionDetails*` type guards are exposed below to narrow to a specific variant.
 *
 * @category userTypes
 * @category enums
 * @category generated
 */
export type CollectionDetails = beet.DataEnumKeyAsKind<CollectionDetailsRecord>;

export const isCollectionDetailsV1 = (
  x: CollectionDetails,
): x is CollectionDetails & { __kind: 'V1' } => x.__kind === 'V1';

/**
 * @category userTypes
 * @category generated
 */
export const collectionDetailsBeet = beet.dataEnum<CollectionDetailsRecord>([
  [
    'V1',
    new beet.BeetArgsStruct<CollectionDetailsRecord['V1']>(
      [['size', beet.u64]],
      'CollectionDetailsRecord["V1"]',
    ),
  ],
]) as beet.FixableBeet<CollectionDetails, CollectionDetails>;
