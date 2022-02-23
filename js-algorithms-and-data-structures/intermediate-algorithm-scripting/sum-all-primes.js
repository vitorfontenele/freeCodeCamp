function sumPrimes(num) {
  let sum = 0;
  for (let k = num; k >= 2; k--){
    let lowPoint = Math.floor(Math.sqrt(k));
    let incrementer = k;
    for (let i = 2; i <= lowPoint; i++){
      if (k % i == 0){
        incrementer = 0;
        break;
      }
    }
    sum += incrementer;
  }
  return sum
} 

sumPrimes(10);