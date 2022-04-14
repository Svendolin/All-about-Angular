console.log("Hello World!")

function sayHello() {
  const name:String = "Sven"; //:String = In meiner Variable wird Text gespeichert

}

// Single Parm - Expression
heroname => 'Iron Man';

(heroname, herologo) => `${heroname} ${herologo}`

function createNewHero(heroName, heroSurname) {
  return {
    heroName: heroName,
    heroSurname: heroSurname
  }
}

const createNewUser = (heroName, heroSurname) => ({
  heroName: heroName,
  heroSurname: heroSurname
})

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

const number = [1,2];

const result = number.forEach(value => console.log(value));

console.log(number)



