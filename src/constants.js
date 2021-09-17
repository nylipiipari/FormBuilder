import shortid from "shortid";

export const ITEM_TYPES = {
  BOX: 'box',
  FIELD: 'field',
};

export const ITEMS = [
  {
    id: shortid.generate(),
    type: ITEM_TYPES.FIELD,
    component: {
      type: "input",
      name: 'Input Field',
    },
  },
  {
    id: shortid.generate(),
    type: ITEM_TYPES.BOX,
    component: {
      type: 'box',
      name: 'Box',
    },
  },
  {
    id: shortid.generate(),
    type: ITEM_TYPES.BOX,
    component: {
      type: 'box',
      name: 'Box2',
    },
  },
];
