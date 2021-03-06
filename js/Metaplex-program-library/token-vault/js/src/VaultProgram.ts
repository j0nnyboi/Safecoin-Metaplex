import { config, Program } from '@metaplex-foundation/mpl-core';
import { PublicKey } from '@safecoin/web3.js';

export enum VaultKey {
  Uninitialized = 0,
  VaultV1 = 3,
  SafetyDepositBoxV1 = 1,
  ExternalPriceAccountV1 = 2,
}

export enum VaultInstructions {
  InitVault,
  AddTokenToInactiveVault,
  ActivateVault,
  CombineVault,
  RedeemShares,
  WithdrawTokenFromSafetyDepositBox,
  MintFractionalShares,
  WithdrawSharesFromTreasury,
  AddSharesToTreasury,
  UpdateExternalPriceAccount,
  SetVaultAuthority,
}

export class VaultProgram extends Program {
  static readonly PREFIX = 'vault';
  static readonly PUBKEY = new PublicKey(config.programs.vault);
}
