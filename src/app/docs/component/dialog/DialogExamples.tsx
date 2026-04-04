'use client';

import { useState } from 'react';

import { BlockButton, Dialog, type CheckedState } from '@jects/jds';

export function DialogDefault() {
  const [open, setOpen] = useState(false);

  return (
    <div className="flex w-full items-center justify-center">
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
      />
    </div>
  );
}

export function DialogIsButtonStretched() {
  const [openDefault, setOpenDefault] = useState(false);
  const [openStretched, setOpenStretched] = useState(false);

  return (
    <div className="flex w-full items-center justify-center gap-3.5">
      <BlockButton.Basic variant="outlined" onClick={() => setOpenDefault(true)}>
        기본 (false)
      </BlockButton.Basic>
      <BlockButton.Basic variant="outlined" onClick={() => setOpenStretched(true)}>
        늘리기 (true)
      </BlockButton.Basic>
      <Dialog
        open={openDefault}
        onOpenChange={setOpenDefault}
        header="기본 버튼 정렬"
        body="isButtonStretched가 false인 경우 버튼이 오른쪽으로 정렬됩니다."
        primaryAction={{
          children: '확인',
          onClick: () => setOpenDefault(false),
        }}
      />
      <Dialog
        open={openStretched}
        onOpenChange={setOpenStretched}
        header="늘린 버튼 정렬"
        body="isButtonStretched가 true인 경우 버튼이 전체 너비로 늘어납니다."
        isButtonStretched
        primaryAction={{
          children: '확인',
          onClick: () => setOpenStretched(false),
        }}
      />
    </div>
  );
}

export function DialogWithSecondaryButton() {
  const [open, setOpen] = useState(false);

  return (
    <div className="flex w-full items-center justify-center">
      <BlockButton.Basic variant="outlined" onClick={() => setOpen(true)}>
        다이얼로그 열기
      </BlockButton.Basic>
      <Dialog
        open={open}
        onOpenChange={setOpen}
        header="두 번째 버튼 포함"
        body="secondaryAction을 통해 두 번째 위계의 버튼을 추가할 수 있습니다."
        primaryAction={{
          children: '확인',
          onClick: () => setOpen(false),
        }}
        secondaryAction={{
          children: '취소',
          onClick: () => setOpen(false),
        }}
      />
    </div>
  );
}

export function DialogWithTertiaryButton() {
  const [open, setOpen] = useState(false);

  return (
    <div className="flex w-full items-center justify-center">
      <BlockButton.Basic variant="outlined" onClick={() => setOpen(true)}>
        다이얼로그 열기
      </BlockButton.Basic>
      <Dialog
        open={open}
        onOpenChange={setOpen}
        header="세 번째 버튼 포함"
        body="tertiaryAction은 secondaryAction이 존재할 때만 사용할 수 있습니다."
        primaryAction={{
          children: '확인',
          onClick: () => setOpen(false),
        }}
        secondaryAction={{
          children: '취소',
          onClick: () => setOpen(false),
        }}
        tertiaryAction={{
          children: '더 알아보기',
          onClick: () => setOpen(false),
        }}
      />
    </div>
  );
}

export function DialogWithCheckbox() {
  const [open, setOpen] = useState(false);
  const [checked, setChecked] = useState<CheckedState>(false);

  return (
    <div className="flex w-full items-center justify-center">
      <BlockButton.Basic variant="outlined" onClick={() => setOpen(true)}>
        다이얼로그 열기
      </BlockButton.Basic>
      <Dialog
        open={open}
        onOpenChange={setOpen}
        header="체크박스 포함"
        body="checkboxAction을 통해 다이얼로그 내에 체크박스를 포함할 수 있습니다."
        primaryAction={{
          children: '확인',
          onClick: () => setOpen(false),
        }}
        secondaryAction={{
          children: '취소',
          onClick: () => setOpen(false),
        }}
        checkboxAction={{
          label: '다시 보지 않기',
          checked,
          onCheckedChange: setChecked,
        }}
      />
    </div>
  );
}
