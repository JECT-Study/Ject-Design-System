import { createDisplayName } from '@/components';
import { Properties } from '@/constants/components';
import { Dialog } from '@jects/jds';

import {
  DialogDefault,
  DialogIsButtonStretched,
  DialogWithCheckbox,
  DialogWithSecondaryButton,
  DialogWithTertiaryButton,
} from './DialogExamples';

export const dialogDisplayName = createDisplayName(new Map<object, string>([[Dialog, 'Dialog']]));

export const DIALOG_PROPERTIES = [
  {
    name: Properties.Header,
    type: ['string'],
    description: '다이얼로그의 제목 텍스트입니다. (필수)',
  },
  {
    name: Properties.Body,
    type: ['ReactNode'],
    description: '다이얼로그의 본문 내용입니다. (필수)',
  },
  {
    name: Properties.PrimaryAction,
    type: ['BlockButtonActionProps'],
    description:
      '주요 버튼입니다. children, onClick, disabled, hierarchy를 포함합니다. (필수)',
  },
  {
    name: Properties.SecondaryAction,
    type: ['BlockButtonActionProps', 'undefined'],
    default: 'undefined',
    description: '두 번째 위계의 버튼입니다. children, onClick, disabled, hierarchy를 포함합니다.',
  },
  {
    name: Properties.TertiaryAction,
    type: ['BlockButtonActionProps', 'never'],
    default: 'undefined',
    description:
      '세 번째 위계의 버튼입니다. secondaryAction이 존재할 때만 사용할 수 있습니다.',
  },
  {
    name: Properties.IsButtonStretched,
    type: ['boolean'],
    default: 'false',
    description:
      '버튼을 전체 너비로 늘릴지 여부입니다. 다이얼로그가 작을 때 버튼 시인성과 상호작용 편의를 위해 사용합니다.',
  },
  {
    name: Properties.CheckboxAction,
    type: ['CheckBoxActionProps', 'undefined'],
    default: 'undefined',
    description:
      '다이얼로그 내 체크박스입니다. label, checked, onCheckedChange를 포함합니다.',
  },
];

export const DIALOG_VARIANTS_EXAMPLES = [
  {
    id: 'default',
    title: 'default',
    description:
      '기본 다이얼로그입니다. header, body, primaryAction을 필수로 포함합니다.',
    ExampleComponent: DialogDefault,
  },
  {
    id: Properties.IsButtonStretched,
    title: Properties.IsButtonStretched,
    description:
      '버튼 컨테이너 및 버튼들을 전체 너비로 늘립니다. 다이얼로그가 작을 때 버튼 시인성과 상호작용 편의를 위해 사용합니다.',
    ExampleComponent: DialogIsButtonStretched,
  },
  {
    id: Properties.SecondaryAction,
    title: Properties.SecondaryAction,
    description:
      'secondaryAction을 통해 두 번째 위계의 버튼을 추가합니다.',
    ExampleComponent: DialogWithSecondaryButton,
  },
  {
    id: Properties.TertiaryAction,
    title: Properties.TertiaryAction,
    description:
      'tertiaryAction을 통해 세 번째 위계의 버튼을 추가합니다. secondaryAction이 존재할 때만 사용할 수 있습니다.',
    ExampleComponent: DialogWithTertiaryButton,
  },
  {
    id: Properties.CheckboxAction,
    title: Properties.CheckboxAction,
    description:
      'checkboxAction을 통해 다이얼로그 내에 체크박스를 포함할 수 있습니다.',
    ExampleComponent: DialogWithCheckbox,
  },
];
