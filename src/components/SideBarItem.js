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
    <div ref={drag} className="sidebar__item rounded text-center cursor-move bg-blue-500 hover:bg-blue-600" style={{ opacity: isDragging ? 0.5 : 1}}>
      <span className="sidebar__item__label text-gray-50">
        {item.component.name}
      </span>
    </div>
  )
}
