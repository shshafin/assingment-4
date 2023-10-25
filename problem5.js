function canPay(changeArray, totalDue) {
  if (changeArray.length === 0) {
    return "please provide values inside the array";
  }
  let sum = 0;
  for (let item of changeArray) {
    sum = item + sum;
    if (sum >= totalDue) {
      return true;
    }
  }
  return false;
}
