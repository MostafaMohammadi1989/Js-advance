'use strict';

function calcAge (birthYear) {
    const age = 2037 - birthYear
    function printAge()  {
        let output = `${firstName}, Your age is ${age} and you born in ${birthYear}`;
        console.log('Function block scope =>', output );

        if ( birthYear >= 1981 && birthYear <= 1996) {
            var millenial = true;
            // Creating a new variable 
            const firstName = "Majid"

            // Reassining outer scope variable
            output = "New Output "
            const str = `Oh, and you're a millenial ${firstName}`;
            console.log('If block scope =>', str);
            function add(a, b) {
                return a + b;
            }
            console.log('Function Add in the if block =>', add(2, 3) );
        }
        console.log('Reassigning Variable =>', output);
        console.log('out of if scope =>', millenial);
        // console.log('out of if scope =>', str);
    }
    printAge()
    // console.log('Our of Up scope =>', millenial );
    return age;
}
// console.log('Our of Up scope =>', millenial );
const firstName = "Meisam";
calcAge(1989);