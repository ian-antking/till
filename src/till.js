function Till(){
  this.products = [
    {
      name: 'apple',
      barcode: 123,
      price: 5,
    },
    {
      name: 'banana',
      barcode: 456,
      price: 6,
    },
    {
      name: 'orange',
      barcode: 789,
      price: 7,
    },
    {
      name: 'pineapple',
      barcode: 5367,
      price: 80,
    },
    {
      name: 'kiwi',
      barcode: 756,
      price: 25,
    }
  ];
  this.basket = [];
};

Till.prototype.scan = function(barcode){
  return this.products.find((product) => {
    return product.barcode === barcode;
  });
}

Till.prototype.addToBasket = function(barcode){
  if(!this.scan(barcode)){
    throw new Error('Product not found');
  }else{
  this.basket.push(this.scan(barcode));
  }
}

Till.prototype.totalPrice = function(){
  return this.basket.reduce((total, item) => {
    return total + item.price;
  }, 0);
}

Till.prototype.removeFromBasket = function(barcode){
  const item = this.scan(barcode);
  const index = this.basket.indexOf(item);
  if(index === -1){
    throw new Error('Product not in basket');
  }else{
  this.basket.splice(index, 1);
  };
}

module.exports = Till;