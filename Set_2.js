'use strict'

function jediName(firstName, lastName) {
    const first = firstName.slice(0,2);
    const last = lastName.slice(-3);
    console.log(`${last}${first}`) 
}

jediName('Alisha', 'Evans');



function beyond(num) {
    if (num === Infinity || num === -Infinity) {
        console.log('And beyond.')
    } else if (num > 0) {
        console.log('To infinity.')
    } else if (num < 0) {
        console.log('To negative infinity.')
    } else if (num === 0) {
        console.log('Staying home.')
    }
}

beyond(-6);