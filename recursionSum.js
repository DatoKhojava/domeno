function recursionSum(arr) {
  return arr.length === 0 ? 0 : arr[0] + recursionSum(arr.slice(1));
}

export default recursionSum;
