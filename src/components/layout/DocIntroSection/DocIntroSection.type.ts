import { ReactNode } from 'react';

export interface DocIntroSectionBaseProps {
  korName: string;
  engName: string;
  description: string;
  children?: ReactNode;
}

export interface MetaTagSectionProps {
  version: string;
  date: string;
}

export type TitleSectionProps = Omit<DocIntroSectionBaseProps, 'hasPreview' | 'children'>;
export type BannerSectionProps = TitleSectionProps & MetaTagSectionProps;
export type DocIntroSectionProps = DocIntroSectionBaseProps & BannerSectionProps;
