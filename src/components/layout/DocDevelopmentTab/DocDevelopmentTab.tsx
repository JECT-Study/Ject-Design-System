'use client';

import { ReactElement, ReactNode } from 'react';
import { Title } from '@jects/jds';
import reactElementToJSXString from 'react-element-to-jsx-string';

import { PropertiesTable } from '@/components/PropertiesTable/PropertiesTable';

import { DocVariant } from '../DocVariantSection/DocVariantSection';
import { Children, DocDevelopmentTabProps } from './DocDevelopmentTab.types';

function childrenToJSXString(
  element: ReactElement<Children>,
  getDisplayName: (element: ReactNode) => string,
): string {
  return [element.props.children]
    .flat()
    .map((child) => reactElementToJSXString(child as ReactElement, { displayName: getDisplayName }))
    .join('\n');
}

export function createDisplayName(nameMap: Map<object, string>) {
  return (element: ReactNode): string => {
    if (element && typeof element === 'object' && 'type' in element) {
      if (typeof element.type === 'object' || typeof element.type === 'function') {
        const mapped = nameMap.get(element.type);

        if (mapped) return mapped;
      }

      if (typeof element.type === 'string') return element.type;

      const fn = element.type as { displayName?: string; name?: string };

      return fn.displayName ?? fn.name ?? '';
    }

    return '';
  };
}

export function DocDevelopmentTab({
  properties,
  variantExamples,
  getDisplayName,
}: DocDevelopmentTabProps) {
  return (
    <div className="flex flex-col gap-48 pt-14">
      <div className="flex flex-col gap-32">
        <Title as="h2" size="md" textAlign="left" id="properties">
          프로퍼티
        </Title>
        <PropertiesTable rows={properties} />
      </div>
      <div className="flex flex-col gap-32">
        <Title as="h2" size="md" textAlign="left" id="variants">
          변형 예시
        </Title>
        {variantExamples.map(({ id, title, description, ExampleComponent }) => (
          <DocVariant key={id}>
            <DocVariant.Title title={title} description={description} />
            <DocVariant.Content code={childrenToJSXString(ExampleComponent(), getDisplayName)}>
              <ExampleComponent />
            </DocVariant.Content>
          </DocVariant>
        ))}
      </div>
    </div>
  );
}
