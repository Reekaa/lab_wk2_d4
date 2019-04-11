class Customer{
  constructor(name, wallet, age, drunkness = 0){
    this.name = name;
    this.wallet = wallet;
    this.age = age;
    this.drunkness = drunkness;
  }
}

module.exports = Customer;
