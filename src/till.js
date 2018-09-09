function Till(){
  this.products = [];
  this.basket = [];
};

Till.prototype.scan = function(barcode){
  return items.find((item) => {
    return item.barcode === barcode;
  });
}

Till.prototype.addToBasket = function(item){
  this.basket.push(item);
}

Till.prototype.totalPrice = function(){
  return this.basket.reduce((total, item) => {
    return total + item.price;
  }, 0);
}

Till.prototype.removeFromBasket = function(barcode){
  const item = scan(barcode, this.basket);
  const index = this.basket.indexOf(item);
  this.basket.splice(index, 1);
}

module.exports = Till;