import { createDisplayName } from '@/components';
import { EMPTY_STATE_PROPS, Properties } from '@/constants/components';
import { EmptyState } from '@jects/jds';

import {
  EmptyStateDefault,
  EmptyStateLayouts,
  EmptyStatePrimaryAction,
  EmptyStateSecondaryAction,
  EmptyStateVariants,
  EmptyStateWithIcon,
} from './EmptyStateExamples';

export const emptyStateDisplayName = createDisplayName(
  new Map<object, string>([[EmptyState, 'EmptyState']]),
);

export const EMPTY_STATE_PROPERTIES = [
  {
    name: Properties.Header,
    type: ['string'],
    description: '엠티 스테이트 제목 텍스트 (필수)',
  },
  {
    name: Properties.Body,
    type: ['string'],
    description: '엠티 스테이트 설명 텍스트 (필수)',
  },
  {
    name: Properties.Icon,
    type: ['IconName'],
    description: '엠티 스테이트에 표시할 아이콘 이름',
  },
  {
    name: Properties.Variant,
    type: [...EMPTY_STATE_PROPS.VARIANTS],
    description: '컴포넌트의 시각적 스타일',
  },
  {
    name: Properties.Layout,
    type: [...EMPTY_STATE_PROPS.LAYOUTS],
    default: 'vertical',
    description: '아이콘과 텍스트의 배치 방향',
  },
  {
    name: Properties.PrimaryAction,
    type: ['BlockButtonActionProps'],
    description: '주요 액션 버튼 설정 (children, onClick, disabled)',
  },
  {
    name: Properties.SecondaryAction,
    type: ['BlockButtonActionProps'],
    description: '보조 액션 버튼 설정. primaryAction이 있을 때만 사용 가능',
  },
];

export const EMPTY_STATE_VARIANTS_EXAMPLES = [
  {
    id: 'default',
    title: 'default',
    description: '기본 엠티 스테이트 컴포넌트입니다. header와 body 텍스트만으로 구성됩니다.',
    ExampleComponent: EmptyStateDefault,
  },
  {
    id: Properties.Variant,
    title: Properties.Variant,
    description:
      '컴포넌트의 시각적 스타일을 설정합니다. empty(배경 없음), outlined(외곽선), alpha(반투명 배경) 세 가지를 지원합니다.',
    ExampleComponent: EmptyStateVariants,
  },
  {
    id: Properties.Layout,
    title: Properties.Layout,
    description:
      '아이콘과 텍스트의 배치 방향을 설정합니다. vertical(세로, 기본)과 horizontal(가로)을 지원합니다.',
    ExampleComponent: EmptyStateLayouts,
  },
  {
    id: Properties.Icon,
    title: Properties.Icon,
    description: '엠티 스테이트에 아이콘을 추가합니다. IconName 타입의 아이콘 이름을 입력합니다.',
    ExampleComponent: EmptyStateWithIcon,
  },
  {
    id: Properties.PrimaryAction,
    title: Properties.PrimaryAction,
    description:
      '주요 액션 버튼을 추가합니다. children, onClick, disabled 속성을 설정할 수 있습니다.',
    ExampleComponent: EmptyStatePrimaryAction,
  },
  {
    id: Properties.SecondaryAction,
    title: Properties.SecondaryAction,
    description:
      'primaryAction과 함께 보조 액션 버튼을 추가합니다. primaryAction이 있을 때만 사용할 수 있습니다.',
    ExampleComponent: EmptyStateSecondaryAction,
  },
];
