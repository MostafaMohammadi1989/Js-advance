"use strict";

// let hasDriversLicense = false;
// const passTest = true;

// if (passTest) hasDriverLicense = true;
// if (hasDriversLicense) console.log("I can drive :)");

// function myName() {
//   console.log("Meisam");
// }

// myName();
// myName();
// myName();

// function fruitProccesor(apples, oranges) {
//   //   console.log(apples, oranges);

//   const juice = `We have ${apples} and other fruits have ${oranges}`;

//   return juice;
// }

// const applesAndOranges = fruitProccesor(5, 2);
// console.log(applesAndOranges);

// const juices = fruitProccesor(10, 6);
// console.log(juices);

//Function Decaration

// function clacAge1(birthday) {
//   return 2023 - birthday;
// }

// const age1 = clacAge1(1991);
// console.log(age1);

// //Function Exprestion

// const clacAge2 = function (birthday) {
//   return 2023 - birthday;
// };

// const age2 = clacAge2(1991);
// console.log(age2);

// Arrow Function

// const age3 = (brithday) => 2037 - brithday;
// const calcAge1 = age3(1989);
// console.log(calcAge1);

// const retirmentUntilAge = (brithday, firstname, job) => {
//   const age = 2037 - brithday;
//   const retirment = 65 - age;
//   return `${firstname} is work about ${job} untile ${retirment} years to retierment`;
// };

// console.log(retirmentUntilAge(1989, "Meisam", "Chef"));
// console.log(retirmentUntilAge(1980, "Majid", "Computer programing"));

//Function calling other function

// const fruitCuts = (fruit) => {
//   return fruit * 4;
// };

// const fruitProccessor = (apples, oranges) => {
//   const applesPice = fruitCuts(apples);
//   const orangesPice = fruitCuts(oranges);
//   const juice = `Juice makeing a ${applesPice} apples and ${orangesPice} orange`;
//   return juice;
// };

// console.log(fruitProccessor(2, 3));
// console.log(fruitProccessor(5, 4));

// Reveiw funtion

// const clacAge = (brithday) => {
//   return 2037 - brithday; //46
// };

// const retirmentUntilAge = (brithday, firstname) => {
//   const age = clacAge(brithday); //46
//   const retirment = 65 - age; //65 - 46
//   if (retirment > 0) {
//     console.log(`${firstname} it has  ${retirment} years to retirment. `);
//   } else {
//     console.log(`${firstname} it's to retirment`);
//     return -1;
//   }
// };

// console.log(retirmentUntilAge(1991, "Meisam"));
// console.log(retirmentUntilAge(2000, "Meisam"));

// 2037 - 1991 = 46

/* 
Function part coding challenge
Coding Challenge #1
Back to the two gymnastics teams, the Dolphins and the Koalas! There is a new
gymnastics discipline, which works differently.
Each team competes 3 times, and then the average of the 3 scores is calculated (so
one average score per team).
A team only wins if it has at least double the average score of the other team.
Otherwise, no team wins!
Your tasks:
1. Create an arrow function 'calcAverage' to calculate the average of 3 scores
2. Use the function to calculate the average for both teams
3. Create a function 'checkWinner' that takes the average score of each team
as parameters ('avgDolhins' and 'avgKoalas'), and then logs the winner
to the console, together with the victory points, according to the rule above.
Example: "Koalas win (30 vs. 13)"
4. Use the 'checkWinner' function to determine the winner for both Data 1 and
Data 2
5. Ignore draws this time
Test data:
§ Data 1: Dolphins score 44, 23 and 71. Koalas score 65, 54 and 49
§ Data 2: Dolphins score 85, 54 and 41. Koalas score 23, 34 and 27
Hints:
§ To calculate average of 3 values, add them all together and divide by 3
§ To check if number A is at least double number B, check for A >= 2 * B.
Apply this to the team's average scores 😉
GOOD LUCK 😀
 */

// 1. Create an arrow function 'calcAverage' to calculate the average of 3 scores

// const calcAverage = (s1, s2, s3) => {
//   return (s1 + s2 + s3) / 3;
// };
// <<<<<<< HEAD
// // 2. Use the function to calculate the average for both teams
// =======
// 2. Use the function to calculate the average for both teams
// >>>>>>> 6b409ae326153a5bab6887ded0c8f3b16aafc579

// let scoreDolphins = calcAverage(35, 54, 41);
// let scoreKoalas = calcAverage(23, 30, 20);

// 3. Create a function 'checkWinner' that takes the average score of each team
// as parameters ('avgDolphins' and 'avgKoalas'), and then logs the winner
// to the console, together with the victory points, according to the rule above.
// Example: "Koalas win (30 vs. 13)"

// const checkWinner = function (avgDolphins, avgKoalas) {
//   if (avgDolphins >= 2 * avgKoalas) {
//     console.log(`Dolphins win (${avgDolphins} vs. ${avgKoalas})`);
//   } else if (avgKoalas >= 2 * avgDolphins) {
//     console.log(`Koalas win (${avgKoalas} vs. ${avgDolphins})`);
//   } else {
//     // if (avgDolphins < 2 * avgKoalas || avgKoalas < 2 * avgDolphins)
//     // console.log(
//     //   `together with the victory points Dolphins Score is ${avgDolphins} and Koales Score is ${avgKoalas}`
//     // );
//     // return;
//     console.log(`No team wins`);
//   }
// };

// checkWinner(scoreDolphins, scoreKoalas);
// checkWinner(537, 222);

// scoreDolphins = calcAverage(85, 54, 41);
// scoreKoalas = calcAverage(23, 30, 20);
// console.log(scoreDolphins, scoreKoalas);
// checkWinner(scoreDolphins, scoreKoalas);

//Array introduce
// const years = new Array(1992, 1989, 2000, 2023);
// console.log(years);
// const friends = ["Majid", "Adel", "Navid"];
// const firstnName = "Meisam";
// const meisam = [firstnName, "Mohammdi", 2023 - 1989, "Teacher", friends];
// console.log(meisam);
// console.log(meisam.length);
// console.log(meisam[meisam.length - 1]);
// console.log(meisam[2]);
// console.log(meisam[4][0]);

// friends[1] = "Porya";
// console.log(friends);

// const clacAge = (brithday) => {
//   return 2037 - brithday;
// };

// const years = [1991, 1989, 1999, 2000];
// const age1 = clacAge(years[0]);
// const age2 = clacAge(years[1]);
// const age3 = clacAge(years[years.length - 1]);
// console.log(age1, age2, age3);

// const ages = [
//   clacAge(years[0]),
//   clacAge(years[1]),
//   clacAge(years[years.length - 1]),
// ];

// console.log("ages =>", ages);

/*
//Built in Function
const friends = ["Peter", "Meisam", "Majid", "Adel"];
console.log(friends);

// Add
friends.push("Navid");
console.log(friends);

friends.unshift("Jonas");
console.log(friends);

console.log(friends.length);

const newLength = friends.unshift();
console.log(newLength);

//Remove

friends.pop();
console.log(friends);

friends.shift();
console.log(friends);

const poped = friends.shift();
console.log(poped);
console.log(friends);

console.log(friends.indexOf("Majid"));

console.log(friends.includes("Majid"));
console.log(friends.includes("Navid"));

if (friends.includes("Navid")) {
  console.log("You find a good friend");
} else {
  console.log(`You can't find a friend`);
}

*/

/* 
Coding Chalenge NUM 2

Steven is still building his tip calculator, using the same rules as before: Tip 15% of
the bill if the bill value is between 50 and 300, and if the value is different, the tip is
20%.
Your tasks:
1. Write a function 'calcTip' that takes any bill value as an input and returns
the corresponding tip, calculated based on the rules above (you can check out
the code from first tip calculator challenge if you need to). Use the function
type you like the most. Test the function using a bill value of 100
2. And now let's use arrays! So create an array 'bills' containing the test data
below
3. Create an array 'tips' containing the tip value for each bill, calculated from
the function you created before
4. Bonus: Create an array 'total' containing the total values, so the bill + tip
Test data: 125, 555 and 44
Hint: Remember that an array needs a value in each position, and that value can
actually be the returned value of a function! So you can just call a function as array
values (so don't store the tip values in separate variables first, but right in the new
array) 😉
GOOD LUCK 😀
*/

// const clacTip = function (bill) {
//   let tip;
//   let total;
//   if (bill >= 50 && bill <= 300) {
//     tip = bill * 0.15;
//     total = bill + tip;
//     console.log(`The bill was ${bill}, the tip was ${tip}, and the total value ${total}`);
//   } else if (bill > 300) {
//     tip = bill * 0.2;
//     total = bill + tip;
//     console.log(`The bill was ${bill}, the tip was ${tip}, and the total value ${total}`);
//   }
// };

// clacTip(300);
// clacTip(500);
// clacTip(100);
// clacTip(arrBills[0]);
// clacTip(arrBills[1]);
// clacTip(arrBills[2]);
// clacTip(arrBills[arrBills.length - 1]);

// const calcTip = function (bill) {
//   return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
// };
// const arrBills = [300, 200, 400, 100, 500, 50];
// const arrTips = [
//   calcTip(arrBills[0]),
//   calcTip(arrBills[1]),
//   calcTip(arrBills[2]),
//   calcTip(arrBills[3]),
//   calcTip(arrBills[4]),
//   calcTip(arrBills[5]),
// ];

// const total = [
//   arrBills[0] + calcTip(arrBills[0]),
//   arrBills[1] + calcTip(arrBills[1]),
//   arrBills[2] + calcTip(arrBills[2]),
//   arrBills[3] + calcTip(arrBills[3]),
//   arrBills[4] + calcTip(arrBills[4]),
//   arrBills[5] + calcTip(arrBills[5]),
// ];
// console.log(arrBills, arrTips, total);
// console.log(total);

/*
const meisamArr = [
  "Meisam",
  "Mohammadi",
  2023 - 1989,
  "teacher",
  ["Peter", "Majid", "Steven"],
];

const meisam = {
  firstName: "Meisam",
  lastName: "Mohammadi",
  age: 2023 - 1989,
  job: "teacher",
  friends: ["Peter", "Majid", "Steven"],
};

console.log(meisam.friends[meisam.friends.length - 1]);
*/

// const meisam = {
//   firstName: "Meisam",
//   lastName: "Mohammadi",
//   age: 2023 - 1989,
//   job: "teacher",
//   friends: ["Peter", "Majid", "Steven"],
// };

// console.log(meisam.firstName);
// console.log(meisam.friends[1]);

// console.log(meisam["lastName"]);

// const nameKey = "Name";

// console.log(meisam["first" + nameKey]);
// console.log(meisam["last" + nameKey]);

// const interestedIn = prompt(
//   "What do you know about Meisam, Choose the one of them elemen in the text, firstName, lastName, age, job, friends"
// );

// console.log(meisam[interestedIn]);

// if (meisam[interestedIn]) {
//   console.log(meisam[interestedIn]);
// } else {
//   console.log(
//     "Wrong question, Choose the one of them elemen in the text, firstName, lastName, age, job, friends"
//   );
// }

// meisam["location"] = "California";
// meisam.hobbie = "Tenis";
// meisam["twitter"] = "@meisam1989";
// <<<<<<< HEAD
// console.log("This log for meisam ", meisam);
// =======
// console.log(meisam);
// >>>>>>> 6b409ae326153a5bab6887ded0c8f3b16aafc579

// if (meisam[interestedIn]) {
//   console.log(meisam[interestedIn]);
// } else {
//   console.log(
//     "Wrong question, Choose the one of them elemen in the text, firstName, lastName, age, job, friends"
//   );
// }

// Challenge
// " Meisam has 3 friends, and his best friend is called Majid"

// console.log(
//   `${meisam["firstName"]} has ${meisam.friends.length}, and his best friend is called ${meisam.friends[1]}`
// );

// <<<<<<< HEAD
// const meisam = {
//   firstName: "Meisam",
//   lastName: "Mohammadi",
//   // age: 2023 - 1989,
//   brithYear: 1989,
//   job: "teacher",
//   friends: ["Peter", "Majid", "Steven"],
//   hasDriverLicense: false,
//   calcAge: function () {
//     this.age = 2023 - this.brithYear;
//     return this.age;
//   },
//   getSummary: function () {
//     this.summary = `${
//       this.firstName
//     } is a ${this.calcAge()} - years old and he is a ${this.job}, and he has ${
//       this.hasDriverLicense ? "a" : "no"
//     } driver's license`;
//     return this.summary;
//   },
// };
// console.log(meisam.getSummary());
// console.log(meisam.summary);
// console.log(meisam.calcAge(1989));
// console.log(meisam["calcAge"](1990));
// console.log(meisam.calcAge());
// console.log(meisam.age);
// Challenge
// "Meisam is a 34 years old teacher, and he has a/no driver's license"
// console.log(
//   `${meisam.firstName} is a ${meisam.age}-years old and he job is ${
//     meisam.job
//   }, and he has ${meisam.hasDriverLicense ? "a" : "no"} driver's license`
// );
// =======
// const meisam = {
//   firstName: "Meisam",
//   lastName: "Mohammadi",
//   brithYear: 1989,
//   year: 2023,
//   job: "teacher",
//   friends: ["Peter", "Majid", "Steven"],
//   driverLicense: true,
//   calcAge: function() {
//     console.log(this)
//     return 2023 - this.brithYear
//   },
// calcAge2: function() {
//   return this.year - this.brithYear
// }

// calcAge: function() {
//   this.age = 2023 - this.brithYear;
//   return this.age
// },
// driverLicenseMeisam: function() {
//   if ( this.driverLicense) {
//     return 'a'
//   } else {
//     return 'no'
//   }
// },
//   getSummary: function() {
//     this.summary = `${this.firstName} is  a ${this.calcAge()}-year old ${this.job}, and he has ${this.driverLicense ? 'a' : 'no'} driver's license`
//     return this.summary
//   }
// };
// console.log(meisam.getSummary())

// console.log(meisam.calcAge2())
// console.log(meisam.calcAge())

// Challenge
// "Meisam is a 46-year old teacher, and he has a/no driver's license"

// console.log(`${meisam.firstName} is a ${meisam.calcAge()}-year old ${meisam.job}, and he has ${meisam.driverLicenseMeisam()} driver's Licens`)

// meisam.location = 'Califonia'
// console.log(meisam)

/*
Coding Challenge #3
Let's go back to Mark and John comparing their BMIs! This time, let's use objects to
implement the calculations! Remember: BMI = mass / height ** 2 = mass
/ (height * height) (mass in kg and height in meter)
Your tasks:
1. For each of them, create an object with properties for their full name, mass, and
height (Mark Miller and John Smith)
2. Create a 'calcBMI' method on each object to calculate the BMI (the same
method on both objects). Store the BMI value to a property, and also return it
from the method
3. Log to the console who has the higher BMI, together with the full name and the
respective BMI. Example: "John's BMI (28.3) is higher than Mark's (23.9)!"
Test data: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m
tall.
GOOD LUCK 😀
*/

// const markmiller = {
//   fullName: 'Mark Miller',
//   mass: 78,
//   height: 1.69,
//   calcBMI: function() {
//     this.bmi = this.mass / this.height ** 2;
//     return this.bmi
//   }
// }

// const johnSmith = {
//   fullName: 'John Smith',
//   mass: 92,
//   height: 1.95,
//   calcBMI: function() {
//     this.bmi = this.mass / this.height ** 2;
//     return this.bmi
//   }
// }
// markmiller.calcBMI()
// johnSmith.calcBMI()
// console.log(markmiller.bmi, johnSmith.bmi)

// if (markmiller.bmi > johnSmith.bmi) {
//   console.log(`${markmiller.fullName} BMI (${markmiller.bmi}) is higher than ${johnSmith.fullName} BMI ${johnSmith.bmi} `)
// } else if ( johnSmith.bmi > markmiller.bmi) {
//   console.log(`${johnSmith.fullName} BMI (${johnSmith.bmi}) is higher than ${markmiller.fullName} BMI ${markmiller.bmi} `)
// }

// const calcBmi = function(mass, height) {
//   return mass / height **2
// }

// const markBMI = calcBmi(markmiller.mass, markmiller.height)
// const johnBMI = calcBmi(johnSmith.mass, johnSmith.height)

//  console.log(calcBmi(markmiller.mass, markmiller.height))
// console.log(markBMI, johnBMI)
//  if ( markBMI > johnBMI) {
//    console.log(`Mark's BMI is ${markBMI} is higher than John's ${johnBMI}`)
//  } else if ( johnBMI > markBMI) {
//    console.log(`John's BMI is ${johnBMI} is higher than Mark's ${markBBMI}`)
//  }

// loops

// for ( let rep = 1; rep <= 10; rep++) {
//   console.log(`Lifting weights reptition  ${rep} 🏋️‍♀️`)
// }

// const meisam = {
//     firstName: "Meisam",
//     lastName: "Mohammadi",
//     brithYear: 1989,
//     year: 2023,
//     job: "teacher",
//     friends: ["Peter", "Majid", "Steven"],
//     driverLicense: true,
// }

// const type = [];

// const arrMeisam = ['Meisam', 'Mohammadi', 1989, 'teacher', ['Petter', 'Majid', 'Adel'], true]

// //filling type arrary
// for ( let i = 0; i < arrMeisam.length; i++) {
//   console.log(arrMeisam[i], typeof arrMeisam[i])

//   // type[i] = typeof arrMeisam[i]
//   type.push(typeof arrMeisam[i])
// }

// console.log(type)

// const years = [1989, 1990, 1992, 1930];
// const ages = [];

// for (let i = 0; i < years.length; i++) {
//   ages.push(2037 - years[i])
// }
// console.log(ages)

/*
years[i] === years[0] => i = 0; 2037 - 1989 = 48  => ages [48]
years[i] === years[1] => i = 1; 2037 - 1990 = 47  => ages [48, 47]
years[i] === years[2] => i = 2; 2037 - 1992 = 45  => ages [48, 47, 45]
years[i] === years[3] => i = 3; 2037 - 1930 = 107 => ages [48, 47, 45, 107]
*/

// const meisam = [
//   "Meisam",
//   "Mohammadi",
//   2023 - 1989,
//   "teacher",
//   ["Peter", "Majid", "Steven"],
// ];

// console.log("--Only String--")
// for ( let i = 0; i < meisam.length; i++) {
//   if ( typeof meisam[i] !== 'string') continue;

//   console.log(meisam[i], typeof meisam[i]);
// }

// console.log("--- Only Number ---")
// for (let i = 0; i < meisam.length; i++) {
//   if ( typeof meisam[i] === 'number') break;
//   console.log(meisam[i], typeof meisam[i])
// }

//   const meisam = [
//     "Meisam",
//     "Mohammadi",
//     2023 - 1989,
//     "teacher",
//     ["Peter", "Majid", "Steven"],
//   ];

//   // 0, 1, 2, 3, 4
//   // 4, 3, 2, 1
// console.log(meisam.length)
//   for (let i = meisam.length - 1; i >= 0; i-- ){
//     console.log(i, meisam[i])
//   }

// for (let exercise = 1; exercise < 4; exercise++) {
//   console.log(`-----------Starting Exercise ${exercise}`)
//   for (let rep = 1; rep < 5; rep++) {
//     console.log(`Exercise ${exercise} : Lifting weight repetition 🏋️‍♂️`)
//     for (let best = 1; best < 3; best++) {
//       console.log(`Exercise ${exercise} : repetition ${rep} => and finaly this is a ${best}`)
//     }
//   }
// }
// >>>>>>> 6b409ae326153a5bab6887ded0c8f3b16aafc579

/*
Coding Challenge #3
Let's go back to Mark and John comparing their BMIs! This time, let's use objects to
implement the calculations! Remember: BMI = mass / height ** 2 = mass
/ (height * height) (mass in kg and height in meter)
Your tasks:
1. For each of them, create an object with properties for their full name, mass, and
height (Mark Miller and John Smith)
2. Create a 'calcBMI' method on each object to calculate the BMI (the same
method on both objects). Store the BMI value to a property, and also return it
from the method
3. Log to the console who has the higher BMI, together with the full name and the
respective BMI. Example: "John's BMI (28.3) is higher than Mark's (23.9)!"
Test data: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m
tall.
GOOD LUCK 😀
*/

// const markMiller = {
//   firstName: "Mark",
//   lastName: "Miller",
//   mass: 78,
//   heigh: 1.69,
//   calcBMI: function () {
//     this.bmi = this.mass / this.heigh ** 2;
//     return this.bmi;
//   },
// };

// const johnSmith = {
//   firstName: "John",
//   lastName: "Smith",
//   mass: 92,
//   heigh: 1.95,
//   calcBMI: function () {
//     this.bmi = this.mass / this.heigh ** 2;
//     return this.bmi;
//   },
// };

// johnSmith.calcBMI();
// markMiller.calcBMI();

// // Example: "John's BMI (28.3) is higher than Mark's (23.9)!"

// console.log(
//   `${johnSmith.firstName}'s BMI (${johnSmith.calcBMI()})is heigher than ${
//     markMiller.firstName
//   }'s BMI (${markMiller.calcBMI()})`
// );

// if (johnSmith.bmi > markMiller.bmi) {
//   console.log(
//     `${johnSmith.firstName}'s BMI (${johnSmith.bmi} is heigher than ${markMiller.firstName}'s BMI (${markMiller.bmi}))`
//   );
// } else if (markMiller.bmi > johnSmith.bmi) {
//   console.log(
//     `${markMiller.firstName}'s BMI (${markMiller.bmi} is heigher than ${johnSmith.firstName}'s BMI (${johnSmith.bmi}))`
//   );
// }

// console.log(markMiller.calcBMI(), johnSmith.calcBMI());
// console.log(markMiller.bmi);

// Iteration the for loop

// for (let rep = 1; rep <= 10; rep++) {
//   console.log(`Lifting weights repetition ${rep}`);
// }

//Looping Arrays, Breaking and Continuing

// const meisamArray = [
//   "Meisam",
//   "Mohammadi",
//   2023 - 1989,
//   "teacher",
//   ["Micheal", "Peter", "Steven"],
// ];

// console.log(meisamArray[4][1]);

// let types = [];
// for (let i = 0; i <= meisamArray.length; i++) {
//   console.log(meisamArray[i], typeof meisamArray[i]);

//   types[i] = typeof meisamArray[i];
// types.push(typeof meisamArray[i]);
// }
// console.log(types);

// const years = [1991, 1999, 1989, 2001];

// const ages = [];
// for (let i = 0; i < years.length; i++) {
//   ages.push(2023 - years[i]);
// }
// console.log(ages);

// console.log("----- ONLY STRINGS -----");
// for (let i = 0; i < meisamArray.length; i++) {
//   if (typeof meisamArray[i] !== "string") continue;
//   console.log(meisamArray[i], typeof meisamArray[i]);
// }

// console.log("----- Breack Number -----");
// for (let i = 0; i < meisamArray.length; i++) {
//   if (typeof meisamArray[i] === "number") break;

//   console.log(meisamArray[i], typeof meisamArray[i]);
// }

// const meisamArray = [
//   "Meisam",
//   "Mohammadi",
//   2023 - 1989,
//   "teacher",
//   ["Micheal", "Peter", "Steven"],
//   true,
// ];

// for (let i = meisamArray.length - 1; i >= 0; i--) {
//   console.log(meisamArray[i]);
// }

// for (let exercise = 1; exercise < 4; exercise++) {
//   console.log(`Starting Exercise ${exercise}`);

//   for (let rep = 1; rep < 6; rep++) {
//     console.log(`Exercise ${exercise}: Lifting weight repetition ${rep}`);
//   }
// }

// let rep = 1;
// while (rep <= 10) {
//   console.log(`WHILE: Lifting weights repetition ${rep}`);
//   rep++;
// }

// let dice = Math.trunc(Math.random() * 6 + 1);

// while (dice !== 6) {
//   console.log(`you rolled a ${dice}`);

//   dice = Math.trunc(Math.random() * 6 + 1);
//   if (dice === 6) {
//     console.log(`Loop is about to end ... ${dice}`);
//   }
// }

/*
Coding Challenge #4
Let's improve Steven's tip calculator even more, this time using loops!
Your tasks:
1. Create an array 'bills' containing all 10 test bill values
2. Create empty arrays for the tips and the totals ('tips' and 'totals')
3. Use the 'calcTip' function we wrote before (no need to repeat) to calculate
tips and total values (bill + tip) for every bill value in the bills array. Use a for
loop to perform the 10 calculations!
Test data: 22, 295, 176, 440, 37, 105, 10, 1100, 86 and 52
Hints: Call ‘calcTip ‘in the loop and use the push method to add values to the
tips and totals arrays 😉
Bonus:
4. Bonus: Write a function 'calcAverage' which takes an array called 'arr' as
an argument. This function calculates the average of all numbers in the given
array. This is a difficult challenge (we haven't done this before)! Here is how to
solve it:
4.1. First, you will need to add up all values in the array. To do the addition,
start by creating a variable 'sum' that starts at 0. Then loop over the
array using a for loop. In each iteration, add the current value to the
'sum' variable. This way, by the end of the loop, you have all values
added together
4.2. To calculate the average, divide the sum you calculated before by the
length of the array (because that's the number of elements)
4.3. Call the function with the 'totals' array
GOOD LUCK 😀
*/

// const calcTip = function (bill) {
//   if (bill >= 50 && bill <= 300) {
//     return bill * 1.5;
//   } else {
//     return bill * 0.2;
//   }
// };

// const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];

// let tips = [];
// let totals = [];

// for (let i = 0; i <= bills.length; i++) {
//   const tip = calcTip(bills[i]);
//   tips.push(tip);
//   totals.push(bills[i] + tip);
// }

// console.log("Bills:", bills);
// console.log("Tips:", tips);
// console.log("Totals:", totals);

const calcTip = function (bill) {
  return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
};

const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];

let tips = [];
let totals = [];

for (let i = 0; i < bills.length; i++) {
  const tip = calcTip(bills[i]);

  tips.push(tip);
  totals.push(tip + bills[i]);
}

console.log(bills, tips, totals);

const calcAverage = function (arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  const average = sum / arr.length;
  return average;
};

console.log(calcAverage([3, 3, 6]));
console.log(calcAverage(totals));
console.log(calcAverage(tips));
