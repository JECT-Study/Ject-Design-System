'use client';

import { DotBadge } from '@jects/jds';

export function DotBadgeVariants() {
  return (
    <div className="flex w-full items-center justify-center gap-3.5">
      <DotBadge.Feedback variant="positive" />
      <DotBadge.Feedback variant="destructive" />
      <DotBadge.Feedback variant="notifying" />
    </div>
  );
}

export function DotBadgeSizes() {
  return (
    <div className="flex w-full items-center justify-center gap-3.5">
      <DotBadge.Feedback variant="positive" size="lg" />
      <DotBadge.Feedback variant="positive" size="md" />
      <DotBadge.Feedback variant="positive" size="sm" />
      <DotBadge.Feedback variant="positive" size="xs" />
    </div>
  );
}

export function DotBadgeMuted() {
  return (
    <div className="flex w-full items-center justify-center gap-3.5">
      <DotBadge.Feedback variant="positive" />
      <DotBadge.Feedback variant="positive" isMuted />
    </div>
  );
}
