'use strict';

const selectionSort = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    let index = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[index]) {
        index = j;
      }
    }
    if (i !== index) {
      let temp = arr[i];
      arr[i] = arr[index];
      arr[index] = temp;
    }
  }
    return arr;
  };

let test = selectionSort([4, 7, 5, 9, 1, 8, 6, 2, 10, 3]);
console.log(test);