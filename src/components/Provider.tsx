'use client';
import React from 'react';
import { SessionProvider } from 'next-auth/react';
import { Provider } from "react-redux"
import { store } from "@/app/store"

export const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <SessionProvider>
      <Provider store={store}>
        {children}
      </Provider>
    </SessionProvider>
  );
};