import { ReactNode } from 'react';

interface PreviewProps {
  children: ReactNode;
}

export function Preview({ children }: PreviewProps) {
  return (
    <div className="py-3xl px-md rounded-6 bg-semantic-surface-standard border-semantic-stroke-subtle flex w-full items-center justify-center gap-x-16 gap-y-12 border border-solid">
      {children}
    </div>
  );
}
