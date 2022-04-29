import React from 'react';
import { StoreProvider } from '@j0nnyboi/common';
import { FC } from 'react';
export const Providers: FC = ({ children }) => {
  return (
    <StoreProvider
      ownerAddress={process.env.NEXT_PUBLIC_STORE_OWNER_ADDRESS}
      storeAddress={process.env.NEXT_PUBLIC_STORE_ADDRESS}
    >
      {children}
    </StoreProvider>
  );
};
