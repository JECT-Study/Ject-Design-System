'use client';

import type { ReactNode } from 'react';
import { Global, ThemeProvider } from '@emotion/react';
import { globalStyles, theme } from '@jects/jds/tokens';

interface JdsThemeProviderProps {
  children: ReactNode;
}

export function JdsThemeProvider({ children }: JdsThemeProviderProps) {
  return (
    <ThemeProvider theme={theme}>
      <Global styles={globalStyles} />
      {children}
    </ThemeProvider>
  );
}
