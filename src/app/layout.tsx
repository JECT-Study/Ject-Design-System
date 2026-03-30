import localFont from 'next/font/local';
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

const pretendard = localFont({
  src: '../../fonts/PretendardVariable.woff2',
  display: 'swap',
  weight: '45 920',
  variable: '--font-pretendard',
});

const d2coding = localFont({
  src: '../../fonts/D2Coding.woff2',
  display: 'swap',
  weight: '400',
  variable: '--font-d2coding',
});

interface DocsLayoutProps {
  children: ReactNode;
}

export default function DocsLayout({ children }: DocsLayoutProps) {
  return (
        <JdsThemeProvider>
          <MobileHeader />
          <Sidebar />
          <DocumentArea>
            <DocumentContainer>{children}</DocumentContainer>
            <TableOfContents />
          </DocumentArea>
        </JdsThemeProvider>
    <html lang="ko" className={`${pretendard.variable} ${d2coding.variable}`}>
      <body
        className={`desktop:flex-row desktop:bg-white flex min-h-screen flex-col bg-slate-50 text-slate-900 antialiased ${pretendard.variable} ${d2coding.variable}`}
      >
      </body>
    </html>
  );
}
