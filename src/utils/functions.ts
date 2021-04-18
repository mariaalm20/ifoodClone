export const listItems = items => {
  let objectItems: any = [];

  for (let value of items) {
    objectItems.push({
      key: items.indexOf(value),
      name: value,
    });
  }

  return objectItems;
};

export const listItemsCategory = items => {
  let objectItems: any = [];

  for (let value of items) {
    objectItems.push({
      key: items.indexOf(value),
      name: value.title,
      image: value.image,
    });
  }

  return objectItems;
};
