'use client';

import { usePathname } from 'next/navigation';
import { useState } from 'react';
import {
  MenuItem,
  Label,
  Logo,
  Accordion,
  IconButton,
  Icon
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

/**
 * @description 사이드바에 표시될 메뉴 그룹 데이터 정의 (정적 폴백 역할)
 */
const FALLBACK_NAVIGATION_GROUPS: NavigationGroup[] = [
  {
    title: 'Getting Started',
    items: [
      { label: 'Introduction', href: '/' },
      { label: 'Installation', href: '/docs/getting-started/installation' },
      { label: 'Theming', href: '/docs/getting-started/theming' },
    ],
  },
  {
    title: 'Foundations',
    items: [
      { label: 'Color', href: '/docs/foundations/color' },
      { label: 'Typography', href: '/docs/foundations/typography' },
      { label: 'Iconography', href: '/docs/foundations/iconography' },
      { label: 'Spacing', href: '/docs/foundations/spacing' },
      { label: 'Radius', href: '/docs/foundations/radius' },
    ],
  },
  {
    title: 'Atoms',
    items: [
      { label: 'Button', href: '/docs/atoms/button' },
      { label: 'Input', href: '/docs/atoms/input' },
      { label: 'Checkbox', href: '/docs/atoms/checkbox' },
      { label: 'Radio', href: '/docs/atoms/radio' },
      { label: 'Switch', href: '/docs/atoms/switch' },
      { label: 'Badge', href: '/docs/atoms/badge' },
    ],
  },
  {
    title: 'Molecules',
    items: [
      { label: 'Select', href: '/docs/molecules/select' },
      { label: 'Form', href: '/docs/molecules/form' },
      { label: 'Tabs', href: '/docs/molecules/tabs' },
      { label: 'Accordion', href: '/docs/molecules/accordion' },
    ],
  },
  {
    title: 'Organisms',
    items: [
      { label: 'DataTable', href: '/docs/organisms/data-table' },
      { label: 'Navigation', href: '/docs/organisms/navigation' },
    ],
  },
  {
    title: 'Patterns',
    items: [
      { label: 'Sidebar', href: '/docs/patterns/sidebar' },
      { label: 'Layout', href: '/docs/patterns/layout' },
      { label: 'Dashboard', href: '/docs/patterns/dashboard' },
    ],
  },
];

// 경로가 포함되어 있는지 확인하는 함수
const hasActivePath = (items: NavigationItem[] | undefined, pathname: string): boolean => {
  if (!items) return false;
  return items.some(
    (item) => item.href === pathname || (item.items && hasActivePath(item.items, pathname))
  );
};

export function Sidebar({ navigationGroups = FALLBACK_NAVIGATION_GROUPS }: SidebarProps) {
  const pathname = usePathname();
  const [isCollapsed, setIsCollapsed] = useState(false);

  // 현재 경로가 포함된 그룹들을 기본적으로 열어둠
  const initialExpanded = navigationGroups
    .filter(group => hasActivePath(group.items, pathname) || group.href === pathname)
    .map(group => group.title);

  const [expandedValue, setExpandedValue] = useState<string[]>(initialExpanded);
  const [prevPathname, setPrevPathname] = useState(pathname);

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
              <div className="flex items-center px-20 py-12">
                <Icon name="search-line" className="text-slate-400 w-[18px] h-[18px] mr-3 shrink-0" />
                <input
                  type="text"
                  placeholder="문서 전체 검색"
                  className="w-full bg-transparent text-[14px] text-slate-700 outline-none placeholder:text-slate-400"
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
                {navigationGroups.map((group) => {
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
