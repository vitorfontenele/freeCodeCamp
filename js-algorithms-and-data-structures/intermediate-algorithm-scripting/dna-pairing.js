function pairElement(str) {
  let pairing = {"C":"G", "G":"C", "A":"T", "T":"A"};
  let strToArr = str.split("");
  return strToArr.map(element => [element, pairing[element]]);
}

pairElement("GCG");