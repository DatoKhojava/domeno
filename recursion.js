function recursion(val) {
  console.log(val);
  if (val <= 0) {
    return val;
  } else {
    recursion(val - 1);
  }
}

export default recursion;
