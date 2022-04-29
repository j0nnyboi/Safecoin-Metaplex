import { ParsedAccount, StringPublicKey, TokenAccount } from '@j0nnyboi/common';
import { PackSet } from '@j0nnyboi/common/dist/lib/models/packs/accounts/PackSet';
import { ProvingProcess } from '@j0nnyboi/common/dist/lib/models/packs/accounts/ProvingProcess';
import { WalletContextState } from '@j0nnyboi/wallet-adapter-react';
import { Connection } from '@safecoin/web3.js';

import { SafetyDepositDraft } from '../../../actions/createAuctionManager';
import { VoucherByKey } from '../../../types/packs';
import { PackMetadataByPackCard } from './hooks/useMetadataByPackCard';

export type PackContextProps = {
  isLoading: boolean;
  packKey: StringPublicKey;
  voucherMint: StringPublicKey;
  openedMetadata: SafetyDepositDraft[];
  metadataByPackCard: PackMetadataByPackCard;
  handleOpenPack: () => Promise<void>;
  redeemModalMetadata: StringPublicKey[];
  pack?: ParsedAccount<PackSet>;
  voucherMetadataKey?: StringPublicKey;
  provingProcess?: ParsedAccount<ProvingProcess>;
};

export interface GetProvingProcessParams {
  pack: ParsedAccount<PackSet>;
  voucherMint?: StringPublicKey;
  provingProcess?: ParsedAccount<ProvingProcess>;
  vouchers: VoucherByKey;
  accountByMint: Map<string, TokenAccount>;
  connection: Connection;
  wallet: WalletContextState;
}

export interface RequestCardsUsingVoucherParams {
  pack: ParsedAccount<PackSet>;
  cardsLeftToOpen: number;
  voucherTokenAccount?: TokenAccount;
  voucherKey: StringPublicKey;
  editionKey: StringPublicKey;
  editionMint: StringPublicKey;
  connection: Connection;
  wallet: WalletContextState;
}
