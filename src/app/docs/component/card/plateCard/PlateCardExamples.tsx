'use client';

import { Card } from '@jects/jds';

export function CardLayouts() {
  return (
    <div className="flex w-full flex-col gap-20">
      <div className="flex items-end gap-10">
        <Card.Preset.PlateWithTitle.Link
          href="#"
          layout="vertical"
          image={{
            alt: 'image의 alt 이름',
          }}
          caption="캡션 내용이 들어감"
          title="제목부분입니다"
          body="body에 대한 설명입니다. Preset을 사용하면 주로 사용하는 카드 구조를 그대로 사용할 수 있습니다."
        />
        <Card.Preset.PlateCompact.Link
          href="#"
          layout="vertical"
          image={{
            alt: '이미지의 alt 명',
          }}
          caption="캡션 내용이 들어갑니다."
          body="Title이나 Label 없이 간결하게 정보를 표시하는 카드입니다. 1:2 비율의 이미지를 사용합니다."
        />
      </div>
      <div className="flex flex-col gap-10">
        <Card.Preset.PlateWithTitle.Button
          onClick={() => alert('카드가 클릭되었습니다!')}
          layout="horizontal"
          image={{
            alt: 'image의 alt 이름',
          }}
          caption="캡션 내용이 들어감"
          title="제목부분입니다"
          body="horizontal layout으로 설정하면 이미지가 좌측에 표시됩니다."
        />
        <Card.Preset.PlateCompact.Link
          href="#"
          layout="horizontal"
          image={{
            alt: '이미지의 alt 명',
          }}
          caption="캡션 내용이 들어갑니다."
          body="Title이나 Label 없이 간결하게 정보를 표시하는 카드입니다. 1:2 비율의 이미지를 사용합니다."
        />
      </div>
    </div>
  );
}

export function CardDisabled() {
  return (
    <div className="flex flex-wrap gap-4">
      <Card.Preset.PlateWithTitle.Link
        isDisabled
        href="#"
        layout="horizontal"
        image={{
          alt: 'image의 alt 이름',
        }}
        caption="캡션 내용이 들어감"
        title="제목부분입니다"
        body="body에 대한 설명입니다. Preset을 사용하면 주로 사용하는 카드 구조를 그대로 사용할 수 있습니다."
      />
    </div>
  );
}
