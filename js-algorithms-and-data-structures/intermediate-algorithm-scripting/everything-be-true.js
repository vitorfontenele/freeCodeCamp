function truthCheck(collection, pre) {
  let atrArr = collection.map(obj => obj[pre]);
  return atrArr.every(item => Boolean(item));
}

truthCheck([{"user": "Tinky-Winky", "sex": "male"}, {"user": "Dipsy", "sex": "male"}, {"user": "Laa-Laa", "sex": "female"}, {"user": "Po", "sex": "female"}], "sex");
