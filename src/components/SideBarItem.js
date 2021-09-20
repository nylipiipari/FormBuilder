import React from 'react';
import { useDrag } from "react-dnd";

export const SidebarItem = ({ item }) => {
  const [{ isDragging }, drag] = useDrag({
    type: item.type,
    item,
    collect: monitor => ({
      isDragging: monitor.isDragging()
    })
  });

  return (
    <button ref={drag} className="sidebar__item bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded" style={{ opacity: isDragging ? 0.5 : 1}}>
      {item.type}
    </button>
  )
}
