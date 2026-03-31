'use client';

import { ReactNode } from 'react';
import { DocVariant, PropertiesTable } from '@/components';
import { BlockButton, Title } from '@jects/jds';
import reactElementToJSXString from 'react-element-to-jsx-string';

import { BLOCK_BUTTON_PROPERTIES, BLOCK_BUTTON_VARIANTS_EXAMPLES } from './BlockButton.constants';

interface ElementTypes {
  displayName?: string;
  name?: string;
}

const blockButtonDisplayName = (element: ReactNode): string => {
  if (element && typeof element === 'object' && 'type' in element) {
    if (element.type === BlockButton.Basic) return 'BlockButton.Basic';
    if (element.type === BlockButton.Feedback) return 'BlockButton.Feedback';

    if (typeof element.type === 'string') return element.type;

    const fn = element.type as ElementTypes;

    return fn.displayName ?? fn.name ?? '';
  }

  return '';
};

export function BlockButtonTab() {
  return (
    <div className="flex flex-col gap-48 pt-14">
      <div className="flex flex-col gap-32">
        <Title as="h2" size="md" textAlign="left" id="properties">
          프로퍼티
        </Title>
        <PropertiesTable rows={BLOCK_BUTTON_PROPERTIES} />
      </div>
      <div className="flex flex-col gap-32">
        <Title as="h2" size="md" textAlign="left" id="variants">
          변형 예시
        </Title>
        {BLOCK_BUTTON_VARIANTS_EXAMPLES.map(({ id, title, description, ExampleComponent }) => (
          <DocVariant key={id}>
            <DocVariant.Title title={title} description={description} />
            <DocVariant.Content
              code={reactElementToJSXString(ExampleComponent(), {
                displayName: blockButtonDisplayName,
              })}
            >
              <ExampleComponent />
            </DocVariant.Content>
          </DocVariant>
        ))}
      </div>
    </div>
  );
}
