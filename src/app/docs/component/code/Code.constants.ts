import { createDisplayName } from '@/components';
import { CODE_PROPS, Properties } from '@/constants/components';
import { Code } from '@jects/jds';

import { CodeDefault, CodeSizes } from './CodeExamples';

export const codeDisplayName = createDisplayName(
  new Map<object, string>([[Code, 'Code']]),
);

export const CODE_PROPERTIES = [
  {
    name: Properties.Children,
    type: ['string'],
    description: '코드 컴포넌트 안에 표시할 텍스트입니다.',
  },
  {
    name: Properties.Size,
    type: [...CODE_PROPS.SIZES],
    default: 'md',
    description: '코드 컴포넌트의 시각적 크기입니다.',
  },
];

export const CODE_VARIANTS_EXAMPLES = [
  {
    id: 'default',
    title: 'default',
    description:
      '인라인 코드는 문장 흐름 안에서 특정 키워드, 값, 명령어, 짧은 코드 조각을 시각적으로 구분합니다.',
    ExampleComponent: CodeDefault,
  },
  {
    id: Properties.Size,
    title: Properties.Size,
    description: '코드 컴포넌트의 크기를 설정합니다. xs, sm, md(기본), lg를 지원합니다.',
    ExampleComponent: CodeSizes,
  },
];
