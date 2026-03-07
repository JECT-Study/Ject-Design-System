export function TableOfContents() {
  return (
    <aside className="sticky top-0 hidden h-screen shrink-0 overflow-y-auto border-x border-slate-200 xl:block [&::-webkit-scrollbar]:hidden">
      <nav className="h-screen w-60 px-10 py-4">
        <p className="text-sm font-semibold text-slate-900">문서</p>
        <ul className="flex flex-col gap-2 text-sm">
          <li>목차 1</li>
          <li>목차 2</li>
          <li>목차 3</li>
        </ul>
      </nav>
    </aside>
  );
}
