import { ReactNode } from 'react';

export interface VariantTitleSectionProps {
  title: string;
  description?: string;
}

export interface VariantContentSectionProps {
  code: string;
  children: ReactNode;
}

export type VariantSectionProps = VariantTitleSectionProps & VariantContentSectionProps;
