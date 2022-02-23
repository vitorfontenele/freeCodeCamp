function myReplace(str, before, after) {
  let testUpper = /^[A-Z]/
  let firstChar = "";
  
  if (testUpper.test(before)){
    firstChar = after[0].toUpperCase();
  } else {
    firstChar = after[0].toLowerCase();
  }

  let newAfter = firstChar + after.slice(1, after.length);
  return str.replace(before, newAfter);
}

myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped");