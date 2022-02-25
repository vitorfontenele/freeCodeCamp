//Smallest Common Multiple
function smallestCommons(arr) {
  arr.sort((a,b) => a - b);
  let difference = arr[1] - arr[0];
  //Product of all primes between the range of these parameters
  let productPrimes = 1;
  for (let i = 0; i <= difference; i++){
    let isPrime = true;
    let possiblePrime = arr[0] + i;
    let base = Math.floor(Math.sqrt(possiblePrime));
    for (let j = 2; j <= base; j++){
      isPrime = !(possiblePrime % j === 0);
      if (!isPrime){
        break;
      }
    }
    if (isPrime){productPrimes *= possiblePrime};
  }
  //Only the product of the primes matter!
  let count = productPrimes;
  let multipleOfAll = false;
  while(!multipleOfAll){
    for (let i = 0; i <= difference; i++){
      multipleOfAll = (count % (arr[0] + i) === 0)
      if (!multipleOfAll){
        count += productPrimes;
        break;
      }
    }
  }
  return count;
}

smallestCommons([23, 18]);