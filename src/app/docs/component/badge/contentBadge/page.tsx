'use client';

import { DocDevelopmentTab, DocIntroSection, DocTabs } from '@/components';
import { DATE, VERSION } from '@/constants/components';
import { ContentBadge } from '@jects/jds';

import {
  CONTENT_BADGE_PROPERTIES,
  CONTENT_BADGE_VARIANTS_EXAMPLES,
  contentBadgeDisplayName,
} from './ContentBadge.constants';

export default function ContentBadgePage() {
  return (
    <div className="flex w-full flex-col gap-80">
      <DocIntroSection
        korName="콘텐츠 배지"
        engName="Badge/Content"
        description="배지는 콘텐츠의 상태, 속성, 짧은 부가적 정보를 시각적으로 강조할 때 사용합니다. 특정 요소에 대한 보조적 맥락을 제공하거나 상태 변화를 직관적으로 드러내는 역할을 합니다."
        version={VERSION}
        date={DATE}
      >
        <ContentBadge.Basic>레이블</ContentBadge.Basic>
      </DocIntroSection>
      <DocTabs
        variant="header"
        items={[
          {
            value: 'development',
            label: '개발',
            content: (
              <DocDevelopmentTab
                properties={CONTENT_BADGE_PROPERTIES}
                variantExamples={CONTENT_BADGE_VARIANTS_EXAMPLES}
                getDisplayName={contentBadgeDisplayName}
              />
            ),
          },
        ]}
      />
    </div>
  );
}
