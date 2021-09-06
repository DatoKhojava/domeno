function binarySerach(arr, item) {
  let low = 0;
  let high = arr.length - 1;
  while (low <= high) {
    let middle = low + Math.floor((high - low) / 2);

    if (arr[middle] === item) return middle;
    arr[middle] > item ? (high = middle - 1) : (low = middle + 1);
  }
  return -1;
}

export default binarySerach;
