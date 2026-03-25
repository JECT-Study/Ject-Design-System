import {
  DocumentArea,
  DocumentContainer,
  MobileHeader,
  Sidebar,
  TableOfContents,
} from '@/components';

import { JdsThemeProvider } from '@/components/jds/JdsThemeProvider';

import '@/styles/globals.css';

import type { ReactNode } from 'react';

interface DocsLayoutProps {
  children: ReactNode;
}

export default function DocsLayout({ children }: DocsLayoutProps) {
  return (
    <html lang="ko">
      <body className="desktop:flex-row desktop:bg-white flex min-h-screen flex-col bg-slate-50 text-slate-900 antialiased">
        <JdsThemeProvider>
          <MobileHeader />
          <Sidebar />
          <DocumentArea>
            <DocumentContainer>{children}</DocumentContainer>
            <TableOfContents />
          </DocumentArea>
        </JdsThemeProvider>
      </body>
    </html>
  );
}
