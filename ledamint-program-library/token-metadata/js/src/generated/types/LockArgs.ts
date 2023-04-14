/**
 * This code was GENERATED using the solita package.
 * Please DO NOT EDIT THIS FILE, instead rerun solita to update it or write a wrapper to add functionality.
 *
 * See: https://github.com/metaplex-foundation/solita
 */

import * as beet from '@j0nnyboi/beet';
import { AuthorizationData, authorizationDataBeet } from './AuthorizationData';
/**
 * This type is used to derive the {@link LockArgs} type as well as the de/serializer.
 * However don't refer to it in your code but use the {@link LockArgs} type instead.
 *
 * @category userTypes
 * @category enums
 * @category generated
 * @private
 */
export type LockArgsRecord = {
  V1: { authorizationData: beet.COption<AuthorizationData> };
};

/**
 * Union type respresenting the LockArgs data enum defined in Rust.
 *
 * NOTE: that it includes a `__kind` property which allows to narrow types in
 * switch/if statements.
 * Additionally `isLockArgs*` type guards are exposed below to narrow to a specific variant.
 *
 * @category userTypes
 * @category enums
 * @category generated
 */
export type LockArgs = beet.DataEnumKeyAsKind<LockArgsRecord>;

export const isLockArgsV1 = (x: LockArgs): x is LockArgs & { __kind: 'V1' } => x.__kind === 'V1';

/**
 * @category userTypes
 * @category generated
 */
export const lockArgsBeet = beet.dataEnum<LockArgsRecord>([
  [
    'V1',
    new beet.FixableBeetArgsStruct<LockArgsRecord['V1']>(
      [['authorizationData', beet.coption(authorizationDataBeet)]],
      'LockArgsRecord["V1"]',
    ),
  ],
]) as beet.FixableBeet<LockArgs, LockArgs>;