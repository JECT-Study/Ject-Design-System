"use client"

import { Label, MenuItem } from '@jects/jds';
import clsx from 'clsx';

import { getTocIndentClassName } from './tocConstants';
import { useToc } from './useToc';

export function TableOfContents() {
  const { headings, activeId, scrollToId } = useToc();

  return (
    <aside className="desktop:block sticky top-0 hidden h-screen shrink-0 overflow-y-auto border-x border-slate-200 py-16 [&::-webkit-scrollbar]:hidden">
      <nav className="flex h-screen w-50 flex-col gap-16 p-16">
        <Label size="sm" weight="bold">
          이 문서 내용에서:
        </Label>
        {headings.length === 0 ? (
          <p className="text-label-md text-slate-500">목차가 없습니다.</p>
        ) : (
          <ul className="text-label-md flex flex-col gap-12">
            {headings.map((heading) => (
              <li key={heading.id}>
                <MenuItem.Anchor
                  href={`#${heading.id}`}
                  onClick={(e: React.MouseEvent<HTMLAnchorElement>) => scrollToId(heading.id, e)}
                  isSelected={activeId === heading.id}
                  size="md"
                  className={clsx(
                    getTocIndentClassName(heading.level, 'sidebar'),
                    activeId === heading.id && 'after:opacity-[0.08]!',
                  )}
                >
                  {heading.title}
                </MenuItem.Anchor>
              </li>
            ))}
          </ul>
        )}
      </nav>
    </aside>
  );
}
