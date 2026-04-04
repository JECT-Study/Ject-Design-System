'use client';

import { DocDevelopmentTab, DocIntroSection, DocTabs } from '@/components';
import { DATE, VERSION } from '@/constants/components';
import { Checkbox } from '@jects/jds';

import {
  CHECKBOX_PROPERTIES,
  CHECKBOX_VARIANTS_EXAMPLES,
  checkboxDisplayName,
} from './Checkbox.constants';

export default function CheckboxPage() {
  return (
    <div className="flex w-full flex-col gap-80">
      <DocIntroSection
        korName="체크박스"
        engName="Checkbox"
        description="체크박스는 사용자가 하나 이상의 항목을 선택하거나 해제할 수 있는 입력 컴포넌트입니다. 단독으로 사용하거나 라벨과 함께 사용할 수 있으며, 부분 선택(indeterminate) 상태도 지원합니다."
        version={VERSION}
        date={DATE}
      >
        <Checkbox.Content
          label="동의합니다"
          variant="outlined"
          checked={true}
          onCheckedChange={() => {}}
        />
      </DocIntroSection>
      <DocTabs
        variant="header"
        items={[
          {
            value: 'development',
            label: '개발',
            content: (
              <DocDevelopmentTab
                properties={CHECKBOX_PROPERTIES}
                variantExamples={CHECKBOX_VARIANTS_EXAMPLES}
                getDisplayName={checkboxDisplayName}
              />
            ),
          },
        ]}
      />
    </div>
  );
}
