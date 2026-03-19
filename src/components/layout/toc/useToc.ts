import { useEffect, useRef, useState, type MouseEvent } from 'react';

import { TOC_HEADING_SELECTOR } from './tocConstants';

export interface TocItem {
  id: string;
  title: string;
  level: number;
}

const HEADING_SYNC_DEBOUNCE_MS = 150;
const INTERSECTION_ROOT_MARGIN = '-120px 0px -60% 0px';
const SCROLL_BOTTOM_THRESHOLD = 10;
const SMOOTH_SCROLL_OFFSET = 120;
const CLICK_SCROLL_LOCK_MS = 800;

function getHeadingElements() {
  return Array.from(document.querySelectorAll<HTMLElement>(TOC_HEADING_SELECTOR));
}

export function useToc() {
  const [headings, setHeadings] = useState<TocItem[]>([]);
  const [activeId, setActiveId] = useState<string>('');
  const isClickScroll = useRef(false);
  const scrollTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    let debounceTimer: ReturnType<typeof setTimeout>;

    const extractHeadings = () => {
      const tocData: TocItem[] = getHeadingElements().map((element) => ({
        id: element.id,
        title: element.textContent || '',
        level: Number(element.nodeName.charAt(1)),
      }));

      setHeadings((prev) => (JSON.stringify(prev) === JSON.stringify(tocData) ? prev : tocData));
    };

    const onMutate = () => {
      clearTimeout(debounceTimer);
      debounceTimer = setTimeout(extractHeadings, HEADING_SYNC_DEBOUNCE_MS);
    };

    extractHeadings();

    const container = document.querySelector('main') || document.body;
    const mutationObserver = new MutationObserver(onMutate);
    mutationObserver.observe(container, { childList: true, subtree: true });

    return () => {
      clearTimeout(debounceTimer);
      mutationObserver.disconnect();
    };
  }, []);

  useEffect(() => {
    const elements = getHeadingElements();
    if (elements.length === 0) return;

    const visibleHeadings = new Set<string>();

    const intersectionObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            visibleHeadings.add(entry.target.id);
          } else {
            visibleHeadings.delete(entry.target.id);
          }
        });

        if (isClickScroll.current) return;

        if (visibleHeadings.size > 0) {
          const firstVisible = elements.find((elem) => visibleHeadings.has(elem.id));
          if (firstVisible) {
            setActiveId(firstVisible.id);
          }
        }
      },
      { rootMargin: INTERSECTION_ROOT_MARGIN },
    );

    elements.forEach((elem) => intersectionObserver.observe(elem));

    const handleScroll = () => {
      const isAtBottom =
        window.innerHeight + Math.round(window.scrollY) >=
        document.documentElement.scrollHeight - SCROLL_BOTTOM_THRESHOLD;

      if (isAtBottom && elements.length > 0 && !isClickScroll.current) {
        setActiveId(elements[elements.length - 1].id);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      intersectionObserver.disconnect();
      window.removeEventListener('scroll', handleScroll);
    };
  }, [headings]);

  useEffect(
    () => () => {
      if (scrollTimeout.current) {
        clearTimeout(scrollTimeout.current);
      }
    },
    [],
  );

  const scrollToId = (id: string, event?: MouseEvent<HTMLElement>) => {
    event?.preventDefault();
    window.history.pushState(null, '', `#${id}`);

    const element = document.getElementById(id);
    if (element) {
      isClickScroll.current = true;
      setActiveId(id);

      const y = element.getBoundingClientRect().top + window.scrollY - SMOOTH_SCROLL_OFFSET;
      window.scrollTo({ top: y, behavior: 'smooth' });

      if (scrollTimeout.current) clearTimeout(scrollTimeout.current);
      scrollTimeout.current = setTimeout(() => {
        isClickScroll.current = false;
      }, CLICK_SCROLL_LOCK_MS);
    }
  };

  return { headings, activeId, scrollToId };
}
