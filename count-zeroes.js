function countZeroes(arr) {
  let firstZero = findFirstZero(arr);

  //Check to see if findFirstZero was unable to locate a zero
  if (firstZero === -1) {
    return 0;
  }

  //Calculate the # of zeros by subtracting the idx of the first zero from arr.length
  return arr.length - firstZero;
}

function findFirstZero(arr) {
  let start = 0;
  let end = arr.length - 1;

  while (start <= end) {
    let mid = Math.floor((start + end) / 2);

    if (arr[mid] === 0) {
      //Continue searching for first occurance even though mid equals 0
      if (mid === 0 || arr[mid - 1] === 1) {
        return mid;
      } else {
        //Continue searching left side
        end = mid - 1;
      }
    } else {
      //Continue searching right side
      start = mid + 1;
    }
  }
  //If no zero found, return -1
  return -1;
}

module.exports = countZeroes;
