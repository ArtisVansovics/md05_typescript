// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import { animals, countries } from './arrays.ts';

/* CLASSWORK */
console.log('___CLASSWORK___');

// Task #-4

const car = [{}, {
  name: 'Volvo',
}];

console.log(car[1].name); // returns Volvo

// Task #-3

const carTwo = {
  sum: () => '3000000EUR',
};

console.log(carTwo.sum()); // returns 3000000EUR

// Task #-2

const carThree = {
  model: {
    color: 'red',
  },
};

console.log(carThree.model.color); // returns red

// Task #-1

const fruit: unknown[][] = [
  [[], 'Apple'],
];

console.log(fruit[0][1]); // returns 'Apple'

// Task #0

const humanNames = {
  name: (a: string) => a,
};

console.log(humanNames.name('Jānis')); // returns Jānis

// Tasks #1
const math = {
  sum: () => () => (x: number, y: number) => ({
    sum: Number(`${x}${y}`),
  }),
};

console.log(math.sum()()(1, 3).sum); // returns 13

// Task #2
const human = () => ({
  rights: [
    [],
    [],
    [
      [],
      {
        amendment: [{}, [], {
          paragraph: () => 'Lorem Ipsum',
        }],
      },
    ],
  ],
});

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
console.log(human().rights[2][1].amendment[2].paragraph()); // returns 'Lorem Ipsum'

// Task #3

// eslint-disable-next-line max-len
const mathPow = (x:number, y:number) => () => () => () => () => () => () => () => () => (z:number) => (x + y) ** z;

console.log(mathPow(2, 3)()()()()()()()()(2)); // returns powered x with y and sum powered by Z

// Task #4
// Take animal array from
// https://gist.github.com/borlaym/585e2e09dd6abd9b0d0a
// Filter out Animals with letters "A" "Z" "U" "G" and capitalize it

const letters = ['A', 'Z', 'U', 'G'];

// eslint-disable-next-line max-len
const filterAnimals = animals.filter((animal: string[]) => letters.includes(animal[0])).map((animal: string) => animal.toUpperCase());

console.log(filterAnimals);

// Task #5
// take array from https://stackoverflow.com/a/20623472/2927424
// filter out countries that have less than 6 characters
// modify array without nativeName key

// eslint-disable-next-line max-len
// const filterCountries = countries.filter((country: Record<string, unknown>) => Object.entries(country)[1][1].length > 6);
// const filterCountries = countries.filter((country: Record<string, unknown>) =>
//   Object.entries(country)[1][1].length > 6).map((country: Record<string, unknown>) =>
//   Object.entries(country).slice(0, -1));
// const fdfd = Object.entries(countries[0])[2];

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
// eslint-disable-next-line max-len
const filterCountries = Object.fromEntries(countries.filter((country: Record<string, unknown>) => Object.entries(country)[1][1].length > 6).map((country: Record<string, unknown>) => Object.entries(country).slice(0, -1)));

console.log(filterCountries);

/* SPREAD OPERATOR  */
console.log('___SPREAD OPERATORS___');

// Spread operator function A
// Write a function that takes two number arrays as parameters
// and return an array which contains elements from both arrays

const combineArr = (a: number[], b: number[]): number[] => [...a, ...b];

console.log('Tests of function A - combineArr:');
console.log(combineArr([1, 2], [3, 4])); // [1, 2, 3, 4]
console.log(combineArr([1, 2], [3, 4, 5, 6])); // [1, 2, 3, 4, 5, 6]

// Spread operator function B
// Write a function that takes an array and a string as parameters
// and return an array which contains all elements from the given array
// and the given string as the last element

const addStringToEnd = (a: string[], b: string): string[] => [...a, b];

console.log('Test of function B - addStringToEnd:');
console.log(addStringToEnd(['Apple', 'Orange', 'Banana'], 'Kiwi')); // ['Apple', 'Orange', 'Banana', 'Kiwi']

// Spread operator function C
// Write a function that takes an array and a string as parameters
// and return an array which contains all elements from the given array
// and the given string as the first element

const addStringToStart = (a: string[], b: string): string[] => [b, ...a];

console.log('Test of function C - addStringToStart:');
console.log(addStringToStart(['Apple', 'Orange', 'Banana'], 'Kiwi')); // ['Kiwi', 'Apple', 'Orange', 'Banana']

// Spread operator function D
// Write a function that takes two objects as parameters
// and return an object which contains properties from both objects

// eslint-disable-next-line max-len
const combineObj = (a: Record<string, unknown>, b: Record<string, unknown>): Record<string, unknown> => ({ ...a, ...b });

console.log('Tests of function D - combineObj:');
console.log(combineObj({ a: 1, b: 2 }, { c: 3, d: 4 })); // { a:1, b:2, c:3, d:4 }

console.log(combineObj(
  {
    a: 1, b: 2,
  },
  {
    c: 3, d: 4, e: 5, f: 6,
  },
)); // { a:1, b:2, c:3, d:4, e:5, f:6 }

// Spread operator function E
// Write a function that takes an object and a string as parameters
// and return an object which contains properties from the given object
// and a new property favoriteMovie with the value equal to the given string

// eslint-disable-next-line max-len
const addStringToObj = (a: Record<string, unknown>, b: string): Record<string, unknown> => ({ ...a, favoriteMovie: b });

console.log('Tests of function E - addStringToObj:');
console.log(addStringToObj({ eyeColor: 'green', age: 10 }, 'Garfield')); // { eyeColor: 'green', age: 10, favoriteMovie:  'Garfield' }
console.log(addStringToObj({ eyeColor: 'blue', age: 15 }, 'Twilight')); // { eyeColor: 'blue', age: 15, favoriteMovie:  'Twilight' }

/* HOMEWORK */
console.log('___HOMEWORK___');

type mixedVal = string | number | boolean

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

// Function 21

const insertString = (a: string, b: string): string => {
  let i = 3;
  const result = [];
  while (i < a.length + 3) {
    result.unshift(a.slice(-i, (a.length - (i - 3))));
    i += 3;
  }
  return result.join(b);
};

console.log('Tests of function 21 - insertString:');
console.log(insertString('1234567', '.')); // '1.234.567'
console.log(insertString('abcde', '$')); // 'ab$cde'
console.log(insertString('zxyzxyzxyzxyzxyz', 'w')); // 'zwxyzwxyzwxyzwxyzwxyz'

// Function 22

const incrementToNextLetter = (a: string): string => {
  let i = 0;
  const result = [];
  while (i < a.length) {
    result.push(String.fromCharCode(a.charCodeAt(i) + 1));
    i += 1;
  }
  return result.join('');
};

console.log('Tests of function 22 - incrementToNextLetter:');
console.log(incrementToNextLetter('bnchmf')); // 'coding'
console.log(incrementToNextLetter('bgddrd')); // 'cheese'
console.log(incrementToNextLetter('sdrshmf')); // 'testing'

// Function 23

const nthElementOfArr = (a: number[], n: number): number => a[n - 1];

console.log('Tests of function 23 - incrementToNextLetter:');
console.log(nthElementOfArr([1, 2, 3, 4, 5], 3)); // 3
console.log(nthElementOfArr([10, 9, 8, 7, 6], 5)); // 6
console.log(nthElementOfArr([7, 2, 1, 6, 3], 1)); // 7

// Function 24

const removeFirstThreeOfArr = (a: number[]): number[] => a.slice(3);

console.log('Tests of function 24 - removeFirstThreeOfArr:');
console.log(removeFirstThreeOfArr([1, 2, 3, 4])); // [4]
console.log(removeFirstThreeOfArr([5, 4, 3, 2, 1, 0])); // [2,1,0]
console.log(removeFirstThreeOfArr([99, 1, 1])); // []

// Function 25

const extractLastThreeOfArr = (a: number[]): number[] => a.slice(-3);

console.log('Tests of function 25 - extractLastThreeOfArr:');
console.log(extractLastThreeOfArr([1, 2, 3, 4])); // [2,3,4]
console.log(extractLastThreeOfArr([5, 4, 3, 2, 1, 0])); // [2,1,0]
console.log(extractLastThreeOfArr([99, 1, 1])); // [99,1,1]

// Function 26

const extractFirstThreeOfArr = (a: number[]): number[] => a.slice(0, 3);

console.log('Tests of function 26 - extractFirstThreeOfArr:');
console.log(extractFirstThreeOfArr([1, 2, 3, 4])); // [1,2,3]
console.log(extractFirstThreeOfArr([5, 4, 3, 2, 1, 0])); // [5,4,3]
console.log(extractFirstThreeOfArr([99, 1, 1])); // [99,1,1]

// Function 27

const extractLastNthOfArr = (a: number[], n: number): number[] => a.slice(-n);

console.log('Tests of function 27 - extractLastNthOfArr:');
console.log(extractLastNthOfArr([1, 2, 3, 4, 5], 2)); // [ 4, 5 ]
console.log(extractLastNthOfArr([1, 2, 3], 6)); // [ 1, 2, 3 ]
console.log(extractLastNthOfArr([1, 2, 3, 4, 5, 6, 7, 8], 3)); // [ 6, 7, 8 ]

// Function 28

const filterOutOfArr = (a: mixedVal[], b: mixedVal): mixedVal[] => a.filter((item) => item !== b);

console.log('Tests of function 28 - filterOutOfArr:');
console.log(filterOutOfArr([1, 2, 3], 2)); // [1, 3]
console.log(filterOutOfArr([1, 2, '2'], '2')); // [1, 2]
console.log(filterOutOfArr([false, '2', 1], false)); // ['2', 1]
console.log(filterOutOfArr([1, 2, '2', 1], 1)); // [2, '2']

// Function 29

const numberOfElements = (a: number[]): number => a.length;

console.log('Tests of function 29 - numberOfElements:');
console.log(numberOfElements([1, 2, 2, 4])); // 4
console.log(numberOfElements([9, 9, 9])); // 3
console.log(numberOfElements([4, 3, 2, 1, 0])); // 5

// Function 30

const numberOfNegatives = (a: number[]): number => (a.filter((item) => item < 0)).length;

console.log('Tests of function 30 - numberOfNegatives:');
console.log(numberOfNegatives([1, -2, 2, -4])); // 2
console.log(numberOfNegatives([0, 9, 1])); // 0
console.log(numberOfNegatives([4, -3, 2, 1, 0])); // 1

// Function 31

const sortArrDescending = (a: number[]): number[] => (
  a.sort((x, y) => (
    y - x))
);

console.log('Tests of function 31 - sortArrDescending:');
console.log(sortArrDescending([1, 3, 2])); // [3,2,1]
console.log(sortArrDescending([4, 2, 3, 1])); // [4,3,2,1]

// Function 32

const sortArrAlphabetic = (a: string[]): string[] => (
  a.sort((x, y) => (
    x.charCodeAt(0) - y.charCodeAt(0)))
);

console.log('Tests of function 32 - sortArrAlphabetic:');
console.log(sortArrAlphabetic(['b', 'c', 'd', 'a'])); // ['a', 'b', 'c', 'd']
console.log(sortArrAlphabetic(['z', 'c', 'd', 'a', 'y', 'a', 'w'])); // ['a', 'a', 'c', 'd', 'w', 'y', 'z']

// Function 33

const averageOfArr = (a: number[]): number => (
  a.reduce((x, y) => x + y, 0) / a.length
);

console.log('Tests of function 33 - averageOfArr:');
console.log(averageOfArr([10, 100, 40])); // 50
console.log(averageOfArr([10, 100, 1000])); // 370
console.log(averageOfArr([-50, 0, 50, 200])); // 50

// Function 34

const longestString = (a: string[]): string => (
  a.reduce((x, y) => (
    x.length > y.length ? x : y
  ))
);

console.log('Tests of function 34 - longestString:');
console.log(longestString(['help', 'me'])); // 'help'
console.log(longestString(['I', 'need', 'candy'])); // 'candy'

// Function 35

const areAllEqual = (a: mixedVal[]): boolean => a.every((x) => (
  x === a[0]
));

console.log('Tests of function 35 - areAllEqual:');
console.log(areAllEqual([true, true, true, true])); // true
console.log(areAllEqual(['test', 'test', 'test'])); // true
console.log(areAllEqual([1, 1, 1, 2])); // false
console.log(areAllEqual(['10', 10, 10, 10])); // false

// Function 36

const putAllValuesInOneArr = (...values: (mixedVal[])[]): mixedVal[] => (
  [].concat(...values)
);

console.log('Tests of function 36 - putAllValuesInOneArr:');
console.log(putAllValuesInOneArr([1, 2, 3], [4, 5, 6])); // [1, 2, 3, 4, 5, 6]
console.log(putAllValuesInOneArr(['a', 'b', 'c'], [4, 5, 6])); // ['a', 'b', 'c', 4, 5, 6]
console.log(putAllValuesInOneArr([true, true], [1, 2], ['a', 'b'])); // [true, true, 1, 2, 'a', 'b']

// Function 37

const sortObjArrByPropertyB = (n: {a: number, b: number}[]): {a: number, b: number}[] => (
  n.sort((x, y) => (
    x.b - y.b
  ))
);

console.log('Tests of function 37 - sortObjArrByPropertyB:');
console.log(sortObjArrByPropertyB([{ a: 1, b: 2 }, { a: 5, b: 4 }])); // [{a:1,b:2},{a:5,b:4}]
console.log(sortObjArrByPropertyB([{ a: 2, b: 10 }, { a: 5, b: 4 }])); // [{a:5,b:4},{a:2,b:10}]
console.log(sortObjArrByPropertyB([{ a: 1, b: 7 }, { a: 2, b: 1 }])); // [{a:2,b:1},{a:1,b:7}]

// Function 38

const mergeAndSortArrAscendingWithoutDuplicates = (a: number[], b: number[]): number[] => (
  [...new Set(a.concat(b))].sort((x, y) => (
    x - y
  ))
);

console.log('Tests of function 38 - mergeAndSortArrAscendingWithoutDuplicates:');
console.log(mergeAndSortArrAscendingWithoutDuplicates([1, 2, 3], [3, 4, 5])); // [ 1, 2, 3, 4, 5 ]
console.log(mergeAndSortArrAscendingWithoutDuplicates([-10, 22, 333, 42], [-11, 5, 22, 41, 42]));
// [ -11, -10, 5, 22, 41,  42, 333]

// Function 39

const sumAllGreaterThanB = (a: number[], b: number): number => (
  a.filter((numA) => numA > b).reduce((x, y) => (
    x + y
  ))
);

console.log('Tests of function 39 - sumAllGreaterThanB:');
console.log(sumAllGreaterThanB([1, 2, 3, 4, 5, 6, 7], 2)); // 25
console.log(sumAllGreaterThanB([-10, -11, -3, 1, -4], -3)); // 1
console.log(sumAllGreaterThanB([78, 99, 100, 101, 401], 99)); // 602

// Function 40

const rangeFromMinToMax = (numMin: number, numMax: number): number[] => (
  Array.from({ length: (numMax + 1 - numMin) }, (x, y) => y + numMin)
);

console.log('Tests of function 40 - rangeFromMinToMax:');
console.log(rangeFromMinToMax(2, 10)); // [2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(rangeFromMinToMax(1, 3)); // [1, 2, 3]
console.log(rangeFromMinToMax(-5, 5)); // [-5, -4, -3, -2, -1, 0,  1,  2,  3,  4, 5]
console.log(rangeFromMinToMax(2, 7)); // [2, 3, 4, 5, 6, 7]

// Function 41

// const arrToObjectByFirstLetter = (arr: string[]): object => (
//
// );
//
console.log('Tests of function 41 - arrToObjectByFirstLetter:');
// console.log(arrToObjectByFirstLetter(['Alf', 'Alice', 'Ben']));
// { a: ['Alf', 'Alice'], b: ['Ben']}
// console.log(arrToObjectByFirstLetter(['Ant', 'Bear', 'Bird']));
// { a: ['Ant'], b: ['Bear', 'Bird']}
// console.log(arrToObjectByFirstLetter(['Berlin', 'Paris', 'Prague']));
// { b: ['Berlin'], p: ['Paris', 'Prague']}

// Function 42

const newArrStartingWithNum = (arr: mixedVal[], n: number): mixedVal[] => {
  const newArr = [...arr];
  if (n < 6) {
    newArr.unshift(0);
  } else newArr.unshift(n);
  return newArr;
};

console.log('Tests of function 42 - newArrStartingWithNum:');
console.log(newArrStartingWithNum([1, 2, 3], 6)); // [6,1,2,3]
console.log(newArrStartingWithNum(['a', 'b'], 2)); // [0,'a','b']
console.log(newArrStartingWithNum([null, false], 11)); // [11,null,false]

// Function 43

const saveEveryNthToNewArr = (arr: mixedVal[], n: number): mixedVal[] => {
  const newArr = [...arr];
  return newArr.filter((arrEl, i) => (
    i % n === n - 1));
};

console.log('Tests of function 43 - saveEveryNthToNewArr:');
console.log(saveEveryNthToNewArr([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 3)); // [3,6,9]
console.log(saveEveryNthToNewArr([10, 9, 8, 7, 6, 5, 4, 3, 2, 1], 5)); // [6,1]
console.log(saveEveryNthToNewArr([7, 2, 1, 6, 3, 4, 5, 8, 9, 10], 2)); // [2,6,4,8,10]

// Function 44

type countryObject = {
  continent: string,
  country: string,
};

const returnCountryKeyValue = (obj: countryObject): string => obj.country;

console.log('Tests of function 44 - returnCountryKeyValue:');
console.log(returnCountryKeyValue({ continent: 'Asia', country: 'Japan' })); // 'Japan'
console.log(returnCountryKeyValue({ country: 'Sweden', continent: 'Europe' })); // 'Sweden'

// Function 45

type propTwoObject = {
  [key: string]: string | number,
  'prop-2': string | number,
};

const returnPropTwoKeyValue = (obj: propTwoObject): string | number => obj['prop-2'];

console.log('Tests of function 45 - returnPropTwoKeyValue:');
console.log(returnPropTwoKeyValue({ one: 1, 'prop-2': 2 })); // 2
console.log(returnPropTwoKeyValue({ 'prop-2': 'two', prop: 'test' })); // 'two'

// Function 46

type stringKeyObject = {
  [key: string]: string,
};

const returnValueOfStringKey = (obj: stringKeyObject, x: string): string => obj[x];

console.log('Tests of function 46 - returnValueOfStringKey:');
console.log(returnValueOfStringKey({ continent: 'Asia', country: 'Japan' }, 'continent')); // 'Asia'
console.log(returnValueOfStringKey({ country: 'Sweden', continent: 'Europe' }, 'country')); // 'Sweden'

// Function 47

type unknownValuesObj = {
  [key: string | number]: string | number | boolean,
};

const doesObjHaveProperty = (a: unknownValuesObj, b: string): boolean => (
  Object.prototype.hasOwnProperty.call(a, b)
);

console.log('Tests of function 47 - doesObjHaveProperty:');
console.log(doesObjHaveProperty({ a: 1, b: 2, c: 3 }, 'b')); // true
console.log(doesObjHaveProperty({ x: 'a', y: 'b', z: 'c' }, 'a')); // false
console.log(doesObjHaveProperty({ x: 'a', y: 'b', z: 'c' }, 'z')); // true

// Function 48

const createObjWithKeyPropertyValue = (a: string): unknownValuesObj => (
  Object.fromEntries([['key', a]])
);

console.log('Tests of function 48 - createObjWithKeyPropertyValue:');
console.log(createObjWithKeyPropertyValue('a')); // {key:'a'}
console.log(createObjWithKeyPropertyValue('z')); // {key:'z'}
console.log(createObjWithKeyPropertyValue('b')); // {key:'b'}

// Function 49

const createObjWithGivenKeyPropertyValue = (a: string, b: string): unknownValuesObj => (
  Object.fromEntries([[a, b]])
);

console.log('Tests of function 49 - createObjWithGivenKeyPropertyValue:');
console.log(createObjWithGivenKeyPropertyValue('a', 'b')); // {a:'b'}
console.log(createObjWithGivenKeyPropertyValue('z', 'x')); // {z:'x'}
console.log(createObjWithGivenKeyPropertyValue('b', 'w')); // {b:'w'}

// Function 50

const createObjFromTwoArr = (a: (string | number)[], b: (string | number)[]): unknownValuesObj => (
  a.reduce((accumulator, element, index) => (
    { ...accumulator, [element]: b[index] }
  ), {})
);

console.log('Tests of function 50 - createObjFromTwoArr:');
console.log(createObjFromTwoArr(['a', 'b', 'c'], [1, 2, 3])); // {a:1,b:2,c:3}
console.log(createObjFromTwoArr(['w', 'x', 'y', 'z'], [10, 9, 5, 2])); // {w:10,x:9,y:5,z:2}
console.log(createObjFromTwoArr([1, 'b'], ['a', 2])); // {1:'a',b:2}

// Function 51

const createArrFromObjKeys = (a: unknownValuesObj): string[] => (
  Object.keys(a)
);

console.log('Tests of function 51 - createArrFromObjKeys:');
console.log(createArrFromObjKeys({ a: 1, b: 2, c: 3 })); // ['a','b','c']
console.log(createArrFromObjKeys({
  j: 9, i: 2, x: 3, z: 4,
})); // ['j','i','x','z']
console.log(createArrFromObjKeys({ w: 15, x: 22, y: 13 })); // ['w','x','y']

// Function 52

const sumOfObjValues = (a: { [key: string]: number }): number => (
  Object.values(a).reduce((x, y) => x + y)
);

console.log('Tests of function 52 - sumOfObjValues:');
console.log(sumOfObjValues({ a: 1, b: 2, c: 3 })); // 6
console.log(sumOfObjValues({
  j: 9, i: 2, x: 3, z: 4,
})); // 18
console.log(sumOfObjValues({ w: 15, x: 22, y: 13 })); // 50

// Function 53

const removePropertyBFromObj = (a: { [key: string]: number }): { [key: string]: number } => {
  const newObj = { ...a };
  delete newObj.b;
  return newObj;
};

console.log('Tests of function 53 - removePropertyBFromObj:');
console.log(removePropertyBFromObj({ a: 1, b: 7, c: 3 })); // { a: 1, c: 3 }
console.log(removePropertyBFromObj({ b: 0, a: 7, d: 8 })); // { a: 7, d: 8 }
console.log(removePropertyBFromObj({
  e: 6, f: 4, b: 5, a: 3,
})); // { e: 6, f: 4, a: 3 }

// Function 54

// eslint-disable-next-line max-len
const mergeTwoObjsAndCorrectSecondB = (obj1: { [key: string]: number }, obj2: { [key: string]: number }): { [key: string]: number } => {
  const newObj1 = { ...obj1 };
  const newObj2 = { ...obj2 };
  newObj2.d = newObj2.b;
  delete newObj2.b;
  return { ...newObj1, ...newObj2 };
};

console.log('Tests of function 54 - mergeTwoObjsAndCorrectSecondB:');
console.log(mergeTwoObjsAndCorrectSecondB({ a: 1, b: 2 }, { c: 3, b: 4, e: 5 }));
// { a: 1, b: 2, c: 3, e: 5, d: 4}
console.log(mergeTwoObjsAndCorrectSecondB({ a: 5, b: 4 }, { c: 3, b: 1, e: 2 }));
// { a: 5, b: 4, c: 3, e: 2, d: 1}

// Function 55

// eslint-disable-next-line max-len
const multiplyAllObjValuesByN = (obj: { [key: string]: number }, n: number): { [key: string]: number } => {
  const newObj = { ...obj };
  for (const key in newObj) {
    if (typeof newObj[key] === 'number') {
      newObj[key] *= n;
    }
  }
  return newObj;
};

console.log('Tests of function 55 - multiplyAllObjValuesByN:');
console.log(multiplyAllObjValuesByN({ a: 1, b: 2, c: 3 }, 3));
// {a:3,b:6,c:9}
console.log(multiplyAllObjValuesByN({
  j: 9, i: 2, x: 3, z: 4,
}, 10));
// {j:90,i:20,x:30,z:40}
console.log(multiplyAllObjValuesByN({ w: 15, x: 22, y: 13 }, 6));
// {w:90,x:132,y:78}
