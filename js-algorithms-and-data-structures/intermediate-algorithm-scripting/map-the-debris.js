function orbitalPeriod(arr) {
  const GM = 398600.4418;
  const earthRadius = 6367.4447;
  let changedArr = arr.map(function(element){
    let alpha = element["avgAlt"] + earthRadius;
    let orbitalPeriod = 2*Math.PI*Math.sqrt(alpha**3/GM);
    element["orbitalPeriod"] = Math.round(orbitalPeriod);
    delete element["avgAlt"];
    return element;
  })
  return changedArr;
}

orbitalPeriod([{name : "sputnik", avgAlt : 35873.5553}]);
orbitalPeriod([{name: "iss", avgAlt: 413.6}, {name: "hubble", avgAlt: 556.7}, {name: "moon", avgAlt: 378632.553}]);