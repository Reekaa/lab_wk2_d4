class Customer{
  constructor(name, wallet, age, drunkness = 0){
    this.name = name;
    this.wallet = wallet;
    this.age = age;
    this.drunkness = drunkness;
  }

  buyDrink(drink, pub){
    // go to pub drinks
    // look at each drink to see if it matches with what customer wantes to buy
    // return price of that drink
    // reduce wallet by that price
    if(this.age >= 18 || this.drunkness >= 20){
      let drinkPrice = 0
      pub.drinks.forEach((alcohol) => {
        if(alcohol.name === drink){
          drinkPrice += alcohol.price
        };
      });
      this.wallet = this.wallet - drinkPrice;
      pub.till = pub.till + drinkPrice;
      this.addDrunkness(drink, pub);
    };
  };

  addDrunkness(drink, pub){
    let drunkLevel = 0;
    pub.drinks.forEach((alcohol) => {
      if (alcohol.name === drink){
        drunkLevel += alcohol.alcoholLevel;
      }
    });
    this.drunkness = this.drunkness + drunkLevel;
  };
}

module.exports = Customer;
