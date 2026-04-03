'use client';

import { ContentBadge } from '@jects/jds';

export function ContentBadgeStyles() {
  return (
    <div className="flex w-full items-center justify-center gap-3.5">
      <ContentBadge.Basic badgeStyle="solid">Solid</ContentBadge.Basic>
      <ContentBadge.Basic badgeStyle="alpha">Alpha</ContentBadge.Basic>
      <ContentBadge.Basic badgeStyle="outlined">Outlined</ContentBadge.Basic>
    </div>
  );
}

export function ContentBadgeHierarchies() {
  return (
    <div className="flex w-full items-center justify-center gap-3.5">
      <ContentBadge.Basic hierarchy="accent">Accent</ContentBadge.Basic>
      <ContentBadge.Basic hierarchy="primary">Primary</ContentBadge.Basic>
      <ContentBadge.Basic hierarchy="secondary">Secondary</ContentBadge.Basic>
      <ContentBadge.Basic hierarchy="tertiary">Tertiary</ContentBadge.Basic>
    </div>
  );
}

export function ContentBadgeSizes() {
  return (
    <div className="flex w-full items-center justify-center gap-3.5">
      <ContentBadge.Basic size="xs">Extra Small</ContentBadge.Basic>
      <ContentBadge.Basic size="sm">Small</ContentBadge.Basic>
      <ContentBadge.Basic size="md">Medium</ContentBadge.Basic>
      <ContentBadge.Basic size="lg">Large</ContentBadge.Basic>
    </div>
  );
}

export function ContentBadgeFeedback() {
  return (
    <div className="flex w-full items-center justify-center gap-3.5">
      <ContentBadge.Feedback variant="positive">Positive</ContentBadge.Feedback>
      <ContentBadge.Feedback variant="destructive">Destructive</ContentBadge.Feedback>
    </div>
  );
}

export function ContentBadgeWithIcon() {
  return (
    <div className="flex w-full items-center justify-center gap-3.5">
      <ContentBadge.Basic withIcon onIconClick={() => alert('삭제 버튼 클릭')}>
        레이블
      </ContentBadge.Basic>
    </div>
  );
}

export function ContentBadgeThemes() {
  return (
    <div className="flex w-full items-center justify-center gap-3.5">
      <ContentBadge.Theme variant="red">Red</ContentBadge.Theme>
      <ContentBadge.Theme variant="blue">Blue</ContentBadge.Theme>
      <ContentBadge.Theme variant="green">Green</ContentBadge.Theme>
    </div>
  );
}

export function ContentBadgeMuted() {
  return (
    <div className="flex w-full items-center justify-center gap-3.5">
      <ContentBadge.Basic>mute (비활성화)</ContentBadge.Basic>
      <ContentBadge.Basic isMuted>mute (활성화)</ContentBadge.Basic>
    </div>
  );
}
