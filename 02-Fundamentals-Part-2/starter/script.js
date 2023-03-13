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

const clacAge = (brithday) => {
  return 2037 - brithday; //46
};

const retirmentUntilAge = (brithday, firstname) => {
  const age = clacAge(brithday); //46
  const retirment = 65 - age; //65 - 46
  if (retirment > 0) {
    console.log(`${firstname} it has  ${retirment} years to retirment. `);
  } else {
    console.log(`${firstname} it's to retirment`);
    return -1;
  }
};

console.log(retirmentUntilAge(1991, "Meisam"));
// console.log(retirmentUntilAge(2000, "Meisam"));

// 2037 - 1991 = 46
