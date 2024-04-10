function insertionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let numberToInsert = arr[i];
    let j = i - 1;
    while (j >= 0 && arr[j] > numberToInsert) {
      arr[j + 1] = arr[j];
      j = j - 1;
    }
    arr[j + 1] = numberToInsert;
  }
}

const arr = [-6, 50, 44, 3, -9, -14, 10];
insertionSort(arr);
console.log(arr);

// Big-O = O(n^2)
