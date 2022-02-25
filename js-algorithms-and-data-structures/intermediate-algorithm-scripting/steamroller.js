function steamrollArray(arr) {
  if (!(arr.some(element => Array.isArray(element)))){
    return arr;
  } else {
    let flattenedArr = arr.reduce((sum, element) => sum.concat(element), []);
    return steamrollArray(flattenedArr);
  }
}

console.log(steamrollArray([1, [2], [3, [[4]]]]));