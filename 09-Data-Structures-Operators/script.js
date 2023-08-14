'use strict';

// Data needed for a later exercise
// const flights =
//   '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  
  order: function (startIndex, mainIndex) {
    return [this.starterMenu[startIndex], this.mainMenu[mainIndex]]
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
  orderDelivery: function({startIndex = 1, mainIndex = 1, time= '20:20', address}) {
    console.log(`Order received ${this.starterMenu[startIndex]} and ${this.mainMenu[mainIndex]} will be deliver to ${address} at ${time}`);
  },
  orderPasta: function(ing1, ing2, ing3) {
    console.log(`Here is yout delecuition pasta with ${ing1}, ${ing2} and ${ing3}`);
  },
  orderPizza: function(mainIngredient, ...otherIngredient) {
    console.log('Main ==>', mainIngredient);
    console.log('Other==>', otherIngredient);
    console.log('Other==>', ...otherIngredient);
  }
};

const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];

for (const item of menu) console.log('For of loop==>', item);
for (const item of menu.entries()) {
  console.log('with entries ==>', item);
}

for (const [i, el] of menu.entries()) {
  console.log(`${i + 1} : ${el}`);
}
// console.log('Entries==>', [...menu.entries()]);

// const rest1 = {
//   name: 'Capri',
//   numGuests: 0
// }

// const rest2 = {
//   name: 'La Pizza',
//   owner: 'Gioavani Rosi'
// }
//OR asigment operator
// rest1.numGuests = rest1.numGuests || 10;
// rest2.numGuests = rest2.numGuests || 10;
// rest1.numGuests ||= 12;
// rest2.numGuests ||= 12;


//Nullish asigment oprator (null or undifind)
// rest1.numGuests ??= 15;
// rest2.numGuests ??= 15;

// rest2.owner = rest2.owner && 'Meisam';
// rest1.owner = rest1.owner && 'Meisam';

// rest2.owner &&= 'Meisam'
// console.log('Rest 1==>', rest1);
// console.log('Rest 2==>', rest2);



// console.log('--------OR-----------');
// console.log('OR==>', 3 || 'Meisam'); // 3
// console.log('OR==>', '' || 'Meisam'); // Meisam
// console.log('OR==>', true || 0 ); //true
// console.log('OR==>', undefined  || null ); // null



// Nullish: null and Undifind ( NOT 0 or '')

// restaurant.numGuests = 0;
// const guests1 = restaurant.numGuests || 10;
// console.log('Guests1 Num==>', guests1);

// const guestCorrect = restaurant.numGuests ?? 10;
// console.log('Guest Correct ==>', guestCorrect);


// restaurant.numGuests = 23;
// restaurant.numGuests = 0;
// const guests1 = restaurant.numGuests ? restaurant.numGuests : 10;
// console.log('Guests1 Num==>', guests1);

// const guests2 = restaurant.numGuests || 12;
// console.log('Guests2 Num==>', guests2);

// console.log('--------AND-----------');
// console.log('AND ==>', 0 && 'Meisam');
// console.log('AND ==>', 7 && 'Meisam');
// console.log('AND ==>', 'Majid' && 23 && null && 'Meisam');



// // 1) Destructuring 
// // Seprade because on Right side of =
//  const arr = [1, 2, ...[3, 4]];
//  console.log('Array ==>', ...arr);

//  // Rest because on Left side of = 
//  const [a, b, ...others] = [1, 2, 3, 4, 5];
//  console.log('Rest of Right side ==>', a, b, ...others);

//  const [pizza, , risotto, ...othersFood] = [...restaurant.mainMenu,...restaurant.starterMenu ];
//  console.log('Rest of restaurant food ==>', pizza, risotto, ...othersFood);

// // Object
// const {sat, ...weekdays} =restaurant.openingHours;
// console.log('Object DES==>', sat, weekdays);

// // 2) Function

// const add = function(...num) {
//   let sum = 0;
//   for ( let i = 0; i < num.length; i++) {
//     sum += num[i];
//   }
//   console.log('Function Add ==>', sum);
// }

// add(2, 3);
// add(2, 3, 4, 5, 7, 8);
// add(2, 3, 8, 9, 7, 6, 14);

// const x = [3, 5, 8];
// add(...x)

// restaurant.orderPizza('mashroom', 'onion', 'olives', 'spinetch')

// Objects  shallow copy
// const newRestaurant = {foundedIn: 1998, ...restaurant, founder: "Meisam"};
// console.log('New Restaurant ==>', newRestaurant);

// const restaurantCopy = {...restaurant}
// restaurantCopy.name = "Meisam Restaurant";

// console.log('Shallow Copy ==>', restaurantCopy.name);
// console.log('Original  ==>', restaurant.name);


// const ingredient = [prompt('Let\'s Make a pasta? ingredient 1?'), prompt('ingredient 2?'), prompt('ingredient 3?')];
// console.log('ingredient  ==>', ingredient);

// restaurant.orderPasta(...ingredient)

// const arr = [7, 8, 9 ];
// const badNewArr = [1, 2, arr[0], arr[1], arr[2]]
// console.log('Bad Call Array ==>', badNewArr);
// const newArr = [1, 2, ...arr]
// console.log('Good Call Array ==>', newArr);
// console.log('Good Call Array ==>', ...newArr);


// const newMenu = [...restaurant.mainMenu, 'Ghorme'];
// console.log('New Menu ==>', newMenu);

// // Copy Array
// const newMenuCopy = [...restaurant.mainMenu]
// console.log('New Menu Copy ==>', newMenuCopy);

// // Joing to array
// const menu = [...restaurant.mainMenu, ...restaurant.starterMenu]
// console.log('Whole Menu ==>', ...menu);

// const str = "Meisam";
// const letters = [...str, '', 'S.o']
// console.log('Letters ==>', letters);
// console.log('String ==>', ...str);

// const [a, b, c, d, f] = newArr
// console.log('Des ==>', a, b, c, d, f);

// Object Destructuring
// restaurant.orderDelivery({
//   time: "22:20",
//   address: 'Tehran, North street',
//   startIndex: 2,
//   mainIndex: 2,
// })


// restaurant.orderDelivery({
//   address: 'Tehran, North street',
//   startIndex: 2,
// })
// const {name, openingHours, categories} = restaurant;
// console.log('Obj destructuring ==>', name, openingHours, categories);

// const {name: restaurantName, openingHours: hours, categories: tag} = restaurant;
// console.log('Create New Obj Destructuring ==>', restaurantName, hours, tag);

// const {menu = [], starterMenu: starter = []} = restaurant;
// console.log('Menu Restaurant ==>', menu, starter);

// let a = 1000;
// let b = 999;
// const obj = {a: 5, b: 10};
// ({a, b} = obj)

// console.log('Object Destructuring ==>', a, b);


// // Nested Objects

// const {fri : {open: o, close: c}}= openingHours;
// console.log('Nested Objs ==>', o, c);





// const arr = [2, 3, 4, 5];

// const a = arr[0];
// const b = arr[1];
// const c = arr[2];

// const [x, y, z, o] = arr;

// console.log('Print resualt Array ==>', x, y, z, o);
// console.log('Array log ==>', arr);

// let [main, , secondary] = restaurant.categories;
// console.log('new menu ==>', main, secondary);


// Switching with variable
// const temp = main; // temp     ==>  italian
// main = secondary; // main      ==>  vageterian
// secondary = temp; // secondary ==>  italian

// console.log('Change posion in the menu ==>', main, secondary);

// [secondary, main] = [main, secondary];
// console.log('use the arr for dataStructuer ==>', main, secondary);

// // Resice 2 return value from the function
// const [starter, mainCourse] = restaurant.order(2, 0)
// console.log('Get main and start food ==>', starter, mainCourse);

// // Nested destructuring 
// const nested = [2, 4,[5, 6]];
// const [i, , [j, k]] = nested;
// console.log('Nested Destructuring ==>', i, j, k);

// //Default Value

// const [p =1, q = 1, r =1]= [9, 10]

// console.log('Default Value Destructuring ==>', p, q, r);



/*
Data Structures, Modern Operators and Strings
Coding Challenge #1
We're building a football betting app (soccer for my American friends 😅)!
Suppose we get data from a web service about a certain game ('game' variable on
next page). In this challenge we're gonna work with that data.
Your tasks:
1. Create one player array for each team (variables 'players1' and
'players2')
2. The first player in any player array is the goalkeeper and the others are field
players. For Bayern Munich (team 1) create one variable ('gk') with the
goalkeeper's name, and one array ('fieldPlayers') with all the remaining 10
field players
3. Create an array 'allPlayers' containing all players of both teams (22
players)
4. During the game, Bayern Munich (team 1) used 3 substitute players. So create a
new array ('players1Final') containing all the original team1 players plus
'Thiago', 'Coutinho' and 'Perisic'
5. Based on the game.odds object, create one variable for each odd (called
'team1', 'draw' and 'team2')
6. Write a function ('printGoals') that receives an arbitrary number of player
names (not an array) and prints each of them to the console, along with the
number of goals that were scored in total (number of player names passed in)
7. The team with the lower odd is more likely to win. Print to the console which
team is more likely to win, without using an if/else statement or the ternary
operator.
Test data for 6.: First, use players 'Davies', 'Muller', 'Lewandowski' and 'Kimmich'.
Then, call the function again with players from game.scored
GOOD LUCK 😀
The Complete JavaScript Course 16
*/
// const game = {
//   team1: 'Bayern Munich',
//   team2: 'Borrussia Dortmund',
//   players: [
//     [
//     'Neuer',
//     'Pavard',
//     'Martinez',
//     'Alaba',
//     'Davies',
//     'Kimmich',
//     'Goretzka',
//     'Coman',
//     'Muller',
//     'Gnarby',
//     'Lewandowski',
//     ],
//     [
//     'Burki',
//     'Schulz',
//     'Hummels',
//     'Akanji',
//     'Hakimi',
//     'Weigl',
//     'Witsel',
//     'Hazard',
//     'Brandt',
//     'Sancho',
//     'Gotze',
//     ],
//   ],
// score: '4:0',
// scored: ['Lewandowski', 'Gnarby', 'Lewandowski',
// 'Hummels'],
// date: 'Nov 9th, 2037',
// odds: {
//     team1: 11.33,
//     x: 3.25,
//     team2: 6.5,
//   },
// };

// // .1
// const [players1, players2] = game.players
// console.log('dis==>', players1, players2);

// //2.
// const [gk, ...fieldPlayers] = players1;
// console.log('nuber two==>', 'Gol Keeper =>', gk, fieldPlayers);

// //3.
// const allPlayers = [...players1, ...players2]
// console.log('AllPlayers==>', allPlayers);

// //4.
// const players1Final = [...players1, 'Meisam', 'Ali', 'Majid']
// console.log('Players Final one==>', players1Final);

// //5. 
// const {odds: {team1, x:draw, team2}} = game;
// console.log('Teams==>', team1, draw, team2);

// //6.
// const printGoals = function(...players) {
//   console.log('Playsers==>', players );
//   console.log(`${players.length} goals were scored`)
// }

// // printGoals( 'Davies', 'Muller', 'Lewandowski', 'Kimmich')
// printGoals(...game.scored)

// //7. 
// team1 < team2 && console.log('Team one is more likely to win');
// team1 > team2 && console.log('Team two is more likely to win');