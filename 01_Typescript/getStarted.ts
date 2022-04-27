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


/* NULL vs UNDEFINED */

// Undefiniert bedeutet, dass eine Variable deklariert wurde, aber noch kein Wert zugewiesen wurde.
// "Null" ist ein Zuweisungswert, der "kein Wert" bedeutet.
// "Undefined" und "null" sind beide Grundelemente.
// "Undefined" ist vom Typ undefined.
// "Null" ist vom Typ Objekt.
// JavaScript setzt niemals einen Wert auf "null". Es wird von Programmierern verwendet, um anzuzeigen, dass ein "var" keinen Wert hat.
// JavaScript hat eine nicht zugewiesene Variable mit dem Standardwert "undefined" festgelegt.
// "Undefined" ist kein gültiger Wert in JSON (JavaScript Object Notation), während "null" ein gültiger Wert in JSON ist.
// Man kann überprüfen, ob eine Variable undefiniert ist mit: Variablentyp === "undefiniert"
// So können Sie überprüfen, ob eine Variable null ist: variable === null
// Der Gleichheitsoperator behandelt sie als gleich, während der Identitätsoperator sie nicht als gleich behandelt. null === undefined // false null == undefined // true
// Der Wert "null" steht für das absichtliche Fehlen eines Objektwerts. Dies ist einer der Grundwerte von JavaScript.
// Null wird mit einem Literal geschrieben: "null". Es ist kein Bezeichner für die Eigenschaft eines globalen Objekts, wie es "undefiniert" sein kann. "Null" gibt die fehlende Identifikation an, bedeutet, dass eine Variable auf kein Objekt verweist.
// "Undefined" ist eine globale Variable, die JavaScript zur Laufzeit erstellt.


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