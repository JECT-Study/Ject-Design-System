'use client';

import { NumericBadge } from '@jects/jds';

const BADGE_NUMBER = 99;

export function NumericBadgeStyles() {
  return (
    <div className="flex w-full items-center justify-center gap-3.5">
      <NumericBadge.Basic badgeStyle="solid">{BADGE_NUMBER}</NumericBadge.Basic>
      <NumericBadge.Basic badgeStyle="empty">{BADGE_NUMBER}</NumericBadge.Basic>
    </div>
  );
}

export function NumericBadgeHierarchies() {
  return (
    <div className="flex w-full items-center justify-center gap-3.5">
      <NumericBadge.Basic hierarchy="accent">{BADGE_NUMBER}</NumericBadge.Basic>
      <NumericBadge.Basic hierarchy="primary">{BADGE_NUMBER}</NumericBadge.Basic>
      <NumericBadge.Basic hierarchy="secondary">{BADGE_NUMBER}</NumericBadge.Basic>
      <NumericBadge.Basic hierarchy="tertiary">{BADGE_NUMBER}</NumericBadge.Basic>
    </div>
  );
}

export function NumericBadgeSizes() {
  return (
    <div className="flex w-full items-center justify-center gap-3.5">
      <NumericBadge.Basic size="xs">{BADGE_NUMBER}</NumericBadge.Basic>
      <NumericBadge.Basic size="sm">{BADGE_NUMBER}</NumericBadge.Basic>
      <NumericBadge.Basic size="md">{BADGE_NUMBER}</NumericBadge.Basic>
      <NumericBadge.Basic size="lg">{BADGE_NUMBER}</NumericBadge.Basic>
    </div>
  );
}

export function NumericBadgeFeedback() {
  return (
    <div className="flex w-full items-center justify-center gap-3.5">
      <NumericBadge.Feedback variant="positive">{BADGE_NUMBER}</NumericBadge.Feedback>
      <NumericBadge.Feedback variant="notifying">{BADGE_NUMBER}</NumericBadge.Feedback>
      <NumericBadge.Feedback variant="destructive">{BADGE_NUMBER}</NumericBadge.Feedback>
    </div>
  );
}

export function NumericBadgeMuted() {
  return (
    <div className="flex w-full items-center justify-center gap-3.5">
      <NumericBadge.Basic>{BADGE_NUMBER}</NumericBadge.Basic>
      <NumericBadge.Basic isMuted>{BADGE_NUMBER}</NumericBadge.Basic>
    </div>
  );
}
