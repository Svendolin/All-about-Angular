// Typescript Basic Types:

// 1) Boolean type to assign boolean values:
const isAmazing: boolean = true; 

// 2) Number type to assign number values:
const kittenCount: number = 7;

// 3) String type to assign string values:
const language: string = 'typescript';
// const printingVariables: string = `age: ${age}`;

// 4) Array type [] to assign arrays:
const languages: string[] = ['javascript','typescript'];

// 5) Object type {} to assign objects:
const complex: object = {color: 'orange'};

// 6) Any type to assign ANY kind of value:
const whoKnows: any = 'We can assign ANYthing here :D';


let somethingSpecial; // undefined value

let somethingEvenMoreSpecial = undefined; // undefined value

somethingEvenMoreSpecial === somethingSpecial; // true

const something = null;

something !== somethingSpecial // true (null is not the same as undefined)


// 7) Type Aliases:

// Looks worse:
export type User = {
  username: string;
  name: string;
  surname: string;
}

// Looks way better:
export type SearchType = 'customer' | 'product' | 'user';