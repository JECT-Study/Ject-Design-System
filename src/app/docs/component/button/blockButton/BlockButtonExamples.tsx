'use client';

import { BlockButton } from '@jects/jds';

export function BlockButtonVariants() {
  return (
    <div className="flex w-full items-center justify-center gap-3.5">
      <BlockButton.Basic variant="solid">solid</BlockButton.Basic>
      <BlockButton.Basic variant="outlined">outlined</BlockButton.Basic>
      <BlockButton.Basic variant="empty">empty</BlockButton.Basic>
    </div>
  );
}

export function BlockButtonHierarchies() {
  return (
    <div className="flex w-full items-center justify-center gap-3.5">
      <BlockButton.Basic hierarchy="accent">Accent</BlockButton.Basic>
      <BlockButton.Basic hierarchy="primary">Primary</BlockButton.Basic>
      <BlockButton.Basic hierarchy="secondary">Secondary</BlockButton.Basic>
      <BlockButton.Basic hierarchy="tertiary">Tertiary</BlockButton.Basic>
    </div>
  );
}

export function BlockButtonSizes() {
  return (
    <div className="flex w-full items-center justify-center gap-3.5">
      <BlockButton.Basic size="xs">Extra Small</BlockButton.Basic>
      <BlockButton.Basic size="sm">Small</BlockButton.Basic>
      <BlockButton.Basic size="md">Medium</BlockButton.Basic>
      <BlockButton.Basic size="lg">Large</BlockButton.Basic>
    </div>
  );
}

export function BlockButtonFeedback() {
  return (
    <div className="flex w-full items-center justify-center gap-3.5">
      <BlockButton.Feedback intent="positive">positive</BlockButton.Feedback>
      <BlockButton.Feedback intent="destructive">destructive</BlockButton.Feedback>
    </div>
  );
}

export function BlockButtonPrefixIcons() {
  return (
    <div className="flex w-full items-center justify-center gap-3.5">
      <BlockButton.Basic hierarchy="accent" prefixIcon="add-line">
        추가하기
      </BlockButton.Basic>
      <BlockButton.Basic hierarchy="primary" prefixIcon="download-2-line">
        다운로드
      </BlockButton.Basic>
    </div>
  );
}

export function BlockButtonSuffixIcons() {
  return (
    <div className="flex w-full items-center justify-center gap-3.5">
      <BlockButton.Basic hierarchy="accent" suffixIcon="arrow-right-line">
        다음으로
      </BlockButton.Basic>
      <BlockButton.Basic hierarchy="primary" suffixIcon="arrow-right-s-line">
        계속하기
      </BlockButton.Basic>
    </div>
  );
}

export function BlockButtonDisabled() {
  return (
    <div className="flex w-full items-center justify-center gap-3.5">
      <BlockButton.Basic disabled>비활성화</BlockButton.Basic>
      <BlockButton.Basic variant="outlined" disabled>
        비활성화 (outlined)
      </BlockButton.Basic>
    </div>
  );
}
