//Missing letters
function fearNotLetter(str) {
  let alphabet = "abcdefghijklmnopqrstuvwxyz";
  let missingLetters = "";
  for (let i = 0; i < str.length; i++){
    let strPrec = str[i];
    let strSuc = str[i + 1];
    let indStrPrec = alphabet.indexOf(strPrec);
    let indStrSuc = alphabet.indexOf(strSuc);
    if ((indStrSuc - indStrPrec) > 1){
      let missingPart = alphabet.slice(indStrPrec + 1, indStrSuc);
      missingLetters += (missingPart);
    }
  }
  return missingLetters ? missingLetters : undefined;
}

fearNotLetter("abcde");