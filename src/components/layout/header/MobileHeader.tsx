'use client';

import { IconButton } from '@jects/jds';
import { TocMenuDropdown } from '../toc/TocMenuDropdown';

export function MobileHeader() {
  return (
    <>
      <header className="sticky top-0 z-30 flex h-14 w-full shrink-0 items-center justify-between border-b border-slate-200 bg-white/80 px-4 backdrop-blur-md desktop:hidden">
        <div className="flex items-center gap-8">
          <IconButton.Basic
            icon="menu-line"
            aria-label="메뉴"
            onClick={() => alert('네비게이션 메뉴가 준비 중입니다.')}
          />
          <span className="font-bold text-slate-900">JDS Docs</span>
        </div>

        <TocMenuDropdown
          trigger={<IconButton.Basic icon="arrow-down-s-line" aria-label="목차" />}
          sideOffset={14}
        />
      </header>


    </>
  );
}
