import React from 'react';

export const Sidebar = props => {
  return (
    <div className="sidebar bg-gray-500 w-1/4 p-4 flex flex-col">
      {props.children}
    </div>
  )
}
