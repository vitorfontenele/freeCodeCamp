function sumFibs(num) {
  let baseArray = [1, 1, 2];
  let sum = baseArray[0] + baseArray[1];
  let check = baseArray[2];
  while(check <= num){
    if (!(baseArray[2] % 2 === 0)){
      sum += baseArray[2];
    }
    let secondElement = baseArray[1];
    let thirdElement = baseArray[2];
    baseArray[0] = secondElement;
    baseArray[1] = thirdElement;
    baseArray[2] = secondElement + thirdElement;
    check = baseArray[2];
  }
  return sum;
}

sumFibs(75024);