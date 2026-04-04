'use client';

import { Card } from '@jects/jds';

const EXAMPLE_CAPTION = '캡션';
const EXAMPLE_TITLE = '카드 타이틀';
const EXAMPLE_LABEL = '레이블';
const EXAMPLE_BODY = '카드 본문 내용은 카드에 대한 상세 내용 및 설명을 포함합니다.';
const EXAMPLE_AUTHOR = '작성자';
const EXAMPLE_DATE = '2026.01.27';

export function CardVariants() {
  return (
    <div className="flex flex-wrap gap-4">
      <Card.Root variant="plate" cardStyle="outlined">
        <Card.Content>
          <Card.Caption>{EXAMPLE_CAPTION}</Card.Caption>
          <Card.Title>{EXAMPLE_TITLE}</Card.Title>
          <Card.Body>{EXAMPLE_BODY}</Card.Body>
        </Card.Content>
      </Card.Root>
      <Card.Root variant="post" cardStyle="outlined">
        <Card.Content>
          <Card.Title>{EXAMPLE_TITLE}</Card.Title>
          <Card.Body>{EXAMPLE_BODY}</Card.Body>
          <Card.Meta>
            <Card.MetaItem>{EXAMPLE_AUTHOR}</Card.MetaItem>
            <Card.MetaItem>{EXAMPLE_DATE}</Card.MetaItem>
          </Card.Meta>
        </Card.Content>
      </Card.Root>
    </div>
  );
}

export function CardLayouts() {
  return (
    <div className="flex w-full flex-col gap-4">
      <Card.Root variant="plate" cardStyle="outlined" layout="vertical">
        <Card.Content>
          <Card.Caption>{EXAMPLE_CAPTION}</Card.Caption>
          <Card.Title>Vertical</Card.Title>
          <Card.Body>콘텐츠가 세로 방향으로 배치됩니다.</Card.Body>
        </Card.Content>
      </Card.Root>
      <Card.Root variant="plate" cardStyle="outlined" layout="horizontal">
        <Card.Content>
          <Card.Caption>{EXAMPLE_CAPTION}</Card.Caption>
          <Card.Title>Horizontal</Card.Title>
          <Card.Body>콘텐츠가 가로 방향으로 배치됩니다.</Card.Body>
        </Card.Content>
      </Card.Root>
    </div>
  );
}

export function CardStyles() {
  return (
    <div className="flex flex-wrap gap-4">
      <Card.Root variant="plate" cardStyle="outlined">
        <Card.Content>
          <Card.Caption>{EXAMPLE_CAPTION}</Card.Caption>
          <Card.Title>Outlined</Card.Title>
          <Card.Body>외곽선이 있는 카드 스타일입니다.</Card.Body>
        </Card.Content>
      </Card.Root>
      <Card.Root variant="plate" cardStyle="empty">
        <Card.Content>
          <Card.Caption>{EXAMPLE_CAPTION}</Card.Caption>
          <Card.Title>Empty</Card.Title>
          <Card.Body>외곽선이 없는 카드 스타일입니다.</Card.Body>
        </Card.Content>
      </Card.Root>
    </div>
  );
}

export function CardWithImage() {
  return (
    <div className="flex flex-wrap gap-4">
      <Card.Root variant="plate" cardStyle="outlined">
        <Card.Image alt="카드 이미지" ratio="4:5" />
        <Card.Content>
          <Card.Caption>{EXAMPLE_CAPTION}</Card.Caption>
          <Card.Title>{EXAMPLE_TITLE}</Card.Title>
          <Card.Body>{EXAMPLE_BODY}</Card.Body>
        </Card.Content>
      </Card.Root>
      <Card.Root variant="plate" cardStyle="outlined">
        <Card.Image alt="뱃지가 있는 카드 이미지" ratio="4:5" badgeVisible badgeLabel="NEW" />
        <Card.Content>
          <Card.Caption>{EXAMPLE_CAPTION}</Card.Caption>
          <Card.Title>뱃지 이미지 카드</Card.Title>
          <Card.Body>이미지에 뱃지를 표시할 수 있습니다.</Card.Body>
        </Card.Content>
      </Card.Root>
    </div>
  );
}

export function CardWithLabel() {
  return (
    <div className="flex flex-wrap gap-4">
      <Card.Root variant="plate" cardStyle="outlined">
        <Card.Content>
          <Card.Caption>{EXAMPLE_CAPTION}</Card.Caption>
          <Card.Label>{EXAMPLE_LABEL}</Card.Label>
          <Card.Body>{EXAMPLE_BODY}</Card.Body>
        </Card.Content>
      </Card.Root>
    </div>
  );
}

export function CardDisabled() {
  return (
    <div className="flex flex-wrap gap-4">
      <Card.Root variant="plate" cardStyle="outlined" isDisabled>
        <Card.Content>
          <Card.Caption>{EXAMPLE_CAPTION}</Card.Caption>
          <Card.Title>비활성화 카드</Card.Title>
          <Card.Body>isDisabled prop으로 비활성화 상태를 표현합니다.</Card.Body>
        </Card.Content>
      </Card.Root>
    </div>
  );
}

export function CardInteractive() {
  return (
    <div className="flex flex-wrap gap-4">
      <Card.Root variant="plate" cardStyle="outlined" interactive>
        <Card.Content>
          <Card.Caption>{EXAMPLE_CAPTION}</Card.Caption>
          <Card.Title>인터랙티브 카드</Card.Title>
          <Card.Body>
            interactive prop을 적용하면 hover·focus 시 인터랙션 스타일이 표시됩니다. Card.Overlay와
            함께 사용하여 카드 전체를 링크나 버튼으로 만들 수 있습니다.
          </Card.Body>
        </Card.Content>
      </Card.Root>
    </div>
  );
}
