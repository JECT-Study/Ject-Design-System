'use client';

import { Global, ThemeProvider } from '@emotion/react';
import { globalStyles, theme } from '@jects/jds/tokens';
import { ReactNode } from 'react';

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
