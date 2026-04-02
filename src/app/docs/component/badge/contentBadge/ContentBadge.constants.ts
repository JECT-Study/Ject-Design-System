import { createDisplayName } from '@/components';
import { BADGE_PROPS, Properties, Title } from '@/constants/components';
import { ContentBadge } from '@jects/jds';

import {
  ContentBadgeFeedbacks,
  ContentBadgeHierarchies,
  ContentBadgeMuted,
  ContentBadgeSizes,
  ContentBadgeStyles,
  ContentBadgeThemes,
  ContentBadgeWithIcon,
} from './ContentBadgeExamples';

export const contentBadgeDisplayName = createDisplayName(
  new Map<object, string>([
    [ContentBadge.Basic, 'ContentBadge.Basic'],
    [ContentBadge.Feedback, 'ContentBadge.Feedback'],
    [ContentBadge.Theme, 'ContentBadge.Theme'],
  ]),
);

export const CONTENT_BADGE_PROPERTIES = [
  {
    name: Properties.Children,
    type: ['string'],
    description: '배지 텍스트',
  },
  {
    name: Properties.Hierarchy,
    type: [...BADGE_PROPS.CONTENT_BADGE.HIERARCHIES],
    default: 'secondary',
    description: '시각적이거나 맥락적인 위계 구분입니다.',
  },
  {
    name: Properties.Size,
    type: [...BADGE_PROPS.CONTENT_BADGE.SIZES],
    default: 'md',
    description: '컴포넌트의 시각적 크기입니다.',
  },
  {
    name: Properties.Style,
    type: [...BADGE_PROPS.CONTENT_BADGE.STYLES],
    default: 'solid',
    description: '컴포넌트의 시각적 외형입니다.',
  },
  {
    name: Properties.IsMuted,
    type: ['boolean'],
    default: 'false',
    description: '시각적으로 강조도가 낮춰졌는지의 여부입니다.',
  },
  {
    name: Properties.WithIcon,
    type: ['boolean'],
    description: '내부에 삭제용 아이콘 버튼 컴포넌트를 포함하는지의 여부입니다.',
  },
  {
    name: Properties.OnIconClick,
    type: ['((e: MouseEvent<Element, MouseEvent>) => void)'],
    description: '내부의 아이콘을 클릭했을 때 이벤트를 발생시키는 핸들러입니다.',
  },
];

export const CONTENT_BADGE_VARIANTS_EXAMPLES = [
  {
    id: Properties.Style,
    title: Properties.Style,
    description:
      '콘텐츠 배지의 스타일 변형을 설정합니다. solid(기본), outlined, alpha 세 가지를 지원합니다.',
    ExampleComponent: ContentBadgeStyles,
  },
  {
    id: Properties.Hierarchy,
    title: Properties.Hierarchy,
    description:
      '콘텐츠 배지의 시각적 위계를 설정합니다. accent, primary(기본), secondary, tertiary를 지원합니다.',
    ExampleComponent: ContentBadgeHierarchies,
  },
  {
    id: Properties.Size,
    title: Properties.Size,
    description: '콘텐츠 배지의 크기를 설정합니다. xs, sm, md(기본), lg를 지원합니다.',
    ExampleComponent: ContentBadgeSizes,
  },
  {
    id: Properties.Feedback,
    title: Properties.Feedback,
    description:
      '피드백 인텐트를 가진 콘텐츠 배지입니다. positive(성공)와 destructive(위험) 두 가지를 지원합니다.',
    ExampleComponent: ContentBadgeFeedbacks,
  },
  {
    id: Properties.WithIcon,
    title: Properties.WithIcon,
    description: '내부에 삭제용 아이콘 버튼 컴포넌트를 포함하는지의 여부입니다.',
    ExampleComponent: ContentBadgeWithIcon,
  },
  {
    id: Title.Theme,
    title: Title.Theme,
    description: '테마를 결정할 수 있는 콘텐츠 배지입니다.',
    ExampleComponent: ContentBadgeThemes,
  },
  {
    id: Properties.IsMuted,
    title: Properties.IsMuted,
    description: '시각적으로 강조도가 낮춰졌는지의 여부입니다.',
    ExampleComponent: ContentBadgeMuted,
  },
];
