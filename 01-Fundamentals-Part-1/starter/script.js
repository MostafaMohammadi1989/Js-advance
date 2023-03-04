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

// Truthy and falsy values

// in js we have 5 falsy values => 0, undifind, NaN, '', null

// console.log(Boolean(0));
// console.log(Boolean(""));
// console.log(Boolean("Meisam"));
// console.log(Boolean({}));
// console.log(Boolean(12));

// const monye = 0;
// const monye = 12;
// if (monye) {
//   console.log("You don't spend it");
// } else {
//   console.log("You need get a job");
// }

// let height = 123;
// if (height) {
//   console.log("The height id Define");
// } else {
//   console.log("The height is Undifine");
// }

// Equality Operators === (stric) vs == (loos)

// const age = 23;

// console.log("stric ==> ", age === "23");
// console.log("loos ==> ", age == "23");

// const favorite = 23;

// if (favorite === "23") console.log("23 is cool number");
// if (favorite == "23") console.log("23 is cool number");

// const favorite = Number(prompt("What's your favorite number?"));

// if (favorite === 23) {
//   console.log("23 is a cool number");
// } else if (favorite === 19) {
//   console.log("19 is a cool number");
// } else if (favorite === 7) {
//   console.log("7 is a cool number");
// } else {
//   console.log("Your number is not in category");
// }

// if (favorite !== 23) {
//   console.log("Why not 23 is your favorite?");
// }

// Logical Oprators

// const hasLicencDriver = true; // A
// const hasGoodVision = true; //B

// console.log(hasLicencDriver && hasGoodVision);

// if (hasLicencDriver && hasGoodVision) {
//   console.log("Sarah is able to drive");
// } else {
//   console.log(`Someone else shoud be to drive`);
// }

// const isTired = true;

// AND Logic
// if ((hasLicencDriver && hasGoodVision, !isTired)) {
//   console.log(`Meisam able to drive`);
// } else {
//   console.log(`Some one else to be derive`);
// }

// // OR Logic
// if (hasLicencDriver || hasGoodVision || isTired) {
//   console.log(`Meisam able to drive`);
// } else {
//   console.log(`Some one else to be derive`);
// }

/*
Coding Challenge #3
There are two gymnastics teams, Dolphins and Koalas. They compete against each
other 3 times. The winner with the highest average score wins a trophy!
Your tasks:
1. Calculate the average score for each team, using the test data below
2. Compare the team's average scores to determine the winner of the competition,
and print it to the console. Don't forget that there can be a draw, so test for that
as well (draw means they have the same average score)
3. Bonus 1: Include a requirement for a minimum score of 100. With this rule, a
team only wins if it has a higher score than the other team, and the same time a
score of at least 100 points. Hint: Use a logical operator to test for minimum
score, as well as multiple else-if blocks 😉
4. Bonus 2: Minimum score also applies to a draw! So a draw only happens when
both teams have the same score and both have a score greater or equal 100
points. Otherwise, no team wins the trophy
Test data:
§ Data 1: Dolphins score 96, 108 and 89. Koalas score 88, 91 and 110
§ Data Bonus 1: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 123
§ Data Bonus 2: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 106
GOOD LUCK 😀
*/

//Task Number 1
//Data 1
// const dolphinsScore1 = 96;
// const dolphinsScore2 = 108;
// const dolphinsScore3 = 89;

// const koalasScore1 = 89;
// const koalasScore2 = 91;
// const koalasScore3 = 110;

// //Data 2
// const dolphinsScore1 = 97;
// const dolphinsScore2 = 112;
// const dolphinsScore3 = 101;

// const koalasScore1 = 109;
// const koalasScore2 = 95;
// const koalasScore3 = 123;

// const dolphinsAvg = (dolphinsScore1 + dolphinsScore2 + dolphinsScore3) / 3;
// console.log(`Dolphins Average Score => ${dolphinsAvg}`);

// const koalasAvg = (koalasScore1 + koalasScore2 + koalasScore3) / 3;
// console.log(`Koalas average Score => ${koalasAvg}`);

// Task Number 2
// if (dolphinsAvg > koalasAvg) {
//   console.log(
//     `The Dolphins Score is ${dolphinsAvg} and Higher Then Koalas score ${koalasAvg} `
//   );
// } else if (koalasAvg > dolphinsAvg) {
//   console.log(
//     `The Koalas Score is ${koalasAvg} and Higher than Dolphines Score ${dolphinsAvg}`
//   );
// } else if (dolphinsAvg === koalasAvg) {
//   console.log(
//     `The each of teams has equal  Dolphines Score ${dolphinsAvg} = Koalas Score ${koalasAvg}`
//   );
// }

// if (dolphinsAvg >= 100 && dolphinsAvg > koalasAvg) {
//   console.log(
//     `The Dolphins Score is ${dolphinsAvg} and Higher Then Koalas score ${koalasAvg} `
//   );
// } else if (koalasAvg >= 100 && koalasAvg > dolphinsAvg) {
//   console.log(
//     `The Koalas Score is ${koalasAvg} and Higher than Dolphines Score ${dolphinsAvg}`
//   );
// } else {
//   console.log(`The both of score team is lees the 100 score`);
// }

// const scoreDlphine = (96 + 108 + 89) / 3;
// const scoreKoalas = (88 + 91 + 110) / 3;

// const scoreDlphine = (85 + 95 + 75) / 3;
// const scoreKoalas = (97 + 95 + 102) / 3;
// console.log(
//   `Dophines Score = > ${scoreDlphine} and Koalas Score => ${scoreKoalas}`
// );

// if (scoreDlphine >= 100 && scoreDlphine > scoreKoalas) {
//   console.log(`Dolphines win trophy 😎`);
// } else if (scoreKoalas >= 100 && scoreKoalas > scoreDlphine) {
//   console.log(`Koalas win trophy 😎`);
// } else if (
//   scoreDlphine === scoreKoalas &&
//   scoreDlphine >= 100 &&
//   scoreKoalas >= 100
// ) {
//   console.log(`Both team win trophy 😂`);
// } else {
//   console.log(`Theye're not win the trophy 👀`);
// }

// The switch Statement

// const day = "monday";
// const day = prompt("pleas write the day?");

// switch (day) {
//   case "monday":
//     console.log("Plan course struc");
//     console.log("Go to coding meetup");
//     break;
//   case "tuesday":
//     console.log("Prepare theory videos");
//     break;
//   case "wednesday":
//   case "thursday":
//     console.log("write code examples");
//     break;
//   case "friday":
//     console.log("Record videos");
//     break;
//   case "saturday":
//   case "sunday":
//     console.log("Enjoy the weekend :D");
//     break;
//   default:
//     console.log("Not a calid day");
// }

const day = prompt("pleas write the day?");

if (day === "monday") {
  console.log("Plan course struc");
  console.log("Go to coding meetup");
} else if (day === "tuesday") {
  console.log("Prepare theory videos");
} else if (day === "wednesday" || day === "thursday") {
  console.log("write code examples");
} else if (day === "friday") {
  console.log("Record videos");
} else if (day === "saturday" || day === "sunday") {
  console.log("Enjoy the weekend :D");
} else {
  console.log("Not a Valid day");
}
