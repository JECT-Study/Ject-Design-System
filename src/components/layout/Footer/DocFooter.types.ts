import { NavigationGroup } from '@/utils/getNavigation';

export interface FlatNavItem {
  label: string;
  href: string;
}

export interface DocFooterProps {
  navigationGroups: NavigationGroup[] | undefined;
  feedbackUrl?: string;
}
