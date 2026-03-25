import fs from 'fs';
import path from 'path';

import { getNavTranslation, Locale } from './i18nNav';

export interface NavigationItem {
  label: string;
  href?: string;
  items?: NavigationItem[];
}

export interface NavigationGroup {
  title: string;
  items?: NavigationItem[];
  href?: string;
}

// 디렉토리를 순회하며 네비게이션 아이템 트리를 반환
function buildNavItems(dir: string, currentPath: string, locale: Locale): NavigationItem[] {
  const items: NavigationItem[] = [];
  let folders;

  try {
    folders = fs.readdirSync(dir, { withFileTypes: true });
  } catch {
    return items;
  }

  for (const folder of folders) {
    if (!folder.isDirectory()) continue;

    const folderPath = path.join(dir, folder.name);
    const hrefPath = `${currentPath}/${folder.name}`;

    // 이 폴더 안에 페이지 자체가 있는지 확인
    const hasPage =
      fs.existsSync(path.join(folderPath, 'page.tsx')) ||
      fs.existsSync(path.join(folderPath, 'page.mdx'));

    // 자식 폴더들 탐색
    const children = buildNavItems(folderPath, hrefPath, locale);

    // 페이지가 있거나, 자식 요소가 있다면 네비게이션에 추가
    if (hasPage || children.length > 0) {
      const item: NavigationItem = {
        label: getNavTranslation(folder.name, locale),
      };

      if (hasPage) {
        item.href = hrefPath;
      }

      if (children.length > 0) {
        item.items = children;
      }

      items.push(item);
    }
  }

  return items;
}

// 디렉토리 구조(src/app/docs)를 분석하여 사이드바에 사용될 다국어 네비게이션 그룹 데이터를 자동으로 생성
export function getNavigationGroups(locale: Locale = 'ko'): NavigationGroup[] | undefined {
  const docsDir = path.join(process.cwd(), 'src/app/docs');

  if (!fs.existsSync(docsDir)) {
    return undefined;
  }

  // 개요 (Overview) - 항상 루트 URL(/)로 고정
  const overviewGroup: NavigationGroup & { _slug: string } = {
    title: getNavTranslation('overview', locale),
    href: '/',
    items: [],
    _slug: 'overview',
  };

  const groups: (NavigationGroup & { _slug: string })[] = [];
  const orderedGroups = [
    'overview',
    'getting-started',
    'principles',
    'foundations',
    'atoms',
    'molecules',
    'organisms',
    'components',
    'patterns',
  ];

  const folders = fs.readdirSync(docsDir, { withFileTypes: true });

  for (const folder of folders) {
    if (!folder.isDirectory()) continue;

    const groupTitle = getNavTranslation(folder.name, locale);
    const subDir = path.join(docsDir, folder.name);

    const items = buildNavItems(subDir, `/docs/${folder.name}`, locale);

    if (items.length > 0) {
      groups.push({
        title: groupTitle,
        items,
        _slug: folder.name,
      });
    }
  }

  // 폴더에 생성되지 않았더라도, 시작 페이지(overview)는 항상 최상단에 존재하게 함
  if (!groups.some((g) => g._slug === 'overview')) {
    groups.unshift(overviewGroup);
  }

  // 지정된 순서 (orderedGroups) 에 맞춰서 그룹 정렬
  groups.sort((a, b) => {
    const aIdx = orderedGroups.indexOf(a._slug);
    const bIdx = orderedGroups.indexOf(b._slug);
    if (aIdx === -1 && bIdx === -1) return a.title.localeCompare(b.title);
    if (aIdx === -1) return 1;
    if (bIdx === -1) return -1;
    return aIdx - bIdx;
  });

  return groups.map(({ _slug, ...rest }) => rest);
}
