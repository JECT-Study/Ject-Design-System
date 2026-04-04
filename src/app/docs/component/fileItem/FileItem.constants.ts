import { createDisplayName } from '@/components';
import { Properties } from '@/constants/components';
import { FileItem } from '@jects/jds';

import {
  FileItemDefault,
  FileItemDisabled,
  FileItemHasError,
  FileItemReadonly,
  FileItemRemoveable,
} from './FileItemExamples';

export const fileItemDisplayName = createDisplayName(
  new Map<object, string>([[FileItem, 'FileItem']]),
);

export const FILE_ITEM_PROPERTIES = [
  {
    name: Properties.FileName,
    type: ['ReactNode'],
    description: '파일 이름입니다. (필수)',
  },
  {
    name: Properties.FileSize,
    type: ['ReactNode', 'undefined'],
    default: 'undefined',
    description: '파일 크기 정보입니다.',
  },
  {
    name: Properties.Readonly,
    type: ['boolean'],
    default: 'false',
    description: '읽기 전용 모드입니다. true일 때 button 대신 div로 렌더링되며 삭제 기능을 사용할 수 없습니다.',
  },
  {
    name: Properties.Disabled,
    type: ['boolean'],
    default: 'false',
    description: '비활성화 상태입니다. 상호작용을 막고 다운로드를 방지합니다.',
  },
  {
    name: Properties.HasError,
    type: ['boolean'],
    default: 'false',
    description: '에러 상태입니다. true일 때 에러 스타일이 적용됩니다.',
  },
  {
    name: Properties.ErrorMessage,
    type: ['ReactNode', 'undefined'],
    default: 'undefined',
    description: 'hasError가 true일 때 표시되는 에러 메시지입니다. 최대 2줄까지 표시되며 초과 시 말줄임표로 처리됩니다.',
  },
  {
    name: Properties.Removeable,
    type: ['boolean'],
    default: 'false',
    description: '삭제 버튼 표시 여부입니다. true일 때 삭제 아이콘 버튼이 노출됩니다.',
  },
  {
    name: Properties.OnRemove,
    type: ['(e: MouseEvent) => void', 'undefined'],
    default: 'undefined',
    description: '삭제 버튼 클릭 시 호출되는 콜백 함수입니다.',
  },
];

export const FILE_ITEM_VARIANTS_EXAMPLES = [
  {
    id: 'default',
    title: 'default',
    description: '기본 파일 항목입니다. fileName과 fileSize를 표시합니다.',
    ExampleComponent: FileItemDefault,
  },
  {
    id: Properties.Removeable,
    title: Properties.Removeable,
    description:
      'removeable을 통해 삭제 버튼 표시 여부를 설정합니다. false(기본)이면 삭제 버튼이 표시되지 않으며, true이면 삭제 아이콘 버튼이 노출됩니다.',
    ExampleComponent: FileItemRemoveable,
  },
  {
    id: Properties.Readonly,
    title: Properties.Readonly,
    description:
      'readonly가 true일 때 button 대신 div로 렌더링됩니다. 다운로드 및 삭제 기능을 모두 사용할 수 없습니다.',
    ExampleComponent: FileItemReadonly,
  },
  {
    id: Properties.Disabled,
    title: Properties.Disabled,
    description:
      '비활성화 상태입니다. 파일 다운로드를 방지하며, removeable이 true인 경우에도 삭제 버튼은 활성 상태를 유지합니다.',
    ExampleComponent: FileItemDisabled,
  },
  {
    id: Properties.HasError,
    title: Properties.HasError,
    description:
      'hasError가 true일 때 에러 스타일이 적용됩니다. errorMessage를 함께 사용하면 에러 메시지를 표시할 수 있으며, 최대 2줄까지 노출됩니다.',
    ExampleComponent: FileItemHasError,
  },
];
