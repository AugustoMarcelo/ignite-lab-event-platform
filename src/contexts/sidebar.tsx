import { createContext, ReactNode, useState } from 'react';

interface SidebarContextData {
  sidebarIsOpened: Boolean;
  openSidebar: () => void;
  closeSidebar: () => void;
}

interface SidebarProviderProps {
  children: ReactNode;
}

const SidebarContext = createContext({} as SidebarContextData);

function SidebarProvider({ children }: SidebarProviderProps) {
  const [sidebarIsOpened, setSidebarIsOpened] = useState(false);

  function openSidebar() {
    setSidebarIsOpened(true);
  }

  function closeSidebar() {
    setSidebarIsOpened(false);
  }

  return (
    <SidebarContext.Provider
      value={{ sidebarIsOpened, openSidebar, closeSidebar }}
    >
      {children}
    </SidebarContext.Provider>
  );
}

export { SidebarProvider, SidebarContext };
