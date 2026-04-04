'use client';

import { DocDevelopmentTab, DocIntroSection, DocTabs } from '@/components';
import { DATE, VERSION } from '@/constants/components';
import { Code } from '@jects/jds';

import { CODE_PROPERTIES, CODE_VARIANTS_EXAMPLES, codeDisplayName } from './Code.constants';

export default function CodePage() {
  return (
    <div className="flex w-full flex-col gap-80">
      <DocIntroSection
        korName="코드"
        engName="Code"
        description="인라인 코드는 문장 흐름 안에서 특정 키워드, 값, 명령어, 짧은 코드 조각을 시각적으로 구분하기 위한 텍스트 컴포넌트입니다."
        version={VERSION}
        date={DATE}
      >
        <Code>inline code syntax</Code>
      </DocIntroSection>
      <DocTabs
        variant="header"
        items={[
          {
            value: 'development',
            label: '개발',
            content: (
              <DocDevelopmentTab
                properties={CODE_PROPERTIES}
                variantExamples={CODE_VARIANTS_EXAMPLES}
                getDisplayName={codeDisplayName}
              />
            ),
          },
        ]}
      />
    </div>
  );
}
