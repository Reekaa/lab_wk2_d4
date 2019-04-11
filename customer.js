class Customer{
  constructor(name, wallet, age, drunkness = 0){
    this.name = name;
    this.wallet = wallet;
    this.age = age;
    this.drunkness = drunkness;
  }

  findDrinkByName(drink, pub){
    const foundDrink = pub.drinks.find((alcohol) => {
      return alcohol.name === drink;
    });
    return foundDrink;
  }

  buyDrink(drink, pub){
    if(this.age >= 18 && this.drunkness <= 20){
      const drinkMatch = this.findDrinkByName(drink, pub);
      const drinkPrice = drinkMatch.price;
      this.wallet = this.wallet - drinkPrice;
      pub.till = pub.till + drinkPrice;
      this.addDrunkness(drink, pub);
    };
  };

  addDrunkness(drink, pub){
    const drinkMatch = this.findDrinkByName(drink, pub);
    const drunkLevel = drinkMatch.alcoholLevel;
    this.drunkness = this.drunkness + drunkLevel;
  };
  // checkDrunk(){
  //   return this.drunkness
  // }
  buyFood(food, pub){
    const foodList = pub.food.filter(meal => meal.name === food);

    const foodRejuv = foodList.reduce((total, item) => {
       return total + item.rejuvLevel;
    }, 0);
    this.drunkness = this.drunkness - foodRejuv;
  };

}


module.exports = Customer;
