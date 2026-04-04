export const VERSION = '0.0.1';
export const DATE = '2026년 1월 27일(화) 14:23';

export const Properties = {
  Children: 'children',
  Variant: 'variant',
  Hierarchy: 'hierarchy',
  Size: 'size',
  Feedback: 'feedback',
  AriaLabel: 'aria-label',
  Type: 'type',
  Collapsible: 'collapsible',
  AsChild: 'asChild',
  DefaultValue: 'defaultValue',
  Style: 'style',

  IsMuted: 'isMuted',
  Disabled: 'disabled',
  IsStretched: 'isStretched',
  IsDisabled: 'isDisabled',
  Interactive: 'interactive',

  Title: 'title',
  LabelButtonProps: 'labelButtonProps',

  Icon: 'icon',
  PrefixIcon: 'prefixIcon',
  SuffixIcon: 'suffixIcon',
  WithIcon: 'withIcon',
  WithPrefixIcon: 'withPrefixIcon',

  OnIconClick: 'onIconClick',

  Layout: 'layout',
  CardStyle: 'cardStyle',
  Src: 'src',
  Alt: 'alt',
  FallbackSrc: 'fallbackSrc',
  Ratio: 'ratio',
  Orientation: 'orientation',
  BadgeVisible: 'badgeVisible',
  BadgeLabel: 'badgeLabel',
  Loading: 'loading',
  Standalone: 'standalone',
  Author: 'author',

  Checked: 'checked',
  OnCheckedChange: 'onCheckedChange',
  IsInvalid: 'isInvalid',
  Label: 'label',
  SubLabel: 'subLabel',
  Align: 'align',
  Indeterminate: 'indeterminate',
} as const;

export const Title = {
  Single: 'single',
  Multiple: 'multiple',
  Theme: 'theme',
  Plate: 'plate',
  Post: 'post',
};

export const BUTTON_PROPS = {
  BLOCK_BUTTON: {
    VARIANTS: ['solid', 'outlined', 'empty'] as const,
    HIERARCHIES: ['accent', 'primary', 'secondary', 'tertiary'] as const,
    SIZES: ['lg', 'md', 'sm', 'xs'] as const,
  },
  ICON_BUTTON: {
    HIERARCHIES: ['primary', 'secondary', 'accent', 'tertiary'] as const,
    SIZES: ['lg', 'md', 'sm', 'xs', '3xl', '2xl', 'xl', '2xs'] as const,
  },
  LABEL_BUTTON: {
    HIERARCHIES: ['primary', 'secondary', 'accent', 'tertiary'] as const,
    SIZES: ['lg', 'md', 'sm', 'xs'] as const,
  },
};

export const ACCORDION_PROPS = {
  TYPES: ['single', 'multiple'] as const,
  SIZES: ['lg', 'md', 'sm'] as const,
};

export const BADGE_PROPS = {
  CONTENT_BADGE: {
    SIZES: ['lg', 'md', 'sm', 'xs'] as const,
    STYLES: ['outlined', 'alpha', 'solid'] as const,
    HIERARCHIES: ['accent', 'primary', 'secondary', 'tertiary'] as const,
  },
  DOT_BADGE: {
    SIZES: ['lg', 'md', 'sm', 'xs'] as const,
    VARIANTS: ['positive', 'destructive', 'notifying'] as const,
  },
  NUMERIC_BADGE: {
    STYLES: ['empty', 'solid'] as const,
    SIZES: ['lg', 'md', 'sm', 'xs'] as const,
    HIERARCHIES: ['accent', 'primary', 'secondary', 'tertiary'] as const,
  },
};

export const CARD_PROPS = {
  LAYOUTS: ['vertical', 'horizontal'] as const,
  VARIANTS: ['plate', 'post'] as const,
  STYLES: ['outlined', 'empty'] as const,
  RATIOS: ['1:1', '4:5', '3:4', '2:3', '9:16', '1:2', '9:21'] as const,
  ORIENTATIONS: ['portrait', 'landscape'] as const,
};

export const CALLOUT_PROPS = {
  SIZES: ['lg', 'md', 'sm', 'xs'] as const,
  HIERARCHIES: ['primary', 'secondary'] as const,
  FEEDBACK: ['positive', 'notifying', 'destructive'] as const,
};

export const CHECKBOX_PROPS = {
  SIZES: ['lg', 'md', 'sm', 'xs'] as const,
  VARIANTS: ['empty', 'outlined'] as const,
  ALIGNS: ['left', 'right'] as const,
};
