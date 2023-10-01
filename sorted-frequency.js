function sortedFrequency(arr, n) {
  //Find first and last occurances of n
  let firstIdx = findFirst(arr, n);
  let lastIdx = findLast(arr, n);

  //If first occurance is not found, return -1
  if (firstIdx === -1) {
    return firstIdx;
  }

  //Return freq of n by subtracting last index from first and adding 1
  return lastIdx - firstIdx + 1;
}

function findFirst(arr, n, start = 0, end = arr.length - 1) {
  //Init firstIdx to -1 to handle no match found case
  let firstIdx = -1;

  while (start <= end) {
    let mid = Math.floor((start + end) / 2);

    if (arr[mid] === n) {
      //Update firstIdx when found, continue searching left side
      firstIdx = mid;
      end = mid - 1;
    } else if (arr[mid] < n) {
      //Continue searching right side
      start = mid + 1;
    } else {
      //Continue searching right side
      end = mid - 1;
    }
  }
  //If no zero found, return -1
  return firstIdx;
}

function findLast(arr, n, start = 0, end = arr.length - 1) {
  //Init lastIdx to -1 to handle no match found case
  let lastIdx = -1;

  while (start <= end) {
    let mid = Math.floor((start + end) / 2);

    if (arr[mid] === n) {
      //Update lastIdx and continue searching the right
      lastIdx = mid;
      start = mid + 1;
    } else if (arr[mid] < n) {
      //If the val at mid is less than n, search the right
      start = mid + 1;
    } else {
      //If val at mid is greater than n, search the left
      end = mid - 1;
    }
  }
  return lastIdx;
}

module.exports = sortedFrequency;
