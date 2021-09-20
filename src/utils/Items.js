import shortid from "shortid";
import { ItemTypes } from "./ItemTypes";

export const Items = [
  {
    id: shortid.generate(),
    type: ItemTypes.TEXT,
    component: {
      type: "text",
      name: 'Text',
    },
  },
  {
    id: shortid.generate(),
    type: ItemTypes.BOX,
    component: {
      type: 'box',
      name: 'Box',
    },
  },
  {
    id: shortid.generate(),
    type: ItemTypes.CHECKBOX,
    component: {
      type: 'checkbox',
      name: 'Checkbox',
    },
  },
];
