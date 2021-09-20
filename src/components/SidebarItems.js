import React from 'react';
import { SidebarItem } from './SidebarItem';
import { Items } from '../utils/Items';

export const SidebarItems = () => {
  return (
    <div className="sidebar__items grid grid-cols-2 gap-2 content-start">
      {Object.values(Items).map(item => (
        <SidebarItem key={item.id} item={item} />
      ))}
    </div>
  )
}
