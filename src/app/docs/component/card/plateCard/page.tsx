'use client';

import { DocDevelopmentTab, DocIntroSection, DocTabs } from '@/components';
import { DATE, VERSION } from '@/constants/components';
import { Card } from '@jects/jds';

import { CARD_PROPERTIES, CARD_VARIANTS_EXAMPLES, cardDisplayName } from './PlateCard.constants';

export default function PlateCardPage() {
  return (
    <div className="flex w-full flex-col gap-80">
      <DocIntroSection
        korName="플레이트 카드"
        engName="Plate Card"
        description="플레이트 카드는 관련된 정보를 하나의 덩어리로 묶어 목록이나 그리드에서 빠르게 훑고 비교할 수 있게 만드는 컨테이너입니다. 썸네일, 제목, 요약, 보조 정보, 액션을 일관된 구조로 담아 화면의 정보 위계를 안정적으로 유지하는 역할을 합니다."
        version={VERSION}
        date={DATE}
      >
        <div>
          <Card.Preset.PlateWithTitle.Button
            onClick={() => alert('카드가 클릭되었습니다!')}
            layout="horizontal"
            image={{
              alt: 'image의 alt 이름',
            }}
            caption="캡션 내용이 들어감"
            title="제목부분입니다"
            body="horizontal layout으로 설정하면 이미지가 좌측에 표시됩니다."
          />
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
                properties={CARD_PROPERTIES}
                variantExamples={CARD_VARIANTS_EXAMPLES}
                getDisplayName={cardDisplayName}
              />
            ),
          },
        ]}
      />
    </div>
  );
}
