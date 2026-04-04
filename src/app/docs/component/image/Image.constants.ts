import { createDisplayName } from '@/components';
import { IMAGE_PROPS, Properties } from '@/constants/components';
import { Image } from '@jects/jds';

import {
  ImageBadge,
  ImageDefault,
  ImageFallback,
  ImageLoading,
  ImageOrientations,
  ImageRatios,
  ImageReadonly,
} from './ImageExamples';

export const imageDisplayName = createDisplayName(new Map<object, string>([[Image, 'Image']]));

export const IMAGE_PROPERTIES = [
  {
    name: Properties.Alt,
    type: ['string'],
    description: '이미지의 대체 텍스트입니다. 접근성을 위해 반드시 제공해야 합니다. (필수)',
  },
  {
    name: Properties.Src,
    type: ['string', 'undefined'],
    default: 'undefined',
    description: '이미지 소스 URL입니다.',
  },
  {
    name: Properties.FallbackSrc,
    type: ['string', 'undefined'],
    default: 'undefined',
    description: '이미지 로드에 실패했을 때 표시할 폴백 이미지 URL입니다.',
  },
  {
    name: Properties.Ratio,
    type: [...IMAGE_PROPS.RATIOS],
    default: 'undefined',
    description: '이미지 컨테이너의 종횡비를 설정합니다.',
  },
  {
    name: Properties.Orientation,
    type: [...IMAGE_PROPS.ORIENTATIONS],
    default: 'undefined',
    description: '이미지의 방향을 설정합니다. portrait(세로) 또는 landscape(가로)를 지원합니다.',
  },
  {
    name: Properties.BadgeVisible,
    type: ['boolean'],
    default: 'false',
    description: '이미지 위에 배지 표시 여부를 설정합니다.',
  },
  {
    name: Properties.BadgeLabel,
    type: ['string', 'undefined'],
    default: 'undefined',
    description: '배지에 표시할 텍스트입니다. badgeVisible이 true일 때 함께 사용합니다.',
  },
  {
    name: Properties.IsReadonly,
    type: ['boolean'],
    default: 'false',
    description: '읽기 전용 모드입니다. true일 때 인터랙션이 비활성화됩니다.',
  },
  {
    name: Properties.Loading,
    type: [...IMAGE_PROPS.LOADING],
    default: 'undefined',
    description: '이미지 로딩 전략을 설정합니다. lazy(지연 로딩) 또는 eager(즉시 로딩)를 지원합니다.',
  },
];

export const IMAGE_VARIANTS_EXAMPLES = [
  {
    id: 'default',
    title: 'default',
    description: '기본 이미지 컴포넌트입니다. src가 없을 경우 플레이스홀더가 표시됩니다.',
    ExampleComponent: ImageDefault,
  },
  {
    id: Properties.Ratio,
    title: Properties.Ratio,
    description:
      '이미지 컨테이너의 종횡비를 설정합니다. 1:1, 4:5, 3:4, 2:3, 9:16, 1:2, 9:21을 지원합니다.',
    ExampleComponent: ImageRatios,
  },
  {
    id: Properties.Orientation,
    title: Properties.Orientation,
    description:
      '이미지의 방향을 설정합니다. portrait(세로)와 landscape(가로) 두 가지를 지원합니다.',
    ExampleComponent: ImageOrientations,
  },
  {
    id: Properties.BadgeVisible,
    title: Properties.BadgeVisible,
    description:
      'badgeVisible을 true로 설정하면 이미지 위에 배지가 표시됩니다. badgeLabel로 배지 텍스트를 지정할 수 있습니다.',
    ExampleComponent: ImageBadge,
  },
  {
    id: Properties.FallbackSrc,
    title: Properties.FallbackSrc,
    description:
      'src 이미지 로드에 실패했을 때 표시할 폴백 이미지를 지정합니다. src가 없을 경우에도 플레이스홀더가 표시됩니다.',
    ExampleComponent: ImageFallback,
  },
  {
    id: Properties.IsReadonly,
    title: Properties.IsReadonly,
    description:
      'isReadonly가 true일 때 인터랙션이 비활성화됩니다. 이미지를 단순 표시 용도로만 사용할 때 활용합니다.',
    ExampleComponent: ImageReadonly,
  },
  {
    id: Properties.Loading,
    title: Properties.Loading,
    description:
      '이미지 로딩 전략을 설정합니다. lazy(지연 로딩)로 설정하면 뷰포트에 진입할 때 이미지를 로드합니다.',
    ExampleComponent: ImageLoading,
  },
];
