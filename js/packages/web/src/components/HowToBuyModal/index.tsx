import { InstructionsModal } from '../InstructionsModal';
import React from 'react';
import { LABELS } from '../../constants';
import { ConnectButton } from '@oyster/common';

interface HowToBuyModalProps {
  buttonClassName: string;
  onClick?: any;
}

export const HowToBuyModal: React.FC<HowToBuyModalProps> = ({
  buttonClassName,
  onClick,
}) => {
  return (
    <InstructionsModal
      buttonClassName={buttonClassName}
      buttonText="How to Buy"
      modalTitle={`Buying NFTs on ${LABELS.STORE_NAME}`}
      cardProps={[
        {
          title: 'Create a SAFE wallet',
          imgSrc: '/modals/how-to-buy-1.svg',
          description: `SAFE is the cryptocurrency we use for purchases on ${LABELS.STORE_NAME}. To keep your SAFE safe, you’ll need a crypto wallet—we recommend using one called SAFE Wallet. Just head to Safecoin's site.`,
        },
        {
          title: 'Add funds to your wallet',
          imgSrc: '/modals/how-to-buy-2.svg',
          description: `To fund your wallet, you’ll need to purchase SAFE. The easiest way is to get safecoins is at safeTrade`,
        },
        {
          title: `Connect your wallet to ${LABELS.STORE_NAME}.`,
          imgSrc: '/modals/how-to-buy-3.jpg',
          description: `To connect your wallet, tap “Connect Wallet” here on the site. Select the Safecoin option, and your wallet will connect. After that, you can start bidding on NFTs.`,
          endElement: <ConnectButton className={'secondary-btn'} />,
        },
      ]}
      onClick={onClick}
    />
  );
};
