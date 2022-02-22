//Diff two arrays
function diffArray(arr1, arr2) {
  const firstPart = arr1.filter((element) => !Boolean(arr2.indexOf(element) + 1));
  const secondPart = arr2.filter((element) => !Boolean(arr1.indexOf(element) + 1));
  return firstPart.concat(secondPart);
}

diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);