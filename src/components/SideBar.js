import React from 'react';
import { SidebarItem } from './SidebarItem';
import { ITEMS } from '../constants';

export const Sidebar = () => {
  return (
    <div className="sidebar bg-gray-500 w-1/4 p-4 grid grid-cols-2 gap-2 content-start">
      {Object.values(ITEMS).map(item => (
        <SidebarItem key={item.id} item={item} />
      ))}
    </div>
  )
}
