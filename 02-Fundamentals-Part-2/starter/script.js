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

const age3 = (brithday) => 2037 - brithday;
const calcAge1 = age3(1989);
console.log(calcAge1);

const retirmentUntilAge = (brithday, firstname, job) => {
  const age = 2037 - brithday;
  const retirment = 65 - age;
  return `${firstname} is work about ${job} untile ${retirment} years to retierment`;
};

console.log(retirmentUntilAge(1989, "Meisam", "Chef"));
console.log(retirmentUntilAge(1980, "Majid", "Computer programing"));
