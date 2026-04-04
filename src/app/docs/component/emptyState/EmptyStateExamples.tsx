'use client';

import { EmptyState } from '@jects/jds';

export function EmptyStateDefault() {
  return (
    <div className="flex w-full items-center justify-center">
      <EmptyState header="데이터가 없습니다" body="등록된 항목이 없어요. 새 항목을 추가해 보세요." />
    </div>
  );
}

export function EmptyStateVariants() {
  return (
    <div className="flex w-full flex-col gap-8">
      <div className="flex flex-col gap-2">
        <span className="text-sm text-gray-500">empty</span>
        <EmptyState
          variant="empty"
          header="데이터가 없습니다"
          body="등록된 항목이 없어요. 새 항목을 추가해 보세요."
        />
      </div>
      <div className="flex flex-col gap-2">
        <span className="text-sm text-gray-500">outlined</span>
        <EmptyState
          variant="outlined"
          header="데이터가 없습니다"
          body="등록된 항목이 없어요. 새 항목을 추가해 보세요."
        />
      </div>
      <div className="flex flex-col gap-2">
        <span className="text-sm text-gray-500">alpha</span>
        <EmptyState
          variant="alpha"
          header="데이터가 없습니다"
          body="등록된 항목이 없어요. 새 항목을 추가해 보세요."
        />
      </div>
    </div>
  );
}

export function EmptyStateLayouts() {
  return (
    <div className="flex w-full flex-col gap-8">
      <div className="flex flex-col gap-2">
        <span className="text-sm text-gray-500">vertical (기본)</span>
        <EmptyState
          layout="vertical"
          variant="outlined"
          icon="cloud-line"
          header="받은 메시지가 없습니다"
          body="새로운 메시지가 도착하면 여기에 표시됩니다."
        />
      </div>
      <div className="flex flex-col gap-2">
        <span className="text-sm text-gray-500">horizontal</span>
        <EmptyState
          layout="horizontal"
          variant="outlined"
          icon="cloud-line"
          header="받은 메시지가 없습니다"
          body="새로운 메시지가 도착하면 여기에 표시됩니다."
        />
      </div>
    </div>
  );
}

export function EmptyStateWithIcon() {
  return (
    <div className="flex w-full flex-col gap-8">
      <div className="flex flex-col gap-2">
        <span className="text-sm text-gray-500">검색 결과 없음</span>
        <EmptyState
          variant="outlined"
          icon="search-line"
          header="검색 결과가 없습니다"
          body="다른 검색어로 다시 시도해 보세요."
        />
      </div>
      <div className="flex flex-col gap-2">
        <span className="text-sm text-gray-500">파일 없음</span>
        <EmptyState
          variant="outlined"
          icon="file-unknow-line"
          header="파일이 없습니다"
          body="업로드된 파일이 없어요. 파일을 추가해 보세요."
        />
      </div>
    </div>
  );
}

export function EmptyStatePrimaryAction() {
  return (
    <div className="flex w-full items-center justify-center">
      <EmptyState
        variant="outlined"
        icon="folder-4-line"
        header="폴더가 비어 있습니다"
        body="이 폴더에는 아직 파일이 없어요."
        primaryAction={{ children: '파일 추가하기' }}
      />
    </div>
  );
}

export function EmptyStateSecondaryAction() {
  return (
    <div className="flex w-full items-center justify-center">
      <EmptyState
        variant="outlined"
        icon="image-line"
        header="이미지가 없습니다"
        body="업로드된 이미지가 없어요. 새 이미지를 추가해 보세요."
        primaryAction={{ children: '이미지 업로드' }}
        secondaryAction={{ children: '나중에 하기' }}
      />
    </div>
  );
}
