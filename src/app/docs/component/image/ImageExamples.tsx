'use client';

import { Image } from '@jects/jds';

export function ImageDefault() {
  return (
    <div className="flex w-full items-center justify-center">
      <Image alt="기본 이미지" ratio="1:1" />
    </div>
  );
}

export function ImageRatios() {
  return (
    <div className="flex w-full flex-wrap items-end justify-center gap-6">
      <div className="flex flex-col items-center gap-2">
        <Image alt="1:1 비율" ratio="1:1" />
        <span className="text-body-sm text-semantic-label-secondary">1:1</span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <Image alt="4:5 비율" ratio="4:5" />
        <span className="text-body-sm text-semantic-label-secondary">4:5</span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <Image alt="3:4 비율" ratio="3:4" />
        <span className="text-body-sm text-semantic-label-secondary">3:4</span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <Image alt="2:3 비율" ratio="2:3" />
        <span className="text-body-sm text-semantic-label-secondary">2:3</span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <Image alt="9:16 비율" ratio="9:16" />
        <span className="text-body-sm text-semantic-label-secondary">9:16</span>
      </div>
    </div>
  );
}

export function ImageOrientations() {
  return (
    <div className="flex w-full items-end justify-center gap-6">
      <div className="flex flex-col items-center gap-2">
        <Image alt="세로 방향" ratio="3:4" orientation="portrait" />

        <span className="text-body-sm text-semantic-label-secondary">portrait</span>
      </div>
    </div>
  );
}

export function ImageBadge() {
  return (
    <div className="flex w-full items-center justify-center gap-6">
      <div className="flex flex-col items-center gap-2">
        <Image alt="배지 없는 이미지" ratio="1:1" />

        <span className="text-body-sm text-semantic-label-secondary">badgeVisible: false</span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <Image alt="배지 있는 이미지" ratio="1:1" badgeVisible badgeLabel="NEW" />

        <span className="text-body-sm text-semantic-label-secondary">badgeVisible: true</span>
      </div>
    </div>
  );
}

export function ImageFallback() {
  return (
    <div className="flex w-full items-center justify-center gap-6">
      <div className="flex flex-col items-center gap-2">
        <Image alt="src 없음" ratio="1:1" />

        <span className="text-body-sm text-semantic-label-secondary">src 없음</span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <Image alt="fallbackSrc 사용" ratio="1:1" src="broken-image.png" fallbackSrc="" />

        <span className="text-body-sm text-semantic-label-secondary">fallbackSrc 사용</span>
      </div>
    </div>
  );
}

export function ImageReadonly() {
  return (
    <div className="flex w-full items-center justify-center gap-6">
      <div className="flex flex-col items-center gap-2">
        <Image alt="인터랙티브 이미지" ratio="1:1" />

        <span className="text-body-sm text-semantic-label-secondary">isReadonly: false</span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <Image alt="읽기 전용 이미지" ratio="1:1" isReadonly />

        <span className="text-body-sm text-semantic-label-secondary">isReadonly: true</span>
      </div>
    </div>
  );
}

export function ImageLoading() {
  return (
    <div className="flex w-full items-center justify-center gap-6">
      <div className="flex flex-col items-center gap-2">
        <Image alt="지연 로딩" ratio="1:1" loading="lazy" />

        <span className="text-body-sm text-semantic-label-secondary">loading: lazy</span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <Image alt="즉시 로딩" ratio="1:1" loading="eager" />

        <span className="text-body-sm text-semantic-label-secondary">loading: eager</span>
      </div>
    </div>
  );
}
