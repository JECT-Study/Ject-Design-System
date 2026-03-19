'use client';

import type { ComponentPropsWithoutRef } from 'react';
import { Title } from '@jects/jds';
import clsx from 'clsx';

type HeadingTag = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
type HeadingSize = 'lg' | 'md' | 'sm' | 'xs';
type HeadingProps = ComponentPropsWithoutRef<'h2'>;

interface MdxHeadingProps extends HeadingProps {
  as: HeadingTag;
  size: HeadingSize;
}

export function MdxTitle({ as, children, className, size, ...props }: MdxHeadingProps) {
  return (
    <Title
      as={as}
      size={size}
      textAlign="left"
      className={clsx('scroll-mt-[120px]', className)}
      {...props}
    >
      {children}
    </Title>
  );
}

export function MdxH1(props: HeadingProps) {
  return <MdxTitle as="h1" size="lg" {...props} />;
}

export function MdxH2(props: HeadingProps) {
  return <MdxTitle as="h2" size="md" {...props} />;
}

export function MdxH3(props: HeadingProps) {
  return <MdxTitle as="h3" size="sm" {...props} />;
}

export function MdxH4(props: HeadingProps) {
  return <MdxTitle as="h4" size="xs" {...props} />;
}

export function MdxH5(props: HeadingProps) {
  return <MdxTitle as="h5" size="xs" {...props} />;
}

export function MdxH6(props: HeadingProps) {
  return <MdxTitle as="h6" size="xs" {...props} />;
}
