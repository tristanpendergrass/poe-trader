const Item = require('../models/item.model.js');

// to do: pull from config.json the list of items
const items = [
  new Item(4, 'Chaos Orb'),
  new Item(8, 'Jeweller Orb')
];

module.exports = function getItemById(id) {
  const result = items.find(item => item.id === id);

  if (result) {
    return result;
  } else {
    throw `No item with id ${ id }`;
  }
};
