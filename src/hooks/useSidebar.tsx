import { useContext } from 'react';
import { SidebarContext } from '../contexts/sidebar';

export function useSidebar() {
  const context = useContext(SidebarContext);

  return context;
}
