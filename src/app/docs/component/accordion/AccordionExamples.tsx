'use client';

import { Accordion } from '@jects/jds';

const EXAMPLE_TITLE = '타이틀';
const EXAMPLE_TEXT = '아코디언 콘텐츠 내용은 타이틀에 대한 상세 내용 및 설명을 포함합니다.';

export function AccordionSingleMode() {
  return (
    <div className="flex w-125 items-center justify-center gap-3.5">
      <Accordion.Root size="lg" type="single" className="w-[90%]">
        <Accordion.Item value="item-1">
          <Accordion.Trigger withPrefixIcon="vector">{EXAMPLE_TITLE}</Accordion.Trigger>
          <Accordion.Content>{EXAMPLE_TEXT}</Accordion.Content>
        </Accordion.Item>
        <Accordion.Item value="item-2">
          <Accordion.Trigger withPrefixIcon="vector">{EXAMPLE_TITLE}</Accordion.Trigger>
          <Accordion.Content>{EXAMPLE_TEXT}</Accordion.Content>
        </Accordion.Item>
        <Accordion.Item value="item-3">
          <Accordion.Trigger withPrefixIcon="vector">{EXAMPLE_TITLE}</Accordion.Trigger>
          <Accordion.Content>{EXAMPLE_TEXT}</Accordion.Content>
        </Accordion.Item>
      </Accordion.Root>
    </div>
  );
}

export function AccordionMultipleMode() {
  return (
    <div className="flex w-125 items-center justify-center gap-3.5">
      <Accordion.Root type="multiple" className="w-[90%]">
        <Accordion.Item value="item-1">
          <Accordion.Trigger withPrefixIcon="blank">{EXAMPLE_TITLE}</Accordion.Trigger>
          <Accordion.Content>{EXAMPLE_TEXT}</Accordion.Content>
        </Accordion.Item>
        <Accordion.Item value="item-2">
          <Accordion.Trigger withPrefixIcon="blank">{EXAMPLE_TITLE}</Accordion.Trigger>
          <Accordion.Content>{EXAMPLE_TEXT}</Accordion.Content>
        </Accordion.Item>
        <Accordion.Item value="item-3">
          <Accordion.Trigger withPrefixIcon="blank">{EXAMPLE_TITLE}</Accordion.Trigger>
          <Accordion.Content>{EXAMPLE_TEXT}</Accordion.Content>
        </Accordion.Item>
      </Accordion.Root>
    </div>
  );
}

export function AccordionWithDefaultValue() {
  return (
    <div className="flex w-125 items-center justify-center gap-3.5">
      <Accordion.Root collapsible defaultValue="item-1" type="single">
        <Accordion.Item value="item-1">
          <Accordion.Trigger withPrefixIcon="blank">{EXAMPLE_TITLE}</Accordion.Trigger>
          <Accordion.Content>{EXAMPLE_TEXT}</Accordion.Content>
        </Accordion.Item>
        <Accordion.Item value="item-2">
          <Accordion.Trigger withPrefixIcon="blank">{EXAMPLE_TITLE}</Accordion.Trigger>
          <Accordion.Content>{EXAMPLE_TEXT}</Accordion.Content>
        </Accordion.Item>
        <Accordion.Item value="item-3">
          <Accordion.Trigger withPrefixIcon="blank">{EXAMPLE_TITLE}</Accordion.Trigger>
          <Accordion.Content>{EXAMPLE_TEXT}</Accordion.Content>
        </Accordion.Item>
      </Accordion.Root>
    </div>
  );
}

export function AccordionDisabled() {
  return (
    <div className="flex w-125 items-center justify-center gap-3.5">
      <Accordion.Root collapsible defaultValue="item-1" type="single">
        <Accordion.Item disabled value="item-1">
          <Accordion.Trigger withPrefixIcon="blank">{EXAMPLE_TITLE}</Accordion.Trigger>
          <Accordion.Content>{EXAMPLE_TEXT}</Accordion.Content>
        </Accordion.Item>
        <Accordion.Item disabled value="item-2">
          <Accordion.Trigger withPrefixIcon="blank">{EXAMPLE_TITLE}</Accordion.Trigger>
          <Accordion.Content>{EXAMPLE_TEXT}</Accordion.Content>
        </Accordion.Item>
        <Accordion.Item disabled value="item-3">
          <Accordion.Trigger withPrefixIcon="blank">{EXAMPLE_TITLE}</Accordion.Trigger>
          <Accordion.Content>{EXAMPLE_TEXT}</Accordion.Content>
        </Accordion.Item>
      </Accordion.Root>
    </div>
  );
}
