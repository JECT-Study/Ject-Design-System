export const TOC_HEADING_SELECTOR =
  'main h2[id], main h3[id], main h4[id], main h5[id], main h6[id]';

const SIDEBAR_TOC_INDENT_CLASS_NAMES = {
  2: 'pl-0',
  3: 'pl-16',
  4: 'pl-32',
  5: 'pl-48',
  6: 'pl-64',
} as const;

const DROPDOWN_TOC_INDENT_CLASS_NAMES = {
  2: 'pl-16',
  3: 'pl-32',
  4: 'pl-48',
  5: 'pl-64',
  6: 'pl-80',
} as const;

type TocIndentVariant = 'dropdown' | 'sidebar';
type TocHeadingLevel = keyof typeof SIDEBAR_TOC_INDENT_CLASS_NAMES;

export function getTocIndentClassName(level: number, variant: TocIndentVariant) {
  const normalizedLevel = Math.min(Math.max(level, 2), 6) as TocHeadingLevel;

  if (variant === 'dropdown') {
    return DROPDOWN_TOC_INDENT_CLASS_NAMES[normalizedLevel];
  }

  return SIDEBAR_TOC_INDENT_CLASS_NAMES[normalizedLevel];
}
