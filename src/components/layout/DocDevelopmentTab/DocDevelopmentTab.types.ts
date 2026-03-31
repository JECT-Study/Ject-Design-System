import { ReactElement, ReactNode } from 'react';

import { PropertyRow } from '@/components/PropertiesTable/PropertiesTable.type';

export interface Children {
  children: ReactNode;
}

export interface VariantExample {
  id: string;
  title: string;
  description?: string;
  ExampleComponent: () => ReactElement<Children>;
}

export interface DocDevelopmentTabProps {
  properties: PropertyRow[];
  variantExamples: VariantExample[];
  getDisplayName: (element: ReactNode) => string;
}
