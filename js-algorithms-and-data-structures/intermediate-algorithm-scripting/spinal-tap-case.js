//Spinal Tap Case
function spinalCase(str) {
  let regexWords = /[A-Za-z][a-z]*/g
  let strToArr = str.match(regexWords);
  //console.log("strToArr", strToArr);
  let lowerCaseArr = strToArr.map(element => element.toLowerCase());
  let spinalCaseStr = lowerCaseArr.reduce((sum,element) => sum + element + "-","");
  //console.log(spinalCaseStr)
  return spinalCaseStr.slice(0, spinalCaseStr.length - 1);
}

(spinalCase("This Is Spinal Tap"));
spinalCase("thisIsSpinalTap");
spinalCase("The_Andy_Griffith_Show");
spinalCase("Teletubbies say Eh-oh");
spinalCase("AllThe-small Things");