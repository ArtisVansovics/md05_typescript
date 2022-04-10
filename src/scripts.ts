// Function Example

const subtract = (a: number, b: number): number => a - b;

console.log('Tests of function 00 - subtract:');
console.log(subtract(1, 2)); // -1
console.log(subtract(10, 5)); // 5
console.log(subtract(99, 1)); // 98

// Function 01

const sumNumbers = (a: number, b: number): number => a + b;

console.log('Tests of function 01 - sumNumbers:');
console.log(sumNumbers(1, 2)); // 3
console.log(sumNumbers(1, 10)); // 11
console.log(sumNumbers(99, 1)); // 100

// Function 02

const typeOf = (x: unknown): string => typeof x;

console.log('Tests of function 02 - typeOf:');
console.log(typeOf(1)); // 'number'
console.log(typeOf(false)); // 'boolean'
console.log(typeOf({})); // 'object'
console.log(typeOf('string')); // 'string'
console.log(typeOf(['array'])); // 'object'

// Function 03

const nthCharacter = (a: string, n: number): string => a.charAt(n - 1);

console.log('Tests of function 03 - nthCharacter:');
console.log(nthCharacter('abcd', 1)); // 'a'
console.log(nthCharacter('zyxbwpl', 5)); // 'w'
console.log(nthCharacter('gfedcba', 3)); // 'e'

// Function 04

const removeFirstThreeChar = (a: string): string => a.slice(3);

console.log('Tests of function 04 - removeFirstThreeChar:');
console.log(removeFirstThreeChar('abcdefg')); // 'defg'
console.log(removeFirstThreeChar('1234')); // '4'
console.log(removeFirstThreeChar('fgedcba')); // 'dcba'

// Function 05

const extractLastThreeChar = (a: string): string => a.slice(-3);

console.log('Tests of function 05 - extractLastThreeChar:');
console.log(extractLastThreeChar('abcdefg')); // 'efg'
console.log(extractLastThreeChar('1234')); // '234'
console.log(extractLastThreeChar('fgedcba')); // 'cba'

// Function 06

const extractFirstThreeChar = (a: string): string => a.slice(0, 3);

console.log('Tests of function 06 - extractFirstThreeChar:');
console.log(extractFirstThreeChar('abcdefg')); // 'abc'
console.log(extractFirstThreeChar('1234')); // '123'
console.log(extractFirstThreeChar('fgedcba')); // 'fge'

// Function 07

const extractFirstHalf = (a: string): string => a.slice(0, ((a.length) * 0.5));

console.log('Tests of function 07 - extractFirstHalf:');
console.log(extractFirstHalf('abcdefgh')); // 'abcd'
console.log(extractFirstHalf('1234')); // '12'
console.log(extractFirstHalf('gedcba')); // 'ged'

// Function 08

const removeLastThreeChar = (a: string): string => a.slice(0, -3);

console.log('Tests of function 08 - removeLastThreeChar:');
console.log(removeLastThreeChar('abcdefg')); // 'abcd'
console.log(removeLastThreeChar('1234')); // '1'
console.log(removeLastThreeChar('fgedcba')); // 'fged'

// Function 09

const percentOf = (a: number, b: number): number => (a / 100) * b;

console.log('Tests of function 09 - percentOf:');
console.log(percentOf(100, 50)); // 50
console.log(percentOf(10, 1)); // 0.1
console.log(percentOf(500, 25)); // 125

// Function 10

// eslint-disable-next-line max-len
const complexCalc = (a: number, b: number, c: number, d: number, e:number, f:number): number => (((((a + b) - c) * d) / e) ** f);

console.log('Tests of function 10 - complexCalc:');
console.log(complexCalc(6, 5, 4, 3, 2, 1)); // 10.5
console.log(complexCalc(6, 2, 1, 4, 2, 3)); // 2744
console.log(complexCalc(2, 3, 6, 4, 2, 3)); // -8
