//age in weeks

function lifeInWeeks(age){
const lifeExpectancy = 90;
let yearsleft = lifeExpectancy - age;

let daysLeft = yearsleft * 365;
let monthsLeft = yearsleft * 12;
let weeksLeft = Math.floor(daysLeft / 7);

return `You are ${age} years old and you have ${monthsLeft} months, ${weeksLeft} weeks and ${daysLeft} days`;
}




//love calculator
function loveCalculator(matchOne, matchTwo){
    let matchPercentage = Math.floor(Math.random() * 100) + 1;
    if(typeof matchOne === 'number' || typeof matchTwo === 'number'){
        return 'match cannot be a number';
    }
    return `${matchOne} and ${matchTwo} are ${matchPercentage}% match!!!`;
} 

loveCalculator('Kobe', 'Eugene');

