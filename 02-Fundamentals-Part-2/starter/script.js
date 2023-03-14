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

const calcAverage = (s1, s2, s3) => {
  return (s1 + s2 + s3) / 3;
};
// 2. Use the function to calculate the average for both teams

let scoreDolphins = calcAverage(35, 54, 41);
let scoreKoalas = calcAverage(23, 30, 20);

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
const friends = ["Majid", "Adel", "Navid"];
const firstnName = "Meisam";
const meisam = [firstnName, "Mohammdi", 2023 - 1989, "Teacher", friends];
console.log(meisam);
console.log(meisam.length);
console.log(meisam[meisam.length - 1]);
console.log(meisam[2]);
console.log(meisam[4][0]);

friends[1] = "Porya";
console.log(friends);

const clacAge = (brithday) => {
  return 2037 - brithday;
};

const years = [1991, 1989, 1999, 2000];
const age1 = clacAge(years[0]);
const age2 = clacAge(years[1]);
const age3 = clacAge(years[years.length - 1]);
console.log(age1, age2, age3);

const ages = [
  clacAge(years[0]),
  clacAge(years[1]),
  clacAge(years[years.length - 1]),
];

console.log("ages =>", ages);
