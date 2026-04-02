'use client';

import { DocDevelopmentTab, DocIntroSection, DocTabs } from '@/components';
import { LabelButton } from '@jects/jds';

import {
  LABEL_BUTTON_PROPERTIES,
  LABEL_BUTTON_VARIANTS_EXAMPLES,
  labelButtonDisplayName,
} from './LabelButton.constants';

export default function LabelButtonPage() {
  return (
    <div className="flex flex-col gap-80">
      <DocIntroSection
        korName="레이블 버튼"
        engName="Button/label"
        description="레이블 버튼은 사용자가 클릭하거나 터치하는 등 직접적인 액션을 통해 이벤트를 발생시키는 트리거예요. 블록 버튼과 유사하지만 조금 더 주목도가 낮게 사용할 수 있고, 새로운 웹 페이지를 열거나 다른 페이지로 이동하는 등 링크 버튼처럼 작동할 수 있습니다."
        version="0.0.1"
        date="2026년 1월 27일(화) 14:23"
      >
        <LabelButton.Basic>레이블</LabelButton.Basic>
      </DocIntroSection>
      <DocTabs
        variant="header"
        items={[
          {
            value: 'development',
            label: '개발',
            content: (
              <DocDevelopmentTab
                properties={LABEL_BUTTON_PROPERTIES}
                variantExamples={LABEL_BUTTON_VARIANTS_EXAMPLES}
                getDisplayName={labelButtonDisplayName}
              />
            ),
          },
        ]}
      />
    </div>
  );
}
