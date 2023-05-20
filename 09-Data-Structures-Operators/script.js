'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  
  order: function (startIndex, startMain) {
    return [this.starterMenu[startIndex], this.mainMenu[startMain]]
  },
  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
};


// const arr = [2, 3, 4, 5];

// const a = arr[0];
// const b = arr[1];
// const c = arr[2];

// const [x, y, z, o] = arr;

// console.log('Print resualt Array ==>', x, y, z, o);
// console.log('Array log ==>', arr);

let [main, , secondary] = restaurant.categories;
console.log('new menu ==>', main, secondary);


// Switching with variable
// const temp = main; // temp     ==>  italian
// main = secondary; // main      ==>  vageterian
// secondary = temp; // secondary ==>  italian

// console.log('Change posion in the menu ==>', main, secondary);

[secondary, main] = [main, secondary];
console.log('use the arr for dataStructuer ==>', main, secondary);

// Resice 2 return value from the function
const [starter, mainCourse] = restaurant.order(2, 0)
console.log('Get main and start food ==>', starter, mainCourse);

// Nested destructuring 
const nested = [2, 4,[5, 6]];
const [i, , [j, k]] = nested;
console.log('Nested Destructuring ==>', i, j, k);

//Default Value

const [p =1, q = 1, r =1]= [9, 10]

console.log('Default Value Destructuring ==>', p, q, r);




