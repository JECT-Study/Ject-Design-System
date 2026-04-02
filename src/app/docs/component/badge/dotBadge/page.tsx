'use client';

import { DocDevelopmentTab, DocIntroSection, DocTabs } from '@/components';
import { DotBadge } from '@jects/jds';

import {
  DOT_BADGE_PROPERTIES,
  DOT_BADGE_VARIANTS_EXAMPLES,
  dotBadgeDisplayName,
} from './DotBadge.constants';

export default function DotBadgePage() {
  return (
    <div className="flex flex-col gap-80">
      <DocIntroSection
        korName="닷 배지"
        engName="Badge/Dot"
        description="배지는 콘텐츠의 상태, 속성, 짧은 부가적 정보를 시각적으로 강조할 때 사용합니다. 특정 요소에 대한 보조적 맥락을 제공하거나 상태 변화를 직관적으로 드러내는 역할을 합니다."
        version="0.0.1"
        date="2026년 1월 27일(화) 14:23"
      >
        <DotBadge.Feedback variant="positive" />
      </DocIntroSection>
      <DocTabs
        variant="header"
        items={[
          {
            value: 'development',
            label: '개발',
            content: (
              <DocDevelopmentTab
                properties={DOT_BADGE_PROPERTIES}
                variantExamples={DOT_BADGE_VARIANTS_EXAMPLES}
                getDisplayName={dotBadgeDisplayName}
              />
            ),
          },
        ]}
      />
    </div>
  );
}
