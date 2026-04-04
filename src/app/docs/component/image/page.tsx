'use client';

import { DocDevelopmentTab, DocIntroSection, DocTabs } from '@/components';
import { DATE, VERSION } from '@/constants/components';
import { Image } from '@jects/jds';

import { IMAGE_PROPERTIES, IMAGE_VARIANTS_EXAMPLES, imageDisplayName } from './Image.constants';

export default function ImagePage() {
  return (
    <div className="flex w-full flex-col gap-80">
      <DocIntroSection
        korName="이미지"
        engName="Image"
        description="이미지 컴포넌트는 다양한 종횡비와 방향을 지원하는 이미지 표시 요소예요. 배지 오버레이, 폴백 이미지, 지연 로딩 등 풍부한 기능을 제공합니다."
        version={VERSION}
        date={DATE}
      >
        <div className="w-60">
          <Image alt="이미지 미리보기" ratio="1:1" badgeLabel="new" badgeVisible />
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
                properties={IMAGE_PROPERTIES}
                variantExamples={IMAGE_VARIANTS_EXAMPLES}
                getDisplayName={imageDisplayName}
              />
            ),
          },
        ]}
      />
    </div>
  );
}
