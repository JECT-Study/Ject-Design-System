'use client';

import { Divider } from '@jects/jds';

import { DIVIDER_PROPS } from '@/constants/components';

export function DividerDefault() {
  return (
    <div className="flex w-full flex-col gap-4">
      <Divider />
    </div>
  );
}

export function DividerVariant() {
  return (
    <div className="flex w-full flex-col gap-8">
      {DIVIDER_PROPS.VARIANTS.map((variant) => (
        <div key={variant} className="flex flex-col gap-2">
          <span className="text-sm text-gray-500">{variant}</span>
          <Divider variant={variant} />
        </div>
      ))}
    </div>
  );
}

export function DividerThickness() {
  return (
    <div className="flex w-full flex-col gap-8">
      {DIVIDER_PROPS.THICKNESSES.map((thickness) => (
        <div key={thickness} className="flex flex-col gap-2">
          <span className="text-sm text-gray-500">{thickness}</span>
          <Divider thickness={thickness} />
        </div>
      ))}
    </div>
  );
}

export function DividerOrientation() {
  return (
    <div className="flex w-full items-center justify-center gap-8">
      <div className="flex flex-col gap-2 items-center">
        <span className="text-sm text-gray-500">horizontal</span>
        <div className="w-48">
          <Divider orientation="horizontal" />
        </div>
      </div>
      <div className="flex flex-col gap-2 items-center">
        <span className="text-sm text-gray-500">vertical</span>
        <div className="h-12">
          <Divider orientation="vertical" />
        </div>
      </div>
    </div>
  );
}

export function DividerDecorative() {
  return (
    <div className="flex w-full flex-col gap-8">
      <div className="flex flex-col gap-2">
        <span className="text-sm text-gray-500">decorative: true (기본값 — 스크린 리더 무시)</span>
        <Divider decorative />
      </div>
      <div className="flex flex-col gap-2">
        <span className="text-sm text-gray-500">decorative: false (스크린 리더가 구분선으로 인식)</span>
        <Divider decorative={false} />
      </div>
    </div>
  );
}
