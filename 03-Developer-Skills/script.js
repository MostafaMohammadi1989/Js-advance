// Remember, we're gonna use strict mode in all scripts now!
"use strict";

// PROBLEMS 1:
// We work fir a company building a smart home thermometer. Our most recent task is this: "Given an array of temperatures of one day, calculate the temperature amplitude. Keep in mind that sometimes there might be a sensor error"

const temperatures = [3, -2, -6, -1, "error", 9, 13, 17, 15, 14, 9, 5];

// 1) understanding the problems
// - What is temp apmlitude? Answer: difference between highest and lowest temp
// - How to compute max and min temperatures?
// - What's a sensor error? and what to do?

// 2) Breaking up into sub-problems
// - How to ignore errors?
// - Find max value in temp array
// - Find min value in temp array
// - SubTract min form max (amplitud) and return it

const calcTemperatures = function (temps) {
  let max = temps[0];
  let min = temps[0];
  for (let i = 0; i < temps.length; i++) {
    const curTemps = temps[i];
    // For ignor erros
    if (typeof curTemps !== "number") continue;
    // For max temps
    if (curTemps > max) max = curTemps;
    // For min temps
    if (curTemps < min) min = curTemps;
  }
  console.log(max, min);
  return max - min;
};

const amplitud = calcTemperatures(temperatures);
console.log(amplitud);

// PROBLEMS 2:
// 1) understanding the problems
// - with 2 array, should we implement functinality twice? No, just merge two array
// 2) Breaking up into sub-problems
// - How to merge 2 array?

const calcTemperaturesNew = function (t1, t2) {
  const temps = t1.concat(t2);
  console.log(temps);
  let max = temps[0];
  let min = temps[0];
  for (let i = 0; i < temps.length; i++) {
    const curTemps = temps[i];
    // For ignor erros
    if (typeof curTemps !== "number") continue;
    // For max temps
    if (curTemps > max) max = curTemps;
    // For min temps
    if (curTemps < min) min = curTemps;
  }
  console.log(max, min);
  return max - min;
};

const amplitudNew = calcTemperaturesNew([1, 2, 3, 4], [5, 6, 7, 8, 9]);
console.log(amplitudNew);

// const arrOne = [1, 2, 3, 4];
// const arrTwo = [5, 6, 7, 8];

// const mergArrays = function (t1, t2) {
//   const arr1 = [0];
//   const arr2 = [0];
//   let merArr = [];

//   for (let i = 0; i < arr1.length; i++) {
//     merArr[i] = arr1[i];
//   }
//   for (let i = 0; i < arr2.length; i++) {
//     merArr[arr1.length + i] = arr2[i];
//   }
//   console.log(merArr);
// };

// mergArrays(arrOne, arrTwo);
