import { ReactNode } from 'react';

export interface TabItem {
  value: string;
  label: string;
  content: ReactNode;
}

export interface DocTabsProps {
  variant: 'content' | 'header';
  items: TabItem[];
}
