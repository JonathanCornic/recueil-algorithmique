function quickSort(arr) {
  if (arr.length === 1) {
    return arr;
  }

  const pivot = arr[arr.length - 1];
  let arrLeft = [];
  let arrRight = [];
  for (let i = 0; i < arr.length - 1; i++) {
    arr[i] < pivot ? arrLeft.push(arr[i]) : arrRight.push(arr[i]);
  }
  if (arrLeft.length > 0 && arrRight.length > 0) {
    return [...quickSort(arrLeft), pivot, ...quickSort(arrRight)];
  } else if (arrLeft.length > 0) {
    return [...quickSort(arrLeft), pivot];
  } else {
    return [pivot, ...quickSort(arrRight)];
  }
}

const arr = [
  1, 4, 2, 8, -345, 123, 43, 32, 5643, -63, 123, 43, -2, 55, 1, 234, 92,
];
console.log(arr);
quickSort(arr)
console.log(arr);