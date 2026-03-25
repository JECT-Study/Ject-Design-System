import type { ReactNode } from 'react';

interface DocumentAreaProps {
  children: ReactNode;
}

export function DocumentArea({ children }: DocumentAreaProps) {
  return <main className="flex flex-1 items-start justify-center md:pl-64">{children}</main>;
}
