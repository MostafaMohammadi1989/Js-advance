"use strict";

// let hasDriversLicense = false;
// const passTest = true;

// if (passTest) hasDriverLicense = true;
// if (hasDriversLicense) console.log("I can drive :)");

function myName() {
  console.log("Meisam");
}

myName();
myName();
myName();

function fruitProccesor(apples, oranges) {
  //   console.log(apples, oranges);

  const juice = `We have ${apples} and other fruits have ${oranges}`;

  return juice;
}

const applesAndOranges = fruitProccesor(5, 2);
console.log(applesAndOranges);

const juices = fruitProccesor(10, 6);
console.log(juices);
