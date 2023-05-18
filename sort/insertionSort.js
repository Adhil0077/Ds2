function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    let curr = arr[i];
    let j = i - 1;
    while (j >= 0 && arr[j] > curr) {
      arr[j+1] = arr[j];
      j--;
    }
    arr[j + 1] = curr;
  }
  console.log("insertion sort : "+arr);
}

let arr = [100, 2, 44, 5, 3, 21, 1, 16, 7, 2];
insertionSort(arr);