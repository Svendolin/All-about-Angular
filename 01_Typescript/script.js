console.log("Hello World!");
function sayHello() {
    var name = "Sven"; //:String = In meiner Variable wird Text gespeichert
}
/* 1) Always use CONST and LET */
var hero = 'Iron Man';
var anotherhero = 'Iron Man';

/* 2) Keep your function scope always in mind */
// function foo() {
//   if(true)  {                 // FUNCTION SCOPE - START | BLOCK SCOPE - START
//     var heroOne = 'Iron Man'; // Functionscope
//     let heroTwo = 'Superman'; // Blockscope (console.log is in the wrong scope)
//     const heroThree = 'Batman';// Blockscope (console.log is in the wrong scope)
//   }                           // BLOCK SCOPE - END
//   console.log(heroOne); // 'Iron Man'
//   console.log(heroTwo); // 'heroTwo is not defined'
//   console.log(heroThree); // 'heroThree is not defined'
// }                          // FUNCTION SCOPE - END
// foo();
/* MODERN JS: Single Param - Expression */
(function (heroname) { return 'Iron Man'; });
/* MODERN JS: Multiple Params - Expression */
(function (heroname, herologo) { return "".concat(heroname, " ").concat(herologo); });
/* FUNCTION as we know to return */
function createNewHero(heroName, heroSurname) {
    return {
        heroName: heroName,
        heroSurname: heroSurname
    };
}
/* FUNCTION as we call with an arrow-function => */
var createNewUser = function (heroName, heroSurname) { return ({
    heroName: heroName,
    heroSurname: heroSurname
}); };
/* NESTING with Objects as we know */
var USER = {
    name: 'John',
    surname: 'Doe',
    isVip: true,
    age: 30,
    adress: {
        houseNr: 1,
        street: 'Badenstrasse'
    },
    tags: ['top customer', 'something'] // Array with Strings
};

/* 3) ---- FOR-EACH Loops with ARROW FUNCTIONS = Is your FRIEND! ---- */
//old: FOR-LOOPS
var numbersarray1 = [1, 2, 3, 4, 5];
for (var i = 0; i < numbersarray1.length; i++) {
    console.log(numbersarray1[i]); // 0,1,2,3,4
}
//new: FOR-EACH ARROW FUNCTIONS
var numbersarray2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
numbersarray2.forEach(function (value) { return console.log(value); }); // 1,2,3,4,5,6,7,8,9,10

// new: INSTEAD OF FOREACH-methods you can also use other methods like MAP() or REDUCE() or FILTER() or INCLUDES()
var numbersarray3 = [1, 2, 3, 4, 5, 6];
var result = numbersarray3.map(function (value) { return value * 5; });
console.log(result); // We have to call the name of the variable "result" and not "value" because there is no scope {}


/* ---------------- MORE ARROW FUNCTION EXAMPLES ------------------- */
/* Example 1) */
// old
function sum(a, b) {
    return a + b;
}
//new
var sum2 = function (a, b) { return a + b; };
/*
A) Remove function, put it into a variable
B) = Parameters
C) Return the stuff after the arrow => without typing "return"
*/

/* -- Example 2) -- */
// old
function randomNumber() {
    return Math.random;
}
// new
var randomNumber2 = function () { return Math.random; };
/* -- Example 3) -- */
// old
document.addEventListener('click', function () {
    console.log('click');
});
// new
document.addEventListener('click', function () { return console.log('click'); });
// A) function(){} actually gets replaced by ,() =>

/* 4) ---- async functions are always more fun to read and work with than with .then */
async function loadUserAndAllUserOrders() {
    const user = await userService.loadUser();
    const orders = await orderService.loadOrdersForUser(user.id);
    return orders;
}

