//Sorted Union
function uniteUnique(...arr) {
  let concatArr = arr.reduce((sum, element) => sum.concat(element), []);
  let i = 0;
  while(i < concatArr.length){
    let slice = concatArr.slice(i + 1, concatArr.length);
    let k = 0;
    for (let j = 0; j < slice.length; j++){
      if (slice[j] === concatArr[i]){
        concatArr.splice(i + j + 1 + k, 1)
        //console.log(concatArr,"i",i,"j",j)
        k--;
      }
    }
    i++;
  }
  return concatArr;
}

uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);
uniteUnique([1, 2, 3], [5, 2, 1]);
uniteUnique([1, 2, 3], [5, 2, 1, 4], [2, 1], [6, 7, 8]);