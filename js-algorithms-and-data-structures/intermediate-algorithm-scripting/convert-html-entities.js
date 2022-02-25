function convertHTML(str) {
  let convertGroup = {"&":"&amp;", "<":"&lt;", ">":"&gt;", '"':"&quot;", "'":"&apos;"};
  let convertKeys = Object.keys(convertGroup);
  for (let i = 0; i < convertKeys.length; i++){
    let convertKey = convertKeys[i];
    let convertValue = convertGroup[convertKey];
    str = str.split(convertKey).join(convertValue);
  }
  return str;
}

console.log(convertHTML("Dolce & Gabbana & blabla"));