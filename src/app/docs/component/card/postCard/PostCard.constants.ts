import { createDisplayName } from '@/components';
import { CARD_PROPS, Properties } from '@/constants/components';
import { Card } from '@jects/jds';

import { PostCardDisabled, PostCardLayouts, PostCardStyles } from './PostCardExamples';

export const cardDisplayName = createDisplayName(
  new Map<object, string>([
    [Card.Root, 'Card.Root'],
    [Card.Image, 'Card.Image'],
    [Card.Content, 'Card.Content'],
    [Card.Caption, 'Card.Caption'],
    [Card.Title, 'Card.Title'],
    [Card.Label, 'Card.Label'],
    [Card.Body, 'Card.Body'],
    [Card.Meta, 'Card.Meta'],
    [Card.MetaItem, 'Card.MetaItem'],
  ]),
);

export const CARD_PROPERTIES = [
  {
    name: Properties.Layout,
    type: [...CARD_PROPS.LAYOUTS],
    default: 'vertical',
    description: '카드 내부 콘텐츠의 배치 방향입니다.',
  },
  {
    name: Properties.CardStyle,
    type: [...CARD_PROPS.STYLES],
    default: 'outlined',
    description: '카드의 시각적 스타일입니다. outlined는 외곽선 있음, empty는 외곽선 없음입니다.',
  },
  {
    name: Properties.IsDisabled,
    type: ['boolean'],
    default: 'false',
    description: '비활성화 상태 여부입니다.',
  },
  {
    name: Properties.Children,
    type: ['ReactNode'],
    description: '카드 내부에 렌더링할 콘텐츠입니다.',
  },
];

export const CARD_VARIANTS_EXAMPLES = [
  {
    id: Properties.Layout,
    title: Properties.Layout,
    description:
      'vertical(기본)은 콘텐츠를 세로로, horizontal은 이미지와 텍스트를 가로로 나란히 배치합니다.',
    ExampleComponent: PostCardLayouts,
  },
  {
    id: Properties.Style,
    title: Properties.Style,
    description: 'outlined는 외곽선이 있는 스타일, empty는 외곽선 없이 배경만 있는 스타일입니다.',
    ExampleComponent: PostCardStyles,
  },
  {
    id: Properties.IsDisabled,
    title: Properties.IsDisabled,
    description: 'isDisabled prop으로 카드를 비활성화 상태로 표현할 수 있습니다.',
    ExampleComponent: PostCardDisabled,
  },
];
