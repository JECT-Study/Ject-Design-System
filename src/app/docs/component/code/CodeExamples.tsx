'use client';

import { Code } from '@jects/jds';

export function CodeSizes() {
  return (
    <div className="flex w-full flex-col items-center gap-4">
      {(['xs', 'sm', 'md', 'lg'] as const).map((size) => (
        <div key={size} className="flex items-center gap-3">
          <span className="w-6 text-right text-sm text-semantic-object-subtle">{size}</span>
          <Code size={size}>inline code syntax</Code>
        </div>
      ))}
    </div>
  );
}

export function CodeDefault() {
  return (
    <div className="flex w-full items-center justify-center">
      <p className="text-semantic-object-normal">
        패키지를 설치하려면 <Code>pnpm install</Code> 명령어를 실행하세요.
      </p>
    </div>
  );
}
