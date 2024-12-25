'use client';
import React from 'react';
import { ThemeProvider } from 'next-themes';
import { SessionProvider } from 'next-auth/react';

function Providers({ children }) {
  return (
    <SessionProvider>
      <ThemeProvider enableSystem={true} attribute="class">
        {children}
      </ThemeProvider>
    </SessionProvider>
  );
}

export default Providers;
