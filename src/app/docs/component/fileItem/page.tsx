'use client';

import { DocDevelopmentTab, DocIntroSection, DocTabs } from '@/components';
import { DATE, VERSION } from '@/constants/components';
import { FileItem } from '@jects/jds';

import {
  FILE_ITEM_PROPERTIES,
  FILE_ITEM_VARIANTS_EXAMPLES,
  fileItemDisplayName,
} from './FileItem.constants';

export default function FileItemPage() {
  return (
    <div className="flex w-full flex-col gap-80">
      <DocIntroSection
        korName="파일 아이템"
        engName="FileItem"
        description="파일 아이템은 업로드된 파일을 목록에서 표시하는 컴포넌트입니다. 파일 이름과 크기를 보여주며, 읽기 전용·비활성화·에러 상태와 삭제 기능을 지원합니다."
        version={VERSION}
        date={DATE}
      >
        <FileItem
          fileName="첨부파일.pdf"
          fileSize="1.2 MB"
          removeable
          onRemove={(e) => {
            e.stopPropagation();
          }}
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
                properties={FILE_ITEM_PROPERTIES}
                variantExamples={FILE_ITEM_VARIANTS_EXAMPLES}
                getDisplayName={fileItemDisplayName}
              />
            ),
          },
        ]}
      />
    </div>
  );
}
