import React from 'react';
import { useDrop } from 'react-dnd';
import { ITEM_TYPES } from '../constants';

export const Layout = ({ moveItem, formFields }) => {
  const [{ isOver }, drop] = useDrop({
    accept: Object.values(ITEM_TYPES),
    drop: item => {
      moveItem(item);
    },
    collect: monitor => ({
      isOver: monitor.isOver(),
      canDrop: monitor.canDrop()
    })
  });

  return (
    <div
      ref={drop}
      className="main w-3/4"
      style={{ backgroundColor: isOver ? '#dadada' : '#ffffff'}}
    >
      {formFields.map(formField => (
        <div key={formField.id}>{formField.component.name}</div>
      ))}
    </div>
  )
}
