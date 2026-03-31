'use client';

import { CodeViewer, DocTabs } from '@/components';
import { Title } from '@jects/jds';

import { VariantContentSectionProps, VariantTitleSectionProps } from './DocVariantSection.type';

function VariantTitleSection(props: VariantTitleSectionProps) {
  const { title, description } = props;

  return (
    <section>
      <Title size="sm" textAlign="left" as="h3">
        {title}
      </Title>
      {description && (
        <p className="semantic-textStyle-body-md-normal text-semantic-object-bold">{description}</p>
      )}
    </section>
  );
}

function VariantContentSection(props: VariantContentSectionProps) {
  const { children, code } = props;

  return (
    <DocTabs
      variant="content"
      items={[
        {
          label: '미리보기',
          value: 'preview',
          content: (
            <div className="pt-10">
              <div className="py-3xl px-md rounded-6 bg-semantic-surface-standard border-semantic-stroke-subtle flex w-full items-center justify-center gap-x-16 gap-y-12 border border-solid">
                {children}
              </div>
            </div>
          ),
        },
        {
          label: '코드',
          value: 'code',
          content: (
            <div className="pt-10">
              <CodeViewer code={code} />
            </div>
          ),
        },
      ]}
    />
  );
}

export function DocVariant({ children }: { children: React.ReactNode }) {
  return <section className="flex flex-col gap-16">{children}</section>;
}

DocVariant.Title = VariantTitleSection;
DocVariant.Content = VariantContentSection;
