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

// const massMark = 78;
// const heightMark = 1.69;

// const massJohn = 92;
// const heighJohn = 1.95;

// const markBMI = massMark / heightMark ** 2;

// let markTwoBMI = massMark / (heightMark * heightMark);
// console.log("One => " + markBMI + " Two => " + markTwoBMI);

// const johnBMI = massJohn / (heighJohn * heighJohn);

// console.log("Mark BIM = > " + markBMI + " John BIM => " + johnBMI);
// console.log(
//   "It Mark BMI higher than John?",
//   markBMI > johnBMI,
//   " John BMI higher than Mark BMI?",
//   johnBMI > markBMI
// );

// function BIM() {
//   if (markBMI > johnBMI) {
//     console.log("Mark BMI is higher than John BMI");
//   } else if (johnBMI > markBMI) {
//     console.log("John BMI higher than Mark BMI");
//   } else {
//     console.log("Thare BIM both is equal");
//   }
// }

// console.log(markBMI > johnBMI);
// console.log(johnBMI > markBMI);
// console.log(BIM());

// String and template literals

// const firstName = "Meisam";
// const lastName = "Mohammadi";
// const job = "Developer";
// const birthday = 1989;
// const year = 2023;

// const meisamInfo =
//   "My name is " +
//   firstName +
//   " and My Last name is " +
//   lastName +
//   " actually My work is " +
//   job +
//   " and I'm " +
//   (year - birthday) +
//   " years old";

// console.log(meisamInfo);

// // useing a backtic

// const meisamNewInfo = `My name is ${firstName} and My last Name is ${lastName} actually My work is ${job} and I'm ${
//   year - birthday
// } years old`;

// console.log(meisamNewInfo);

// //How can create a new line in the string ? => blew line
// console.log(
//   "this text for \n\
// mullti line in \n\
// this console log"
// );

// console.log(`Actually we can use the backtic
// for create a new line
// in the string
// without to use any node for
// creating new line.`);

// Taking desition is if snd else statments

// const age = 15;

// if (age >= 18) {
//   console.log(`Sarah can to drive 🚗`);
// } else {
//   const leftYears = age - 18;
//   console.log(`Sarah can't to drive because she's ${leftYears} years!`);
// }

// const birthday = 2023;
// let centry;
// if (birthday <= 2000) {
//   centry = 20;
// } else {
//   centry = 21;
// }

// console.log(centry);

// Number 2 Coding Chalenge with id statments
// Use the BMI example from Challenge #1, and the code you already wrote, and
// improve it.
// Your tasks:
// 1. Print a nice output to the console, saying who has the higher BMI. The message
// is either "Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!"
// 2. Use a template literal to include the BMI values in the outputs. Example: "Mark's
// BMI (28.3) is higher than John's (23.9)!"
// Hint: Use an if/else statement 😉
// GOOD LUCK 😀

// BMI = mass / height ** 2 = mass / (height * height) (mass in kg

// const massMark = 95;
// const heightMark = 1.95;

// const massJohn = 78;
// const heighJohn = 1.65;

// const markBMI = massMark / heightMark ** 2;

// const johnBMI = massJohn / (heighJohn * heighJohn);

// if (markBMI > johnBMI) {
//   console.log(`Mark's BMI is heigher than John's`);
// } else {
//   console.log(`John's BMI heigher than Mark's`);
// }

// if (markBMI > johnBMI) {
//   console.log(
//     `Mark's BMI (${Math.floor(markBMI)}) is heigher than John's (${johnBMI})`
//   );
// } else {
//   console.log(`John BMI (${Math.floor(johnBMI)}) is heigher than Makr's`);
// }

// Type Conversion and Coercion

//Conversion
// const age = "19";
// console.log(age, typeof age);
// console.log(Number(age), typeof Number(age));

// const birthday = 1989;
// console.log(birthday, typeof birthday);
// console.log(String(birthday), typeof String(birthday));

// const sum = age + 10;
// console.log(sum);

// Coercion
// console.log(age - 10); // 19 - 10 =  9
// console.log(age * 10); // 19 * 10 = 190
// console.log(age / 10); // 19 / 10 = 1.9
