'use client';

import { useState } from 'react';

export function MobileHeader() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <header className="sticky top-0 z-30 flex h-14 items-center justify-between border-b border-slate-200 bg-white/80 px-4 backdrop-blur-md md:hidden">
        <span className="font-bold">JDS</span>
        <button onClick={() => setIsOpen(true)} className="p-2">
          메뉴
        </button>
      </header>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex md:hidden">
          <div
            className="fixed inset-0 bg-black/40 backdrop-blur-sm"
            onClick={() => setIsOpen(false)}
          />
          <aside className="w-max-xs relative flex w-64 flex-col bg-white">
            <button onClick={() => setIsOpen(false)}>닫기</button>
          </aside>
        </div>
      )}
    </>
  );
}
