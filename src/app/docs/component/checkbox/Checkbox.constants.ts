import { createDisplayName } from '@/components';
import { CHECKBOX_PROPS, Properties } from '@/constants/components';
import { Checkbox } from '@jects/jds';

import {
  CheckboxContentAlign,
  CheckboxContentInvalid,
  CheckboxContentSubLabel,
  CheckboxContentVariants,
  CheckboxDisabled,
  CheckboxInvalid,
  CheckboxSizes,
  CheckboxStates,
} from './CheckboxExamples';

export const checkboxDisplayName = createDisplayName(
  new Map<object, string>([
    [Checkbox.Basic, 'Checkbox.Basic'],
    [Checkbox.Content, 'Checkbox.Content'],
  ]),
);

export const CHECKBOX_PROPERTIES = [
  {
    name: Properties.Checked,
    type: ['boolean', '"indeterminate"'],
    default: 'false',
    description: '체크박스의 상태입니다. true(체크), false(미체크), "indeterminate"(부분 선택) 세 가지를 지원합니다.',
  },
  {
    name: Properties.OnCheckedChange,
    type: ['(checked: CheckedState) => void'],
    description: '체크 상태가 변경될 때 호출되는 핸들러입니다.',
  },
  {
    name: Properties.Size,
    type: [...CHECKBOX_PROPS.SIZES],
    default: 'md',
    description: '체크박스의 크기입니다.',
  },
  {
    name: Properties.Disabled,
    type: ['boolean'],
    default: 'false',
    description: '비활성화 상태입니다.',
  },
  {
    name: Properties.IsInvalid,
    type: ['boolean'],
    default: 'false',
    description: '유효하지 않은(에러) 상태입니다. 에러 색상으로 표시됩니다.',
  },
  {
    name: Properties.Label,
    type: ['ReactNode'],
    description: '[Checkbox.Content 전용] 메인 라벨 텍스트입니다.',
  },
  {
    name: Properties.SubLabel,
    type: ['ReactNode'],
    description: '[Checkbox.Content 전용] 보조 설명 텍스트입니다. (선택)',
  },
  {
    name: Properties.Variant,
    type: [...CHECKBOX_PROPS.VARIANTS],
    default: 'empty',
    description: '[Checkbox.Content 전용] 컨테이너 스타일입니다. outlined는 테두리 박스를 표시합니다.',
  },
  {
    name: Properties.Align,
    type: [...CHECKBOX_PROPS.ALIGNS],
    default: 'left',
    description: '[Checkbox.Content 전용] 체크박스와 라벨의 배치 방향입니다.',
  },
];

export const CHECKBOX_VARIANTS_EXAMPLES = [
  {
    id: 'states',
    title: 'states',
    description:
      '체크박스의 세 가지 상태를 지원합니다. unchecked(미체크), checked(체크), indeterminate(부분 선택).',
    ExampleComponent: CheckboxStates,
  },
  {
    id: Properties.Size,
    title: Properties.Size,
    description: '체크박스의 크기를 설정합니다. xs(14px), sm(16px), md(18px, 기본), lg(20px)를 지원합니다.',
    ExampleComponent: CheckboxSizes,
  },
  {
    id: Properties.Disabled,
    title: Properties.Disabled,
    description: '비활성화 상태의 체크박스입니다. unchecked, checked, indeterminate 모든 상태에 적용 가능합니다.',
    ExampleComponent: CheckboxDisabled,
  },
  {
    id: Properties.IsInvalid,
    title: Properties.IsInvalid,
    description: '유효하지 않은(에러) 상태의 체크박스입니다. 에러 색상으로 강조 표시됩니다.',
    ExampleComponent: CheckboxInvalid,
  },
  {
    id: Properties.Variant,
    title: Properties.Variant,
    description:
      '[Checkbox.Content] 컨테이너 스타일을 설정합니다. empty(기본)와 outlined(테두리 박스) 두 가지를 지원합니다.',
    ExampleComponent: CheckboxContentVariants,
  },
  {
    id: Properties.Align,
    title: Properties.Align,
    description:
      '[Checkbox.Content] 체크박스와 라벨의 배치 방향을 설정합니다. left(기본)와 right를 지원합니다.',
    ExampleComponent: CheckboxContentAlign,
  },
  {
    id: Properties.SubLabel,
    title: Properties.SubLabel,
    description: '[Checkbox.Content] 메인 라벨 아래에 보조 설명 텍스트를 추가합니다.',
    ExampleComponent: CheckboxContentSubLabel,
  },
  {
    id: 'contentInvalid',
    title: 'Content isInvalid',
    description:
      '[Checkbox.Content] 유효하지 않은 상태에서 라벨 텍스트와 outlined 테두리까지 에러 색상으로 변경됩니다.',
    ExampleComponent: CheckboxContentInvalid,
  },
];
