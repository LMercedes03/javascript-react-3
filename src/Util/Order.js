//
// File: Order.js
// Auth: Martin Burolla
// Date: 10/19/2022
// Desc: The one and only place where the customer order is calculated.
//
//       NOTE: This is an academic example and should be treated as such!
//       This logic MUST be stored on the server to prevent the client from
//       altering the cost of the product.
//

import { getPriceForDrink, getPriceForFood, getPriceForDessert } from './App.Config';

/**
 * @param {*} drinks 
 * @returns An array of objects that the customer has ordered.
 *  [
      { 
        item: 'tea', 
        qty: 1, 
        price: 2, 
        subTotal: 2
      }
    ] 
 */

export const buildOrder = (drinks) => {
  let total = 0
  let arrayOfDrinks = Object.keys(drinks)

  const arrayOfDrinkObjects = arrayOfDrinks.map(i => {
      return {
          item: i,
          qty: drinks[i]
      }
  })

  const allItems = arrayOfDrinkObjects.map(i => {
      total += i.qty * getPriceForDrink(i.item)
      return {
          ...i,
          price: getPriceForDrink(i.item),
          subTotal: i.qty * getPriceForDrink(i.item)
      }
  })

  const order = allItems.filter(i => i.qty > 0)

  return {
      order,
      total
  }
}

/**
 * @param {*} foods 
 * @returns An array of objects that the customer has ordered.
 *  [
      { 
        item: 'tea', 
        qty: 1, 
        price: 2, 
        subTotal: 2
      }
    ] 
 */

export const buildFoodOrder = (foods) => {
  let foodTotal = 0
  let arrayOfFoods = Object.keys(foods)

  const arrayOfFoodObjects = arrayOfFoods.map(i => {
      return {
          item: i,
          qty: foods[i]
      }
  })

  const allItems = arrayOfFoodObjects.map(i => {
    foodTotal += i.qty * getPriceForFood(i.item)
      return {
          ...i,
          price: getPriceForFood(i.item),
          subTotal: i.qty * getPriceForFood(i.item)
      }
  })

  const foodOrder = allItems.filter(i => i.qty > 0)

  return {
    foodOrder,
    foodTotal
  }
}

/**
 * @param {*} desserts 
 * @returns An array of objects that the customer has ordered.
 *  [
      { 
        item: 'tea', 
        qty: 1, 
        price: 2, 
        subTotal: 2
      }
    ] 
 */

export const buildDessertOrder = (desserts) => {
  let dessertTotal = 0
  let arrayOfDesserts = Object.keys(desserts)

  const arrayOfDessertObjects = arrayOfDesserts.map(i => {
      return {
          item: i,
          qty: desserts[i]
      }
  })

  const allItems = arrayOfDessertObjects.map(i => {
      dessertTotal += i.qty * getPriceForDessert(i.item)
      return {
          ...i,
          price: getPriceForDessert(i.item),
          subTotal: i.qty * getPriceForDessert(i.item)
      }
  })

  const dessertOrder = allItems.filter(i => i.qty > 0)

  return {
      dessertOrder,
      dessertTotal
  }
}


/**
* @param {*} orders 
* @returns The total amount of all the orders.
*/
export const calcTotalForAllOrders = (orders) => {
  return (orders) ? orders.map(i => i.total).reduce((a,b)=> a + b, 0) : 0
}

/**
* @param {} drinks
* @returns The total number of drinks the customer has ordered.
*/
export const getTotalNumberDrinks = (drinks) => {
  let totalDrinks = 0
  const arrayOfDrinks = Object.keys(drinks)
  arrayOfDrinks.forEach(i => {
      totalDrinks += drinks[i]
  })
  return totalDrinks
}

/**
* @param {} foods
* @returns The total number of foods the customer has ordered.
*/
export const getTotalNumberFoods = (foods) => {
  let totalFoods = 0
  const arrayOfFoods = Object.keys(foods)
  arrayOfFoods.forEach(i => {
      totalFoods += foods[i]
  })
  return totalFoods
}

/**
* @param {} desserts
* @returns The total number of desserts the customer has ordered.
*/
export const getTotalNumberDesserts = (desserts) => {
  let totalDesserts = 0
  const arrayOfDesserts = Object.keys(desserts)
  arrayOfDesserts.forEach(i => {
      totalDesserts += desserts[i]
  })
  return totalDesserts
}