'use client';

import { DocDevelopmentTab, DocIntroSection, DocTabs } from '@/components';
import { DATE, VERSION } from '@/constants/components';
import { Card } from '@jects/jds';

import { CARD_PROPERTIES, CARD_VARIANTS_EXAMPLES, cardDisplayName } from './PostCard.constants';

export default function CardPage() {
  return (
    <div className="flex w-full flex-col gap-80">
      <DocIntroSection
        korName="포스트 카드"
        engName="Post Card"
        description="포스트 카드는 게시글, 콘텐츠의 핵심 정보를 요약해 목록, 그리드에서 빠르게 훑게 하는 카드입니다. 썸네일, 제목, 요약, 메타 데이터 같은 슬롯을 고정된 구조로 담습니다."
        version={VERSION}
        date={DATE}
      >
        <div>
          <Card.Root layout="vertical" variant="post">
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
