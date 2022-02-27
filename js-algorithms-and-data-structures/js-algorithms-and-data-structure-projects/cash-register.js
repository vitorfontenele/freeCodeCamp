function checkCashRegister(price, cash, cid) {
  let necChange = cash - price;
  let currency = {"PENNY": 0.01, "NICKEL": 0.05, "DIME": 0.1,
  "QUARTER": 0.25, "ONE": 1, "FIVE": 5, "TEN": 10, "TWENTY": 20,
  "ONE HUNDRED": 100};
  cid = cid.reverse();
  let controlChange = necChange;
  let changeArray = [];
  for (let i = 0; i < cid.length; i++){
    let baseCurrency = currency[cid[i][0]];
    let necessaryMoney = parseInt(controlChange/baseCurrency) * baseCurrency;
    let availableMoney = cid[i][1];
    let givenMoney = 0;
    if (necessaryMoney >= availableMoney){
      givenMoney = availableMoney;
    } else {
      givenMoney = necessaryMoney;
    }
    //Floating point issues
    controlChange = parseFloat((controlChange - givenMoney).toPrecision(12));
    changeArray.push([cid[i][0], givenMoney])
  }
  let finalChangeArray = changeArray.filter(element => element[1] != 0);
  let givenChange = finalChangeArray.reduce((sum, element) => sum + element[1], 0);
  givenChange = parseFloat(givenChange.toPrecision(12));
  let amountInCash = cid.reduce((sum, item) => sum + item[1], 0);
  amountInCash = parseFloat(amountInCash.toPrecision(12));
  let statusObj = {};
  if (givenChange < necChange){
    statusObj["status"] = "INSUFFICIENT_FUNDS";
    statusObj["change"] = [];
  } else if (amountInCash > givenChange){
    statusObj["status"] = "OPEN";
    statusObj["change"] = finalChangeArray;
  } else {
    statusObj["status"] = "CLOSED";
    statusObj["change"] = changeArray.reverse();
  }
  return statusObj;
}

checkCashRegister(19.5, 20, [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]])