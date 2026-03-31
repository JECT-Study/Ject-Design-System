'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Accordion, Icon, IconButton, Input, Label, Logo, MenuItem } from '@jects/jds';
import { clsx } from 'clsx';

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

interface SidebarProps {
  navigationGroups?: NavigationGroup[];
}

// 경로가 포함되어 있는지 확인하는 함수
const hasActivePath = (items: NavigationItem[] | undefined, pathname: string): boolean => {
  if (!items) return false;
  return items.some(
    (item) => item.href === pathname || (item.items && hasActivePath(item.items, pathname)),
  );
};

// 현재 경로 기준으로 확장해야 할 중첩 아이템 레이블 목록 반환
const getExpandedSubItems = (items: NavigationItem[], pathname: string): string[] => {
  const expanded: string[] = [];
  items.forEach((item) => {
    if (item.items && item.items.length > 0) {
      if (hasActivePath(item.items, pathname)) {
        expanded.push(item.label);
      }
      expanded.push(...getExpandedSubItems(item.items, pathname));
    }
  });
  return expanded;
};

export function Sidebar({ navigationGroups }: SidebarProps) {
  const pathname = usePathname();
  const [isCollapsed, setIsCollapsed] = useState(false);

  // 현재 경로가 포함된 그룹들을 기본적으로 열어둠
  const initialExpanded = navigationGroups
    ?.filter((group) => hasActivePath(group.items, pathname) || group.href === pathname)
    .map((group) => group.title);

  const [expandedValue, setExpandedValue] = useState<string[]>(initialExpanded || []);
  const [prevPathname, setPrevPathname] = useState(pathname);

  const allSubItems = navigationGroups?.flatMap((group) => group.items || []) || [];
  const [expandedSubValues, setExpandedSubValues] = useState<string[]>(
    getExpandedSubItems(allSubItems, pathname),
  );
  const [searchQuery, setSearchQuery] = useState('');
  // navigationGroups가 없으면 렌더링하지 않음
  if (!navigationGroups) return;

  // 검색어를 기준으로 네비게이션 트리를 필터링하는 함수
  const filterNavGroups = (groups: NavigationGroup[], query: string): NavigationGroup[] => {
    if (!query) return groups;

    const lowerQuery = query.toLowerCase();

    return groups
      .map((group) => {
        // 1. 만약 부모 카테고리 이름 자체가 매치된다면?
        //    그 카테고리와 내부 자녀들은 모두 렌더링하도록 냅둘 수 있지만,
        //    일반적으로 '하위 메뉴'를 검색하는 경우가 많으므로 하위 아이템을 필터링합니다.
        const filterItems = (items?: NavigationItem[]): NavigationItem[] | undefined => {
          if (!items) return undefined;

          return items.filter((item) => {
            // 본인 라벨이 일치하는가?
            const isMatch = item.label.toLowerCase().includes(lowerQuery);

            // 자식이 있다면 자식 중 일치하는게 있는가?
            const filteredChildren = filterItems(item.items);
            const hasMatchingChildren = filteredChildren && filteredChildren.length > 0;

            // 본인 또는 자녀 중 하나라도 일치하면 유지
            // 일치한 자녀 리스트로 교체
            if (hasMatchingChildren) {
              item.items = filteredChildren;
              return true;
            }

            return isMatch;
          });
        };

        const filteredItems = filterItems(group.items);

        // 본인 그룹 이름이 검색어에 들어있거나, 자식 중 매칭되는 결과가 있으면 리턴
        const isGroupMatch = group.title.toLowerCase().includes(lowerQuery);
        if (isGroupMatch || (filteredItems && filteredItems.length > 0)) {
          return {
            ...group,
            items: filteredItems || group.items,
          };
        }

        return null;
      })
      .filter(Boolean) as NavigationGroup[];
  };

  const filteredNavigationGroups = filterNavGroups(navigationGroups, searchQuery);

  // 경로 변경 시 해당 그룹 자동 확장
  if (pathname !== prevPathname) {
    setPrevPathname(pathname);
    const activeGroup = navigationGroups.find(
      (group) => hasActivePath(group.items, pathname) || group.href === pathname,
    );
    if (activeGroup && !expandedValue.includes(activeGroup.title)) {
      setExpandedValue((prev) => [...prev, activeGroup.title]);
    }
    // 중첩 아이템 자동 확장
    const newSubExpanded = getExpandedSubItems(
      navigationGroups.flatMap((g) => g.items || []),
      pathname,
    );
    if (newSubExpanded.length > 0) {
      setExpandedSubValues((prev) => {
        const toAdd = newSubExpanded.filter((l) => !prev.includes(l));
        return toAdd.length > 0 ? [...prev, ...toAdd] : prev;
      });
    }
  }

  // 중첩된 자식 아이템들을 렌더링하는 함수
  const renderNavItems = (items: NavigationItem[], level: number = 1) => {
    const getIndentClass = (lv: number) => {
      switch (lv) {
        case 2:
          return 'pl-[12px]'; // 16 * 2 + 8
        case 3:
          return 'pl-[56px]'; // 16 * 3 + 8
        case 4:
          return 'pl-[72px]'; // 16 * 4 + 8
        case 5:
          return 'pl-[88px]'; // 16 * 5 + 8
        default:
          return 'pl-[104px]'; // 16 * 6 + 8
      }
    };

    return (
      <ul className="flex w-full flex-col gap-12">
        {items.map((item) => {
          const hasChildren = item.items && item.items.length > 0;

          // 자식 아이템이 있는 경우 중첩 아코디언으로 렌더링
          if (hasChildren) {
            const isSubActive = hasActivePath(item.items, pathname);
            return (
              <li key={item.href || item.label}>
                <Accordion.Root
                  type="multiple"
                  value={expandedSubValues}
                  onValueChange={setExpandedSubValues}
                  className="w-full pl-16"
                >
                  <Accordion.Item value={item.label} className="border-none!">
                    <Accordion.Trigger
                      className={clsx(
                        'w-full rounded-md py-1.5 pr-2 transition-colors hover:bg-slate-50',
                        getIndentClass(level),
                      )}
                    >
                      <Label
                        size="sm"
                        weight={isSubActive ? 'bold' : 'normal'}
                        className="cursor-pointer"
                      >
                        {item.label}
                      </Label>
                    </Accordion.Trigger>
                    <Accordion.Content>{renderNavItems(item.items!, level + 1)}</Accordion.Content>
                  </Accordion.Item>
                </Accordion.Root>
              </li>
            );
          }

          // 리프 아이템 (자식 없음)
          return (
            <li key={item.href || item.label}>
              {item.href ? (
                <MenuItem.Anchor
                  href={item.href}
                  isSelected={pathname === item.href}
                  size="sm"
                  className={clsx(
                    'w-full',
                    getIndentClass(level),
                    pathname === item.href ? 'after:opacity-[0.08]!' : '',
                  )}
                >
                  {item.label}
                </MenuItem.Anchor>
              ) : (
                <div
                  className={clsx(
                    'pb-12 text-[13px] font-medium text-slate-500',
                    getIndentClass(level),
                  )}
                >
                  {item.label}
                </div>
              )}
            </li>
          );
        })}
      </ul>
    );
  };

  return (
    <aside
      className={clsx(
        'tablet:flex desktop:flex sticky top-0 z-40 hidden h-screen shrink-0 flex-col border-r border-slate-200 bg-white transition-all duration-300 ease-in-out',
        isCollapsed ? 'w-0' : 'w-65',
      )}
    >
      {/* Sidebar Header / Logo Area */}
      <div
        className={clsx(
          'sticky top-0 z-10 flex items-center justify-between bg-white transition-all duration-300',
          isCollapsed
            ? 'h-20 items-start justify-start pt-5'
            : 'shrink-0 border-b border-slate-200 bg-white px-5 py-[12px]',
        )}
      >
        {!isCollapsed && <Logo href="/" hierarchy="primary" height={24} />}

        <div
          className={clsx(
            'flex items-center transition-all duration-300',
            isCollapsed
              ? 'ml-[24px] box-content h-7.5 flex-row rounded-lg border border-slate-200 bg-white'
              : 'flex-row gap-1',
          )}
        >
          <div
            className={clsx(
              'flex items-center justify-center',
              isCollapsed ? 'h-full w-7.5 border-r border-slate-200' : 'p-6',
            )}
          >
            <IconButton.Basic
              icon="bookmark-line"
              aria-label="Toggle Sidebar"
              onClick={() => setIsCollapsed(!isCollapsed)}
              size={isCollapsed ? 'sm' : 'md'}
              className={clsx(
                'transition-transform duration-300',
                !isCollapsed && 'hover:bg-slate-100',
              )}
            />
          </div>

          {isCollapsed && (
            <>
              <div className="flex h-full w-7.5 items-center justify-center border-r border-slate-200 transition-colors hover:bg-slate-50">
                <IconButton.Basic icon="search-line" aria-label="Search" size="sm" />
              </div>
              <div className="flex h-full w-7.5 items-center justify-center rounded-r-lg transition-colors hover:bg-slate-50">
                <IconButton.Basic icon="moon-line" aria-label="Theme" size="sm" />
              </div>
            </>
          )}
        </div>
      </div>

      {/* Main Content Area */}
      <div
        className={clsx(
          'flex flex-1 flex-col overflow-y-auto transition-opacity duration-300 [&::-webkit-scrollbar]:hidden',
          isCollapsed
            ? 'display-none pointer-events-none invisible opacity-0'
            : 'visible opacity-100',
        )}
      >
        {!isCollapsed && (
          <>
            {/* Search Area */}
            <div className="w-full shrink-0 border-b border-slate-200 bg-white">
              <div className="flex items-center px-5 py-[12px]">
                <Icon name="search-line" className="mr-3 h-4.5 w-4.5 shrink-0 text-slate-400" />
                <Input.TextField
                  style="empty"
                  placeholder="문서 전체 검색"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full text-[14px]"
                />
              </div>
            </div>

            {/* Navigation Area */}
            <nav className="flex-1 overflow-y-auto p-24">
              <Accordion.Root
                type="multiple"
                value={expandedValue}
                onValueChange={setExpandedValue}
                className="flex flex-col gap-2"
              >
                {filteredNavigationGroups.length === 0 && searchQuery && (
                  <div className="p-4 text-center text-sm text-slate-500">
                    검색 결과가 없습니다.
                  </div>
                )}
                {filteredNavigationGroups.map((group) => {
                  const hasChildren = group.items && group.items.length > 0;
                  const isActive = hasChildren
                    ? hasActivePath(group.items, pathname)
                    : pathname === group.href;

                  // 자식이 없고 하이퍼링크가 있는 단일 메뉴
                  if (!hasChildren && group.href) {
                    return (
                      <div key={group.title} className="w-full">
                        <Link
                          href={group.href}
                          className="group/trigger flex w-full items-center justify-between rounded-md px-2 py-1.5 transition-colors hover:bg-slate-50"
                        >
                          <Label
                            size="sm"
                            weight={isActive ? 'bold' : 'normal'}
                            className="cursor-pointer transition-colors group-hover/trigger:text-slate-900"
                          >
                            {group.title}
                          </Label>
                        </Link>
                      </div>
                    );
                  }

                  // 자식이 있는 아코디언 메뉴
                  return (
                    <Accordion.Item key={group.title} value={group.title} className="border-none!">
                      <Accordion.Trigger className="group/trigger flex w-full items-center justify-between rounded-md px-2 py-1.5 transition-colors hover:bg-slate-50">
                        <Label
                          size="sm"
                          weight={isActive ? 'bold' : 'normal'}
                          className="cursor-pointer transition-colors group-hover/trigger:text-slate-900"
                        >
                          {group.title}
                        </Label>
                      </Accordion.Trigger>
                      <Accordion.Content>{renderNavItems(group.items || [])}</Accordion.Content>
                    </Accordion.Item>
                  );
                })}
              </Accordion.Root>
            </nav>
          </>
        )}
      </div>

      {/* Footer Area */}
      {!isCollapsed && (
        <div className="bg-semantic-surface-deep mt-auto shrink-0">
          <div className="flex items-center justify-between border-t border-slate-200 p-20 pt-16">
            <div className="bg-semantic-surface-shallow flex items-center gap-1 rounded-lg border border-slate-200">
              <div className="flex items-center border-r border-slate-200 p-6">
                <IconButton.Basic
                  icon="home-2-line"
                  aria-label="Home"
                  size="sm"
                  className="text-slate-500 transition-colors hover:text-slate-900"
                />
              </div>
              <div className="flex items-center border-r border-slate-200 p-6">
                <IconButton.Basic
                  icon="github-fill"
                  aria-label="Github"
                  size="sm"
                  className="text-slate-500 transition-colors hover:text-slate-900"
                />
              </div>
              <div className="flex items-center border-r border-slate-200 p-6">
                <IconButton.Basic
                  icon="file-text-line"
                  aria-label="Docs"
                  size="sm"
                  className="text-slate-500 transition-colors hover:text-slate-900"
                />
              </div>
              <div className="flex items-center p-6">
                <IconButton.Basic
                  icon="global-line"
                  aria-label="Web"
                  size="sm"
                  className="text-slate-500 transition-colors hover:text-slate-900"
                />
              </div>
            </div>
            <div className="bg-semantic-surface-shallow flex items-center rounded-lg border border-slate-200 p-6">
              <IconButton.Basic
                icon="moon-line"
                aria-label="Theme"
                size="sm"
                className="text-slate-500 transition-colors hover:text-slate-900"
              />
            </div>
          </div>
        </div>
      )}
    </aside>
  );
}
