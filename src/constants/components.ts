export const Properties = {
  Children: 'children',
  Variant: 'variant',
  Hierarchy: 'hierarchy',
  Size: 'size',
  Feedback: 'feedback',
  Icon: 'icon',
  AriaLabel: 'aria-label',
  PrefixIcon: 'prefixIcon',
  SuffixIcon: 'suffixIcon',
  Disabled: 'disabled',
  Type: 'type',
  IsStretched: 'isStretched',
  Collapsible: 'collapsible',
  WithPrefixIcon: 'withPrefixIcon',
  AsChild: 'asChild',
  DefaultValue: 'defaultValue',
} as const;

export const Title = {
  Single: 'single',
  Multiple: 'multiple',
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
