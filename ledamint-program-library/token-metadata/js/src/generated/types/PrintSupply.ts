/**
 * This code was GENERATED using the solita package.
 * Please DO NOT EDIT THIS FILE, instead rerun solita to update it or write a wrapper to add functionality.
 *
 * See: https://github.com/metaplex-foundation/solita
 */

import * as beet from '@j0nnyboi/beet';
/**
 * This type is used to derive the {@link PrintSupply} type as well as the de/serializer.
 * However don't refer to it in your code but use the {@link PrintSupply} type instead.
 *
 * @category userTypes
 * @category enums
 * @category generated
 * @private
 */
export type PrintSupplyRecord = {
  Zero: void /* scalar variant */;
  Limited: { fields: [beet.bignum] };
  Unlimited: void /* scalar variant */;
};

/**
 * Union type respresenting the PrintSupply data enum defined in Rust.
 *
 * NOTE: that it includes a `__kind` property which allows to narrow types in
 * switch/if statements.
 * Additionally `isPrintSupply*` type guards are exposed below to narrow to a specific variant.
 *
 * @category userTypes
 * @category enums
 * @category generated
 */
export type PrintSupply = beet.DataEnumKeyAsKind<PrintSupplyRecord>;

export const isPrintSupplyZero = (x: PrintSupply): x is PrintSupply & { __kind: 'Zero' } =>
  x.__kind === 'Zero';
export const isPrintSupplyLimited = (x: PrintSupply): x is PrintSupply & { __kind: 'Limited' } =>
  x.__kind === 'Limited';
export const isPrintSupplyUnlimited = (
  x: PrintSupply,
): x is PrintSupply & { __kind: 'Unlimited' } => x.__kind === 'Unlimited';

/**
 * @category userTypes
 * @category generated
 */
export const printSupplyBeet = beet.dataEnum<PrintSupplyRecord>([
  ['Zero', beet.unit],
  [
    'Limited',
    new beet.BeetArgsStruct<PrintSupplyRecord['Limited']>(
      [['fields', beet.fixedSizeTuple([beet.u64])]],
      'PrintSupplyRecord["Limited"]',
    ),
  ],
  ['Unlimited', beet.unit],
]) as beet.FixableBeet<PrintSupply, PrintSupply>;
