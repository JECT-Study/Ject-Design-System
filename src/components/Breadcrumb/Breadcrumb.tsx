'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Icon, Label } from '@jects/jds';

import { getNavTranslation } from '@/utils/i18nNav';

interface BreadcrubProps {
  korName: string;
}

export function Breadcrumb({ korName }: BreadcrubProps) {
  const pathname = usePathname();
  const segments = pathname.split('/').filter((segment) => segment && segment !== 'docs');

  return (
    <nav
      aria-label="브레드크럼"
      className="text-semantic-object-alternative flex items-center gap-1.5 text-sm"
    >
      {segments.map((segment, index) => {
        const isLast = index === segments.length - 1;
        const href = '/docs/' + segments.slice(0, index + 1).join('/');
        const label = isLast ? korName : getNavTranslation(segment, 'ko');

        return (
          <span key={segment} className="flex items-center gap-1.5">
            {isLast ? (
              <Label size="xs" weight="bold" className="text-semantic-object-boldest!">
                {label}
              </Label>
            ) : (
              <>
                <Link href={href} className="rounded-2 transition-colors hover:bg-gray-50">
                  <Label size="xs" weight="bold" className="text-semantic-object-alternative!">
                    {label}
                  </Label>
                </Link>
                <Icon name="arrow-right-s-line" size="xs" />
              </>
            )}
          </span>
        );
      })}
    </nav>
  );
}
