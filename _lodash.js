const _ = require('lodash');
// https://zetcode.com/javascript/lodash/

const ver = _.VERSION;
console.log('lodash');
console.log(ver);
console.log('\n');
let words = ['sky', 'wood', 'forest', 'falcon', 'pear', 'ocean', 'universe'];
let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// 1. Lodash first and last array elements.
let fel = _.first(words);
let lel = _.last(words);

// console.log(`${fel}`);
// console.log(`${lel}`);

// 2. Lodash nth array elements.
// console.log(_.nth(nums, 3));
// console.log(_.nth(nums, -3));

// 3. Lodash chunking array
let c1 = _.chunk(nums, 3);
// console.log(c1);

// 4. Getting array slice
let c2 = _.slice(nums, 0, 5);
// console.log(c2);

// 5. Lodash random number
let r = _.random(10);
// console.log(r);
let r2 = _.random(5, 10);
// console.log(r2);

// 5. Lodash random array element
let word = _.sample(words);
// console.log(word);

// 6. Lodash shuffling array elements
// console.log(_.shuffle(words));

// 7. Lodash _.times function. The _.times executes the function n times.
_.times(4, () => {
  // console.log('brave');
});

// 8. Lodash determine data type

let vals = [1, 2, 'good', [1, 2], { name: 'Peter', age: 32 }];

// vals.forEach((e) => {
//   if (_.isNumber(e)) {
//     console.log(`${e} is a number`);
//   }

//   if (_.isString(e)) {
//     console.log(JSON.stringify(e) + ' is a string');
//   }

//   if (_.isArray(e)) {
//     console.log(JSON.stringify(e) + ' is an array');
//   }

//   if (_.isObject(e)) {
//     console.log(JSON.stringify(e) + ' is an object');
//   }
// });

//9. Lodash _.range function. The function accepts the start, end, and step parameters.
let vals3 = _.range(0, 15, 3);
// console.log(vals3);

// 10. Lodash maximum and minimum
let min = _.min(vals);
// console.log(min);
