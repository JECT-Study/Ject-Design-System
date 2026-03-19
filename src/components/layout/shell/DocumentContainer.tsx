import type { ReactNode } from 'react';

interface DocumentContainerProps {
  children: ReactNode;
}

export function DocumentContainer({ children }: DocumentContainerProps) {
  return (
    <div className="flex max-w-230 min-w-170 flex-1 flex-col items-start gap-80 px-7 py-15">
      {children}
    </div>
  );
}
