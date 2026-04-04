'use client';

import { FileItem } from '@jects/jds';

export function FileItemDefault() {
  return (
    <div className="flex w-full items-center justify-center">
      <FileItem fileName="첨부파일.pdf" fileSize="1.2 MB" />
    </div>
  );
}

export function FileItemRemoveable() {
  return (
    <div className="flex w-full items-center justify-center gap-3.5">
      <FileItem fileName="삭제불가.pdf" fileSize="800 KB" />
      <FileItem
        fileName="삭제가능.pdf"
        fileSize="800 KB"
        removeable
        onRemove={(e) => {
          e.stopPropagation();
        }}
      />
    </div>
  );
}

export function FileItemReadonly() {
  return (
    <div className="flex w-full items-center justify-center">
      <FileItem fileName="읽기전용파일.pdf" fileSize="2.4 MB" readonly />
    </div>
  );
}

export function FileItemDisabled() {
  return (
    <div className="flex w-full items-center justify-center gap-3.5">
      <FileItem fileName="비활성화.pdf" fileSize="600 KB" disabled />
      <FileItem
        fileName="비활성화(삭제가능).pdf"
        fileSize="600 KB"
        disabled
        removeable
        onRemove={(e) => {
          e.stopPropagation();
        }}
      />
    </div>
  );
}

export function FileItemHasError() {
  return (
    <div className="flex w-full flex-col items-center justify-center gap-3.5">
      <FileItem
        fileName="오류파일.pdf"
        fileSize="3.1 MB"
        hasError
        errorMessage="파일 업로드에 실패했습니다."
        removeable
        onRemove={(e) => {
          e.stopPropagation();
        }}
      />
      <FileItem
        fileName="오류파일_긴메시지.pdf"
        fileSize="3.1 MB"
        hasError
        errorMessage="파일 용량이 초과되었습니다. 10MB 이하의 파일을 업로드해 주세요. 허용 형식: PDF, JPG, PNG, DOCX"
        removeable
        onRemove={(e) => {
          e.stopPropagation();
        }}
      />
    </div>
  );
}
