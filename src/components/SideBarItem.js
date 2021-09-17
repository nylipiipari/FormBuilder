import React from 'react';
import { useDrag } from "react-dnd";

export const SideBarItem = ({ item }) => {
  const [{ isDragging }, drag] = useDrag({
    type: item.type,
    item,
    collect: monitor => ({
      isDragging: monitor.isDragging()
    })
  });

  return (
    <div ref={drag} className="side-bar-item border-2 border-gray-400 text-gray-50 mb-3" style={{ opacity: isDragging ? 0.5 : 1}}>
      {item.component.type}
    </div>
  )
}
