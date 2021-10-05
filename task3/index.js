// You may not change the signature of diff()
function diff(arr1, arr2) {
  return [];
}


console.log(diff([1,2,3], [1,2])) // [3]
console.log(diff([3,4], [3])) // [4]
console.log(diff([], [4,5])) // []
console.log(diff([1,8,2], [])) // [1,8,2]