import {
  BLOCK_BUTTON_HIERARCHIES,
  BLOCK_BUTTON_SIZES,
  BLOCK_BUTTON_VARIANTS,
} from '@/constants/components';

import { BlockButtonProp } from './BlockButton.options';
import {
  BlockButtonDisabled,
  BlockButtonFeedbacks,
  BlockButtonHierarchies,
  BlockButtonPrefixIcons,
  BlockButtonSizes,
  BlockButtonSuffixIcons,
  BlockButtonVariants,
} from './BlockButtonExamples';

export const BLOCK_BUTTON_PROPERTIES = [
  {
    name: BlockButtonProp.Children,
    type: ['string'],
    default: '레이블',
    description: '버튼 텍스트',
  },
  {
    name: BlockButtonProp.Hierarchy,
    type: [...BLOCK_BUTTON_HIERARCHIES],
    default: 'primary',
    description: '버튼의 시각적 위계',
  },
  {
    name: BlockButtonProp.Size,
    type: [...BLOCK_BUTTON_SIZES],
    default: 'md',
    description: '버튼의 크기',
  },
  {
    name: BlockButtonProp.Variant,
    type: [...BLOCK_BUTTON_VARIANTS],
    default: 'solid',
    description: '버튼의 스타일 변형',
  },
  {
    name: BlockButtonProp.PrefixIcon,
    type: ['IconName'],
    description: '버튼 텍스트 앞에 표시되는 아이콘 이름 (Icon 컴포넌트)',
  },
  {
    name: BlockButtonProp.SuffixIcon,
    type: ['IconName'],
    description: '버튼 텍스트 뒤에 표시되는 아이콘 이름 (Icon 컴포넌트)',
  },
  {
    name: BlockButtonProp.Disabled,
    type: ['boolean'],
    default: 'false',
    description: '비활성화 상태',
  },
];

export const BLOCK_BUTTON_VARIANTS_EXAMPLES = [
  {
    id: BlockButtonProp.Variant,
    title: BlockButtonProp.Variant,
    description:
      '버튼의 스타일 변형을 설정합니다. solid(기본), outlined, empty 세 가지를 지원합니다.',
    ExampleComponent: BlockButtonVariants,
  },
  {
    id: BlockButtonProp.Hierarchy,
    title: BlockButtonProp.Hierarchy,
    description:
      '버튼의 시각적 위계를 설정합니다. accent, primary, secondary, tertiary를 지원합니다.',
    ExampleComponent: BlockButtonHierarchies,
  },
  {
    id: BlockButtonProp.Size,
    title: BlockButtonProp.Size,
    description: '버튼의 크기를 설정합니다. xs, sm, md(기본), lg를 지원합니다.',
    ExampleComponent: BlockButtonSizes,
  },
  {
    id: BlockButtonProp.Feedback,
    title: BlockButtonProp.Feedback,
    description:
      '피드백 인텐트를 가진 버튼입니다. positive(성공)와 destructive(위험) 두 가지를 지원합니다.',
    ExampleComponent: BlockButtonFeedbacks,
  },
  {
    id: BlockButtonProp.PrefixIcon,
    title: BlockButtonProp.PrefixIcon,
    description: '버튼 텍스트 앞에 아이콘을 추가합니다.',
    ExampleComponent: BlockButtonPrefixIcons,
  },
  {
    id: BlockButtonProp.SuffixIcon,
    title: BlockButtonProp.SuffixIcon,
    description: '버튼 텍스트 뒤에 아이콘을 추가합니다.',
    ExampleComponent: BlockButtonSuffixIcons,
  },
  {
    id: BlockButtonProp.Disabled,
    title: BlockButtonProp.Disabled,
    description: '비활성화 상태의 버튼입니다.',
    ExampleComponent: BlockButtonDisabled,
  },
];
