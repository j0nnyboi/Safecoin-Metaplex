/**
 * This code was GENERATED using the solita package.
 * Please DO NOT EDIT THIS FILE, instead rerun solita to update it or write a wrapper to add functionality.
 *
 * See: https://github.com/metaplex-foundation/solita
 */

import * as beet from '@j0nnyboi/beet';
import { AuthorizationData, authorizationDataBeet } from './AuthorizationData';
/**
 * This type is used to derive the {@link UnlockArgs} type as well as the de/serializer.
 * However don't refer to it in your code but use the {@link UnlockArgs} type instead.
 *
 * @category userTypes
 * @category enums
 * @category generated
 * @private
 */
export type UnlockArgsRecord = {
  V1: { authorizationData: beet.COption<AuthorizationData> };
};

/**
 * Union type respresenting the UnlockArgs data enum defined in Rust.
 *
 * NOTE: that it includes a `__kind` property which allows to narrow types in
 * switch/if statements.
 * Additionally `isUnlockArgs*` type guards are exposed below to narrow to a specific variant.
 *
 * @category userTypes
 * @category enums
 * @category generated
 */
export type UnlockArgs = beet.DataEnumKeyAsKind<UnlockArgsRecord>;

export const isUnlockArgsV1 = (x: UnlockArgs): x is UnlockArgs & { __kind: 'V1' } =>
  x.__kind === 'V1';

/**
 * @category userTypes
 * @category generated
 */
export const unlockArgsBeet = beet.dataEnum<UnlockArgsRecord>([
  [
    'V1',
    new beet.FixableBeetArgsStruct<UnlockArgsRecord['V1']>(
      [['authorizationData', beet.coption(authorizationDataBeet)]],
      'UnlockArgsRecord["V1"]',
    ),
  ],
]) as beet.FixableBeet<UnlockArgs, UnlockArgs>;
