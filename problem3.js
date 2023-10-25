function sortMaker(arr) {
  if (arr[0] <= 0 || arr[1] <= 0) {
    return "Invalid Input ";
  }
  if (arr[0] === arr[1]) {
    return "equal";
  } else if (arr[0] >= 0 || arr[1] >= 0) {
    return Math.max(arr[0], arr[1]) + " " + Math.min(arr[0], arr[1]);
  }
}



