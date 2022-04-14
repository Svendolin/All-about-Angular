console.log("Hello World!")

function sayHello() {
  const name:String = "Sven"; //:String = In meiner Variable wird Text gespeichert

}


/* 1) Always use CONST and LET */

let hero = 'Iron Man'
const anotherhero = 'Iron Man';

/* 2) Keep your function scope always in mind */

// function foo() {
//   if(true)  {                 // FUNCTION SCOPE - START | BLOCK SCOPE - START
//     var heroOne = 'Iron Man'; // Functionscope
//     let heroTwo = 'Superman'; // Blockscope (console.log is in the wrong scope)
//     const herThree = 'Batman';// Blockscope (console.log is in the wrong scope)
//   }                           // BLOCK SCOPE - END
//   console.log(heroOne); // 'Iron Man'
//   console.log(heroTwo); // 'heroTwo is not defined'
//   console.log(heroThree); // 'heroThree is not defined'

// }                          // FUNCTION SCOPE - END

// foo();


/* MODERN JS: Single Param - Expression */
heroname => 'Iron Man';
/* MODERN JS: Multiple Params - Expression */
(heroname, herologo) => `${heroname} ${herologo}`

/* FUNCTION as we know to return */
function createNewHero(heroName, heroSurname) {
  return {
    heroName: heroName,
    heroSurname: heroSurname
  }
}

/* FUNCTION as we call with an arrow-function => */
const createNewUser = (heroName, heroSurname) => ({
  heroName: heroName,
  heroSurname: heroSurname
})

/* NESTING with Objects as we know */
const USER = {
  name: 'John',
  surname: 'Doe',
  isVip: true,
  age: 30,
  adress: { // Object in Object
    houseNr: 1,
    street: 'Badenstrasse'
  },
  tags: ['top customer', 'something'] // Array with Strings
}

/* 3) ---- FOR-EACH Loops with ARROW FUNCTIONS = Is your FRIEND! ---- */
//old: FOR-LOOPS
const numbersarray1 = [1,2,3,4,5]

for( let i = 0; i < numbersarray1.length; i++) {
  console.log(numbersarray1[i]) // 0,1,2,3,4
}

//new: FOR-EACH ARROW FUNCTIONS
const numbersarray2 = [1,2,3,4,5,6,7,8,9,10];
numbersarray2.forEach(value => console.log(value)); // 1,2,3,4,5,6,7,8,9,10

// new: INSTEAD OF FOREACH-methods you can also use other methods like MAP() or REDUCE() or FILTER()
const numbersarray3 = [1,2,3,4,5,6];
const result = numbersarray3.map(value => value * 5);
console.log(result); // We have to call the name of the variable "result" and not "value" because there is no scope {}


/* ---------------- MORE ARROW FUNCTION EXAMPLES ------------------- */
/* Example 1) */
// old
function sum(a,b) {
  return a + b
}
//new
let sum2 = (a,b) => a + b;
/*
A) Remove function, put it into a variable
B) = Parameters
C) Return the stuff after the arrow => without typing "return"

*/

/* Example 2) */
// old
function randomNumber() {
  return Math.random
}
// new
let randomNumber2 = () => Math.random

/* Example 3) */
// old
document.addEventListener('click', function() {
  console.log('click')
})
// new
document.addEventListener('click', () => console.log('click'))
/*
 A) function(){} actually gets replaced by ,() =>
*/

