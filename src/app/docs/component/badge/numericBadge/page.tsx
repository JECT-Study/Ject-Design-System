'use client';

import { DocDevelopmentTab, DocIntroSection, DocTabs } from '@/components';
import { DATE, VERSION } from '@/constants/components';
import { NumericBadge } from '@jects/jds';

import {
  NUMERIC_BADGE_PROPERTIES,
  NUMERIC_BADGE_VARIANTS_EXAMPLES,
  numericBadgeDisplayName,
} from './NumericBadge.constants';

export default function NumericBadgePage() {
  return (
    <div className="flex w-full flex-col gap-80">
      <DocIntroSection
        korName="너머릭 배지"
        engName="Badge/Numeric"
        description="배지는 콘텐츠의 상태, 속성, 짧은 부가적 정보를 시각적으로 강조할 때 사용합니다. 특정 요소에 대한 보조적 맥락을 제공하거나 상태 변화를 직관적으로 드러내는 역할을 합니다."
        version={VERSION}
        date={DATE}
      >
        <NumericBadge.Basic>99</NumericBadge.Basic>
      </DocIntroSection>
      <DocTabs
        variant="header"
        items={[
          {
            value: 'development',
            label: '개발',
            content: (
              <DocDevelopmentTab
                properties={NUMERIC_BADGE_PROPERTIES}
                variantExamples={NUMERIC_BADGE_VARIANTS_EXAMPLES}
                getDisplayName={numericBadgeDisplayName}
              />
            ),
          },
        ]}
      />
    </div>
  );
}
