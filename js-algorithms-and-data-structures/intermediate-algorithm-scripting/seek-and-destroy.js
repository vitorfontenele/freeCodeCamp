//Seek and Destroy
function destroyer(arr) {
  let args = Object.values(arguments);
  let seek = args[0];
  let destroy = args.slice(1, args.length);
  let baseArray = seek.map(sElement => destroy.filter(dElement => sElement === dElement));
  let finalArray = seek.filter((element,i) => element != baseArray[i][0]);
  return finalArray;
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);