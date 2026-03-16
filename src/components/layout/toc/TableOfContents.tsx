"use client"

import { IconButton, Label, Menu, MenuItem } from "@jects/jds";
import { useToc } from "./useToc";

export function TableOfContents() {
  const { headings, activeId, scrollToId } = useToc();

  return (
    <>
      <aside className="sticky top-0 py-16 hidden h-screen shrink-0 overflow-y-auto border-x border-slate-200 desktop:block [&::-webkit-scrollbar]:hidden">
        <nav className="h-screen w-50 p-16 gap-16 flex flex-col">
          <Label size="sm" weight="bold">이 문서 내용에서:</Label>
          <ul className="flex flex-col gap-12 text-label-md">
            {headings.map((heading, index) => (
              <li
                key={heading.id || `fallback-key-${index}`}
                style={{ marginLeft: `${heading.level - 2}rem` }}
              >
                <MenuItem.Anchor
                  href={`#${heading.id}`}
                  onClick={(e: React.MouseEvent<HTMLAnchorElement>) => scrollToId(heading.id, e)}
                  isSelected={activeId === heading.id}
                  size="md"
                  className={activeId === heading.id ? "after:opacity-[0.08]!" : ""}
                >
                  {heading.title}
                </MenuItem.Anchor>
              </li>
            ))}
          </ul>
        </nav>
      </aside>

      {/* 태블릿/모바일 플로팅 목차 버튼 (접힌 사이드바 버튼과 동일한 30x30 디자인) */}
      <div className="fixed top-20 right-24 z-50 flex items-center justify-center w-32 h-32 box-content border border-slate-200 rounded-8 bg-white hover:bg-slate-50 transition-colors desktop:hidden ">
        <Menu.Root menuStyle="solid" size="md">
          <Menu.Trigger asChild>
            <IconButton.Basic icon="menu-line" aria-label="목차" size="sm" />
          </Menu.Trigger>
          <Menu.Content align="end" sideOffset={12} className="max-h-160 overflow-y-auto">
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
                    style={{ paddingLeft: `calc(${(heading.level - 2)}rem + 0.75rem)` }}
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
    </>
  );
}
