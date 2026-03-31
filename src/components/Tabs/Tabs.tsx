'use client';

import { Tab } from '@jects/jds';

import { DocTabsProps } from './Tabs.type';

export function DocTabs({ variant, items }: DocTabsProps) {
  if (!items || items.length === 0) return null;

  const firstValue = items[0].value;

  return (
    <Tab.Root variant={variant} defaultValue={firstValue}>
      <Tab.List>
        {items.map((item) => (
          <Tab.Trigger key={item.value} value={item.value}>
            {item.label}
          </Tab.Trigger>
        ))}
      </Tab.List>

      {items.map((item) => (
        <Tab.Content key={item.value} value={item.value}>
          {item.content}
        </Tab.Content>
      ))}
    </Tab.Root>
  );
}
