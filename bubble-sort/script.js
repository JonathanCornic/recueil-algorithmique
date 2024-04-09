// Syntax number 1
function bubbleSort(arr) {
  let swapped
  do {
    swapped = false
    for (let i = 0; i < arr.length - 1; i++) {
      if (arr[i] > arr[i+1]) {
        let temp = arr[i]
        arr[i] = arr[i+1]
        arr[i+1] = temp
        swapped = true
      }
    }
  } while (swapped)
}

const arr = [8, 50, 99, -2, 4, -3, -6]
bubbleSort(arr)
console.log(arr)


// Syntax number 2
function bubbleSort2(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = 0; j < arr.length - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }
}
const arr2 = [451, 2, 65, 4, 7, 98, 2, 3, 1];
bubbleSort2(arr2);
console.log(arr2);


// Big-0 = O(n^2)