// Task #-4
// car[1].name // Volvo

// Task #-3
// car.sum() // return 3000000EUR

// Task #-2
// car.model.color // returns red

// Task #-1
// fruit[0][1]; // returns 'Apple'

// Task #0
// human.name('Jānis') // returns Jānis

// Tasks #1
const math = {
  sum: () => () => (x: number, y: number) => ({
    sum: Number(`${x}${y}`),
  }),
};

console.log(math.sum()()(1, 3).sum); // return 13

// Task #2
const human = () => ({
  rights: [
    [],
    [],
    [
      [],
      {
        amendment: [[], [], {
          paragraph: () => 'Lorem Ipsum',
        }],
      },
    ],
  ],
});

console.log(human().rights[2][1].amendment[2].paragraph()); // 'Lorem Ipsum'

// Task #3

console.log(mathPow(x, y)()()()()()()()()(z)); // returns powered x with y and sum powered by Z

// Task #4
// Take animal array from
// https://gist.github.com/borlaym/585e2e09dd6abd9b0d0a
// Filter out Animals with letters "A" "Z" "U" "G" and capitalize it

// Task #5
// take array from https://stackoverflow.com/a/20623472/2927424
// filter out countries that have less than 6 characters
// modify array without nativeName key
