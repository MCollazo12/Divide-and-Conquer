function findRotationCount(arr) {
    let lowestNumIdx = binarySearch(arr);
    
  return lowestNumIdx
}

function binarySearch(arr, start = 0, end = arr.length - 1) {
  if (arr.length === 0 || arr[start] < arr[end]) return 0;

  while (start <= end) {
    let mid = Math.floor((start + end) / 2);
    if (arr[mid] < arr[mid - 1]) {
      //If mid is less than the idx before it, mid is the lowest #'s idx
      return mid;
    } else if (arr[mid] > arr[mid + 1]) {
      //If mid is greater, mid + 1 is the lowest #'s idx
      return mid + 1;
    } else if (arr[start] < arr[mid]) {
      //If the left half is sorted, search the right side
      start = mid + 1;
    } else {
      //If the right half is sorted, search the left
      end = mid - 1;
    }
  }
  return -1;
}
module.exports = findRotationCount;
