'use client';

import { useState } from 'react';

import { DocDevelopmentTab, DocIntroSection, DocTabs } from '@/components';
import { DATE, VERSION } from '@/constants/components';
import { BlockButton, Dialog } from '@jects/jds';

import {
  DIALOG_PROPERTIES,
  DIALOG_VARIANTS_EXAMPLES,
  dialogDisplayName,
} from './Dialog.constants';

export default function DialogPage() {
  const [open, setOpen] = useState(false);

  return (
    <div className="flex w-full flex-col gap-80">
      <DocIntroSection
        korName="다이얼로그"
        engName="Dialog"
        description="다이얼로그는 사용자에게 중요한 정보를 전달하거나 결정을 요청할 때 사용하는 모달 컴포넌트입니다. 오버레이 위에 나타나 사용자의 집중을 유도합니다."
        version={VERSION}
        date={DATE}
      >
        <BlockButton.Basic variant="outlined" onClick={() => setOpen(true)}>
          다이얼로그 열기
        </BlockButton.Basic>
        <Dialog
          open={open}
          onOpenChange={setOpen}
          header="다이얼로그 제목"
          body="다이얼로그 본문 내용입니다. 과도하게 많은 내용을 안내하는 것을 지양합니다."
          primaryAction={{
            children: '확인',
            onClick: () => setOpen(false),
          }}
          secondaryAction={{
            children: '취소',
            onClick: () => setOpen(false),
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
                properties={DIALOG_PROPERTIES}
                variantExamples={DIALOG_VARIANTS_EXAMPLES}
                getDisplayName={dialogDisplayName}
              />
            ),
          },
        ]}
      />
    </div>
  );
}
