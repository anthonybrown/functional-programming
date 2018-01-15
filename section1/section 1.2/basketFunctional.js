const basket = [];

const deepClone = (obj) => {
  return JSON.parse(JSON.stringify(obj))
}

const addElement = (basket, itemName, itemPrice) => {
  return deepClone(basket).concat([
    {
      itemName,
      itemPrice
    }
  ]);
};

const cupcake = addElement (
  basket,
  'cupcake',
  2.25
);

const basket1 = addElement(basket, 'Tea', 1.55)
const basket2 = addElement(basket1, 'Biscuits', 2.50)

basket2[0].itemPrice = 2.05;
console.log(basket1[0].itemPrice);
