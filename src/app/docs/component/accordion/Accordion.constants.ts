import { createDisplayName } from '@/components';
import { ACCORDION_PROPS, Properties, Title } from '@/constants/components';
import { Accordion } from '@jects/jds';

import {
  AccordionDisabled,
  AccordionMultipleMode,
  AccordionSingleMode,
  AccordionWithDefaultValue,
} from './AccordionExamples';

export const accordionDisplayName = createDisplayName(
  new Map<object, string>([
    [Accordion.Root, 'Accordion.Root'],
    [Accordion.Item, 'Accordion.Item'],
    [Accordion.Trigger, 'Accordion.Trigger'],
    [Accordion.Content, 'Accordion.Content'],
  ]),
);

export const ACCORDION_PROPERTIES = [
  {
    name: Properties.Type,
    type: [...ACCORDION_PROPS.TYPES],
    default: 'single',
    description: '아이템을 동시에 열 수 있는지 결정합니다.',
  },
  {
    name: Properties.IsStretched,
    type: ['boolean'],
    default: 'primary',
    description: '컴포넌트 내부에 시각적 패딩 없이 늘려져 있는지의 여부입니다.',
  },
  {
    name: Properties.Collapsible,
    type: ['boolean'],
    default: 'false',
    description: '열려 있는 아이템을 다시 클릭했을 때 닫을 수 있는지를 결정합니다.',
  },
  {
    name: Properties.Size,
    type: [...ACCORDION_PROPS.SIZES],
    default: 'solid',
    description: '버튼의 스타일 변형',
  },
  {
    name: Properties.WithPrefixIcon,
    type: ['IconName'],
    description: '내부에 접두 아이콘 컴포넌트를 포함하는지의 여부입니다.',
  },
  {
    name: Properties.Disabled,
    type: ['boolean'],
    default: 'false',
    description: '비활성화 되었는지의 여부입니다.',
  },
  {
    name: Properties.AsChild,
    type: ['boolean'],
    description:
      '자식으로 전달된 요소의 기본 렌더링 요소를 변경하여 props와 동작을 병합합니다. (Radix-UI)',
  },
  {
    name: Properties.DefaultValue,
    type: ['string'],
    default: 'false',
    description: '기본적으로 펼쳐져있는 아코디언 아이템입니다. (multiple 모드 전용)',
  },
];

export const ACCORDION_VARIANTS_EXAMPLES = [
  {
    id: Title.Single,
    title: Title.Single,
    description:
      'Single 모드에서는 한 번에 하나의 아이템만 열 수 있습니다. collapsible prop을 추가하면 열린 아이템을 다시 클릭하여 닫을 수 있습니다.',
    ExampleComponent: AccordionSingleMode,
  },
  {
    id: Title.Multiple,
    title: Title.Multiple,
    description:
      'Multiple 모드에서는 여러 아이템을 동시에 열 수 있습니다. defaultValue에 배열을 전달하여 초기에 열려있을 아이템들을 지정할 수 있습니다.',
    ExampleComponent: AccordionMultipleMode,
  },
  {
    id: Properties.DefaultValue,
    title: Properties.DefaultValue,
    description: 'defaultValue를 지정하지 않으면 모든 아이템이 닫힌 상태로 시작합니다.',
    ExampleComponent: AccordionWithDefaultValue,
  },
  {
    id: Properties.Disabled,
    title: Properties.Disabled,
    description: 'Accordion.Item에 disabled prop을 사용하여 특정 아이템을 비활성화할 수 있습니다.',
    ExampleComponent: AccordionDisabled,
  },
];
