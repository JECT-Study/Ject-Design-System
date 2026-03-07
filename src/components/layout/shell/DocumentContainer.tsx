import { ReactNode } from 'react';

export function DocumentContainer({ children }: { children: ReactNode }) {
  return (
    <div className="flex max-w-230 min-w-170 flex-1 flex-col items-start gap-80 px-7 py-18">
      {children}
    </div>
  );
}
