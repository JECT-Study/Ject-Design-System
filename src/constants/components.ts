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

  Icon: 'icon',
  PrefixIcon: 'prefixIcon',
  SuffixIcon: 'suffixIcon',
  WithIcon: 'withIcon',
  WithPrefixIcon: 'withPrefixIcon',

  OnIconClick: 'onIconClick',
} as const;

export const Title = {
  Single: 'single',
  Multiple: 'multiple',
  Theme: 'theme',
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
    HIERARCHIES: ['accent', 'primary', 'secondary', 'tertiary'] as const,
    SIZES: ['lg', 'md', 'sm', 'xs'] as const,
    STYLES: ['outlined', 'alpha', 'solid'] as const,
  },
  DOT_BADGE: {
    SIZES: ['lg', 'md', 'sm', 'xs'] as const,
    VARIANTS: ['positive', 'destructive', 'notifying'] as const,
  },
};
