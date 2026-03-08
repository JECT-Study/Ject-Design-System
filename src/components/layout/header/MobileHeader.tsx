'use client';

import { Menu, IconButton } from '@jects/jds';
import { useToc } from '../toc/useToc';

export function MobileHeader() {
  const { headings, activeId, scrollToId } = useToc();

  return (
    <>
      <header className="sticky top-0 z-30 flex h-14 w-full shrink-0 items-center justify-between border-b border-slate-200 bg-white/80 px-4 backdrop-blur-md desktop:hidden tablet:hidden">
        <span className="font-bold text-slate-900">JDS Docs</span>

        <div className="hidden tablet:block">
          <Menu.Root menuStyle="solid" size="md">
            <Menu.Trigger asChild>
              <IconButton.Basic icon="menu-line" aria-label="목차" />
            </Menu.Trigger>
            <Menu.Content align="end" sideOffset={14} className="max-h-[70vh] overflow-y-auto">
              <Menu.Category>이 문서 내용에서:</Menu.Category>
              <Menu.Group>
                {headings.length === 0 && (
                  <Menu.GroupItem>
                    <Menu.Button disabled>목차가 없습니다.</Menu.Button>
                  </Menu.GroupItem>
                )}
                {headings.map((heading, index) => (
                  <Menu.GroupItem key={heading.id || `fallback-key-${index}`}>
                    <Menu.Button
                      isSelected={activeId === heading.id}
                      onClick={(e) => scrollToId(heading.id, e)}
                      style={{ paddingLeft: `${(heading.level - 2) * 16 + 12}px` }}
                      className={activeId === heading.id ? "after:opacity-[0.08]!" : ""}
                    >
                      {heading.title}
                    </Menu.Button>
                  </Menu.GroupItem>
                ))}
              </Menu.Group>
            </Menu.Content>
          </Menu.Root>
        </div>
      </header>


    </>
  );
}
