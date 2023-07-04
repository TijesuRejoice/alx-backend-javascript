const groceriesList = () => {
  const buffer = new Map();
  const items = {
    Apples: 10,
    Tomatoes: 10,
    Pasta: 1,
    Rice: 1,
    Banana: 5,
  };
  for (const key of Object.keys(items)) {
    buffer.set(key, items[key]);
  }
  return buffer;
};

export default groceriesList;
