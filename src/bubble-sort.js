'use strict';

const bubbleSort = (arr) => {

  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = 0; j < arr.length - i -1; j++) {
    if (arr[j] < arr[j + 1]) {
      let temp = arr[j];
      arr[j] = arr[j + 1];
      arr[j + 1] = temp;
    }
  } 
}
return arr;
};

let test = bubbleSort([4, 7, 5, 9, 1, 8, 6, 2, 10, 3]);
console.log(test);