//Pig Latin
function translatePigLatin(str) {
  let vowelRegex = /^[aeiou]/;
  let consonantRegex = /^[^aeiou]+/;
  if (vowelRegex.test(str)){
    return str.concat("way");
  } else {
    let beginCons = str.match(consonantRegex);
    return str.slice(beginCons[0].length, str.length) + beginCons[0] + 'ay';
  }
}

translatePigLatin("schwartz");