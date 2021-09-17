import React from 'react';
import { SideBarItem } from './SideBarItem';
import { ITEMS } from '../constants';

export const SideBar = () => {
  return (
    <div className="side-bar bg-gray-500 w-1/4 p-4">
      {Object.values(ITEMS).map(item => (
        <SideBarItem key={item.id} item={item} />
      ))}
    </div>
  )
}
