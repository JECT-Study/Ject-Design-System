import { createDisplayName } from '@/components';
import { BUTTON_PROPS, Properties } from '@/constants/components';
import { BlockButton } from '@jects/jds';

import {
  BlockButtonDisabled,
  BlockButtonFeedback,
  BlockButtonHierarchies,
  BlockButtonPrefixIcons,
  BlockButtonSizes,
  BlockButtonSuffixIcons,
  BlockButtonVariants,
} from './BlockButtonExamples';

export const blockButtonDisplayName = createDisplayName(
  new Map<object, string>([
    [BlockButton.Basic, 'BlockButton.Basic'],
    [BlockButton.Feedback, 'BlockButton.Feedback'],
  ]),
);

export const BLOCK_BUTTON_PROPERTIES = [
  {
    name: Properties.Children,
    type: ['string'],
    description: '버튼 텍스트',
  },
  {
    name: Properties.Hierarchy,
    type: [...BUTTON_PROPS.BLOCK_BUTTON.HIERARCHIES],
    default: 'primary',
    description: '버튼의 시각적 위계',
  },
  {
    name: Properties.Size,
    type: [...BUTTON_PROPS.BLOCK_BUTTON.SIZES],
    default: 'md',
    description: '버튼의 크기',
  },
  {
    name: Properties.Variant,
    type: [...BUTTON_PROPS.BLOCK_BUTTON.VARIANTS],
    default: 'solid',
    description: '버튼의 스타일 변형',
  },
  {
    name: Properties.PrefixIcon,
    type: ['IconName'],
    description: '버튼 텍스트 앞에 표시되는 아이콘 이름 (Icon 컴포넌트)',
  },
  {
    name: Properties.SuffixIcon,
    type: ['IconName'],
    description: '버튼 텍스트 뒤에 표시되는 아이콘 이름 (Icon 컴포넌트)',
  },
  {
    name: Properties.Disabled,
    type: ['boolean'],
    default: 'false',
    description: '비활성화 상태',
  },
];

export const BLOCK_BUTTON_VARIANTS_EXAMPLES = [
  {
    id: Properties.Variant,
    title: Properties.Variant,
    description:
      '버튼의 스타일 변형을 설정합니다. solid(기본), outlined, empty 세 가지를 지원합니다.',
    ExampleComponent: BlockButtonVariants,
  },
  {
    id: Properties.Hierarchy,
    title: Properties.Hierarchy,
    description:
      '버튼의 시각적 위계를 설정합니다. accent, primary, secondary, tertiary를 지원합니다.',
    ExampleComponent: BlockButtonHierarchies,
  },
  {
    id: Properties.Size,
    title: Properties.Size,
    description: '버튼의 크기를 설정합니다. xs, sm, md(기본), lg를 지원합니다.',
    ExampleComponent: BlockButtonSizes,
  },
  {
    id: Properties.Feedback,
    title: Properties.Feedback,
    description:
      '피드백 인텐트를 가진 버튼입니다. positive(성공)와 destructive(위험) 두 가지를 지원합니다.',
    ExampleComponent: BlockButtonFeedback,
  },
  {
    id: Properties.PrefixIcon,
    title: Properties.PrefixIcon,
    description: '버튼 텍스트 앞에 아이콘을 추가합니다.',
    ExampleComponent: BlockButtonPrefixIcons,
  },
  {
    id: Properties.SuffixIcon,
    title: Properties.SuffixIcon,
    description: '버튼 텍스트 뒤에 아이콘을 추가합니다.',
    ExampleComponent: BlockButtonSuffixIcons,
  },
  {
    id: Properties.Disabled,
    title: Properties.Disabled,
    description: '비활성화 상태의 버튼입니다.',
    ExampleComponent: BlockButtonDisabled,
  },
];
