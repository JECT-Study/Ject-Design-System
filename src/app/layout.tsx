import {
  DocumentArea,
  DocumentContainer,
  MobileHeader,
  Sidebar,
  TableOfContents,
} from '@/components';

import { JdsThemeProvider } from '@/components/jds/JdsThemeProvider';

import '@/styles/globals.css';

export default function DocsLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="flex min-h-screen bg-white text-slate-900 antialiased">
        <JdsThemeProvider>
          <Sidebar />
          <DocumentArea>
            <MobileHeader />
            <DocumentContainer>{children}</DocumentContainer>
            <TableOfContents />
          </DocumentArea>
        </JdsThemeProvider>
      </body>
    </html>
  );
}
