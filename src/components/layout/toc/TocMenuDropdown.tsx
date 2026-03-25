'use client';

import type { ReactNode } from 'react';
import { Menu } from '@jects/jds';
import clsx from 'clsx';

import { getTocIndentClassName } from './tocConstants';
import { useToc } from './useToc';

interface TocMenuDropdownProps {
  trigger: ReactNode;
  align?: 'start' | 'center' | 'end';
  sideOffset?: number;
}

export function TocMenuDropdown({ trigger, align = 'end', sideOffset = 12 }: TocMenuDropdownProps) {
  const { headings, activeId, scrollToId } = useToc();

  return (
    <Menu.Root menuStyle="solid" size="md">
      <Menu.Trigger asChild>{trigger}</Menu.Trigger>
      <Menu.Content align={align} sideOffset={sideOffset} className="max-h-[70vh] overflow-y-auto">
        <Menu.Category>이 문서 내용에서:</Menu.Category>
        <Menu.Group>
          {headings.length === 0 && (
            <Menu.GroupItem>
              <Menu.Button disabled>목차가 없습니다.</Menu.Button>
            </Menu.GroupItem>
          )}
          {headings.map((heading) => (
            <Menu.GroupItem key={heading.id}>
              <Menu.Button
                isSelected={activeId === heading.id}
                onClick={(event) => scrollToId(heading.id, event)}
                className={clsx(
                  getTocIndentClassName(heading.level, 'dropdown'),
                  activeId === heading.id && 'after:opacity-[0.08]!',
                )}
              >
                {heading.title}
              </Menu.Button>
            </Menu.GroupItem>
          ))}
        </Menu.Group>
      </Menu.Content>
    </Menu.Root>
  );
}
