'use client';

import { Global, ThemeProvider } from '@emotion/react';
import { globalStyles, theme } from '@jects/jds/tokens';

export function JdsThemeProvider({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider theme={theme}>
      <Global styles={globalStyles} />
      {children}
    </ThemeProvider>
  );
}
