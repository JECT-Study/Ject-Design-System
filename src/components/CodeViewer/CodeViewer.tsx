'use client';

import { useState } from 'react';
import {
  SandpackCodeEditor,
  SandpackLayout,
  SandpackProvider,
  UnstyledOpenInCodeSandboxButton,
} from '@codesandbox/sandpack-react';
import { Icon } from '@jects/jds';

interface CodeViewerProps {
  code: string;
  language?: 'html' | 'tsx' | 'css' | 'js';
}

export function CodeViewer({ code, language = 'html' }: CodeViewerProps) {
  const [isCopied, setIsCopied] = useState(false);
  const filename = language === 'html' ? '/index.html' : `/App.${language}`;
  const template = language === 'html' ? 'vanilla' : 'react-ts';

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy code: ', err);
    }
  };

  return (
    <SandpackProvider
      template={template}
      files={{
        [filename]: { code, active: true },
        ...(language === 'html' && { '/index.js': '' }),
      }}
      theme={{
        colors: {
          surface1: 'var(--semantic-surface-deep, #faf8ff)',
          surface2: 'var(--semantic-surface-deeper, #f2f3ff)',
          surface3: 'var(--semantic-stroke-subtle, #e1e2ee)',
          base: 'var(--semantic-object-bold, #444650)',
        },
        syntax: {
          plain: 'var(--semantic-object-bold)',
          comment: { color: 'var(--semantic-object-subtle)', fontStyle: 'italic' },
          keyword: 'var(--semantic-theme-fuchsia-normal)',
          tag: 'var(--semantic-theme-purple-normal)',
          punctuation: 'var(--semantic-object-normal)',
          definition: 'var(--semantic-theme-blue-normal)',
          property: 'var(--semantic-theme-orange-normal)',
          static: 'var(--semantic-theme-red-normal)',
          string: 'var(--semantic-theme-red-normal)',
        },
        font: {
          body: 'var(--primitive-typeface-body, Pretendard Variable)',
          mono: 'var(--primitive-typeface-syntax, D2Coding)',
          size: '14px',
          lineHeight: '1.6',
        },
      }}
    >
      <SandpackLayout className="border-semantic-stroke-assistive bg-semantic-surface-shallow w-full overflow-hidden rounded-lg border">
        <SandpackCodeEditor
          showTabs={false}
          showLineNumbers={false}
          showInlineErrors={false}
          readOnly={true}
          style={{ flex: 1, height: '100%', width: '42.5rem' }}
        />
        <div className="absolute top-[8px] right-[8px] z-10 flex items-center gap-[4px]">
          <UnstyledOpenInCodeSandboxButton
            className="border-semantic-stroke-subtle text-semantic-interaction-normal hover:text-semantic-interaction-bold flex h-7 w-7 cursor-pointer items-center justify-center rounded-md border bg-white transition-colors hover:bg-slate-50"
            aria-label="CodeSandbox에서 열기"
          >
            <Icon name="component" className="h-[16px] w-[16px]" />
          </UnstyledOpenInCodeSandboxButton>
          <button
            onClick={handleCopy}
            className="border-semantic-stroke-subtle text-semantic-interaction-normal hover:text-semantic-interaction-bold flex h-7 w-7 cursor-pointer items-center justify-center rounded-md border bg-white transition-colors hover:bg-slate-50"
            aria-label="코드 복사"
          >
            <Icon name="file-3-line" className="h-[16px] w-[16px]" />
          </button>
        </div>
      </SandpackLayout>
    </SandpackProvider>
  );
}
