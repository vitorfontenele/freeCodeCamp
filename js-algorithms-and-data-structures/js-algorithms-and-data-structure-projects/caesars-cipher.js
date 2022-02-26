function rot13(str) {
  //Creating object 'cipher'
  let alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let dummyAlphabet = alphabet + alphabet;
  let cipher = {};
  let shiftAmount = 13;
  for (let i = 0; i < alphabet.length; i++){
    let letter = alphabet[i];
    cipher[letter] = dummyAlphabet[i + shiftAmount];
  }
  //Deciphering!
  let splittedString = str.split("");
  let decipheredArray = splittedString.map(function(character){
    return cipher[character] ? cipher[character] : character;
  })
  return decipheredArray.join("");
}

rot13("SERR PBQR PNZC");