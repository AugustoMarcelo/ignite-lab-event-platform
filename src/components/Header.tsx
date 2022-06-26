import { List, X } from 'phosphor-react';
import { useSidebar } from '../hooks/useSidebar';
import { Logo } from './Logo';

export function Header() {
  const { openSidebar, closeSidebar, sidebarIsOpened } = useSidebar();

  function toggleSidebar() {
    if (sidebarIsOpened) {
      closeSidebar();
      return;
    }

    openSidebar();
  }

  return (
    <header className="w-full py-3 px-6 flex items-center justify-between bg-gray-700 border-b border-gray-600 md:justify-center md:py-5 md:px-0">
      <div className="">
        <Logo className="w-[167px] h-[23px] md:w-[237px] md:h-[34px]" />
      </div>

      <button className="flex items-center md:hidden" onClick={toggleSidebar}>
        <span className="text-sm font-normal mr-2">Aulas</span>
        {sidebarIsOpened ? (
          <X size={32} className="text-blue-500" />
        ) : (
          <List size={32} className="text-blue-500" />
        )}
      </button>
    </header>
  );
}
