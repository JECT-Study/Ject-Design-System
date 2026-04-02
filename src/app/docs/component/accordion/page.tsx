'use client';

import { DocDevelopmentTab, DocIntroSection, DocTabs } from '@/components';
import { Accordion } from '@jects/jds';

import {
  ACCORDION_PROPERTIES,
  ACCORDION_VARIANTS_EXAMPLES,
  accordionDisplayName,
} from './Accordion.constants';

export default function BlockButtonPage() {
  return (
    <div className="flex flex-col gap-80">
      <DocIntroSection
        korName="아코디언"
        engName="Accordion"
        description="Accordion 컴포넌트는 Radix UI를 기반으로 만들어진 접고 펼칠 수 있는 컨텐츠 영역입니다."
        version="0.0.1"
        date="2026년 1월 27일(화) 14:23"
      >
        <div className="w-125">
          <Accordion.Root size="lg" type="multiple">
            <Accordion.Item value="item-1">
              <Accordion.Trigger withPrefixIcon="vector">타이틀</Accordion.Trigger>
              <Accordion.Content>
                아코디언 콘텐츠 내용은 타이틀에 대한 상세 내용 및 설명을 포함합니다.
              </Accordion.Content>
            </Accordion.Item>
            <Accordion.Item value="item-2">
              <Accordion.Trigger withPrefixIcon="vector">타이틀</Accordion.Trigger>
              <Accordion.Content>
                아코디언 콘텐츠 내용은 타이틀에 대한 상세 내용 및 설명을 포함합니다.
              </Accordion.Content>
            </Accordion.Item>
            <Accordion.Item value="item-3">
              <Accordion.Trigger withPrefixIcon="vector">타이틀</Accordion.Trigger>
              <Accordion.Content>
                아코디언 콘텐츠 내용은 타이틀에 대한 상세 내용 및 설명을 포함합니다.
              </Accordion.Content>
            </Accordion.Item>
          </Accordion.Root>
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
                properties={ACCORDION_PROPERTIES}
                variantExamples={ACCORDION_VARIANTS_EXAMPLES}
                getDisplayName={accordionDisplayName}
              />
            ),
          },
        ]}
      />
    </div>
  );
}
