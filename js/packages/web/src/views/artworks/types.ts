import { Metadata, ParsedAccount } from '@j0nnyboi/common';
import { SafetyDepositDraft } from '../../actions/createAuctionManager';
import { ExtendedPack } from '../../types/packs';

export type Item = ExtendedPack | SafetyDepositDraft | ParsedAccount<Metadata>;

export enum ArtworkViewState {
  Metaplex = '0',
  Owned = '1',
  Created = '2',
}
