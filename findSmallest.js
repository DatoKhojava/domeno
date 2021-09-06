function findSmallest(arr) {
  let length = arr.length;
  let smallest = arr[0];
  let smallest_index = 0;

  for (let i = 1; i < length; i++) {
    if (arr[i] < smallest) {
      smallest = arr[i];
      smallest_index = i;
    }
  }
  return smallest_index;
}

export default findSmallest;
