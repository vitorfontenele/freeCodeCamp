//Sum All Numbers in a Range
function sumAll(arr) {
  let difference = arr[0] - arr[1];
  let incrementer = difference < 0 ? 1: -1;
  let sum = 0;
  for (let i = 0; Math.abs(i) <= Math.abs(difference); i += incrementer){
    sum += arr[0] + i;
  }
  return sum;
}

console.log(sumAll([3, 4]));