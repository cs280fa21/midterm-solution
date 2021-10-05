// You may not change the signature of diff()
function diff(arr1, arr2) {
  let output = [];
  for (const item of arr1) {
    if (!arr2.includes(item)) {
      output.push(item)
    }
  }
  return output;
}

// Alternativley:
// function diff(arr1, arr2) {
//   return arr1.reduce(
//     (acc, elm) => (arr2.includes(elm) ? acc : [...acc, elm]),
//     []
//   );
// }

console.log(diff([1, 2, 3], [1, 2])); // [3]
console.log(diff([3, 4], [3])); // [4]
console.log(diff([], [4, 5])); // []
console.log(diff([1, 8, 2], [])); // [1,8,2]

console.log(diff([3, 3, 3], [3])); // []
