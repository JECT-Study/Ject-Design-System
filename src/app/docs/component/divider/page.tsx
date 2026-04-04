'use client';

import { DocDevelopmentTab, DocIntroSection, DocTabs } from '@/components';
import { DATE, VERSION } from '@/constants/components';
import { Divider } from '@jects/jds';

import {
  DIVIDER_PROPERTIES,
  DIVIDER_VARIANTS_EXAMPLES,
  dividerDisplayName,
} from './Divider.constants';

export default function DividerPage() {
  return (
    <div className="flex w-full flex-col gap-80">
      <DocIntroSection
        korName="디바이더"
        engName="Divider"
        description="디바이더는 콘텐츠 영역 사이를 시각적으로 구분하는 구분선 컴포넌트입니다. 가로 및 세로 방향, 다양한 두께와 선 스타일을 지원합니다."
        version={VERSION}
        date={DATE}
      >
        <div className="w-full">
          <Divider />
        </div>
      </DocIntroSection>
      <DocTabs
        variant="header"
        items={[
          {
            value: 'development',
            label: '개발',
            content: (
              <DocDevelopmentTab
                properties={DIVIDER_PROPERTIES}
                variantExamples={DIVIDER_VARIANTS_EXAMPLES}
                getDisplayName={dividerDisplayName}
              />
            ),
          },
        ]}
      />
    </div>
  );
}
