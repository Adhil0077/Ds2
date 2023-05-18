function selectionSort (array){
  for(let i=0;i<array.length;i++){
    for(let j=i+1;j< array.length;j++){
      if(array[i]>array[j]){
        let temp = array[i]
        array [i] = array[j]
        array [j] =temp
      }
    }
  }
  return array
}
let arr2 = [221,44, 444, 33, 2, 6, 7878, 54, 6];
console.log(selectionSort(arr2));