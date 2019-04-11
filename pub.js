class Pub {
  constructor(name, till, drinks, food){
    this.name = name;
    this.till = till;
    this.drinks = drinks;
    this.food = food;
    this.stock = {};
  }

  stockTake(){
  const stockTake = {};
  const allStock = this.drinks.concat(this.food);

  for(const item of allStock){
    const key = item.name;
    if(stockTake[key]) {
      stockTake[key] += 1;
    }else{
      stockTake[key] = 1;
    };
  };
  this.stock = stockTake;
}

stockValue(){
  const allStock = this.drinks.concat(this.food);
    return allStock.reduce((total, item) => {
      return total + item.price;
    }, 0);
}


}

module.exports = Pub;
