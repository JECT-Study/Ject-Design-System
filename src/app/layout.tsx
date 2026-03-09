import {
  DocumentArea,
  DocumentContainer,
  MobileHeader,
  Sidebar,
  TableOfContents,
} from '@/components';

import { JdsThemeProvider } from '@/components/jds/JdsThemeProvider';
import { getNavigationGroups } from '@/utils/getNavigation';

import '@/styles/globals.css';

export default function DocsLayout({ children }: { children: React.ReactNode }) {
  const navigationGroups = getNavigationGroups();

  return (
    <html lang="ko" suppressHydrationWarning>
      <body className="flex min-h-screen flex-col bg-slate-50 text-slate-900 antialiased desktop:flex-row desktop:bg-white tablet:flex-row tablet:bg-white" suppressHydrationWarning>
        <JdsThemeProvider>
          {/* 모바일/태블릿일 땐 최상단에, 데스크탑일 땐 숨김 */}
          <MobileHeader />
          <Sidebar navigationGroups={navigationGroups} />
          <DocumentArea>
            <DocumentContainer>{children}</DocumentContainer>
            <TableOfContents />
          </DocumentArea>
        </JdsThemeProvider>
      </body>
    </html>
  );
}
