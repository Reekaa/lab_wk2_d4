const Pub = require('../pub');
const Customer = require('../customer');
const Drink = require('../drink');
const Food = require('../food');

describe('pub tests', () => {
  let pub;
  let drunkBob;
  let youngNeil;
  let gin;
  let tequila;
  let fishChips;

  beforeEach(() => {
    pub = new Pub('The Drunken Bob', 1000, [gin, tequila]);
    drunkBob = new Customer('Bob', 500, 37);
    youngNeil = new Customer('Neil', 30, 16);
    gin = new Drink('Botanist', 10, 5);
    tequila = new Drink('tequila', 5, 21);
    fishChips = new Food('Fish and chips', 6, 5);
  })

  test('pub should have a name', () => {
    expect(pub.name).toBe('The Drunken Bob');
  });

  test('pub should have a till', () => {
    expect(pub.till).toBeGreaterThan(0);
  });

  test('pub should have a collection of drinks', () => {
    expect(pub.drinks.length).toBeGreaterThan(0);
  });

  test('drink should have a name', () => {
    expect(gin.name).toBe('Botanist');
  });

  test('drink should have a price', () => {
    expect(gin.price).toBe(10);
  });

  test('customer should have a name', () => {
    expect(drunkBob.name).toBe('Bob');
  });

  test('customer should have a wallet', () => {
    expect(drunkBob.wallet).toBeGreaterThan(0);
  });

  test('customer wallet should decrease by buying a drink', () => {
    drunkBob.buyDrink('Botanist', pub);
    expect(drunkBob.wallet).toBe(490);
  });

  test('pub till should increase when customer buys a drink', () => {
    drunkBob.buyDrink('Botanist', pub);
    expect(pub.till).toBe(1010);
  });

  test('pub checks age of customer before serving', () => {
    youngNeil.buyDrink('Botanist', pub);
    expect(youngNeil.wallet).toBe(30);
  });

  test('customer drunkness level goes up after each drink', () => {
    drunkBob.buyDrink('Botanist', pub);
    expect(drunkBob.drunkness).toBe(5);
  });

  test('pub refuses to serve people who are too drunk', () => {
    drunkBob.buyDrink('tequila', pub);
    drunkBob.buyDrink('tequila', pub);
    expect(pub.till).toBe(1005);
  });

  xtest('food should have a name', () => {
    expect(food.name).toBe('Fish and chips');
  });

  xtest('food should have a price', () => {
    expect(food.price).toBe(6);
  });

  xtest('food should have a rejuv level', () => {
    expect(food.rejuvenationLevel).toBe(5);
  });

  xtest('food reduces drunkeness level by rejuv level', () => {
    drunkBob.buyDrink('tequila', pub);
    drunkBob.buyFood('Fish and chips', pub);
    expect(drunkBob.drunkness).toBe(16);
  });

  xtest('pub should have a stock to keep track of drinks', () => {
    expect(pub.stock).toEqual({ 'Botanist': 2, 'tequila': 2 });
  });

  xtest('pub should be able to check total value of stock', () => {
    expect(pub.stockValue()).toBe(30);
  });
})
