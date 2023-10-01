function findFloor(arr, n) {
  let start = 0;
  let end = arr.length - 1;
  let floor = -1;

  while (start <= end) {
    let mid = Math.floor((start + end) / 2);
    if (arr[mid] === n) {
      //If mid is equal to 'n', it's the floor
      return arr[mid];
    } else if (arr[mid] < n) {
      //If mid is less than n, update the floor and search the right half
      floor = arr[mid];
      start = mid + 1;
    } else {
      //If mid is > n, search the left half
      end = mid - 1;
    }
  }
  return floor;
}

module.exports = findFloor;
