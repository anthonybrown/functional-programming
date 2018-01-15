const createInvoice = (invoiceNumber) => {
  return {
    invoiceNumber,
    items: []
  };
}

const clone = (o) => {
  return JSON.parse(JSON.stringify(o));
}
/*
** This is a pure functional way of writing this addItem function.
*/
// const addItem = (invoice, quantity, itemPrice, description) => {
//   const invoiceItems = clone(invoice.items);
//   const newItem = {
//     quantity,
//     itemPrice,
//     description
//   };
//
//   return {
//     invoiceNumber: invoice.invoiceNumber,
//     items: [...invoiceItems, newItem]
//   };
// }
/*
** we can make the code more understandable/ readable
** if we break some rules of functional programming.
** Here we are using the push method, which mutates the array.
*/
const addItem = (invoice, quantity, itemPrice, description) => {
  const newInvoice = clone(invoice);
  newInvoice.items.push({
    quantity,
    itemPrice,
    description
  });
  return newInvoice;
}

const calculateSum = (invoice) => {
  const logReducer = (acc, item) => {
    console.log('acc, item: ', acc, item );
    return acc + item.quantity * item.itemPrice;
  }
  const reducer = (acc, item) => {
    acc + item.quantity * item.itemPrice;
  }
  return invoice.items.reduce(logReducer, 0)
}

const invoice1a = createInvoice(1);
const invoice2a = createInvoice(2);

const invoice1b = addItem(invoice1a, 2, 10, 'T-Shirt');
const invoice1  = addItem(invoice1b, 3, 25, 'Bag');

const invoice2b = addItem(invoice2a, 10, 1, 'Light bulb');
const invoice2  = addItem(invoice2b, 2, 10, 'Pillow');

console.log('Invoice1 sum: ', calculateSum( invoice1 ));
console.log('Invoice2 sum: ', calculateSum( invoice2 ));
