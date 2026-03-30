'use client';

import { DocVariant, PropertiesTable } from '@/components';
import reactElementToJSXString from 'react-element-to-jsx-string';

import { BLOCK_BUTTON_PROPERTIES, BLOCK_BUTTON_VARIANTS_EXAMPLES } from './BlockButton.constants';

export function BlockButtonTab() {
  return (
    <div className="flex flex-col gap-48 pt-14">
      <PropertiesTable rows={BLOCK_BUTTON_PROPERTIES} />
      <div className="flex flex-col gap-32">
        {BLOCK_BUTTON_VARIANTS_EXAMPLES.map(({ id, title, description, ExampleComponent }) => (
          <DocVariant key={id}>
            <DocVariant.Title title={title} description={description} />
            <DocVariant.Content code={reactElementToJSXString(ExampleComponent())}>
              <ExampleComponent />
            </DocVariant.Content>
          </DocVariant>
        ))}
      </div>
    </div>
  );
}
