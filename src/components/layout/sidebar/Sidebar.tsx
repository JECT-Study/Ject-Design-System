'use client';

import { usePathname } from 'next/navigation';
import { useState } from 'react';
import {
  MenuItem,
  Label,
  Logo,
  Accordion,
  IconButton,
  Icon,
  Input
} from '@jects/jds';
import Link from 'next/link';
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
    (item) => item.href === pathname || (item.items && hasActivePath(item.items, pathname))
  );
};

export function Sidebar({ navigationGroups }: SidebarProps) {

  const pathname = usePathname();
  const [isCollapsed, setIsCollapsed] = useState(false);

  // 현재 경로가 포함된 그룹들을 기본적으로 열어둠
  const initialExpanded = navigationGroups?.filter(group => hasActivePath(group.items, pathname) || group.href === pathname)
    .map(group => group.title);

  const [expandedValue, setExpandedValue] = useState<string[]>(initialExpanded || []);
  const [prevPathname, setPrevPathname] = useState(pathname);
  const [searchQuery, setSearchQuery] = useState('');
  // navigationGroups가 없으면 렌더링하지 않음
  if (!navigationGroups) return;

  // 검색어를 기준으로 네비게이션 트리를 필터링하는 함수
  const filterNavGroups = (groups: NavigationGroup[], query: string): NavigationGroup[] => {
    if (!query) return groups;

    const lowerQuery = query.toLowerCase();

    return groups.map(group => {
      // 1. 만약 부모 카테고리 이름 자체가 매치된다면? 
      //    그 카테고리와 내부 자녀들은 모두 렌더링하도록 냅둘 수 있지만,
      //    일반적으로 '하위 메뉴'를 검색하는 경우가 많으므로 하위 아이템을 필터링합니다.

      const filterItems = (items?: NavigationItem[]): NavigationItem[] | undefined => {
        if (!items) return undefined;

        return items.filter(item => {
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
          items: filteredItems || group.items
        };
      }

      return null;
    }).filter(Boolean) as NavigationGroup[];
  };

  const filteredNavigationGroups = filterNavGroups(navigationGroups, searchQuery);

  // 경로 변경 시 해당 그룹 자동 확장 
  if (pathname !== prevPathname) {
    setPrevPathname(pathname);
    const activeGroup = navigationGroups.find(group =>
      hasActivePath(group.items, pathname) || group.href === pathname
    );
    if (activeGroup && !expandedValue.includes(activeGroup.title)) {
      setExpandedValue(prev => [...prev, activeGroup.title]);
    }
  }

  // 중첩된 자식 아이템들을 렌더링하는 함수
  const renderNavItems = (items: NavigationItem[], level: number = 1) => {
    const getIndentClass = (lv: number) => {
      switch (lv) {
        case 1: return "pl-[24px]"; // 16 * 1 + 8
        case 2: return "pl-[40px]"; // 16 * 2 + 8
        case 3: return "pl-[56px]"; // 16 * 3 + 8
        case 4: return "pl-[72px]"; // 16 * 4 + 8
        case 5: return "pl-[88px]"; // 16 * 5 + 8
        default: return "pl-[104px]";// 16 * 6 + 8
      }
    };

    return (
      <ul className="flex flex-col gap-1 w-full">
        {items.map((item) => (
          <li key={item.href || item.label} className={level > 1 ? "mt-1" : ""}>
            {/* href가 없으면 단순 텍스트, 있으면 링크로 처리 */}
            {item.href ? (
              <Link href={item.href} passHref >
                <MenuItem.Anchor
                  isSelected={pathname === item.href}
                  size="sm"
                  className={clsx(
                    "w-full",
                    getIndentClass(level),
                    pathname === item.href ? "after:opacity-[0.08]!" : ""
                  )}
                >
                  {item.label}
                </MenuItem.Anchor>
              </Link>
            ) : (
              <div
                className={clsx(
                  "py-1 mt-2 font-medium text-slate-500 text-[13px]",
                  getIndentClass(level)
                )}
              >
                {item.label}
              </div>
            )}

            {/* 자식 아이템이 존재할 경우 */}
            {item.items && item.items.length > 0 && (
              <div className="mt-12">
                {renderNavItems(item.items, level + 1)}
              </div>
            )}
          </li>
        ))}
      </ul>
    );
  };

  return (
    <aside className={clsx(
      "sticky top-0 z-40 hidden h-screen shrink-0 bg-white tablet:flex desktop:flex flex-col transition-all duration-300 ease-in-out border-r border-slate-200",
      isCollapsed ? "w-0" : "w-[260px]"
    )}>
      {/* Sidebar Header / Logo Area */}
      <div className={clsx(
        "sticky top-0 z-10 flex bg-white transition-all duration-300 items-center justify-between",
        isCollapsed ? "h-20 items-start pt-[20px] justify-start" : "border-b border-slate-200 bg-white shrink-0 px-[20px] py-[12px]"
      )}>
        {!isCollapsed && (
          <Link href="/" className="flex items-center">
            <Logo href="/" hierarchy="primary" height={24} />
          </Link>
        )}

        <div className={clsx(
          "flex items-center transition-all duration-300",
          isCollapsed ? " ml-[24px] flex-row border border-slate-200 rounded-[8px] bg-white h-[30px] box-content" : "flex-row gap-1"
        )}>
          <div className={clsx(
            'flex items-center justify-center',
            isCollapsed ? 'w-[30px] h-full border-r border-slate-200' : 'p-6'
          )}>
            <IconButton.Basic
              icon="bookmark-line"
              aria-label="Toggle Sidebar"
              onClick={() => setIsCollapsed(!isCollapsed)}
              size={isCollapsed ? "sm" : "md"}
              className={clsx(
                "transition-transform duration-300",
                !isCollapsed && "hover:bg-slate-100"
              )}
            />
          </div>

          {isCollapsed && (
            <>
              <div className='flex items-center justify-center w-[30px] h-full border-r border-slate-200 hover:bg-slate-50 transition-colors'>
                <IconButton.Basic
                  icon="search-line"
                  aria-label="Search"
                  size="sm"
                />
              </div>
              <div className='flex items-center justify-center w-[30px] h-full hover:bg-slate-50 transition-colors rounded-r-[8px]'>
                <IconButton.Basic
                  icon="moon-line"
                  aria-label="Theme"
                  size="sm"
                />
              </div>
            </>
          )}
        </div>
      </div>

      {/* Main Content Area */}
      <div className={clsx(
        "flex-1 overflow-y-auto [&::-webkit-scrollbar]:hidden transition-opacity duration-300 flex flex-col",
        isCollapsed ? "opacity-0 invisible pointer-events-none display-none" : "opacity-100 visible"
      )}>
        {!isCollapsed && (
          <>
            {/* Search Area */}
            <div className="w-full border-b border-slate-200 bg-white shrink-0">
              <div className="px-[20px] py-[12px] flex items-center">
                <Icon name="search-line" className="text-slate-400 w-[18px] h-[18px] mr-3 shrink-0" />
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
            <nav className="flex-1 p-20 overflow-y-auto">
              <Accordion.Root
                type="multiple"
                value={expandedValue}
                onValueChange={setExpandedValue}
                className="flex flex-col gap-2"
              >
                {filteredNavigationGroups.length === 0 && searchQuery && (
                  <div className="text-sm text-slate-500 p-4 text-center">
                    검색 결과가 없습니다.
                  </div>
                )}
                {filteredNavigationGroups.map((group) => {
                  const hasChildren = group.items && group.items.length > 0;
                  const isActive = hasChildren ? hasActivePath(group.items, pathname) : pathname === group.href;

                  // 자식이 없고 하이퍼링크가 있는 단일 메뉴
                  if (!hasChildren && group.href) {
                    return (
                      <div key={group.title} className="w-full">
                        <Link href={group.href} passHref legacyBehavior>
                          <a className="px-2 py-1.5 hover:bg-slate-50 rounded-md transition-colors w-full flex items-center justify-between group/trigger">
                            <Label
                              size="sm"
                              weight={isActive ? 'bold' : 'normal'}
                              className="cursor-pointer transition-colors group-hover/trigger:text-slate-900"
                            >
                              {group.title}
                            </Label>
                          </a>
                        </Link>
                      </div>
                    );
                  }

                  // 자식이 있는 아코디언 메뉴
                  return (
                    <Accordion.Item key={group.title} value={group.title} className="border-none!">
                      <Accordion.Trigger className="px-2 py-1.5 hover:bg-slate-50 rounded-md transition-colors w-full flex items-center justify-between group/trigger">
                        <Label
                          size="sm"
                          weight={isActive ? 'bold' : 'normal'}
                          className="cursor-pointer transition-colors group-hover/trigger:text-slate-900"
                        >
                          {group.title}
                        </Label>
                      </Accordion.Trigger>
                      <Accordion.Content className="pt-1">
                        {renderNavItems(group.items || [])}
                      </Accordion.Content>
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
        <div className="mt-auto shrink-0 bg-semantic-surface-deep">
          <div className="flex items-center justify-between p-20 pt-16 border-t border-slate-200 ">
            <div className="flex items-center gap-1 border border-slate-200 rounded-[8px] bg-semantic-surface-shallow">
              <div className="p-6 border-r border-slate-200 flex items-center">
                <IconButton.Basic icon="home-2-line" aria-label="Home" size="sm" className=" text-slate-500 hover:text-slate-900 transition-colors" />
              </div>
              <div className="p-6 border-r border-slate-200 flex items-center">
                <IconButton.Basic icon="github-fill" aria-label="Github" size="sm" className=" text-slate-500 hover:text-slate-900 transition-colors" />
              </div>
              <div className="p-6 border-r border-slate-200 flex items-center">
                <IconButton.Basic icon="file-text-line" aria-label="Docs" size="sm" className=" text-slate-500 hover:text-slate-900 transition-colors" />
              </div>
              <div className="p-6 flex items-center">
                <IconButton.Basic icon="global-line" aria-label="Web" size="sm" className=" text-slate-500 hover:text-slate-900 transition-colors" />
              </div>
            </div>
            <div className="p-6 border border-slate-200 rounded-[8px] flex items-center bg-semantic-surface-shallow">
              <IconButton.Basic icon="moon-line" aria-label="Theme" size="sm" className=" text-slate-500 hover:text-slate-900 transition-colors" />
            </div>
          </div>
        </div>
      )}
    </aside>
  );
}
