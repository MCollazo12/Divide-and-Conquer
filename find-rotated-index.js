function findRotatedIndex(arr, n) {
  let pivot = findPivot(arr);

  if (pivot > 0 && n >= arr[0]) {
    //'n' falls into the left half
    return binarySearch(arr, n, 0, arr.length - 1);
  } else {
    //n is in the right half of the array
    return binarySearch(arr, n, pivot, arr.length - 1);
  }
}

function findPivot(arr) {
  if (arr.length === 1) return 0;
  let start = 0;
  let end = arr.length - 1;

  while (start <= end) {
    let mid = Math.floor((start + end) / 2);
    if (arr[mid] > arr[mid + 1]) {
      return mid + 1;
    } else if (arr[start] <= arr[mid]) {
      start = mid + 1;
    } else {
      end = mid - 1;
    }
  }
}

function binarySearch(arr, n, start, end) {
  while (start <= end) {
    let mid = Math.floor((start + end) / 2);
    if (arr[mid] === n) {
      return mid;
    } else if (n < arr[mid]) {
      end = mid - 1
    } else {
      start = mid + 1
    }
  }
  return -1;
}

module.exports = findRotatedIndex