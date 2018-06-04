'use strict';

const insertionSort = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    let current = arr[i];
    let prev = i - 1;
    while (prev >= 0 && arr[prev] > current) {
      arr[prev + 1 ] = arr[prev];
      prev -= 1;
    }
    arr[prev + 1] = current;
  }
  return arr;
};

let test = insertionSort([4, 7, 5, 9, 1, 8, 6, 2, 10, 3]);
console.log(test);