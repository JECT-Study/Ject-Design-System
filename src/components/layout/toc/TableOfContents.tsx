"use client"

import { Label, MenuItem } from "@jects/jds";
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
              <li key={heading.id || `fallback-key-${index}`}>
                <MenuItem.Anchor
                  href={`#${heading.id}`}
                  onClick={(e: React.MouseEvent<HTMLAnchorElement>) => scrollToId(heading.id, e)}
                  isSelected={activeId === heading.id}
                  size="md"
                  style={{ paddingLeft: `${heading.level - 2}rem` }}
                  className={activeId === heading.id ? "after:opacity-[0.08]!" : ""}
                >
                  {heading.title}
                </MenuItem.Anchor>
              </li>
            ))}
          </ul>
        </nav>
      </aside>

    </>
  );
}
