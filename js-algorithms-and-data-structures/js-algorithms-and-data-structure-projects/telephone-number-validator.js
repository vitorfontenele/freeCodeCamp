function telephoneCheck(str) {
  let validRegExps = [];
  //No parenthesis and no Int. Code
  let arr = [/^\d{3}/,/\d{3}/,/\d{4}$/];
  let arrSource = arr.map(element => element.source);
  let separators = ["-"," ",""];
  separators.map(function(separator){
    let validRegex = new RegExp(arrSource.join(separator));
    validRegExps.push(validRegex);
  })
  //Parenthesis but no Int. Code
  let validRegexPar = /^\(\d{3}\)(| )\d{3}-\d{4}$/;
  //Int. Code
  let validRegexInt1 = /^1 \d{3} \d{3} \d{4}$/
  let validRegexInt2 = /^1 \d{3}-\d{3}-\d{4}$/
  let validRegexInt3 = /^1\(\d{3}\)\d{3}-\d{4}$/
  let validRegexInt4 = /^1 \(\d{3}\) \d{3}-\d{4}$/

  validRegExps.push(validRegexPar, validRegexInt1,
  validRegexInt2, validRegexInt3, validRegexInt4);
  return validRegExps.some(regExp => regExp.test(str));
}

console.log(telephoneCheck("555-555-5555"));