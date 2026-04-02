'use client';

import { DocDevelopmentTab, DocIntroSection, DocTabs } from '@/components';
import { IconButton } from '@jects/jds';

import {
  ICON_BUTTON_PROPERTIES,
  ICON_BUTTON_VARIANTS_EXAMPLES,
  iconButtonDisplayName,
} from './IconButton.constants';

export default function IconButtonPage() {
  return (
    <div className="flex flex-col gap-80">
      <DocIntroSection
        korName="아이콘 버튼"
        engName="Button/icon"
        description="아이콘 버튼은 사용자가 클릭하거나 터치하는 액션을 통해 이벤트를 발생시키는 기본적인 버튼이에요. 레이블 대신 아이콘만으로 의미를 전달하며, 공간이 제한된 상황이나 직관적인 상징 표현이 필요할 때 사용됩니다."
        version="0.0.1"
        date="2026년 1월 27일(화) 14:23"
      >
        <IconButton.Basic aria-label="벡터 버튼" hierarchy="primary" icon="vector" size="md" />
      </DocIntroSection>
      <DocTabs
        variant="header"
        items={[
          {
            value: 'development',
            label: '개발',
            content: (
              <DocDevelopmentTab
                properties={ICON_BUTTON_PROPERTIES}
                variantExamples={ICON_BUTTON_VARIANTS_EXAMPLES}
                getDisplayName={iconButtonDisplayName}
              />
            ),
          },
        ]}
      />
    </div>
  );
}
