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

// Function 11

const isNumberEven = (x: number): boolean => x % 2 === 0;

console.log('Tests of function 11 - isNumberEven:');
console.log(isNumberEven(10)); // true
console.log(isNumberEven(-4)); // true
console.log(isNumberEven(5)); // false
console.log(isNumberEven(-111)); // false

// Function 12

const timesStringOccurs = (a: string, b: string): number => {
  const re = new RegExp(`\\${a}`, 'g'); // Creating a new RegExp with a, "\\" used to allow special characters in pattern (double backslash because it's in a string)
  return (b.match(re) || []).length;
};

console.log('Tests of function 12 - timesStringOccurs:');
console.log(timesStringOccurs('m', 'how many times does the character occur in this sentence?')); // 2
console.log(timesStringOccurs('h', 'how many times does the character occur in this sentence?')); // 4
console.log(timesStringOccurs('?', 'how many times does the character occur in this sentence?')); // 1
console.log(timesStringOccurs('z', 'how many times does the character occur in this sentence?')); // 0

// Function 13

const isNumberWhole = (a: number): boolean => Number.isInteger(a);

console.log('Tests of function 13 - isNumberWhole:');
console.log(isNumberWhole(4)); // true
console.log(isNumberWhole(1.123)); // false
console.log(isNumberWhole(1048)); // true
console.log(isNumberWhole(10.48)); // false

// Function 14

const multiplyOrDivide = (a: number, b: number): number => {
  if (a < b) {
    return a / b;
  }
  return a * b;
};

console.log('Tests of function 14 - multiplyOrDivide:');
console.log(multiplyOrDivide(10, 100)); // 0.1
console.log(multiplyOrDivide(90, 45)); // 4050
console.log(multiplyOrDivide(8, 20)); // 0.4
console.log(multiplyOrDivide(2, 0.5)); // 1

// Function 15

const concatIfContains = (a: string, b: string): string => {
  if (a.includes(b)) {
    return b.concat(a);
  }
  return a.concat(b);
};

console.log('Tests of function 15 - concatIfContains:');
console.log(concatIfContains('cheese', 'cake')); // 'cheesecake'
console.log(concatIfContains('lips', 's')); // 'slips'
console.log(concatIfContains('Java', 'script')); // 'Javascript'
console.log(concatIfContains(' think, therefore I am', 'I')); // 'I think, therefore I am'

// Function 16

const roundNumTo2ndDigit = (a: number): number => Math.round(a * 100) / 100;

console.log('Tests of function 16 - roundNumTo2ndDigit:');
console.log(roundNumTo2ndDigit(2.12397)); // 2.12
console.log(roundNumTo2ndDigit(3.136)); // 3.14
console.log(roundNumTo2ndDigit(1.12397)); // 1.12
console.log(roundNumTo2ndDigit(26.1379)); // 26.14

// Function 17

const splitNumToArray = (a: number): number[] => {
  const numDigits: string[] = a.toString().split('');
  return numDigits.map(Number);
};

console.log('Tests of function 17 - splitNumToArray:');
console.log(splitNumToArray(10)); // [1,0]
console.log(splitNumToArray(931)); // [9,3,1]
console.log(splitNumToArray(193278)); // [1,9,3,2,7,8]

// Function 18

const cleanAndJoinStrings = (a: string, b: string): string => {
  const cleanA: string = a.replace('%', '');
  const cleanB: string = b.replace('%', '');
  const capitalizeA: string = cleanA.charAt(0).toUpperCase() + cleanA.slice(1);
  const reverseB: string = cleanB.split('').reverse().join('');
  return capitalizeA + reverseB;
};

console.log('Tests of function 18 - cleanAndJoinStrings:');
console.log(cleanAndJoinStrings('java', 'tpi%rcs')); // 'Javascript'
console.log(cleanAndJoinStrings('c%ountry', 'edis')); // 'Countryside'
console.log(cleanAndJoinStrings('down', 'nw%ot')); // 'Downtown'

// Function 19

const isNumPrime = (a: number): number => {
  for (let i = 2; i < a; i += 1) {
    if (a % i === 0) {
      return isNumPrime(a + 1);
    }
  }
  return a;
};

console.log('Tests of function 19 - isNumPrime:');
console.log(isNumPrime(38)); // 41
console.log(isNumPrime(7)); // 7
console.log(isNumPrime(115)); // 127
console.log(isNumPrime(2000)); // 2003

// Function 20

const isDivisible = (x: number, y: number): number => {
  while (x % y !== 0) {
    // eslint-disable-next-line no-param-reassign
    x += 1;
  }
  return x;
};

console.log('Tests of function 20 - isDivisible:');
console.log(isDivisible(1, 23)); // 23
console.log(isDivisible(23, 23)); // 23
console.log(isDivisible(7, 3)); // 9
console.log(isDivisible(-5, 7)); // 0
