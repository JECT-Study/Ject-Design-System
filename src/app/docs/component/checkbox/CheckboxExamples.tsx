'use client';

import { useState } from 'react';

import { Checkbox, type CheckedState } from '@jects/jds';

export function CheckboxSizes() {
  const [checkedStates, setCheckedStates] = useState<Record<string, CheckedState>>({
    xs: true,
    sm: true,
    md: true,
    lg: true,
  });

  return (
    <div className="flex w-full items-center justify-center gap-6">
      {(['xs', 'sm', 'md', 'lg'] as const).map((size) => (
        <Checkbox.Basic
          key={size}
          size={size}
          checked={checkedStates[size]}
          onCheckedChange={(checked) => setCheckedStates((prev) => ({ ...prev, [size]: checked }))}
        />
      ))}
    </div>
  );
}

export function CheckboxStates() {
  return (
    <div className="flex w-full items-center justify-center gap-6">
      <Checkbox.Basic checked={false} onCheckedChange={() => {}} />
      <Checkbox.Basic checked={true} onCheckedChange={() => {}} />
      <Checkbox.Basic checked="indeterminate" onCheckedChange={() => {}} />
    </div>
  );
}

export function CheckboxDisabled() {
  return (
    <div className="flex w-full items-center justify-center gap-6">
      <Checkbox.Basic checked={false} disabled onCheckedChange={() => {}} />
      <Checkbox.Basic checked={true} disabled onCheckedChange={() => {}} />
      <Checkbox.Basic checked="indeterminate" disabled onCheckedChange={() => {}} />
    </div>
  );
}

export function CheckboxInvalid() {
  return (
    <div className="flex w-full items-center justify-center gap-6">
      <Checkbox.Basic checked={false} isInvalid onCheckedChange={() => {}} />
      <Checkbox.Basic checked={true} isInvalid onCheckedChange={() => {}} />
      <Checkbox.Basic checked="indeterminate" isInvalid onCheckedChange={() => {}} />
    </div>
  );
}

export function CheckboxContentVariants() {
  const [checkedStates, setCheckedStates] = useState<Record<string, CheckedState>>({
    empty: false,
    outlined: false,
  });

  return (
    <div className="flex w-full flex-col items-center gap-3.5">
      <Checkbox.Content
        label="빈 스타일 (empty)"
        variant="empty"
        checked={checkedStates.empty}
        onCheckedChange={(checked) => setCheckedStates((prev) => ({ ...prev, empty: checked }))}
      />
      <Checkbox.Content
        label="테두리 스타일 (outlined)"
        variant="outlined"
        checked={checkedStates.outlined}
        onCheckedChange={(checked) => setCheckedStates((prev) => ({ ...prev, outlined: checked }))}
      />
    </div>
  );
}

export function CheckboxContentAlign() {
  const [checkedStates, setCheckedStates] = useState<Record<string, CheckedState>>({
    left: false,
    right: false,
  });

  return (
    <div className="flex w-full flex-col items-center gap-3.5">
      <Checkbox.Content
        label="왼쪽 정렬 (left)"
        align="left"
        checked={checkedStates.left}
        onCheckedChange={(checked) => setCheckedStates((prev) => ({ ...prev, left: checked }))}
      />
      <Checkbox.Content
        label="오른쪽 정렬 (right)"
        align="right"
        checked={checkedStates.right}
        onCheckedChange={(checked) => setCheckedStates((prev) => ({ ...prev, right: checked }))}
      />
    </div>
  );
}

export function CheckboxContentSubLabel() {
  const [checked, setChecked] = useState<CheckedState>(false);

  return (
    <div className="flex w-full items-center justify-center">
      <Checkbox.Content
        label="서비스 이용약관 동의"
        subLabel="필수 항목입니다. 동의하지 않으면 서비스를 이용할 수 없습니다."
        variant="outlined"
        checked={checked}
        onCheckedChange={setChecked}
      />
    </div>
  );
}

export function CheckboxContentInvalid() {
  return (
    <div className="flex w-full flex-col items-center gap-3.5">
      <Checkbox.Content
        label="유효하지 않은 항목 (empty)"
        variant="empty"
        isInvalid
        checked={false}
        onCheckedChange={() => {}}
      />
      <Checkbox.Content
        label="유효하지 않은 항목 (outlined)"
        variant="outlined"
        isInvalid
        checked={false}
        onCheckedChange={() => {}}
      />
    </div>
  );
}
