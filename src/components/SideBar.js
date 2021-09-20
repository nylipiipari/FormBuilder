import React from 'react';
import { SidebarActions } from './SidebarActions';
import { SidebarItems } from './SidebarItems';

export const Sidebar = ({ formFields }) => {
  return (
    <div className="sidebar bg-gray-500 w-1/4 p-4 flex flex-col">
      <SidebarItems />
      <SidebarActions formFields={formFields} />
    </div>
  )
}
