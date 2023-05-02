// Remember, we're gonna use strict mode in all scripts now!
"use strict";

// PROBLEMS 1:
// We work fir a company building a smart home thermometer. Our most recent task is this: "Given an array of temperatures of one day, calculate the temperature amplitude. Keep in mind that sometimes there might be a sensor error"

// const temperatures = [3, -2, -6, -1, "error", 9, 13, 17, 15, 14, 9, 5];

// 1) understanding the problems
// - What is temp apmlitude? Answer: difference between highest and lowest temp
// - How to compute max and min temperatures?
// - What's a sensor error? and what to do?

// 2) Breaking up into sub-problems
// - How to ignore errors?
// - Find max value in temp array
// - Find min value in temp array
// - SubTract min form max (amplitud) and return it

// const calcTemperatures = function (temps) {
//   let max = temps[0];
//   let min = temps[0];
//   for (let i = 0; i < temps.length; i++) {
//     const curTemps = temps[i];
//     // For ignor erros
//     if (typeof curTemps !== "number") continue;
//     // For max temps
//     if (curTemps > max) max = curTemps;
//     // For min temps
//     if (curTemps < min) min = curTemps;
//   }
//   console.log(max, min);
//   return max - min;
// };

// const amplitud = calcTemperatures(temperatures);
// console.log(amplitud);

// PROBLEMS 2:
// 1) understanding the problems
// - with 2 array, should we implement functinality twice? No, just merge two array
// 2) Breaking up into sub-problems
// - How to merge 2 array?

// const calcTemperaturesNew = function (t1, t2) {
//   const temps = t1.concat(t2);
//   console.log(temps);
//   let max = temps[0];
//   let min = temps[0];
//   for (let i = 0; i < temps.length; i++) {
//     const curTemps = temps[i];
//     // For ignor erros
//     if (typeof curTemps !== "number") continue;
//     // For max temps
//     if (curTemps > max) max = curTemps;
//     // For min temps
//     if (curTemps < min) min = curTemps;
//   }
//   console.log(max, min);
//   return max - min;
// };

// const amplitudNew = calcTemperaturesNew([1, 2, 3, 4], [5, 6, 7, 8, 9]);
// console.log(amplitudNew);

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


// const measureKekvin = function() {
//   const measurement = {
//     type: 'temp',
//     unit: 'celsius',
//     // C) FIX
//     value: Number(prompt('Degrees celsius:')) 
//   }
//   // B) FIND
//   console.table(measurement, typeof measurement)
//   console.log('measurement =>', measurement);
//   const kelvin = measurement.value + 273;
//   return kelvin
// }

// // A) IDENTIFY
// console.log(measureKekvin());



// const calcTemperaturesBug = function (t1, t2) {
//     const temps = t1.concat(t2);
//     console.log(temps);
//     let max = 0;
//     let min = 0;
//     for (let i = 0; i < temps.length; i++) {
//       const cTemps = temps[i];
//       // For ignor erros
//       if (typeof curTemps !== "number") continue;
//       // For max temps
//       if (curTemps > max) max = curTemps;
//       // For min temps
//       if (curTemps < min) min = curTemps;
//     }
//     console.log(max, min);
//     return max - min;
//   };
  
//   const amplitudNew = calcTemperaturesBug([1, 2, 3, 4], [5, 6, 7, 8, 9]);
//   console.log(amplitudNew);
  

/*
Developer Skills & Editor Setup
Coding Challenge #1
Given an array of forecasted maximum temperatures, the thermometer displays a
string with the given temperatures. Example: [17, 21, 23] will print "... 17ºC in 1
days ... 21ºC in 2 days ... 23ºC in 3 days ..."
Your tasks:
1. Create a function 'printForecast' which takes in an array 'arr' and logs a
string like the above to the console. Try it with both test datasets.
2. Use the problem-solving framework: Understand the problem and break it up
into sub-problems!
Test data:
§ Data 1: [17, 21, 23]
§ Data 2: [12, 5, -5, 0, 4]
GOOD LUCK 😀

*/
/*
  1) get one argument
  2) check the argument at the index 0
  3) use for loop for iteration and check number in the array
  4) store argument like temp in the another valiable 
  5) check the number with if statment for what number it's bigger another number and then store them on the Max variable
  6) returen the max 

*/
// const arr1 = [17, 21, 23]

// const printForecast = function(temp) {
//   let max = temp[0]

//   for ( let i = 0; i < temp.length; i ++) {
//     let curTemp = temp[i]
//     if (curTemp < max) max = curTemp
//   }
//   return max
// }

// const checkTemp = printForecast([2,4,5])
// console.log('checkTemp =>', checkTemp);


// 1) Understanding the problem
// - Array transform to string, separated by ...
// - What is the x days? Anser: index + 1

// 2) Breaking up into sub-problems
// - Transform array into string
// - Transform each element to string with ºC
// - Strings need to contain day ( index + 1 )
// - Add ... between elements and start and end of 


// print like this "... 17ºC in 1days ... 21ºC in 2 days ... 23ºC in 3 days ..."


const data1 = [17, 21, 23];
const data2 = [12, 5, -5, 0, 4];

const printForecast = function(arr) {
  let str = [];

  for ( let i = 0; i < arr.length; i++) {
    str += `${arr[i]}ºC in ${i + 1}days ... `
  }
  console.log('...', str);
}

printForecast(data1)
printForecast(data2)