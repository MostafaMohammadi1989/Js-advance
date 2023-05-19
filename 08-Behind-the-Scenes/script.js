'use strict';

// function calcAge (birthYear) {
//     const age = 2037 - birthYear
//     function printAge()  {
//         let output = `${firstName}, Your age is ${age} and you born in ${birthYear}`;
//         console.log('Function block scope =>', output );

//         if ( birthYear >= 1981 && birthYear <= 1996) {
//             var millenial = true;
//             // Creating a new variable 
//             const firstName = "Majid"

//             // Reassining outer scope variable
//             output = "New Output"
            
//             const str = `Oh, and you're a millenial ${firstName}`;
//             console.log('If block scope =>', str);
//             function add(a, b) {
//                 return a + b;
//             }
//             console.log('Function Add in the if block =>', add(2, 3) );
//         }
//         console.log('Reassigning Variable =>', output);
//         console.log('out of if scope =>', millenial);
//         // console.log('out of if scope =>', str);
//     }
//     printAge()
//     // console.log('Our of Up scope =>', millenial );
//     return age;
// }
// // console.log('Our of Up scope =>', millenial );
// const firstName = "Meisam";
// calcAge(1989);

// console.log('this', this);

// const calcAge = function(birthYear) {
//     console.log('Brith Yrear', 2037 - birthYear);
//     // console.log('This = >', this);
// }

// calcAge(1989)

// const calcAgeArrow = birthYear => {
//     console.log('Arrow Function', 2037 - birthYear);
//     // console.log('This in Arrow function', this);
// }

// calcAgeArrow(1980);


// const meisam = {
//     year: 1989,
//     calcAge: function () {
//         // console.log('This in the Obj', this);
//         console.log('This for year', 2037 - this.year);
//     }
// }

// meisam.calcAge();

// const matilda = {
//     year: 2017,
// }

// matilda.calcAge = meisam.calcAge;
// matilda.calcAge()


// var firstName = 'Matilda'
const meisam = {
    firstName: 'Meisam',
    year: 1989,
    calcAge: function () {
        // console.log('This in the Obj', this);
        // Solution 1
        // const self = this; // self or that
        // console.log('This for year', 2037 - this.year);
        // const isMillenial = function () {
        //     console.log('self ==>', self);
        //     console.log('is Millenial Function =>', self.year >= 1981 && self.year <= 1996);
            // console.log('is Millenial Function =>', this.year >= 1981 && this.year <= 1996);

            console.log('This for year', 2037 - this.year);
        // Solution 2
        // const self = this; // self or that
        const isMillenial =  () => {
            console.log('This ==>', this);
            console.log('This with firstName ==>', this.firstName);
            console.log('is Millenial Function =>', this.year >= 1981 && this.year <= 1996);
        }
        isMillenial()
    },
    greet: () => {
        console.log('This window', this);
        console.log(`Hey ${this.firstName}`)
    }
}

meisam.greet();
meisam.calcAge();
// meisam.calcAge();


// Argument Keywords 

const addExper = function(a, b) {
    console.log(arguments)
    return a + b;
};
addExper(2, 5);
addExper(2, 5, 8, 12);

var addArrow = (a ,b) => {
    console.log('Arguments =>', arguments);
    return a + b
};

addArrow(2, 7, 9)