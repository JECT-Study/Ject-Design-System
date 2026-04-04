'use client';

import { DocDevelopmentTab, DocIntroSection, DocTabs } from '@/components';
import { DATE, VERSION } from '@/constants/components';
import { Callout } from '@jects/jds';

import {
  CALLOUT_PROPERTIES,
  CALLOUT_VARIANTS_EXAMPLES,
  calloutDisplayName,
} from './Callout.constants';

export default function BlockButtonPage() {
  return (
    <div className="flex w-full flex-col gap-80">
      <DocIntroSection
        korName="콜아웃"
        engName="Callout"
        description="주요 텍스트 콘텐츠를 강조하거나 추가 설명을 제공하는 메시지 영역입니다. 주요 고지나 정책 변경 등 사용자가 반드시 확인해야 할 중요 정보를 시각적으로 돋보이게 환기할 때 활용합니다."
        version={VERSION}
        date={DATE}
      >
        <Callout
          hierarchy="primary"
          labelButtonProps={{
            children: '레이블',
            disabled: false,
            prefixIcon: 'blank',
            suffixIcon: 'blank',
          }}
          size="lg"
          title="베이직 콜아웃 타이틀"
        >
          콜아웃 텍스트의 최대 입력 글자수 제한은 없지만, 너무 많은 글자수는 핵심적인 내용을
          효과적으로 전달하는 데에 적절치 않다는 점을 유의합니다.
        </Callout>
      </DocIntroSection>
      <DocTabs
        variant="header"
        items={[
          {
            value: 'development',
            label: '개발',
            content: (
              <DocDevelopmentTab
                properties={CALLOUT_PROPERTIES}
                variantExamples={CALLOUT_VARIANTS_EXAMPLES}
                getDisplayName={calloutDisplayName}
              />
            ),
          },
        ]}
      />
    </div>
  );
}
