import { ReactNode } from 'react';

export function DocumentArea({ children }: { children: ReactNode }) {
  return <main className="flex flex-1 items-start justify-center md:pl-64">{children}</main>;
}
