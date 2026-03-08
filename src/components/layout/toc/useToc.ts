import { useEffect, useRef, useState } from 'react';

export interface TocItem {
  id: string;
  title: string;
  level: number;
}

export function useToc() {
  const [headings, setHeadings] = useState<TocItem[]>([]);
  const [activeId, setActiveId] = useState<string>('');

  // 클릭으로 인해 발생한 스크롤 이동 도중에는 Observer 업데이트를 일시 정지하기 위함
  const isClickScroll = useRef(false);
  const scrollTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    let debounceTimer: ReturnType<typeof setTimeout>;

    const extractHeadings = () => {
      const elements = Array.from(document.querySelectorAll('h2, h3'));
      const tocData: TocItem[] = elements.map((element) => ({
        id: element.id,
        title: element.textContent || '',
        level: Number(element.nodeName.charAt(1)),
      }));

      setHeadings((prev) => (JSON.stringify(prev) === JSON.stringify(tocData) ? prev : tocData));
    };

    const onMutate = () => {
      clearTimeout(debounceTimer);
      debounceTimer = setTimeout(extractHeadings, 150);
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
    const elements = Array.from(document.querySelectorAll('h2, h3'));
    if (elements.length === 0) return;

    // 현재 화면에 보이는 헤딩들을 추적
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

        // 클릭된 요소로 이동중에는 Observer의 스크롤 감지에 의해 변경되지 않도록 무시
        if (isClickScroll.current) return;

        // 화면에 여러 개의 헤딩이 보인다면, 가장 위에 있는(먼저 등장하는) 것을 선택
        if (visibleHeadings.size > 0) {
          // 원래 DOM 요소 순서대로 되어있는 elements 배열을 기준으로 정렬
          const firstVisible = elements.find((elem) => visibleHeadings.has(elem.id));
          if (firstVisible) {
            setActiveId(firstVisible.id);
          }
        }
      },
      // 상단의 헤더 및 여유 공간을 계산하기 위한 여유분
      { rootMargin: '-120px 0px -60% 0px' },
    );

    elements.forEach((elem) => intersectionObserver.observe(elem));

    // 브라우저 맨 마지막 점에 도달했는지 확인
    const handleScroll = () => {
      const isAtBottom =
        window.innerHeight + Math.round(window.scrollY) >=
        document.documentElement.scrollHeight - 10;

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

  const scrollToId = (id: string, e?: React.MouseEvent) => {
    e?.preventDefault();
    window.history.pushState(null, '', `#${id}`);

    const element = document.getElementById(id);
    if (element) {
      // 1. 상태 즉시 업데이트 & 옵저버 무시 설정
      isClickScroll.current = true;
      setActiveId(id);

      // 2. 헤더의 높이와 여백을 고려하여 화면 상단으로부터 살짝 띄운(120px) 위치로 이동
      const y = element.getBoundingClientRect().top + window.scrollY - 120;
      window.scrollTo({ top: y, behavior: 'smooth' });

      // 3. 부드러운 스크롤 이동이 끝날 때즈음(약 800ms) 옵저버 재활성화
      if (scrollTimeout.current) clearTimeout(scrollTimeout.current);
      scrollTimeout.current = setTimeout(() => {
        isClickScroll.current = false;
      }, 800);
    }
  };

  return { headings, activeId, scrollToId };
}
