export type Locale = 'ko' | 'en';

export const navDictionaries: Record<Locale, Record<string, string>> = {
  ko: {
    overview: '개요',
    principles: '원칙',
    syntax: '문법',
    foundations: '파운데이션',
    color: '색상',
    'primitive-color': '프리미티브 컬러',
    'semantic-color': '시맨틱 컬러',
    components: '컴포넌트',
    badge: '배지',
    contentBadge: '콘텐츠 배지',
    dotBadge: '닷 배지',
    numericBadge: '너머릭 배지',
    button: '버튼',
    input: '인풋',
    checkbox: '체크박스',
    radio: '라디오',
    switch: '스위치',
    select: '셀렉트',
    form: '폼',
    tabs: '탭',
    accordion: '아코디언',
    'data-table': '데이터 테이블',
    navigation: '네비게이션',
    sidebar: '사이드바',
    layout: '레이아웃',
    dashboard: '대시보드',
    'getting-started': '시작하기',
    introduction: '소개',
    installation: '설치',
    theming: '테마',
    atoms: '아톰',
    molecules: '분자',
    organisms: '유기체',
    patterns: '패턴',
    component: '컴포넌트',
    blockButton: '블록 버튼',
    labelButton: '레이블 버튼',
    iconButton: '아이콘 버튼',
  },
  en: {
    overview: 'Overview',
    principles: 'Principles',
    syntax: 'Syntax',
    foundations: 'Foundations',
    color: 'Color',
    'primitive-color': 'Primitive Color',
    'semantic-color': 'Semantic Color',
    components: 'Components',
    badge: 'Badge',
    'default-badge': 'Default Badge',
    button: 'Button',
    input: 'Input',
    checkbox: 'Checkbox',
    radio: 'Radio',
    switch: 'Switch',
    select: 'Select',
    form: 'Form',
    tabs: 'Tabs',
    accordion: 'Accordion',
    'data-table': 'Data Table',
    navigation: 'Navigation',
    sidebar: 'Sidebar',
    layout: 'Layout',
    dashboard: 'Dashboard',
    'getting-started': 'Getting Started',
    introduction: 'Introduction',
    installation: 'Installation',
    theming: 'Theming',
    atoms: 'Atoms',
    molecules: 'Molecules',
    organisms: 'Organisms',
    patterns: 'Patterns',
    component: 'Component',
    blockButton: 'Block Button',
    labelButton: 'Label Button',
    iconButton: 'Icon Button',
  },
};

/**
 * 폴더명을 입력받아 현재 locale에 맞는 다국어 반환
 */
export function getNavTranslation(slug: string, locale: Locale = 'ko'): string {
  const dictionary = navDictionaries[locale];

  if (dictionary && dictionary[slug]) {
    return dictionary[slug];
  }

  // 매핑된 정보가 없으면, 기본 영어 폴더명을 Title Case 형태로 변환
  return slug
    .split('-')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
}
