// Remember, we're gonna use strict mode in all scripts now!
"use strict";

// PROBLEMS
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
    // For max temps
    if (curTemps > max) max = curTemps;
    // For min temps
    if (curTemps < min) min = curTemps;
    // For ignor erros
    if (curTemps !== "number") continue;
  }
  console.log(max, min);
};

calcTemperatures(temperatures);
