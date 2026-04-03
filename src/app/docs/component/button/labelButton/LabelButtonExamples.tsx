'use client';

import { LabelButton } from '@jects/jds';

export function LabelButtonHierarchies() {
  return (
    <div className="flex w-full items-center justify-center gap-3.5">
      <LabelButton.Basic hierarchy="accent">Accent</LabelButton.Basic>
      <LabelButton.Basic hierarchy="primary">Primary</LabelButton.Basic>
      <LabelButton.Basic hierarchy="secondary">Secondary</LabelButton.Basic>
      <LabelButton.Basic hierarchy="tertiary">Tertiary</LabelButton.Basic>
    </div>
  );
}

export function LabelButtonSizes() {
  return (
    <div className="flex w-full items-center justify-center gap-3.5">
      <LabelButton.Basic size="xs">Extra Small</LabelButton.Basic>
      <LabelButton.Basic size="sm">Small</LabelButton.Basic>
      <LabelButton.Basic size="md">Medium</LabelButton.Basic>
      <LabelButton.Basic size="lg">Large</LabelButton.Basic>
    </div>
  );
}

export function LabelButtonFeedback() {
  return (
    <div className="flex w-full items-center justify-center gap-3.5">
      <LabelButton.Feedback intent="positive">positive</LabelButton.Feedback>
      <LabelButton.Feedback intent="destructive">destructive</LabelButton.Feedback>
    </div>
  );
}

export function LabelButtonPrefixIcons() {
  return (
    <div className="flex w-full items-center justify-center gap-3.5">
      <LabelButton.Basic hierarchy="accent" prefixIcon="add-line">
        추가하기
      </LabelButton.Basic>
      <LabelButton.Basic hierarchy="primary" prefixIcon="download-2-line">
        다운로드
      </LabelButton.Basic>
    </div>
  );
}

export function LabelButtonSuffixIcons() {
  return (
    <div className="flex w-full items-center justify-center gap-3.5">
      <LabelButton.Basic hierarchy="accent" suffixIcon="arrow-right-line">
        다음으로
      </LabelButton.Basic>
      <LabelButton.Basic hierarchy="primary" suffixIcon="arrow-right-s-line">
        계속하기
      </LabelButton.Basic>
    </div>
  );
}

export function LabelButtonDisabled() {
  return (
    <div className="flex w-full items-center justify-center gap-3.5">
      <LabelButton.Basic>활성화</LabelButton.Basic>
      <LabelButton.Basic disabled>비활성화</LabelButton.Basic>
    </div>
  );
}
