function selectionSort(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    let minIndex = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j;
      }
    }
    [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
  }
}

const arr = [451, -2, 65, 4, 7, 98, 7, -13, 1];
selectionSort(arr);
console.log(arr);

// Big-O = O(n^2)