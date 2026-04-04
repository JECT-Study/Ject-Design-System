'use client';

import { DocDevelopmentTab, DocIntroSection, DocTabs } from '@/components';
import { DATE, VERSION } from '@/constants/components';
import { Card } from '@jects/jds';

import { CARD_PROPERTIES, CARD_VARIANTS_EXAMPLES, cardDisplayName } from './Card.constants';

export default function CardPage() {
  return (
    <div className="flex w-full flex-col gap-80">
      <DocIntroSection
        korName="카드"
        engName="Card"
        description="Card 컴포넌트는 이미지, 텍스트, 메타 정보 등 관련 콘텐츠를 하나의 컨테이너로 묶어 표시하는 영역입니다. plate(일반 콘텐츠)와 post(게시글) 두 가지 변형을 지원합니다."
        version={VERSION}
        date={DATE}
      >
        <div>
          <Card.Root layout="vertical" variant="plate">
            <Card.Image alt="프로젝트 이미지" />
            <Card.Content>
              <Card.Title>타이틀 레이블</Card.Title>
              <Card.Body>
                Compound Components 패턴으로 자유롭게 조합할 수 있습니다. 최대한의 유연성을
                제공합니다. 부모의 크기를 명시적으로 선언해주어야 합니다.
              </Card.Body>
              <Card.Caption>캡션 레이블입니다.</Card.Caption>
            </Card.Content>
          </Card.Root>
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
