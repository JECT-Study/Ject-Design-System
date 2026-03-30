'use client';

import { DocIntroSection, DocTabs } from '@/components';
import { BlockButton } from '@jects/jds';

import { BlockButtonTab } from './BlockButtonTab';

export default function BlockButtonPage() {
  return (
    <div className="flex flex-col gap-80">
      <DocIntroSection
        korName="블록 버튼"
        engName="Button/block"
        description="블록 버튼은 사용자가 클릭하거나 터치하는 등 직접적인 액션을 통해 이벤트를 발생시키는 트리거예요. 화면 내에서 가장 중요한 행동을 안내하는 역할을 합니다."
        version="0.0.1"
        date="2026년 1월 27일(화) 14:23"
      >
        <BlockButton.Basic variant="solid">레이블</BlockButton.Basic>
      </DocIntroSection>
      <DocTabs
        variant="header"
        items={[
          {
            value: 'development',
            label: '개발',
            content: <BlockButtonTab />,
          },
        ]}
      />
    </div>
  );
}
