import { createDisplayName } from '@/components';
import { BUTTON_PROPS, Properties } from '@/constants/components';
import { IconButton } from '@jects/jds';

import {
  IconButtonDisabled,
  IconButtonFeedback,
  IconButtonHierarchies,
  IconButtons,
  IconButtonSizes,
} from './IconButtonExamples';

export const iconButtonDisplayName = createDisplayName(
  new Map<object, string>([
    [IconButton.Basic, 'IconButton.Basic'],
    [IconButton.Feedback, 'IconButton.Feedback'],
  ]),
);

export const ICON_BUTTON_PROPERTIES = [
  {
    name: Properties.Icon,
    type: ['IconName'],
    description: '표시할 아이콘 이름입니다. Icon 컴포넌트에서 사용하는 값입니다.',
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
    name: Properties.AriaLabel,
    type: ['string'],
    description: '접근성을 위한 레이블이며 필요 시 사용하는 값입니다.',
  },
  {
    name: Properties.Disabled,
    type: ['boolean'],
    default: 'false',
    description: '비활성화 상태',
  },
];

export const ICON_BUTTON_VARIANTS_EXAMPLES = [
  {
    id: Properties.Icon,
    title: Properties.Icon,
    description: '시각, 맥락, 기능적인 의미의 단순 변형들입니다.',
    ExampleComponent: IconButtons,
  },
  {
    id: Properties.Hierarchy,
    title: Properties.Hierarchy,
    description: '시각적이거나 맥락적인 위계 구분입니다.',
    ExampleComponent: IconButtonHierarchies,
  },
  {
    id: Properties.Size,
    title: Properties.Size,
    description: '컴포넌트의 시각적 크기입니다.',
    ExampleComponent: IconButtonSizes,
  },
  {
    id: Properties.Feedback,
    title: Properties.Feedback,
    description: '피드백 유형에 대한 변형입니다.',
    ExampleComponent: IconButtonFeedback,
  },
  {
    id: Properties.Disabled,
    title: Properties.Disabled,
    description: '비활성화 되었는지의 여부입니다.',
    ExampleComponent: IconButtonDisabled,
  },
];
