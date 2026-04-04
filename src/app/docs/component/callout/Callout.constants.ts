import { createDisplayName } from '@/components';
import { CALLOUT_PROPS, Properties } from '@/constants/components';
import { Callout } from '@jects/jds';

import {
  CalloutFeedback,
  CalloutHierarchies,
  CalloutSizes,
  CalloutWithLabelButton,
} from './CalloutExamples';

export const calloutDisplayName = createDisplayName(
  new Map<object, string>([[Callout, 'Callout']]),
);

export const CALLOUT_PROPERTIES = [
  {
    name: Properties.Children,
    type: ['ReactNode'],
    description: '내용 입력 시 콜아웃 텍스트(본문)가 표시됩니다.',
  },
  {
    name: Properties.Hierarchy,
    type: [...CALLOUT_PROPS.HIERARCHIES],
    default: 'primary',
    description: '시각적이거나 맥락적인 위계 구분입니다.',
  },
  {
    name: Properties.Size,
    type: [...CALLOUT_PROPS.SIZES],
    default: 'md',
    description: '컴포넌트의 시각적 크기입니다.',
  },
  {
    name: Properties.Feedback,
    type: [...CALLOUT_PROPS.FEEDBACK],
    description: '피드백 유형에 대한 변형입니다.',
  },
  {
    name: Properties.Title,
    type: ['IconName'],
    description: '내용 입력 시 콜아웃 타이틀이 표시됩니다. (선택)',
  },
  {
    name: Properties.LabelButtonProps,
    type: ['IconName'],
    description: '버튼 주입 시 내부에 별도 버튼 컴포넌트를 포함합니다. (선택)',
  },
];

export const CALLOUT_VARIANTS_EXAMPLES = [
  {
    id: Properties.Hierarchy,
    title: Properties.Hierarchy,
    description:
      '버튼의 시각적 위계를 설정합니다. accent, primary, secondary, tertiary를 지원합니다.',
    ExampleComponent: CalloutHierarchies,
  },
  {
    id: Properties.Size,
    title: Properties.Size,
    description: '버튼의 크기를 설정합니다. xs, sm, md(기본), lg를 지원합니다.',
    ExampleComponent: CalloutSizes,
  },
  {
    id: Properties.Feedback,
    title: Properties.Feedback,
    description:
      '피드백 인텐트를 가진 버튼입니다. positive(성공)와 destructive(위험) 두 가지를 지원합니다.',
    ExampleComponent: CalloutFeedback,
  },
  {
    id: Properties.LabelButtonProps,
    title: Properties.LabelButtonProps,
    description: '버튼 텍스트 앞에 아이콘을 추가합니다.',
    ExampleComponent: CalloutWithLabelButton,
  },
];
