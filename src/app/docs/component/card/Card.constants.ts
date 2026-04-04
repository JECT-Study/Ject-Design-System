import { createDisplayName } from '@/components';
import { CARD_PROPS, Properties, Title } from '@/constants/components';
import { Card } from '@jects/jds';

import {
  CardDisabled,
  CardInteractive,
  CardLayouts,
  CardStyles,
  CardVariants,
  CardWithImage,
  CardWithLabel,
} from './CardExamples';

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
  // Card.Root
  {
    name: Properties.Variant,
    type: [...CARD_PROPS.VARIANTS],
    default: 'plate',
    description: '카드의 종류를 결정합니다. plate는 일반 콘텐츠, post는 게시글 형태입니다.',
  },
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
    name: Properties.Interactive,
    type: ['boolean'],
    default: 'false',
    description:
      '카드에 인터랙션(hover, focus 등) 스타일을 적용합니다. Card.Overlay와 함께 사용합니다.',
  },
  {
    name: Properties.Children,
    type: ['ReactNode'],
    description: '카드 내부에 렌더링할 콘텐츠입니다.',
  },
  // Card.Image
  {
    name: Properties.Src,
    type: ['string'],
    description: '[Card.Image] 이미지 소스 URL입니다.',
  },
  {
    name: Properties.Alt,
    type: ['string'],
    description: '[Card.Image] 이미지 대체 텍스트입니다. (필수)',
  },
  {
    name: Properties.FallbackSrc,
    type: ['string'],
    description: '[Card.Image] 이미지 로드 실패 시 표시할 대체 이미지 URL입니다.',
  },
  {
    name: Properties.Ratio,
    type: [...CARD_PROPS.RATIOS],
    description: '[Card.Image] 이미지의 비율입니다.',
  },
  {
    name: Properties.Orientation,
    type: [...CARD_PROPS.ORIENTATIONS],
    description: '[Card.Image] 이미지의 방향입니다.',
  },
  {
    name: Properties.BadgeVisible,
    type: ['boolean'],
    default: 'false',
    description: '[Card.Image] 이미지 위에 뱃지를 표시할지 여부입니다.',
  },
  {
    name: Properties.BadgeLabel,
    type: ['string'],
    description: '[Card.Image] 이미지 위에 표시할 뱃지 텍스트입니다.',
  },
  {
    name: Properties.Loading,
    type: ['lazy', 'eager'],
    default: 'lazy',
    description: '[Card.Image] 이미지 로딩 방식입니다.',
  },
  // Card.Caption
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
    id: Properties.Variant,
    title: Properties.Variant,
    description:
      'plate는 일반 콘텐츠 카드, post는 게시글 형태로 작성자·날짜 등 메타 정보를 포함합니다.',
    ExampleComponent: CardVariants,
  },
  {
    id: Properties.Layout,
    title: Properties.Layout,
    description:
      'vertical(기본)은 콘텐츠를 세로로, horizontal은 이미지와 텍스트를 가로로 나란히 배치합니다.',
    ExampleComponent: CardLayouts,
  },
  {
    id: Properties.CardStyle,
    title: Properties.CardStyle,
    description: 'outlined는 외곽선이 있는 스타일, empty는 외곽선 없이 배경만 있는 스타일입니다.',
    ExampleComponent: CardStyles,
  },
  {
    id: 'image',
    title: 'image',
    description:
      'Card.Image로 카드에 이미지를 추가할 수 있습니다. badgeVisible과 badgeLabel로 이미지 위에 뱃지를 표시할 수 있습니다.',
    ExampleComponent: CardWithImage,
  },
  {
    id: Title.Post,
    title: Title.Post,
    description:
      'Card.Label은 타이틀 대신 사용하는 서브타이틀 요소입니다. Card.Meta와 Card.MetaItem으로 작성자·날짜 등 부가 정보를 표시합니다.',
    ExampleComponent: CardWithLabel,
  },
  {
    id: Properties.IsDisabled,
    title: Properties.IsDisabled,
    description: 'isDisabled prop으로 카드를 비활성화 상태로 표현할 수 있습니다.',
    ExampleComponent: CardDisabled,
  },
  {
    id: Properties.Interactive,
    title: Properties.Interactive,
    description:
      'interactive prop과 Card.Overlay를 함께 사용하면 카드 전체를 클릭 가능한 링크나 버튼으로 만들 수 있습니다.',
    ExampleComponent: CardInteractive,
  },
];
