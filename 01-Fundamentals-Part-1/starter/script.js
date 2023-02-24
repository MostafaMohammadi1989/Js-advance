// let meisam = "This is test for js file";

// // if (meisam === "This is test for js file") alert("Js is fun!");

// // console.log(10 + 15 + 80 - 5);

// let firstName = "Meisam";
// let lastName = "Mohammadi";

// let $function = 27;

// let name = "majid";

// let PI = 3.415;

// // It's better we use tihs funtion for wirtting stored variable

// let myFirstJob = "Programer";
// let mySecondJob = "Photograoher";

// // not this

// let jab1 = "Programer";
// let jab2 = "Photographer";

// console.log(
//   "My name is " +
//     firstName +
//     " " +
//     lastName +
//     " and my first job is " +
//     myFirstJob +
//     " and my second job is " +
//     mySecondJob
// );

// let javaScriptIsFun = true;
// console.log(typeof javaScriptIsFun);

// let age = 23;
// console.log(typeof age);

// javaScriptIsFun = "Yes!";
// console.log(typeof javaScriptIsFun);

// let firstNam;
// console.log(typeof firstNam);

// firstNam = "Meisam";
// console.log(typeof firstNam, firstNam);

// console.log(
//   "what is Meisam Type data :" + " " + firstNam + " is " + typeof firstNam
// );
// console.log(typeof null);
// How can we declear variable in JavaScript

// let firstJob = "Programer";
// console.log(firstJob);

// firstJob = "Photographer";
// console.log(firstJob);

// const firstName = "Meisam";
// console.log("my name is " + firstName);

// but we can not change const variable actually const hasn't a muttede variable
// firstName = "Majid"

// Math oprators

// const now = 2037;

// const meisamAge = now - 1989;
// const sarahAge = now - 1994;

// console.log(
//   "This age for meisam: " + meisamAge + " and this age for sarah: " + sarahAge
// );

// console.log(meisamAge - 10 + 5, sarahAge / 2 + 2 ** 3);
//2**3 means to power of 3 = 2 * 2 * 2

// assiang operators
// let x = 10 + 5; // x = 15
// x += 10; // 15 + 10 = 25
// x *= 4; // 25 * 4 = 100
// x++; // 100 + 1 = 101
// x--; // 101 - 1 = 100
// x--; // 100 - 1 = 99

// console.log(x);

//compersion operators > < >= <=

// console.log(meisamAge, sarahAge);

// console.log(meisamAge > sarahAge);

// let fullAge = meisamAge > sarahAge;
// console.log(fullAge);

// Operator Precedence

// const now = 2037;
// const meisamAge = now - 1989;
// const sarahAge = now - 2023;

// let x, y;

// x = y = 25 - 10 - 5;
// console.log("X value => " + x + " Y value => " + y);

// let averageAge = (meisamAge + sarahAge) / 2;
// console.log(
//   " Meism age => " +
//     meisamAge +
//     " Sarah age => " +
//     sarahAge +
//     " Average age => " +
//     averageAge
// );

// Coding Challenge #1
// Mark and John are trying to compare their BMI (Body Mass Index), which is
// calculated using the formula:
// BMI = mass / height ** 2 = mass / (height * height) (mass in kg
// and height in meter).
// Your tasks:
// 1. Store Mark's and John's mass and height in variables
// 2. Calculate both their BMIs using the formula (you can even implement both
// versions)
// 3. Create a Boolean variable 'markHigherBMI' containing information about
// whether Mark has a higher BMI than John.

// Test data:
// § Data 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95
// m tall.
// § Data 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76
// m tall.
// GOOD LUCK 😀

// BMI = mass / height ** 2 = mass / (height * height) (mass in kg

const massMark = 78;
const heightMark = 1.69;

const massJohn = 92;
const heighJohn = 1.95;

const markBMI = massMark / heightMark ** 2;

// let markTwoBMI = massMark / (heightMark * heightMark);
// console.log("One => " + markBMI + " Two => " + markTwoBMI);

const johnBMI = massJohn / (heighJohn * heighJohn);

console.log("Mark BIM = > " + markBMI + " John BIM => " + johnBMI);
console.log(
  "It Mark BMI higher than John?",
  markBMI > johnBMI,
  " John BMI higher than Mark BMI?",
  johnBMI > markBMI
);

function BIM() {
  if (markBMI > johnBMI) {
    console.log("Mark BMI is higher than John BMI");
  } else if (johnBMI > markBMI) {
    console.log("John BMI higher than Mark BMI");
  } else {
    console.log("Thare BIM both is equal");
  }
}

console.log(markBMI > johnBMI);
console.log(johnBMI > markBMI);
console.log(BIM());
