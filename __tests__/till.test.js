const Till = require('../src/till');

let till = null;

beforeEach(() => {
  till = new Till();
});

test('New till is an object', () => {
  expect(till).toBeInstanceOf(Object);
});

test('scan finds an item by its barcode', () => {
  expect(till.scan(456)).toEqual({name: 'banana', barcode: 456, price: 6,});
});

test('addToBasket adds an item to the basket', () => {
  till.addToBasket(756);
  expect(till.basket[0].name).toBe('kiwi');
});

test('Basket can hold array of products', ()=> {
  const purchases = [123, 456, 789, 5367, 756];
  const results = ['apple', 'banana', 'orange', 'pineapple', 'kiwi']
  purchases.map(purchase => {
    till.scan(purchase);
  });

  for(let i = 0; i < till.basket.length; i++){
    expect(till.basket[i].name).toBe(results[i]);
  };

});

// test('totalPrice gets the total price of items in the basket', () => {
//   const basket = [orange, orange, pineapple];

//   expect(totalPrice(basket)).toEqual(94);
// });

// test('removeFromBasket removes the item with the given barcode from the basket', () => {
//   const basket = [kiwi, orange, pineapple];

//   removeFromBasket(789, basket);

//   expect(basket).not.toContain(orange);
// });