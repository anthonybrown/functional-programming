const basket = [];

const addElement = ( itemName, itemPrice ) => {
  // this is a side-effect. In functional programming, this is wrong.
  basket.push({
    itemName,
    itemPrice
  });
};

addElement( 'Biscuits', 1 );

console.log( basket );
