function convertHTML(str) {
  let convertGroup = {" & ":" &amp; ", "<":"&lt;", ">":"&gt;", '"':"&quot;", "'":"&apos;"};
  let convertKeys = Object.keys(convertGroup);
  let oldStr = ""
  let newStr = str;
  while(oldStr != newStr){
    oldStr = newStr;
    for (let i = 0; i < convertKeys.length; i++){
      let convertKey = convertKeys[i];
      newStr = newStr.replace(convertKey, convertGroup[convertKey]);
    }
  }
  return newStr;
}

console.log(convertHTML("Dolce & Gabbana & blabla"));