'use client';

import { IconButton } from '@jects/jds';

export function IconButtons() {
  return (
    <div className="flex w-full items-center justify-center gap-3.5">
      <IconButton.Basic icon="add-line" aria-label="Add" />
      <IconButton.Basic icon="close-line" aria-label="Close" />
      <IconButton.Basic icon="check-line" aria-label="Check" />
      <IconButton.Basic icon="arrow-left-line" aria-label="Go Back" />
      <IconButton.Basic icon="arrow-right-line" aria-label="Go Forward" />
      <IconButton.Basic icon="search-line" aria-label="Search" />
    </div>
  );
}

export function IconButtonSizes() {
  return (
    <div className="flex w-full items-center justify-center gap-3.5">
      <IconButton.Basic icon="check-line" size="2xs" aria-label="2XS Check" />
      <IconButton.Basic icon="check-line" size="xs" aria-label="XS Check" />
      <IconButton.Basic icon="check-line" size="sm" aria-label="SM Check" />
      <IconButton.Basic icon="check-line" size="md" aria-label="MD Check" />
      <IconButton.Basic icon="check-line" size="xl" aria-label="XL Check" />
      <IconButton.Basic icon="check-line" size="2xl" aria-label="2XL Check" />
      <IconButton.Basic icon="check-line" size="3xl" aria-label="3XL Check" />
    </div>
  );
}

export function IconButtonHierarchies() {
  return (
    <div className="flex w-full items-center justify-center gap-3.5">
      <IconButton.Basic icon="check-line" hierarchy="accent" aria-label="Accent Check" />
      <IconButton.Basic icon="check-line" hierarchy="primary" aria-label="Primary Check" />
      <IconButton.Basic icon="check-line" hierarchy="secondary" aria-label="Secondary Check" />
      <IconButton.Basic icon="check-line" hierarchy="tertiary" aria-label="Tertiary Check" />
    </div>
  );
}

export function IconButtonFeedbacks() {
  return (
    <div className="flex w-full items-center justify-center gap-3.5">
      <IconButton.Feedback icon="check-line" intent="positive" size="md" aria-label="Positive MD" />
      <IconButton.Feedback
        icon="close-line"
        intent="destructive"
        size="md"
        aria-label="Destructive MD"
      />
    </div>
  );
}

export function IconButtonDisabled() {
  return (
    <div className="flex w-full items-center justify-center gap-3.5">
      <IconButton.Basic icon="check-line" aria-label="Check" />
      <IconButton.Basic icon="check-line" aria-label="Check" disabled />
    </div>
  );
}
