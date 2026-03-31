'use client';

import { Breadcrumb, MetaTag, Preview } from '@/components';
import { Title } from '@jects/jds';

import {
  BannerSectionProps,
  DocIntroSectionProps,
  MetaTagSectionProps,
  TitleSectionProps,
} from './DocIntroSection.type';

export function TitleSection(props: TitleSectionProps) {
  const { korName, engName, description } = props;

  return (
    <section className="flex flex-col gap-16">
      <div className="flex gap-8">
        <Title size="lg" textAlign="left" as="h1">
          {korName}
        </Title>
        <Title size="xs" textAlign="left" className="text-semantic-object-alternative!">
          {engName}
        </Title>
      </div>
      <p className="semantic-textStyle-body-lg-bold text-semantic-object-normal">{description}</p>
    </section>
  );
}

TitleSection.displayName = 'TitleSection';

export function MetaTagSection(props: MetaTagSectionProps) {
  const { version, date } = props;

  return (
    <div className="flex items-center gap-x-24 gap-y-8">
      <MetaTag tag="버전" value={version} />
      <MetaTag tag="마지막 업데이트" value={date} />
    </div>
  );
}

MetaTagSection.displayName = 'MetaTagSection';

export function DocBannerSection(props: BannerSectionProps) {
  const { korName, engName, description, version, date } = props;

  return (
    <div className="flex flex-col gap-24">
      <Breadcrumb korName={korName} />
      <div className="flex flex-col gap-32">
        <TitleSection korName={korName} engName={engName} description={description} />
        <MetaTagSection version={version} date={date} />
      </div>
    </div>
  );
}

DocBannerSection.displayName = 'DocBannerSection';

export function DocIntroSection({
  korName,
  engName,
  description,
  version,
  date,
  children,
}: DocIntroSectionProps) {
  return (
    <div className="flex flex-col gap-24">
      <DocBannerSection
        korName={korName}
        engName={engName}
        description={description}
        version={version}
        date={date}
      />
      {children && <Preview>{children}</Preview>}
    </div>
  );
}

DocIntroSection.displayName = 'DocIntroSection';
