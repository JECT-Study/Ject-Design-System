"use client"

import { Label, MenuItem } from "@jects/jds";
import { useToc } from "./useToc";

export function TableOfContents() {
  const { headings, activeId, scrollToId } = useToc();

  return (
    <aside className="sticky top-0 py-15 hidden h-screen shrink-0 overflow-y-auto border-x border-slate-200 desktop:block [&::-webkit-scrollbar]:hidden">
      <nav className="h-screen w-60 p-sm gap-16 flex flex-col">
        <Label >이 문서 내용에서: </Label>
        <ul className="flex flex-col gap-12 text-[15px] w-[200px]">
          {headings.map((heading, index) => (
            <li
              key={heading.id || `fallback-key-${index}`}
              style={{ marginLeft: `${(heading.level - 2) * 16}px` }}
            >
              <MenuItem.Anchor
                href={`#${heading.id}`}
                onClick={(e: React.MouseEvent<HTMLAnchorElement>) => scrollToId(heading.id, e)}
                isSelected={activeId === heading.id}
                size="md"
                className={`${activeId === heading.id ? "after:opacity-[0.08]!" : ""}`}
              >
                {heading.title}
              </MenuItem.Anchor>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
}
