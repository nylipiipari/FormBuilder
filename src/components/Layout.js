import produce from 'immer';
import React from 'react';
import { useDrop } from 'react-dnd';
import { ItemTypes } from '../utils/ItemTypes';
import { LayoutItem } from './LayoutItem';

export const Layout = ({ moveItem, formFields, setFormFields }) => {
  const moveLayoutItem = (dragIndex, hoverIndex) => {
    setFormFields(
      produce(draft => {
        draft.splice(dragIndex, 0, draft.splice(hoverIndex, 1)[0]);
      })
    );
  };

  const [{ isOver }, drop] = useDrop({
    accept: Object.values(ItemTypes),
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
      className="main w-3/4 p-4"
    >
      {formFields.map((formField, index) => (
        <LayoutItem key={formField.id} id={formField.id} index={index} text={formField.component.name} moveLayoutItem={moveLayoutItem} />
      ))}
    </div>
  )
}
