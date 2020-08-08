const ages = [12, 14, 18, 26, 30];
const ages2 = [25, 7, 28];
const ages3 = [30, 45, 50];
//  old way of merging two arrays
const allAges = ages.concat(ages2).concat([5]).concat(ages3);

// New and cleaner way of merging two arrays
const allAges2 = [...ages, ...ages2, 5, ...ages3];
// console.log(allAges2);

// different Example of using three dots

// finding max number of an array

const findMax = [12, 56, 23, 89, 45, 152, 47, 2, 5, 6];

const resultMax = Math.max(...findMax);
console.log(resultMax);
