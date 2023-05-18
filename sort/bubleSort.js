//bubble sort
function bubbleSorting(arr1) {
  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr1.length - i - 1; j++) {
      if (arr1[j] > arr1[j + 1]) {
        [arr1[j], arr1[j + 1]] = [arr1[j + 1], arr1[j]];
      }
    }
  }
  console.log("Sorted by bubble sort : "+arr1);
}

let arr1 = [33, 2, 255, 6, 7, 88, 4, 32, 6, 33, 2];
bubbleSorting(arr1);