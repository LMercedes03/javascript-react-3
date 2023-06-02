// 
// File: App.Config.js
// Auth: Martin Burolla
// Date: 10/19/2022
// Desc: All configuration options for the application.
//

export const drinkPrices = [
    { 
        id: 1,
        type: "lemonade",
        price: 1.00 
    },
    { 
        id: 2,
        type: "tea",
        price: 2.00 
    },
    { 
        id: 3,
        type: "coffee",
        price: 3.00 
    },
    { 
        id: 4,
        type: "milk",
        price: 4.00 
    }
]

export const getPriceForDrink = (type) => {
    return drinkPrices.find(p => p.type === type).price
}

export const foodPrices = [
    { 
        id: 1,
        type: "croissant",
        price: 2.00 
    },
    { 
        id: 2,
        type: "muffin",
        price: 3.00 
    },
    { 
        id: 3,
        type: "cookie",
        price: 1.00 
    },
    { 
        id: 4,
        type: "maccaron",
        price: 4.00 
    }
]

export const getPriceForFood = (type) => {
    return foodPrices.find(p => p.type === type).price
}

export const dessertPrices = [
    { 
        id: 1,
        type: "cheesecake",
        price: 4.00 
    },
    { 
        id: 2,
        type: "icecream",
        price: 3.00 
    },
    { 
        id: 3,
        type: "brownie",
        price: 2.00 
    }
]

export const getPriceForDessert = (type) => {
    return dessertPrices.find(p => p.type === type).price
}