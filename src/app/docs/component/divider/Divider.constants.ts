import { createDisplayName } from '@/components';
import { Properties } from '@/constants/components';
import { Divider } from '@jects/jds';

import {
  DividerDecorative,
  DividerDefault,
  DividerOrientation,
  DividerThickness,
  DividerVariant,
} from './DividerExamples';

export const dividerDisplayName = createDisplayName(new Map<object, string>([[Divider, 'Divider']]));

export const DIVIDER_PROPERTIES = [
  {
    name: Properties.Variant,
    type: ['solid', 'dashed'],
    default: 'solid',
    description: '구분선의 선 스타일입니다.',
  },
  {
    name: Properties.Thickness,
    type: ['normal', 'bold', 'bolder', 'boldest'],
    default: 'normal',
    description: '구분선의 두께입니다.',
  },
  {
    name: Properties.Orientation,
    type: ['horizontal', 'vertical'],
    default: 'horizontal',
    description: '구분선의 방향입니다.',
  },
  {
    name: Properties.Decorative,
    type: ['boolean'],
    default: 'true',
    description:
      '구분선이 장식 목적인지 여부입니다. true이면 스크린 리더가 무시하고, false이면 콘텐츠 구분 요소로 인식합니다.',
  },
];

export const DIVIDER_VARIANTS_EXAMPLES = [
  {
    id: 'default',
    title: 'default',
    description: '기본 구분선입니다. solid 스타일에 normal 두께, horizontal 방향으로 렌더링됩니다.',
    ExampleComponent: DividerDefault,
  },
  {
    id: Properties.Variant,
    title: Properties.Variant,
    description: '구분선의 선 스타일을 설정합니다. solid(실선)와 dashed(점선)를 지원합니다.',
    ExampleComponent: DividerVariant,
  },
  {
    id: Properties.Thickness,
    title: Properties.Thickness,
    description:
      '구분선의 두께를 설정합니다. normal, bold, bolder, boldest 순으로 두꺼워집니다.',
    ExampleComponent: DividerThickness,
  },
  {
    id: Properties.Orientation,
    title: Properties.Orientation,
    description:
      '구분선의 방향을 설정합니다. horizontal(가로)과 vertical(세로)을 지원합니다.',
    ExampleComponent: DividerOrientation,
  },
  {
    id: Properties.Decorative,
    title: Properties.Decorative,
    description:
      '구분선이 장식 목적인지 여부를 설정합니다. false로 지정하면 스크린 리더가 콘텐츠 구분 요소로 인식합니다.',
    ExampleComponent: DividerDecorative,
  },
];
