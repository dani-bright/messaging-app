import { AppProvider } from '@/contexts/AppContext/AppContext';
import '@/styles/globals.css';
import React from 'react';

function MyApp({ Component, pageProps }) {
  return (
    <AppProvider>
      <Component {...pageProps} />
    </AppProvider>
  );
}

export default MyApp;
