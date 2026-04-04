'use client';

import { DocDevelopmentTab, DocIntroSection, DocTabs } from '@/components';
import { DATE, VERSION } from '@/constants/components';
import { BlockButton } from '@jects/jds';

import {
  BLOCK_BUTTON_PROPERTIES,
  BLOCK_BUTTON_VARIANTS_EXAMPLES,
  blockButtonDisplayName,
} from './BlockButton.constants';

export default function BlockButtonPage() {
  return (
    <div className="flex w-full flex-col gap-80">
      <DocIntroSection
        korName="블록 버튼"
        engName="Button/block"
        description="블록 버튼은 사용자가 클릭하거나 터치하는 등 직접적인 액션을 통해 이벤트를 발생시키는 트리거예요. 화면 내에서 가장 중요한 행동을 안내하는 역할을 합니다."
        version={VERSION}
        date={DATE}
      >
        <BlockButton.Basic variant="solid">레이블</BlockButton.Basic>
      </DocIntroSection>
      <DocTabs
        variant="header"
        items={[
          {
            value: 'development',
            label: '개발',
            content: (
              <DocDevelopmentTab
                properties={BLOCK_BUTTON_PROPERTIES}
                variantExamples={BLOCK_BUTTON_VARIANTS_EXAMPLES}
                getDisplayName={blockButtonDisplayName}
              />
            ),
          },
        ]}
      />
    </div>
  );
}
