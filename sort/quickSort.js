function quickSort(arr) {
  if(arr.length<=1){
    return arr
  }else{
    let pivot = arr[0]
    let leftArray = []
    let rightArray = []
    for(let i=1;i<arr.length;i++){
      if(arr[i]<pivot){
        leftArray.push(arr[i])
      }else{
        rightArray.push(arr[i])
      }
    }
    return [...quickSort(leftArray),pivot,...quickSort(rightArray)]
  }
  }
  
  const arr=[2,33,2,1,4,5,44,3,2]
  console.log(quickSort(arr));