import findSmallest from "./findSmallest.js";

function selectionSort(arr) {
  let newArray = [];
  let length = arr.length;
  for (let i = 0; i < length; i++) {
    let smallest = findSmallest(arr);
    newArray.push(arr.splice(smallest, 1));
  }
  return newArray;
}

export default selectionSort;
