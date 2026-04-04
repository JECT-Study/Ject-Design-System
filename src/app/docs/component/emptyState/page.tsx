'use client';

import { DocDevelopmentTab, DocIntroSection, DocTabs } from '@/components';
import { DATE, VERSION } from '@/constants/components';
import { EmptyState } from '@jects/jds';

import {
  EMPTY_STATE_PROPERTIES,
  EMPTY_STATE_VARIANTS_EXAMPLES,
  emptyStateDisplayName,
} from './EmptyState.constants';

export default function EmptyStatePage() {
  return (
    <div className="flex w-full flex-col gap-80">
      <DocIntroSection
        korName="엠티 스테이트"
        engName="EmptyState"
        description="엠티 스테이트 컴포넌트는 데이터가 없거나 검색 결과가 없는 등 콘텐츠가 비어 있는 상황을 사용자에게 명확하게 안내하는 컴포넌트예요. 제목, 설명, 아이콘, 액션 버튼으로 구성됩니다."
        version={VERSION}
        date={DATE}
      >
        <EmptyState
          variant="outlined"
          icon="cloud-line"
          header="데이터가 없습니다"
          body="등록된 항목이 없어요. 새 항목을 추가해 보세요."
          primaryAction={{ children: '항목 추가하기' }}
        />
      </DocIntroSection>
      <DocTabs
        variant="header"
        items={[
          {
            value: 'development',
            label: '개발',
            content: (
              <DocDevelopmentTab
                properties={EMPTY_STATE_PROPERTIES}
                variantExamples={EMPTY_STATE_VARIANTS_EXAMPLES}
                getDisplayName={emptyStateDisplayName}
              />
            ),
          },
        ]}
      />
    </div>
  );
}
