function palindrome(str) {
  let nonAlphaNumReg = /[^A-Za-z0-9]/g
  let matches = str.match(nonAlphaNumReg);
  let nonAlphaNumMatches = (matches === null ? [] : matches);
  for (let i = 0; i < nonAlphaNumMatches.length; i++){
    str = str.replace(nonAlphaNumMatches[i], "");
  }
  let testStr = str.toLowerCase();
  let testStrReversed = testStr.split("").reverse().join("");
  return testStr === testStrReversed;
}

console.log(palindrome("eye"));