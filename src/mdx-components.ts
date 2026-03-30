import { MdxH1, MdxH2, MdxH3, MdxH4, MdxH5, MdxH6 } from '@/components/mdx/MdxHeadings';

import { MobileHeader } from './components';
import { DocVariant } from './components/layout/DocVariantSection/DocVariantSection';
import { PropertiesTable } from './components/PropertiesTable/PropertiesTable';
import { DocTabs } from './components/Tabs/Tabs';

type MDXComponents = Record<string, unknown>;

export function useMDXComponents(components: MDXComponents = {}): MDXComponents {
  return {
    ...components,
    h1: MdxH1,
    h2: MdxH2,
    h3: MdxH3,
    h4: MdxH4,
    h5: MdxH5,
    h6: MdxH6,
    MobileHeader,
    DocTabs,
    PropertiesTable,
    DocVariant,
  };
}
