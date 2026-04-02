import { createDisplayName } from '@/components';
import { BADGE_PROPS, Properties, Title } from '@/constants/components';
import { DotBadge } from '@jects/jds';

import { DotBadgeMuted, DotBadgeSizes, DotBadgeVariants } from './DotBadgeExamples';

export const dotBadgeDisplayName = createDisplayName(
  new Map<object, string>([[DotBadge.Feedback, 'DotBadge.Feedback']]),
);

export const DOT_BADGE_PROPERTIES = [
  {
    name: Properties.Variant,
    type: [...BADGE_PROPS.DOT_BADGE.VARIANTS],
    default: 'positive',
    description: '피드백 유형에 대한 변형입니다.',
  },
  {
    name: Properties.Size,
    type: [...BADGE_PROPS.DOT_BADGE.SIZES],
    default: 'md',
    description: '컴포넌트의 시각적 크기입니다.',
  },
  {
    name: Properties.IsMuted,
    type: ['boolean'],
    default: 'false',
    description: '시각적으로 강조도가 낮춰졌는지의 여부입니다.',
  },
];

export const DOT_BADGE_VARIANTS_EXAMPLES = [
  {
    id: Properties.Variant,
    title: Properties.Variant,
    description:
      '닷 배지의 피드백 변형을 설정합니다. positive, destructive, notifying 세 가지를 지원합니다.',
    ExampleComponent: DotBadgeVariants,
  },
  {
    id: Properties.Size,
    title: Properties.Size,
    description: '닷 배지의 크기를 설정합니다. xs, sm, md(기본), lg를 지원합니다.',
    ExampleComponent: DotBadgeSizes,
  },

  {
    id: Properties.IsMuted,
    title: Properties.IsMuted,
    description: '시각적으로 강조도가 낮춰졌는지의 여부입니다.',
    ExampleComponent: DotBadgeMuted,
  },
];
