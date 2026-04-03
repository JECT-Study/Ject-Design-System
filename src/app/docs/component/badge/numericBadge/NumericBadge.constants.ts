import { createDisplayName } from '@/components';
import { BADGE_PROPS, Properties } from '@/constants/components';
import { NumericBadge } from '@jects/jds';

import {
  NumericBadgeFeedback,
  NumericBadgeHierarchies,
  NumericBadgeMuted,
  NumericBadgeSizes,
  NumericBadgeStyles,
} from './NumericBadgeExamples';

export const numericBadgeDisplayName = createDisplayName(
  new Map<object, string>([
    [NumericBadge.Basic, 'NumericBadge.Basic'],
    [NumericBadge.Feedback, 'NumericBadge.Feedback'],
  ]),
);

export const NUMERIC_BADGE_PROPERTIES = [
  {
    name: Properties.Children,
    type: ['string'],
    description: '배지 텍스트',
  },
  {
    name: Properties.Hierarchy,
    type: [...BADGE_PROPS.NUMERIC_BADGE.HIERARCHIES],
    default: 'secondary',
    description: '시각적이거나 맥락적인 위계 구분입니다.',
  },
  {
    name: Properties.Size,
    type: [...BADGE_PROPS.NUMERIC_BADGE.SIZES],
    default: 'md',
    description: '컴포넌트의 시각적 크기입니다.',
  },
  {
    name: Properties.Style,
    type: [...BADGE_PROPS.NUMERIC_BADGE.STYLES],
    default: 'solid',
    description: '컴포넌트의 시각적 외형입니다.',
  },
  {
    name: Properties.IsMuted,
    type: ['boolean'],
    default: 'false',
    description: '시각적으로 강조도가 낮춰졌는지의 여부입니다.',
  },
];

export const NUMERIC_BADGE_VARIANTS_EXAMPLES = [
  {
    id: Properties.Hierarchy,
    title: Properties.Hierarchy,
    description:
      '너머릭 배지의 스타일 변형을 설정합니다. solid(기본), outlined, alpha 세 가지를 지원합니다.',
    ExampleComponent: NumericBadgeHierarchies,
  },
  {
    id: Properties.Size,
    title: Properties.Size,
    description: '너머릭 배지의 크기를 설정합니다. xs, sm, md(기본), lg를 지원합니다.',
    ExampleComponent: NumericBadgeSizes,
  },
  {
    id: Properties.Style,
    title: Properties.Style,
    description: '너머릭 배지의 스타일 변형을 설정합니다. solid(기본), empty를 지원합니다.',
    ExampleComponent: NumericBadgeStyles,
  },
  {
    id: Properties.Feedback,
    title: Properties.Feedback,
    description:
      '피드백 인텐트를 가진 너머릭 배지입니다. positive, destructive, notifying 세 가지를 지원합니다.',
    ExampleComponent: NumericBadgeFeedback,
  },
  {
    id: Properties.IsMuted,
    title: Properties.IsMuted,
    description: '시각적으로 강조도가 낮춰졌는지의 여부입니다.',
    ExampleComponent: NumericBadgeMuted,
  },
];
