import shortid from "shortid";
import { ItemTypes } from "./ItemTypes";

export const Items = [
  {
    id: shortid.generate(),
    type: ItemTypes.TEXT
  },
  {
    id: shortid.generate(),
    type: ItemTypes.BOX
  },
  {
    id: shortid.generate(),
    type: ItemTypes.CHECKBOX
  },
];
