import { createDisplayName } from '@/components';
import { CARD_PROPS, Properties } from '@/constants/components';
import { Card } from '@jects/jds';

import { CardDisabled, CardLayouts } from './PlateCardExamples';

export const cardDisplayName = createDisplayName(
  new Map<object, string>([
    [Card.Preset.PlateWithTitle.Link, 'Card.Preset.PlateWithTitle.Link'],
    [Card.Preset.PlateWithTitle.Button, 'Card.Preset.PlateWithTitle.Button'],
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
  {
    name: Properties.Standalone,
    type: ['boolean'],
    default: 'false',
    description:
      '[Card.Caption] 독립형 캡션으로 표시할지 여부입니다. true이면 별도 스타일이 적용됩니다.',
  },
];

export const CARD_VARIANTS_EXAMPLES = [
  {
    id: Properties.Layout,
    title: Properties.Layout,
    description:
      'vertical(기본)은 콘텐츠를 세로로, horizontal은 이미지와 텍스트를 가로로 나란히 배치합니다.',
    ExampleComponent: CardLayouts,
  },
  {
    id: Properties.IsDisabled,
    title: Properties.IsDisabled,
    description: 'isDisabled prop으로 카드를 비활성화 상태로 표현할 수 있습니다.',
    ExampleComponent: CardDisabled,
  },
];
