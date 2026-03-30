'use client';

import { usePathname, useRouter } from 'next/navigation';
import { BlockButton, Divider, Icon, IconButton, Label, Logo } from '@jects/jds';

import type { NavigationGroup, NavigationItem } from '@/utils/getNavigation';
import { ActionGroup } from '@/components/ActionGroup/ActionGroup';

interface FlatNavItem {
  label: string;
  href: string;
}

function flattenNavigation(groups: NavigationGroup[]): FlatNavItem[] {
  const result: FlatNavItem[] = [];

  function traverse(items: NavigationItem[]) {
    for (const item of items) {
      if (item.href) {
        result.push({ label: item.label, href: item.href });
      }
      if (item.items) {
        traverse(item.items);
      }
    }
  }

  for (const group of groups) {
    if (group.href) {
      result.push({ label: group.title, href: group.href });
    }
    if (group.items) {
      traverse(group.items);
    }
  }

  return result;
}

interface DocFooterProps {
  navigationGroups: NavigationGroup[] | undefined;
  feedbackUrl?: string;
}

export function DocFooter({ navigationGroups }: DocFooterProps) {
  const pathname = usePathname();
  const router = useRouter();
  const flatNav = flattenNavigation(navigationGroups ?? []);

  const currentIndex = flatNav.findIndex((item) => item.href === pathname);
  const prevPage = currentIndex > 0 ? flatNav[currentIndex - 1] : null;
  const nextPage = currentIndex < flatNav.length - 1 ? flatNav[currentIndex + 1] : null;

  return (
    <footer className="flex w-full flex-col gap-20">
      <div className="flex flex-col gap-16">
        <div className="flex items-center">
          <Divider variant="dashed" className="w-1/2!" />
          <div className="flex w-1/3 items-center justify-center gap-4">
            <Label size="sm" className="pl-4">
              이 문서에 대한 경험을 공유해 주세요
            </Label>
            <IconButton.Basic icon="external-link-line" size="sm" />
          </div>
          <Divider variant="dashed" className="w-1/2!" />
        </div>
        <div className="flex items-center justify-between gap-4 py-4">
          {prevPage ? (
            <BlockButton.Basic
              hierarchy="secondary"
              size="sm"
              variant="outlined"
              prefixIcon="arrow-left-line"
              onClick={() => router.push(prevPage.href)}
            >
              {prevPage.label}
            </BlockButton.Basic>
          ) : (
            <div />
          )}

          {nextPage ? (
            <BlockButton.Basic
              hierarchy="secondary"
              size="sm"
              variant="outlined"
              prefixIcon="arrow-right-line"
              onClick={() => router.push(nextPage.href)}
            >
              {nextPage.label}
            </BlockButton.Basic>
          ) : (
            <div />
          )}
        </div>
      </div>
      <div className="flex flex-col gap-8">
        <Divider />
        <div className="flex items-center gap-16">
          <Logo hierarchy="tertiary" className="w-13!" />
          <JdsLogo />

          <Label size="xs" className="text-semantic-object-assistive!">
            © 2026 JECT. All rights reserved.
          </Label>

          <div className="text-semantic-object-assistive flex gap-6">
            <Icon size="2xs" name="mail-line" />
            <Label size="xs" className="text-semantic-object-assistive!">
              jectofficial@ject.kr
            </Label>
          </div>

          <ActionGroup.Root>
            <ActionGroup.Item aria-label="GitHub">
              <IconButton.Basic icon="github-fill" hierarchy="tertiary" size="xs" />
            </ActionGroup.Item>
            <ActionGroup.Item aria-label="Figma">
              <IconButton.Basic icon="figma-line" hierarchy="tertiary" size="xs" />
            </ActionGroup.Item>
            <ActionGroup.Item aria-label="Instagram">
              <IconButton.Basic icon="instagram" hierarchy="tertiary" size="xs" />
            </ActionGroup.Item>
          </ActionGroup.Root>
        </div>
      </div>
    </footer>
  );
}

function JdsLogo() {
  return (
    <div className="flex items-center gap-1.5">
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
        <rect x="2" y="2" width="12" height="12" rx="3" fill="#6366F1" />
        <path d="M5 8h6M8 5v6" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
      <span className="text-sm font-semibold text-slate-700">JDS</span>
    </div>
  );
}
