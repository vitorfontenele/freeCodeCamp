//Wherefore art thou
function whatIsInAName(collection, source) {
  const arr = [];
  // Only change code below this line
  let sourceKeys = Object.keys(source);

  for (let i = 0; i < collection.length; i++){
    let check = true;
    for (let j = 0; j < sourceKeys.length; j++){
      if (source[sourceKeys[j]] != collection[i][sourceKeys[j]]){
        check = false;
        break;
      }
    }
    if (check){arr.push(collection[i])};
  }
  
  // Only change code above this line
  return arr;
}

whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" });