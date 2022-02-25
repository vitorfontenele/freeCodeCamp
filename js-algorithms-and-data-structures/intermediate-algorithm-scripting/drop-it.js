function dropElements(arr, func) {
  let i = 0;
  let element = arr[i];
  while (!func(element) && (i < arr.length)){
    i++;
    element = arr[i];
  }
  return arr.slice(i, arr.length);
}

console.log(dropElements([1, 2, 3], function(n) {return n < 3; }));
console.log(dropElements([1, 2, 3, 4], function(n) {return n >= 3;}));